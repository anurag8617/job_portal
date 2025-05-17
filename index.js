const express = require('express');
var path = require('path');
const session = require('express-session');
const methodOverride = require('method-override');
const flash = require('connect-flash');

const connectDB = require('./utils/db');
// Connect to Database  
connectDB();

const app = express();
const PORT = 5050;

app.use(methodOverride('_method'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(
    session({
      secret: 'secret',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
      }
    })
);

// Flash Messages
app.use(flash());


// app.get('/',(req, res)=>{
//     res.send("Anurag Sharma is the best devloper of the world");
// });
app.use('/',require('./routers/user'));
// app.use("/admin",require("./routes/Admin"));

app.listen(PORT,()=>{
    console.log("app run on port number "+PORT);
})