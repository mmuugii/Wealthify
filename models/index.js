
const User = require('./User');
const Income = require('./Income');
const Expenses = require('./Expenses');

User.hasMany(Income, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Income.belongsTo(User, {
    foreignKey: 'user_id'
});

Expenses.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Income, Expenses };