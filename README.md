# todoList

Simple application for a demo todo list. Configured to run locally.

##Server configuration

### [A] Prerequisites (Ubuntu distros)

1. $apt-get install pip
2. $pip install django
3. $pip install djangorestframework

### [B] Server Installation

1. $git clone https://github.com/dcharlaftis/todoList.git todo
2. $cd todo
3. $./manage.py runserver 9000

4. Test api

$curl http://localhost:9000/api/tasks/
$curl -X POST http://localhost:9000/api/tasks/ -d "title=Task 1&description=Clean House"
$curl -X PUT http://localhost:9000/api/tasks/1 -d "title=Task 1&description=Clean House Backyard"
$curl -X PUT http://localhost:9000/api/tasks/1 -d "title=Task 1&description=Clean Anna's House Backyard &completed=True"
$curl -X DELETE http://localhost:9000/api/tasks/1
