const formidable = require('formidable');
const _ = require('lodash');
const fs = require('fs');

const Comida = require('../models/Comida');
const { errorHandler } = require('../helpers/dberrorHandler');

exports.list = (req, res) => {
  let order = req.query.order ? req.query.order : 'asc'
  let sortBy = req.query.sortBy ? req.query.sortBy : 'name'

  Comida.find()
    .select("-photo")
    .sort([[sortBy, order]])
    .exec((err, comidas) => {
      if (err) {
        return res.status(400).json({
          error: "Comidas not found"
        })
      }
      res.json(comidas);
    })
}

exports.read = (req, res) => {
  req.comida.photo = undefined;
  return res.json(req.comida);
}

exports.create = (req, res) => {
  let form = new formidable.IncomingForm()
  form.keepExtensions = true
  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(400).json({
        error: "Image could not be uploaded"
      })
    }

    const { name, description, ingredients ,price, quantity, photo } = fields
    let comida = new Comida(fields);

    // 1KB = 1000 bytes
    // 1MB = 1,000,000 bytes 
    // 1 Byte = 8 bits

    if (files.photo) {
      if (files.photo.size > 1000000) {
        return res.status(400).json({
          error: "Image should be lass than 1MB in size"
        })
      }
      comida.photo.data = fs.readFileSync(files.photo.path)
      comida.photo.contentType = files.photo.type
    }

    comida.save((err, result) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(error)
        })
      }
      res.json(result);
    })

  })
}

exports.remove = (req, res) => {
  let comida = req.comida
  comida.remove((err, deletedComida) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      })
    }
    res.json({
      message: "comida was deleted succesfully"
    })
  })
}

exports.comidaById = (req, res, next, id) => {
  Comida.findById(id)
    .exec((err, comida) => {
      if (err || !comida) {
        return res.status(400).json({
          error: "comida not found"
        });
      }
      req.comida = comida;
      next();
    })
}

exports.photo = (req, res, next ) => {
  if (req.comida.photo.data) {
    res.set('Content-Type', req.comida.photo.contentType)
    return res.send(req.comida.photo.data)
  }
  next();
}