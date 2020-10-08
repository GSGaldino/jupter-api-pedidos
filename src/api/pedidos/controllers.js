const connection = require('../../database');
const crypto = require('crypto');

module.exports = {
  async index(req, res){
    const data = await connection('pedidos').select('*');

    res.json(data)
  },

  async single(req, res){
    const {id_pedido} = req.params;
    const pedido = await connection('pedidos')
      .where('id_pedido', id_pedido)
      .select('*')
      .first();

    if(!pedido){
      return res.status(404).json({
        message: 'Nenhum pedido encontrado com este id!'
      })
    }

    res.json(pedido)
  },
  
  async create(req, res){
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Allow', 'POST');
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
      return res.writeHead(200, {'Allow': 'POST'})

    };
  }
}