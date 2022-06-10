const express = require('express');
const router = express.Router();

const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

router.get('/chat', isLoggedIn, async (req, res) => {
    const users = await pool.query('SELECT * FROM users ');
    res.render('users/chat', { users });
});

router.get('/chat/:id', isLoggedIn, async (req, res) => {
    const { id } = req.params;
    const user = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    res.render('users/active', { user: user[0]});
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const user = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    console.log(user);
    res.render('users/edit', {user: user[0]});
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, username, password } = req.body; 
    const newUser = {
        name,
        email, 
        username, 
        password
    };
    await pool.query('UPDATE users set ? WHERE id = ?', [newUser, id]);
    req.flash('success', 'User Updated Successfully');
    res.redirect('/profile');
});

module.exports = router;