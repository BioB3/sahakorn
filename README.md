# sahakorn
Database Systems 2024 Course Project

## How to install and setup
1. Install MySQL client here: https://dev.mysql.com/downloads/mysql/
   - Follow the installation wizard
   - save your database credentials
<br>

2. Use `mysql -u {username} -p {database_name} < sahakorn.sql` to load the data
    - Replace username and database name with your credentials
<br>

3. In the repository create a .env file and fill out the following
    - DATABASE_NAME = {your_database_name}
    - DATABASE_USER = {your_database_user}
    - DATABASE_PASSWORD = {your_database_password}
    - DATABASE_HOST = {your_database_host}
    - DATABASE_PORT = {your_database_port}
    - DEBUG = True
