const router = require('express').Router();
const { User, Income } = require('../../models');

// creates income data
router.post('/', async (req, res) => {
  try {
    const userData = await Income.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// deletes income data
router.delete('/:id', async (req, res) => {
    try {
      const incomeData = await Income.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!incomeData) {
        res.status(404).json({ message: 'No income found with this id!' });
        return;
      }
  
      res.status(200).json(incomeData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;