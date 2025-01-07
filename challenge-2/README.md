# Optimization Techniques

## Query One
```sql
    SELECT id, name, category, price, quantity
    FROM products
    WHERE price BETWEEN 50 AND 200
    ORDER BY price ASC
    LIMIT 10 OFFSET $1;
```
### PostgreSQL
- - **Indexing**: Create an index on the price column for efficient range filtering and sorting:
    ```sql
    CREATE INDEX idx_price ON products (price);
    ```
- - **Portioning**:
    - Partition the products table based on the price range to improve query performance:
        ```sql
        CREATE TABLE products_low AS
        SELECT * FROM products WHERE price < 100;
        CREATE TABLE products_medium AS
        SELECT * FROM products WHERE price >= 100 AND price < 500;
        CREATE TABLE products_high AS
        SELECT * FROM products WHERE price >= 500;
        ```
- - **Cache**: Use a cache mechanism using any caching service (e.g., Redis) to store the results of the query for faster retrieval.
- - **Materialized Views**: Create a materialized view to store the results of the query and refresh it periodically:
    ```sql
    CREATE MATERIALIZED VIEW products_priced_between AS
    SELECT * FROM products WHERE price >= 50 AND price <= 200 ORDER BY price;
    ```
### MongoDB
- - **Indexing**: Create an index on the price field for efficient filtering and sorting:
    ```javascript
    db.products.createIndex({ price: 1 });
    ```
- - **Sharding**:
- - **Cache**:
- - **Aggregation Pipeline**: Use the aggregation pipeline to optimize the query and perform sorting and pagination efficiently:
    ```javascript
    db.products.aggregate([
        { $match: { price: { $gte: 50, $lte: 200 } } },
        { $sort: { price: 1 } },
        { $skip: 0 },
        { $limit: 10 }
    ]);
    ```
-----

## Query Two
```sql
    SELECT id, name, category, price, quantity
    FROM products
    WHERE category = 'Electronics'
    ORDER BY price DESC
    LIMIT 5 OFFSET $1;
```
### PostgreSQL
- - **Indexing**: Create an index on the category column for efficient filtering:
    ```sql
    CREATE INDEX idx_category ON products (category);
    ```
- - **Materialized Views**:
- - **Cache**:
- - **Partial Index**:
    - Create a partial index on the category field to optimize the query:
        ```sql
        CREATE INDEX idx_category_electronics ON products (price) WHERE category = 'Electronics';
        ```
### MongoDB
- - **Indexing**: Create an index on the category field for efficient filtering:
    ```javascript
    db.products.createIndex({ category: 1 });
    ```
- - **Sharding**:
- - **Cache**:
- - **Aggregation Pipeline**:
    ```javascript
    db.products.aggregate([
        { $match: { category: 'Electronics' } },
        { $sort: { price: -1 } },
        { $skip: 0 },
        { $limit: 5 }
    ]);
    ```

