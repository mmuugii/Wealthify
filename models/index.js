const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("menu-item"))
 .forEach((item, index) => {
    item.onmouseover = () => {
        menu.dataset.activeIndex = index;
    }
 });

// const User = require('./User');

// module.exports = { User };

