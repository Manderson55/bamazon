USE bamazon_DB;

CREATE TABLE products (
  item_id INT (12) NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT (10) NOT NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES 
("   White Skirt", "Women Clothing", 34.99, 5),
("    Blue Skirt", "Women Clothing", 29.99, 25),
("    Pink Skirt", "Women Clothing", 24.99, 50),
("  White Blouse", "Women Clothing", 39.99, 75),
("  Beige Blouse", "Women Clothing", 35.99, 50),
("   Black Pants", "Women Clothing", 49.99, 1),
("    Dark Jeans", "  Men Clothing", 49.99, 100),
("   Light Jeans", "  Men Clothing", 39.99, 50),
(" White T-shirt", "Women Clothing", 9.99, 50),
("White T-shirt", "  Men Clothing", 12.99, 50),
("Black T-shirt", "  Men Clothing", 12.99, 2),
("  Black Dress", "Women Clothing", 69.99, 30);

SELECT * FROM products;