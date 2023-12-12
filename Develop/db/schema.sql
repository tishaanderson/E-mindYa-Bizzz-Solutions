-- DROP DATABASE
DROP DATABASE IF EXISTS ecommerce_db;

-- CREATE DATABASE
CREATE DATABASE ecommerce_db;

-- USE ecommerce_db;

-- CREATE TABLE category (
--   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(30) UNIQUE NOT NULL
-- );

-- CREATE TABLE product (
--   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(100) UNIQUE NOT NULL
--   price DECIMAL(10, 2) NOT NULL,
--   stock INT NOT NULL DEFAULT 10,
--   category_id INT,
--   FOREIGN KEY (category_id) REFERENCES category(id)
-- );

-- CREATE TABLE tag (
--   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--   name VARCHAR(30) UNIQUE NOT NULL
-- );

-- CREATE TABLE productTag (
--   id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
--   product_id INT NOT NULL,
--   tag_id INT NOT NULL,
--   FOREIGN KEY (product_id) REFERENCES product(id),
--   FOREIGN KEY (tag_id) REFERENCES tag(id)
-- );