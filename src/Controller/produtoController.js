const Produto = require('../Models/Produto');
const {uploader, signature} = require('../utils/cloudinary');
const sharp = require('sharp');
var Datauri = require('datauri/parser');
const path = require('path')


module.exports = {
  //cadastro de clientes
  async store(req, res){
    try{
      const produto = await Produto.create({
        img, 
        codigo, 
        valor, 
        fabricante, 
        quantestoque, 
        parceiro
      })
      
      return res.send('chegou');
    }
    catch{
      return res.status(400).send({error: 'Registration failed!!'})
    }
    
  },

  async show(req, res){
    try{

      const produtos = await Produto.find(req.body);
      console.log(produtos)
      res.send(produtos);

    }
    catch{
      res.status(400).send({error: 'Falha ao buscar produtos'})
    }
  },

  async update(req, res){
    try{
      const produto = await Produto.findByIdAndUpdate(req.params.id, req.params.options);
      res.send(produto)
    }catch{

    }
  }

}