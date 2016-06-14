# todoList

Simple application for a demo todo list. Server side developed in django rest framework and client side developed in AngularJS. Configured to run locally.

##Server configuration

### [A] Prerequisites (Ubuntu distros)

1. $apt-get install pip
2. $pip install django
3. $pip install djangorestframework

### [B] Server Installation

1. $git clone https://github.com/dcharlaftis/todoList.git todo
2. $cd todo
3. $./manage.py runserver 9000

### [C] Test api (command line)

1. $curl http://localhost:9000/api/tasks/
2. $curl -X POST http://localhost:9000/api/tasks/ -d "title=Task 1&description=Clean House"
3. $curl -X PUT http://localhost:9000/api/tasks/1 -d "title=Task 1&description=Clean House Backyard"
4. $curl -X PUT http://localhost:9000/api/tasks/1 -d "title=Task 1&description=Clean Anna's House Backyard &completed=True"
5. $curl -X DELETE http://localhost:9000/api/tasks/1

