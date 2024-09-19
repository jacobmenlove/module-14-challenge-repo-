// const forceDatabaseRefresh = false;

// import dotenv from 'dotenv';
// dotenv.config();

// import express from 'express';
// import routes from './routes/index.js';
// import { sequelize } from './models/index.js';

// const app = express();
// const PORT = process.env.PORT || 3001;

// // Serves static files in the entire client's dist folder
// app.use(express.static('../client/dist'));

// app.use(express.json());
// app.use(routes);

// sequelize.sync({force: forceDatabaseRefresh}).then(() => {
//   app.listen(PORT, () => {
//     console.log(`Server is listening on port ${PORT}`);
//   });
// });

import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';

const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(
      process.env.DB_NAME || '',
      process.env.DB_USER || '',
      process.env.DB_PASSWORD,
      {
        host: 'localhost',
        dialect: 'postgres',
        dialectOptions: {
          decimalNumbers: true,
        },
      }
    );

export default sequelize;
