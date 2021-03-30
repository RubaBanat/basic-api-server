'use strict';
const express = require('express');
const validator = require('../middlewares/validator.js');
const Clothes = require('../models/clothes');
const clothes = new Clothes();
const router = express.Router();

router.get('/', getClothes);
router.get('/:id', validator, getClothesById);
router.post('/', createClothes);
router.put('/:id', validator, updateClothes);
router.delete('/:id', validator, deleteClothes);

function getClothes(req, res) {
  const resObj = clothes.read();
  res.json(resObj);
}

function getClothesById(req, res) {
  const resObj = clothes.read(req.params.id);
  res.json(resObj);
}

function createClothes(req, res) {
  const clothesObject = req.body;
  const resObj = clothes.create(clothesObject);
  res.status(201).json(resObj);
}

function updateClothes(req, res) {
  const clothesObject = req.body;
  const resObj = clothes.update(req.params.id, clothesObject);
  res.json(resObj);
}

function deleteClothes(req, res) {
  const resObj = clothes.delete(req.params.id);
  res.json(resObj);
}

// console.log( '---' ,createClothes);
module.exports = router;