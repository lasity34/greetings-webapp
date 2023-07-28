import express from 'express';
import { engine } from 'express-handlebars';
import bodyParser from "body-parser";
import Greeting from './greet.js';
import flash from 'express-flash';
import session from 'express-session';
import pgPromise from 'pg-promise';
import dotenv from "dotenv"

dotenv.config()


const db = pgPromise()(process.env.DATABASE_URL);

const app = express();
const greeting = Greeting()

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


app.use(session({
    secret: 'kyoto123', 
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 } 
}));

app.use(flash());


app.get('/', (req, res) => {
    res.render('index',  {
        flashMessage: req.flash('info'),
       
        count: greeting.getCount()});
});


app.post('/greeting', (req, res) => {
    greeting.setLanguage(req.body.language)
    const greetingMessage =    greeting.greetMessage(req.body.name)
    req.flash('info', greetingMessage)
 
    res.redirect('/')
} )


const PORT = process.env.PORT || 3012


app.listen(PORT, function() {
    console.log('App has started', PORT)
})

