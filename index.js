const express = require('express');
const app = express();
const expbs = require('express-handlebars');
const path = require('path');

//https://www.youtube.com/watch?v=dDjzTDN3cy8
const appRouter = require('./routes/appRoutes');
const loginRoutes = require('./routes/loginRoutes');


//app.use(express.urlencoded({extended:false}));
//app.use(express.json());
app.use(express.static('img'))
app.set('view engine', 'handlebars');
app.engine('handlebars',expbs({defaultLayout: 'layout', layoutsDir: path.join(__dirname,'views/layouts') }));



app.use('/app', appRouter);
app.use('/login', loginRoutes);

app.get('/', (req,res) => { res.render('home') });







const PORT = 3000
app.listen(PORT, () => { console.log(`[INFO] server running at port http://localhost:${PORT}`)})