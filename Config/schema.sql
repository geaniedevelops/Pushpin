CREATE DATABASE Pushpin;
USE Pushpin;

-- Create the table plans.
CREATE TABLE user
(
id int NOT NULL AUTO_INCREMENT,
firstName varchar(20) NOT NULL,
lastName varchar(20) NOT NULL,
email varchar(50) NOT NULL,
password varchar(20) NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE tour
(
id int NOT NULL AUTO_INCREMENT,
title varchar(20) NOT NULL,
location int NOT NULL,
description varchar(200) NOT NULL,
price: int,
pointNumber: int NOT NULL,
PRIMARY KEY (id)
);

CREATE TABLE points
(
id int NOT NULL AUTO_INCREMENT,
title varchar(20) NOT NULL,
coordinates int NOT NULL,
description varchar(200) NOT NULL,
PRIMARY KEY (id)
);
--
-- -- Insert a set of records.
-- INSERT INTO movies (movie) VALUES ('Rush Hour 2');
