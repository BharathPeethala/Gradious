CREATE DATABASE employees;

USE employees;

CREATE TABLE employees (
  gender VARCHAR(10),
  email VARCHAR(50),
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50),
  age INT,
  state INT,
);


INSERT INTO employees (name, email, state, gender, age) 
VALUES ('John', 'john@example.com', 1, 'male', 30),
       ('Sarah', 'sarah@example.com', 2, 'female', 25),
       ('Michael', 'michael@example.com', 3, 'male', 40),
       ('Lisa', 'lisa@example.com', 1, 'female', 35);