const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: '0721',
    database: 'read_again',
    port: '5432'
});

const obtenerAutores = async (req, res) => {
    const response = await pool.query('SELECT * FROM autores ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const obtenerAutoresId = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM autores WHERE id = $1', [id]);
    res.json(response.rows);
};

const crearAutores = async (req, res) => {
    const { nombre } = req.body;
    const response = await pool.query('INSERT INTO autores (nombre) VALUES ($1)', [nombre]);
    res.json({
        message: 'Autor creado con exito!',
        body: {
            autor: {nombre}
        }
    })
};

const actualizarAutores = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre } = req.body;

    const response =await pool.query('UPDATE autores SET nombre = $1 WHERE id = $2', [
        nombre,
        id
    ]);
    res.json('Autor actualizado con exito!');
};

const eliminarAutores = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM autores WHERE id = $1', [
        id
    ]);
    res.json(`Autor ${id} eliminado con exito!`);
};

const obtenerAutoresLibros = async (req, res) => {
    const response = await pool.query('SELECT * FROM autores_libros ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const obtenerAutoresLibrosId = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM autores_libros WHERE id = $1', [id]);
    res.json(response.rows);
};

const crearAutoresLibros = async (req, res) => {
    const { id_autores, id_libros } = req.body;
    const response = await pool.query('INSERT INTO autores_libros (id_autores, id_libros) VALUES ($1, $2)', [id_autores, id_libros]);
    res.json({
        message: 'Autores_libros creado con exito!',
        body: {
            autores_libros: {id_autores, id_libros}
        }
    })
};

const actualizarAutoresLibros = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id_autores, id_libros } = req.body;

    const response =await pool.query('UPDATE autores_libros SET id_autores = $1, id_libros = $2 WHERE id = $3', [
        id_autores, 
        id_libros,
        id
    ]);
    res.json('Actualizado con exito!');
};

const eliminarAutoresLibros = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM autores_libros where id = $1', [
        id
    ]);
    res.json(`Autores_libros ${id} eliminado con exito!`);
};

const obtenerCategorias = async (req, res) => {
    const response = await pool.query('SELECT * FROM categorias ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const obtenerCategoriasId = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM categorias WHERE id = $1', [id]);
    res.json(response.rows);
};

const crearCategorias = async (req, res) => {
    const { nombre, descripcion} = req.body;
    const response = await pool.query('INSERT INTO categorias (nombre, descripcion) VALUES ($1, $2)', [nombre, descripcion]);
    res.json({
        message: 'Categoria creado con exito!',
        body: {
            libro: {nombre, descripcion}
        }
    })
};

const actualizarCategorias = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, descripcion } = req.body;

    const response =await pool.query('UPDATE categorias SET nombre = $1, descripcion = $2 WHERE id = $3', [
        nombre, 
        descripcion,
        id
    ]);
    res.json('Categoria actualizada con exito!');
};

const eliminarCategorias = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM categorias where id = $1', [
        id
    ]);
    res.json(`Categoria ${id} elimninada con exito!`);
};

const obtenerCategoriasLibros = async (req, res) => {
    const response = await pool.query('SELECT * FROM categorias_libros ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const obtenerCategoriasLibrosId = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM categorias_libros WHERE id = $1', [id]);
    res.json(response.rows);
};

const crearCategoriasLibros = async (req, res) => {
    const { id_libros, id_categorias } = req.body;
    const response = await pool.query('INSERT INTO categorias_libros (id_libros, id_categorias ) VALUES ($1, $2)', [id_libros, id_categorias]);
    res.json({
        message: 'Categorias de libros creado con exito!',
        body: {
            libro: {id_libros, id_categorias}
        }
    })
};

const actualizarCategoriasLibros = async (req, res) => {
    const id = parseInt(req.params.id);
    const { id_libros, id_categorias } = req.body;

    const response =await pool.query('UPDATE categorias_libros SET id_libros = $1, id_categorias = $2 WHERE id = $3', [
        id_libros,
        id_categorias,
        id
    ]);
    res.json('Categorias de libros actuliazada con exito!');
};

const eliminarCategoriasLibros = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM categorias_libros where id = $1', [
        id
    ]);
    res.json(`Categorias ${id} eliminada con exito`);
};

const obtenerLibros = async (req, res) => {
    const response = await pool.query('SELECT * FROM libros ORDER BY id ASC');
    res.status(200).json(response.rows);
};

const obtenerLibrosId = async (req, res) => {
    const id = parseInt(req.params.id);
    const response = await pool.query('SELECT * FROM libros WHERE id = $1', [id]);
    res.json(response.rows);
};

const crearLibros = async (req, res) => {
    const { nombre, genero, numero_paginas, anio_pbulicacion } = req.body;
    const response = await pool.query('INSERT INTO libros (nombre, genero, numero_paginas, anio_pbulicacion) VALUES ($1, $2, $3, $4)', [nombre, genero, numero_paginas, anio_pbulicacion]);
    res.json({
        message: 'Libro creado con exito!',
        body: {
            libro: {nombre, genero, numero_paginas, anio_pbulicacion}
        }
    })
};

const actualizarLibros = async (req, res) => {
    const id = parseInt(req.params.id);
    const { nombre, genero, numero_paginas, anio_pbulicacion } = req.body;

    const response =await pool.query('UPDATE libros SET nombre = $1, genero = $2, numero_paginas = $3, anio_pbulicacion = $4 WHERE id = $5', [
        nombre, 
        genero,
        numero_paginas,
        anio_pbulicacion,
        id
    ]);
    res.json('User Updated Successfully');
};

const eliminarLibros = async (req, res) => {
    const id = parseInt(req.params.id);
    await pool.query('DELETE FROM users where id = $1', [
        id
    ]);
    res.json(`User ${id} deleted Successfully`);
};

module.exports = {
    obtenerAutores,
    obtenerAutoresId,
    crearAutores,
    actualizarAutores,
    eliminarAutores,
    obtenerAutoresLibros,
    obtenerAutoresLibrosId,
    crearAutoresLibros,
    actualizarAutoresLibros,
    eliminarAutoresLibros,
    obtenerCategorias,
    obtenerCategoriasId,
    crearCategorias,
    actualizarCategorias,
    eliminarCategorias,
    obtenerCategoriasLibros,
    obtenerCategoriasLibrosId,
    crearCategoriasLibros,
    actualizarCategoriasLibros,
    eliminarCategoriasLibros,
    obtenerLibros,
    obtenerLibrosId,
    crearLibros,
    actualizarLibros,
    eliminarLibros
};