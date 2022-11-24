const sequelize = require('../config/connection');
const { User, Income } = require('../models');

const userData = require('./userData.json');
const incomeData = require('./incomeData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const income of incomeData) {
    await income.create({
      ...income,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
