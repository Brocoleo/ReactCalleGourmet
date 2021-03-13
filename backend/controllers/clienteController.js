const Cliente = require('../models/Cliente')
const {errorHandler} = require('../helpers/dberrorHandler')

exports.create = (req, res) => {
   const cliente = new Cliente(req.body)
   cliente.save((err,data) => {
    if(err){
        return res.statu(400),json({
            error: errorHandler(err)
        });
    }
    res.json({data})
   })
}

exports.list = (req, res) => {
    Cliente.find().exec((err, data) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      }
      res.json(data);
    })
  }

  exports.remove = (req, res) => {
    let cliente = req.cliente
    cliente.remove((err, data) => {
      if(err) {
        return res.status(400).json({
          error: errorHandler(err)
        })
      }
      res.json({
        message: "Cliente succesfully deleted"
      })
    })
  }
  
  exports.clienteById = (req, res, next, id) => {
    Cliente.findById(id).exec((err, cliente) => {
      if (err || !cliente) {
        return res.status(400).json({
          error: "cliente does not exist"
        });
      }
      req.cliente = cliente;
      next();
    })
  }