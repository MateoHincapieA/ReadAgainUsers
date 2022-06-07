const router = require('express').Router();

const pool = require('../database');
const { isLoggedIn } = require('../lib/auth');

router.route('/').get((req, res) => {
    msg = `Hello ${req.query.name || 'world'} from get request!`;
    res.json({msg});
}); 

router.get('/add', (req, res) => {
    res.render('users/add');
});

router.post('/add', async (req, res) => {
    const { name, email, username, password } = req.body;
    const newUser = {
        name,
        email, 
        username, 
        password,
        user_id: req.user.id
    };
    await pool.query('INSERT INTO user set ?', [newUser]);
    req.flash('success', 'User Saved Successfully');
    res.redirect('/users');
});

router.get('/', isLoggedIn, async (req, res) => {
    const links = await pool.query('SELECT * FROM users WHERE user_id = ?', [req.user.id]);
    res.render('users/list', { links });
});

router.get('/users/delete/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM users WHERE ID = ?', [id]);
    req.flash('success', 'User Removed Successfully');
    res.redirect('/users');
});

router.get('/users/edit/:id', async (req, res) => {
    const { id } = req.params;
    const links = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
    console.log(links);
    res.render('users/edit', {link: links[0]});
});

router.post('/users/edit/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, username, password} = req.body; 
    const newUser = {
        name, 
        email, 
        username, 
        password
    };
    await pool.query('UPDATE users set ? WHERE id = ?', [newUser, id]);
    req.flash('success', 'User Updated Successfully');
    res.redirect('/users');
});

module.exports = router;