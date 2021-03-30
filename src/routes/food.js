'use strict';
const express = require('express');
const validator = require('../middlewares/validator.js');
const Food = require('../models/food.js');
const food = new Food();
const router = express.Router();

router.get('/', getFood);
router.get('/:id', getFoodById);
router.post('/', createFood);
router.put('/:id', updateFood);
router.delete('/:id',  deleteFood);

function getFood(req, res) {
  const resObj = food.read();
  res.json(resObj);
}

function getFoodById(req, res) {
  const resObj = food.read(req.params.id);
  res.json(resObj);
}

function createFood(req, res) {
  const foodObject = req.body;
  const resObj = food.create(foodObject);
  res.status(201).json(resObj);
}

function updateFood(req, res) {
  const foodObject = req.body;
  const resObj = food.update(req.params.id, foodObject);
  res.json(resObj);
}

function deleteFood(req, res) {
  const resObj = food.delete(req.params.id);
  res.json(resObj);
}

module.exports = router;