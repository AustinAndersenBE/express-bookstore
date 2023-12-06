/** Common config for bookstore. */

require("dotenv").config();

const { NODE_ENV, USERNAME, PASSWORD } = process.env;

let DB_URI = `postgresql://${USERNAME}:${PASSWORD}@localhost/books`;

if (NODE_ENV === "test") {
  DB_URI = `postgresql://${USERNAME}:${PASSWORD}@localhost/books-test`;
}

module.exports = { DB_URI };