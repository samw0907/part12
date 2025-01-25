const express = require('express');
const router = express.Router();

const configs = require('../util/config');
const { getAsync } = require('../redis');

let visits = 0;

/* GET index data. */
router.get('/', async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

/* GET /statistics */
router.get('/statistics', async (req, res) => {
  const addedTodos = (await getAsync('added_todos')) || 0;
  res.json({ added_todos: Number(addedTodos) });
});

module.exports = router;
