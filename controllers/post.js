import sqlite3  from "sqlite3";

function createPost(req,res){
    const {title,body} = req.body;
  
    const db = new sqlite3.Database('./db.sqlite', (err) => {if (err) console.log(err)});
    const sql = `INSERT INTO post (title,body) VALUES ("${title}","${body}")`
    db.run(sql, (err) => {if (err) console.log(err)});
    return res.status(200).json({message:"Post created successfully"})
}

function getPost(req,res){
  const {id}=req.params;
  const db = new sqlite3.Database('./db.sqlite', (err) => {if (err) console.log(err)});
  const sql = `SELECT * FROM post WHERE id=${id}`
  db.get(sql, (err, row) => {
    if (err) {
      return console.error(err.message);
    }
    return res.status(200).json({post:row})
  });

}
export {createPost,getPost}
