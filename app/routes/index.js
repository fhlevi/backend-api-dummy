var express = require('express');
let usersRouter = require('./module/users');
let checkBalanceRouter = require('./module/balance');
let getProductListRouter = require('./module/product');
let inquiryRouter = require('./module/inquiry');
let topupRouter = require('./module/topup');
let historyTransactionRouter = require('./module/transaction');

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
