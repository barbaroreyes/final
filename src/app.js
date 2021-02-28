const express = require("express");

const urlRouter = require("./url/url.router")
const usesRouter = require("./uses/uses.router")

const app = express();


app.use(express.json());

// TODO: Add code to meet the requirements and make the tests pass.

app.use("/urls", urlRouter);


app.use("/uses", usesRouter);



/*404 page not found*/
app.use((req, res, next) => {
 next({ status: 404, message: `Not found: ${req.originalUrl}` });
 return;
});


/*Error Handler*/
app.use((error, req, res, next) => {
  console.error(error);
  const { status = 500, message = "Something went wrong!" } = error;
  res.status(status).json({ error: message })
});

module.exports = app;


