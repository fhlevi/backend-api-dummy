var express = require('express');
let usersRouter = require('./module/users');
let checkBalanceRouter = require('./module/checkBalance');
let getProductListRouter = require('./module/getProductList');
let inquiryRouter = require('./module/inquiry');
let topupRouter = require('./module/topup');
let historyTransactionRouter = require('./module/historyTransaction');


/* modules */
const route = [
  usersRouter,
  checkBalanceRouter,
  getProductListRouter,
  inquiryRouter,
  topupRouter,
  historyTransactionRouter
]

module.exports = route;
