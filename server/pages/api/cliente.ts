import type { NextApiRequest, NextApiResponse } from 'next'
import db from '../../dataBase/db';


export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  const query = "SELECT * FROM entregas join enderecos on enderecos.id_endereco = entregas.id_endereco";
  db.query(
    query,
    function(err, results, fields) {
      if(!err){
        res.status(200).json(results);
      }else{
        res.status(500).json(err.message);
      }
    }
  );
}
