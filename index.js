import * as dotenv from 'dotenv'; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import express from 'express';

dotenv.config();
const app = express();

// define a route for the root URL
app.get('/', (req, res) => {
  res.send('Hello nodemon!');
});

// start the server
app.listen(process.env.PORT, () => {
  console.log('Server started on port ', process.env.PORT);
});
