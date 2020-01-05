const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const util = require('util');
const feed = require('rss-to-json');

const readFile = util.promisify(fs.readFile);

function returnFile() {
    return readFile(path.join(__dirname, './views/index.ejs'), 'utf8');
}

// Controller to convert RSS to JSON
// TODO Improve the way to cache the rss
const feedResponse = async () => {
    return new Promise((resolve, reject) => {
        feed.load('https://medium.com/feed/@vstevan', (err, res) => {
            resolve(!err ? res : '');
        })
    })
}

// render the pages
router.get('/', async (req, res) => {
    const fileResult = await returnFile().then(data => {
        return data;
    });
    res.render('_layout', { yield: fileResult });
});

router.get('/index', async (req, res) => {
    res.redirect('/');
});

router.get('/blog', async (req, res) => {
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    const articles = await feedResponse();
    res.render('blog', { articles: articles.items });
});

router.get('/impossible-list', async (req, res) => {
    res.render('impossible-list');
});

router.get('/fire-group', async (req, res) => {
    res.render('fire-group');
});

router.get('/btrcast', async (req, res) => {
    res.render('btrcast');
});

router.get('/404', async (req, res) => {
    res.render('404');
});
router.get('/resume', async (req, res) => {
    res.render('resume');
});
router.get('/research', async (req, res) => {
    res.render('research');
});

module.exports = router;