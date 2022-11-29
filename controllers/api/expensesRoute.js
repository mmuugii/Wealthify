const router = require('express').Router();
const { User, Expenses } = require('../../models');

// creates expense data
router.post('/', async (req, res) => {
  try {
    const userData = await Expenses.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// deletes expense data
router.delete('/:id', async (req, res) => {
    try {
      const expenseData = await Expenses.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!expenseData) {
        res.status(404).json({ message: 'No expenses found with this id!' });
        return;
      }
  
      res.status(200).json(expenseData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;