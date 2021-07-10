CREATE DATABASE mvc;

CREATE TABLE users(
    id serial primary key,
    firsname varchar(32) not null,
    lastname varchar(64) not null,
    date timestamptz default current_timestamp
);

INSERT INTO users(firstname, lastname) VALUES ('Adham', 'Muzaffarov');

SELECT * FROM users;

