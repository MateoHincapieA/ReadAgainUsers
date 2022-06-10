const { Router } = require('express');
const router = Router();

const { obtenerAutores, obtenerAutoresId, crearAutores, 
    actualizarAutores, eliminarAutores, obtenerAutoresLibros, obtenerAutoresLibrosId,
       crearAutoresLibros, actualizarAutoresLibros, eliminarAutoresLibros,
       obtenerCategorias, obtenerCategoriasId, crearCategorias,
        actualizarCategorias, eliminarCategorias, obtenerCategoriasLibros,
        obtenerCategoriasLibrosId, crearCategoriasLibros, actualizarCategoriasLibros,
        eliminarCategoriasLibros, obtenerLibros, obtenerLibrosId, crearLibros,
        actualizarLibros, eliminarLibros } = require('../controllers/index.controller');

router.get('/autores', obtenerAutores);
router.get('/autores/:id', obtenerAutoresId);
router.post('/autores', crearAutores);
router.put('/autores/:id', actualizarAutores);
router.delete('/autores/:id', eliminarAutores);

router.get('/autores-libros', obtenerAutoresLibros);
router.get('/autores-libros/:id', obtenerAutoresLibrosId);
router.post('/autores-libros', crearAutoresLibros);
router.put('/autores-libros/:id', actualizarAutoresLibros);
router.delete('/autores-libros/:id', eliminarAutoresLibros);

router.get('/categorias', obtenerCategorias);
router.get('/categorias/:id', obtenerCategoriasId);
router.post('/categorias', crearCategorias);
router.put('/categorias/:id', actualizarCategorias);
router.delete('/categorias/:id', eliminarCategorias);

router.get('/categorias-libros', obtenerCategoriasLibros);
router.get('/categorias-libros/:id', obtenerCategoriasLibrosId);
router.post('/categorias-libros', crearCategoriasLibros);
router.put('/categorias-libros/:id', actualizarCategoriasLibros);
router.delete('/categorias-libros/:id', eliminarCategoriasLibros);

router.get('/libros', obtenerLibros);
router.get('/libros/:id', obtenerLibrosId);
router.post('/libros', crearLibros);
router.put('/ibros/:id', actualizarLibros);
router.delete('/libros/:id', eliminarLibros);

module.exports = router;