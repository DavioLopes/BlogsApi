const express = require('express');
const swaggerUi = require('swagger-ui-express');
const bodyParser = require('body-parser');
const swaggerJson = require('./swaggerJson.json');
require('dotenv').config();

const PORT = process.env.PORT || 3001;

const { useRouter, loginRouter, categoriesRouter, postRouter } = require('./routers');

const app = express();

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJson));
app.use('/user', useRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);
app.use('/post', postRouter);

app.listen(PORT, () => console.log('ouvindo porta 3001!'));

app.get('/', (_request, response) => {
  response.send();
});
