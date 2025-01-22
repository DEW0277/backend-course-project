const express = require('express');
const { default: mongoose } = require('mongoose');
const fileUpload = require('express-fileupload');
const app = express();
const cookieParser = require('cookie-parser');

require('dotenv').config();

// Routes

const { default: requestTime } = require('./middlewares/request-time');

app.use(requestTime);
app.use(cookieParser({}));
app.use(express.json());
app.use(express.static('static'));
app.use(fileUpload());

app.use('/api/post', require('./routes/post.route'));

app.use('/api/auth', require('./routes/auth.route'));

const DB_URL__MONGODB = process.env.DB_URL;

const PORT = process.env.PORT || 8080;

const dbConnected = async () => {
  try {
    await mongoose
      .connect(DB_URL__MONGODB)
      .then(() => console.log('DB connected'));
    app.listen(PORT, () =>
      console.log(`Listening on -- http://localhost:${PORT}`)
    );
  } catch (error) {
    console.log(`Error connecting with DB - ${error}`);
  }
};
dbConnected();
