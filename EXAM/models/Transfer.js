const mongoose = require('mongoose')

const TransactionSchema = new mongoose.Schema({
  
  transaction: {
    type: String,
    default: 'Debit',
    enum: ['Debit', 'Credit']

  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  Amount: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
    required: true,
    trim: true,
  },
  Balance: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

module.exports = mongoose.model('Transfer', TransactionSchema) 