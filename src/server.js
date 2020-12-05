const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const Handlebars = require("handlebars");
const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");
const passport= require('passport')
/*============================================
ANCHOR Inicializations
=============================================*/
const app = express();
require('./config/passport')

app.set("port", process.env.PORT || 3000);

app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  exphbs({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialDir: path.join(app.get("views"), "partials"),
    extname: ".hbs",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
  })
);

app.set("view engine", ".hbs");

/*============================================
ANCHOR Middlewares
=============================================*/
app.use(morgan("dev"));
/* leer html */
app.use(express.urlencoded({ extended: false }));
/* Para otros metodos */
app.use(methodOverride("_method"));
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

/*============================================
ANCHOR Global Variables
=============================================*/
app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.error_msg = req.flash("error_msg");
  res.locals.error_msg = req.flash("error");
  res.locals.user= req.user || null

  next();
});

/*============================================
ANCHOR Routes
=============================================*/

app.use(require("./routes/index.routes"));
app.use(require("./routes/form.routes"));
app.use(require("./routes/car.routes"));
app.use(require("./routes/users.routes"));

/*============================================
ANCHOR Static files
=============================================*/

app.use(express.static(path.join(__dirname, "views")));
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;