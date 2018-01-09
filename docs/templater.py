'''
templater.py week_num
problem template
  location
  description section
  steps
    expression
    explanation
'''
import sys
import os

week_num = int(sys.argv[-1])
problem_goal = 3
step_budget = 15

print(week_num)

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
  <title>worked problems week %02d</title>
</head>
<body>
  <h2>worked problems week %02d</h2>
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

folder = "week_%02d" % week_num
os.mkdir(folder)
view = open(folder+'/view.html', 'w')
view.write(view_template % (week_num, week_num))
view.close()
problems = open(folder+'/problems.js', 'w')
problems.write('var problems = [\n')
for prb_num in range(problem_goal):
    problems.write(problem_template % (step_template*step_budget))
problems.write(']')
problems.close()
