const Produto = require('../Models/Produto');

module.exports = {
  //cadastro de clientes
  async store(req, res){
    try{
      console.log(req)
      const { img, codigo, valor, fabricante, quantestoque, parceiro } = req.body;

      /*const produto = await Produto.create({
        img, 
        codigo, 
        valor, 
        fabricante, 
        quantestoque, 
        parceiro
      })*/
      //return res.send({produto}).status(200);
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