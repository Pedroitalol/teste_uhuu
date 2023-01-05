import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../../dataBase/db';
import internal from 'stream';


export default function userHandler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { id },
    method,
  } = req

  switch (method) {
    case 'GET':
        // retorna uma entrega com seu endereço
        const getQuery = "SELECT * FROM entregas join enderecos on enderecos.id_endereco = entregas.id_endereco WHERE id_entrega = ?";
        db.query(
          getQuery,
          [id],
          function(err, results, fields) {
            if(!err){
              res.status(200).json(results);
            }else{
              res.status(500).json(err.message);
            }
          }
        );
        break
    case 'PUT':
        // atualiza no banco
        const {nome, peso, logradouro, numero, bairro, complemento, cidade, estado, pais, latitude, longitude} = req.body;
        
        var putQuery = "SELECT id_endereco FROM entregas WHERE id_entrega = ?";
        db.query(
          putQuery,
          [id],
          function(err, results, fields) {
            if(!err){              
              const id_endereco = results[0].id_endereco;
              putQuery = "UPDATE enderecos SET logradouro = ?, numero = ?, bairro = ?, complemento = ?, cidade = ?, estado = ?, pais = ?, latitude = ?, longitude = ? WHERE id_endereco = ?";
              db.query(
                putQuery,
                [logradouro, numero, bairro, complemento, cidade, estado, pais, latitude, longitude, id_endereco],
                function(err, results, fields) {
                  if(err){
                    res.status(500).json(err.message);
                  }
                }
              );
              putQuery = "UPDATE entregas SET nome_cliente = ?, peso = ? WHERE (id_entrega = ?)";
              db.query(
                putQuery,
                [nome, peso, id],
                function(err, results, fields) {
                  if(!err){
                    res.status(200).json({status:'OK'});
                  }else{
                    res.status(500).json(err.message);
                  }
                }
              );
            }else{
              res.status(500).json(err.message);
            }
          }
        );
        break
    case 'POST':
        // adiciona um no banco
        console.log();
        
        break
    case 'DELETE':
        // deleta do banco
        
        break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}