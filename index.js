const express = require('express');
const app = express();
//https://www.youtube.com/watch?v=dDjzTDN3cy8
const appRouter = require('./routes/appRoutes');


app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(express.static('public'));
app.set('views', 'public/views');
app.set('view engine', 'hbs');





app.use('/app', appRouter);
app.get('/', (req,res) => { res.render('Home') });










const PORT = 3000
app.listen(PORT, () => { console.log(`[INFO] server running at port http://localhost:${PORT}`)})