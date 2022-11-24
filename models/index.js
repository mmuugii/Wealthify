// const menu = document.getElementById("menu");

// Array.from(document.getElementsByClassName("menu-item"))
//  .forEach((item, index) => {
//     item.onmouseover = () => {
//         menu.dataset.activeIndex = index;
//     }
//  });

const User = require('./User');
const Income = require('./Income');

User.hasMany(Income, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Income.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Income };