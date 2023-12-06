/** Express app for bookstore. */


const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const { ExpressError } = require("./expressError");
const bookRoutes = require("./routes/books");


app.use((req, res, next) => {
  console.log('Incoming request:', req.method, req.path);
  next();
});

app.use("/books", bookRoutes);

/** 404 handler */

app.use(function (req, res, next) {
  const err = new ExpressError("Not Found", 404);
  return next(err);
});


/** general error handler */

app.use(function(err, req, res, next) {
  res.status(err.status || 500);

  return res.json({
    error: err,
    message: err.message
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
