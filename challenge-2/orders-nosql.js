
//1- Write a query to fetch products with a price between $50 and $200, ordered by price (ascending), with pagination (10 products per page).
db.products.aggregate([
    { $match: { price: { $gte: 50, $lte: 200 } } },
    { $sort: { price: 1 } },
    { $skip: 0 },
    { $limit: 10 }
]);


// 2: Write a query to retrieve products by category (e.g., "Electronics"), sorted by price in descending order. Limit the result to 5 products per page.
db.products.aggregate([
    { $match: { category: 'Electronics' } },
    { $sort: { price: -1 } },
    { $skip: 0 },
    { $limit: 5 }
]);

