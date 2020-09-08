USE employeeHW_DB;

INSERT INTO department (id, name)
VALUES (1, "Sales");

INSERT INTO department (id, name)
VALUES (2, "Engineering");

INSERT INTO department (id, name)
VALUES (3, "Finance");

INSERT INTO department (id, name)
VALUES (4, "Legal");



INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Salesperson", 60000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (2, "Sales Lead", 65000, 1);

INSERT INTO role (id, title, salary, department_id)
VALUES (3, "Software Engineer", 90000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (4, "Lead Engineer", 100000, 2);

INSERT INTO role (id, title, salary, department_id)
VALUES (5, "Accountant", 70000, 3);

INSERT INTO role (id, title, salary, department_id)
VALUES (6, "Lawyer", 80000, 4);

INSERT INTO role (id, title, salary, department_id)
VALUES (7, "Legal Team Lead", 95000, 4);



INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Onur", "Cloginator", 2, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (2, "Max", "Fred", 1, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (3, "Anthony", "Tuna", 4, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (4, "London", "Abram", 5, null);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (5, "Johnathan", "Rich", 7, null);