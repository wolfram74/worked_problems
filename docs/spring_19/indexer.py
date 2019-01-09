import sys
import os

folders = sorted(os.listdir('.'))
print(folders)
link_template = '''
    <li>
        <a href='./%s/view.html'>week of %s</a>
    </li>
'''

index_template = '''
<html>
<head>
  <title>worked problems for %s</title>
</head>
<body>
  <ol>
%s
  </ol>
</body>
</html>
'''
links = []
for folder in folders:
    if 'week' not in folder:
        continue
    print(folder)
    # print(link_template% (folder, folder))
    links.append(link_template% (folder, folder))
ol_contents = ''.join(links)
cwd = os.getcwd().split('/')[-1]
target = open('./index.html', 'w')
target.write( index_template % (cwd, ol_contents))
