/*
{
  "name": String,
  "category": String,
  "price": Number,
  "quantity": Number,
  "createdAt": Date,
  "updatedAt": Date
}
*/

-- 1: Write a query to fetch products with a price between $50 and $200, ordered by price (ascending), with pagination (10 products per page).

SELECT id, name, category, price, quantity
FROM products
WHERE price BETWEEN 50 AND 200
ORDER BY price ASC
LIMIT 10 OFFSET $1;

-- 2: Write a query to retrieve products by category (e.g., "Electronics"), sorted by price in descending order. Limit the result to 5 products per page.

SELECT id, name, category, price, quantity
FROM products
WHERE category = $1
ORDER BY price DESC
LIMIT 5 OFFSET $2;
