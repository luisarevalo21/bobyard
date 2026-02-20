const Pool = require("pg").Pool;

const { comments } = require("../mockdata.json");
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const databaseName = process.env.DB_NAME;

const connectionURL = `postgres://${username}:${password}@${host}:${port}/${databaseName}`;

const pool = new Pool({
  connectionString: connectionURL,
});
const connectDB = async () => {
  try {
    const client = await pool.connect();

    console.log("Connection to the database successful");

    // SQL query to create the table if it does not exist
    const createTableQuery = `
            CREATE TABLE IF NOT EXISTS comments (
                id SERIAL PRIMARY KEY not null,
                text TEXT ,
                author TEXT, 
                likes BIGINT,
                image TEXT,
                date TIMESTAMP WITH TIME ZONE 
            );
        `;
    await client.query(createTableQuery);

    // Insert data into the table
    for (const comment of comments) {
      await client.query(
        "INSERT INTO comments (id, author, date, text, likes, image)  VALUES ($1, $2, $3, $4, $5, $6) on CONFLICT (id) DO NOTHING",
        [comment.id, comment.author, comment.date, comment.text, comment.likes, comment.image],
      );
    }

    console.log("Initial data insertion complete.");
    client.release();
  } catch (error) {
    // Log an error message and exit the process if the connection fails
    console.log("Connection to the database failed");
    console.error(error);
    process.exit(1);
  }
};

module.exports = { connectDB, db: pool };
