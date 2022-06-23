require('dotenv').config();
const express = require('express');
const { useRouter, loginRouter, categoriesRouter, postRouter } = require('./routers');

const app = express();
app.use(express.json());

app.use('/user', useRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

app.listen(3001, () => console.log('ouvindo porta 3001!'));

app.get('/', (_request, response) => {
  response.send();
});
