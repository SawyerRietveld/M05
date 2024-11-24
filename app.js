const express = require('express');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.use(express.static('public'));

app.use(morgan('dev'));

app.get('/', (req, res) => {
    const blogs = [
        {title: 'Yoshi lays eggs', snippet: 'Sapphire Onyx Topaz Opal Lazuli Ruby'},
        {title: 'Mario finds stars', snippet: 'Sapphire Onyx Topaz Opal Lazuli Ruby'},
        {title: 'How to defeat Bowser', snippet: 'Sapphire Onyx Topaz Opal Lazuli Ruby'},
    ];
    res.render('index', { title: 'Home', blogs});
});


app.get('/about', (req, res) => {
    //res.send('<p>About page</p>');
    res.render('about', { title: 'About'});
});

app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a new Blog'})
});
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404'});
})