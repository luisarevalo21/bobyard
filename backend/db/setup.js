// In a separate setup.js file
const Client = require("pg").Client;

//creates an intial connection to check if it exists
const createDatabase = async () => {
  const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "postgres",
  });

  try {
    //checks if postgres exists if so create a new database named based on db_name
    await client.connect();
    console.log("connect worked");
    await client.query(`CREATE DATABASE ${process.env.DB_NAME}`);

    console.log("Database created successfully!");
  } catch (error) {
    if (error.code === "42P04") {
      console.log("Database already exists - continuing...");
    } else {
      throw error;
    }
  } finally {
    await client.end();
  }
};
module.exports = createDatabase;
