var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

/***************Apollo Graphql part *********************************************/
var graphqlHTTP = require('express-graphql');
var {buildSchema} =require('graphql');

/*********************************DATABSE CONFIG******************/
var db = require('../../config/connection');
db();


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './dist')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);
/********************Enable cors for all HTTP*****************************/
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Method", "Get, Post, Put, Delete, Options");
  res.header("Access-Control-Allow-Headers","Origin, x-Requested-With, Content-type, Accept");
  next();
});


/*********************************************************************GRAPHQL ******************************************/
var Schema = new buildSchema(
  `type Query{
      hello : String
  }`
);

var root = {
    hello: () =>{
      return "aeolus tech labs"
    }
}

app.use('/graphql', graphqlHTTP({
      schema:Schema,
      rootValue:root,
      graphiql:true

}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
