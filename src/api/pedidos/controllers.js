const connection = require('../../database');
const crypto = require('crypto');

module.exports = {
  async index(req, res){
    const data = await connection('pedidos').select('*');

    res.json(data)
  },
  
  async create(req, res){
    const id_pedido = crypto.randomBytes(10).toString('HEX');
    const {produto_pedido, data_pedido, data_entrega} = req.body;

    const [inserted] = await connection('pedidos')
      .insert({
        id_pedido,
        produto_pedido,
        data_pedido,
        data_entrega
      });

    if(inserted){
      return res.json(id_pedido);
    };
  }
}