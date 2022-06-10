const express = require('express');
const router = express.Router();

const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

router.get('/add', (req, res) => {
    res.render('lists/add');
});

router.post('/add', async (req, res) => {
    const { list_name, list_description } = req.body;
    const newList = {
        user_id: req.user.id,
        list_name,
        list_description
    };
    await pool.query('INSERT INTO lists set ?', [newList]);
    req.flash('success', 'Lista Saved Successfully');
    res.redirect('/lists');
});

router.get('/', isLoggedIn, async (req, res) => {
    const lists = await pool.query('SELECT * FROM lists WHERE user_id = ?', [req.user.id]);
    res.render('lists/list', { lists });
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM lists WHERE list_id = ?', [id]);
    req.flash('success', 'Lists Removed Successfully');
    res.redirect('/lists');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const lists = await pool.query('SELECT * FROM lists WHERE list_id = ?', [id]);
    console.log(lists);
    res.render('lists/edit', {list: lists[0]});
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { list_name, list_description} = req.body; 
    const newLink = {
        list_name,
        list_description
    };
    await pool.query('UPDATE lists set ? WHERE list_id = ?', [newLink, id]);
    req.flash('success', 'List Updated Successfully');
    res.redirect('/lists');
});

router.get('/books/:id', (req, res) => {
    res.render('lists/books');
});

module.exports = router;