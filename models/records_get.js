const myDataSource = require('./init');

async function createSell(price, user_id, product_detail_id, product_id) {
  return await myDataSource.query(`
    INSERT INTO sell(price,user_id,product_detail_id,product_id,sell_status_id) 
    values (${price},${user_id},${product_detail_id},${product_id},1) 
  `);
}
module.exports = { createSell };
