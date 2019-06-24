const express = require('express');
const routers = express.Router();

routers.get('/',(req, res) =>
    res.json(employeeServices.getAll()));

routers.get('/:id',(req, res)=>{
    const employeeId = req.param.id;
    res.json(employeeServices.getById(employeeId))
});

routers.post('/', (req, res)=>{
    const employee = req.body;
    res.json(employeeServices.save(employee))
});

routers.delete('/:id',(req, res)=>{
    const employeeDelete = req.param.id;
    res.json(employeeServices.delete(employeeDelete))
});

module.exports = routers;