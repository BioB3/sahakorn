# sahakorn
Database Systems 2024 Course Project

## Prerequisites
- python 3.11 or newer
- MySQL client
- git (optional)

## How to install and setup
1. Clone the repository or download the zip file
    - If you clone use `git clone https://github.com/BioB3/sahakorn.git` and make sure you have git installed
<br>

2. Install MySQL client here: https://dev.mysql.com/downloads/mysql/
   - Follow the installation wizard
   - save your database credentials
   - If you already have MySQL client set up a new database
<br>

3. Use `mysql -u {username} -p {database_name} < sahakorn.sql` to load the data
    - Replace username and database name with your credentials
<br>

4. In the repository create a .env file and fill out the following
    - DATABASE_NAME = {your_database_name}
    - DATABASE_USER = {your_database_user}
    - DATABASE_PASSWORD = {your_database_password}
    - DATABASE_HOST = {your_database_host}
    - DATABASE_PORT = {your_database_port}
    - DEBUG = True

## How to run
1. use `python manage.py runserver` (replace python with your OS equivalent)
2. Go to http://127.0.0.1:8000/
