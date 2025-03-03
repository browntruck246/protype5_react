DROP TABLE Person;

CREATE TABLE Person (
    PersonID NUMBER(10) PRIMARY KEY,
    FirstName VARCHAR2(50) NOT NULL,
    LastName VARCHAR2(50) NOT NULL,
    Email VARCHAR2(100),
    PhoneNumber VARCHAR2(20)
);  

INSERT INTO Person (PersonID, FirstName, LastName, Email, PhoneNumber) VALUES
(1, 'John', 'Doe',  'john.doe@example.com', '123-456-7890');

INSERT INTO Person (PersonID, FirstName, LastName,  Email, PhoneNumber) VALUES
(2, 'Jane', 'Smith', 'jane.smith@example.com', '234-567-8901');

INSERT INTO Person (PersonID, FirstName, LastName,  Email, PhoneNumber) VALUES
(3, 'Michael', 'Johnson', 'michael.johnson@example.com', '345-678-9012');

INSERT INTO Person (PersonID, FirstName, LastName, Email, PhoneNumber) VALUES
(4, 'Emily', 'Davis', 'emily.davis@example.com', '456-789-0123');

INSERT INTO Person (PersonID, FirstName, LastName, Email, PhoneNumber) VALUES
(5, 'Chris', 'Brown', 'chris.brown@example.com', '567-890-1234');

 
SELECT
    "PERSONID",
    "FIRSTNAME",
    "LASTNAME",
     "EMAIL",
    "PHONENUMBER"
FROM
    "SYSTEM"."PERSON";
    
SELECT
    "PERSONID",
    "FIRSTNAME",
    "LASTNAME",
     "EMAIL",
    "PHONENUMBER"
FROM
    "SYSTEM"."PERSON" WHERE "PERSONID" = 1;
    
    
    SELECT * FROM "SYSTEM"."PERSON";

