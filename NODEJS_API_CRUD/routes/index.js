const express = require('express');
const router = express.Router();

const { Employee } = require('../models/employee');



// Get all Employees
router.get('/api/employees', (req, res) => {
    Employee.find({}, (err, data) => {
        if(!err) {
            res.send(data);
        }  else {
            console.log(err);
        }
    });
});  



module.exports = router;