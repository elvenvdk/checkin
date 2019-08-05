const { Router } = require('express');
const axios = require('axios');

const router = Router();

const URL = 'http://localhost:8080/employeeTimes';

router.post('/new', (req, res, next) => {
  const { name, id, time } = req.body;
  axios
    .post(URL, { name, id, time })
    .then(() => res.status(201).send('Successfully Created'))
    .catch(error => next(error));
});

router.get('/', (req, res, next) => {
  axios
    .get(URL)
    .then(response => res.send(response.data))
    .catch(error => next(error));
});

module.exports = router;
