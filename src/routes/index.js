const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('tu mama me gusta mucho dale besitos de mi parte');
});

module.exports = router;