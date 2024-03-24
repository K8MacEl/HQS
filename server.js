require("dotenv").config();
const express = require("express");
const path = require("path");
const logger = require("morgan");
const favicon = require("serve-favicon");

require("./config/database");

// Require controllers here

const app = express();

app.set('view engine', 'ejs')

const userRouter = require("./routes/api/users")
const propertiesRouter = require("./routes/api/properties")
const requestsRouter = require("./routes/api/requests")
const inspectionsRouter = require("./routes/api/inspections")
// add in when the app is ready to be deployed
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(logger("dev"));

// THis line is how servers process
// json
app.use(express.json());


// Configure the auth middleware
// This decodes the jwt token, and assigns
// the user information to req.user
app.use(require("./config/auth"));
// api routes must be before the "catch all" route
app.use("/api/users", userRouter);
app.use("/api/properties", propertiesRouter);
app.use("/api", requestsRouter); ///----------is this correct????
app.use("/api", inspectionsRouter ); ///----------is this correct????

// "catch all" route
if(process.env.IS_PRODUCTION){
  // This code will run in production
    const manifest = require('./dist/manifest.json');
    app.use(express.static(path.join(__dirname, "dist")));
  
    // "catch all" route when the code is in production
    app.get('/*', function(req, res) {
      res.render(path.join(__dirname, 'dist', 'index.ejs'), {manifest});
    });
  }
  
  // This is the catch all when the code is running locally
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './','index.html'));
  });







const { PORT = 8000 } = process.env;
app.listen(PORT, () => {
  console.log();
  console.log(`  App running in port ${PORT}`);
  console.log();
  console.log(`  > Local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
