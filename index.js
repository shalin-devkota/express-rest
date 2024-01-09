import bodyParser from 'body-parser'; 

import express from 'express';

import userRouter from './routes/users.js';
import postRouter from './routes/posts.js';

import initDB  from './utils/dbinit.js';

const app = express();  
const port = 3000;



app.use(bodyParser.urlencoded(
    {extended:true}
))

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});   


initDB();

app.use('/users', userRouter)
app.use('/posts', postRouter)
app.listen(3000)