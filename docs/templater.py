'''
templater.py yyyy_mm_dd num
problem template
  location
  description section
  steps
    expression
    explanation
'''
import sys
import os
import datetime

date_str = sys.argv[-2]
date_list = date_str.split('_')
print(date_list)
date_ints = [int(val) for val in date_list]
start_date = datetime.date(
  year=int(date_ints[0]),
  month=int(date_ints[1]),
  day=int(date_ints[2]))
one_week = datetime.timedelta(7)
weeks_to_gen = int(sys.argv[-1])
problem_goal = 3
step_budget = 15

problem_template = '''
  {
    location:`NA`,
    description:"NA",
    steps:[%s]
  },
'''
step_template = '''
    {
      expression: `NA`,
      explanation: "NA"
    },'''

view_template = '''
<html>
<head>
  <title>worked problems week %s</title>
</head>
<body>
  <h2>worked problems week %s</h2>
  <div>
    <div id='mainList'>
      <problem-list></problem-list>
    </div>
  </div>
</body>
<script type="text/javascript"
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.0/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
<script type="text/javascript" src='../../scripts/vue@2.2.1.js'></script>
<script type="text/javascript" src='./problems.js'></script>
<script type="text/javascript" src='../../scripts/runner.js'></script>
<link rel='stylesheet' type="text/css" href='../../scripts/styles.css'>

</html>


'''

def week_gen(monday_date):
  folder = "week_%s" % monday_date
  os.mkdir(folder)
  view = open(folder+'/view.html', 'w')
  view.write(view_template % (monday_date, monday_date))
  view.close()
  problems = open(folder+'/problems.js', 'w')
  problems.write('var problems = [\n')
  for prb_num in range(problem_goal):
      problems.write(problem_template % (step_template*step_budget))
  problems.write(']')
  problems.close()

for loop in range(weeks_to_gen):
  date = start_date+loop*one_week
  file_date = "%04d_%02d_%02d" % (date.year, date.month, date.day)
  print(file_date)
  week_gen(file_date)
