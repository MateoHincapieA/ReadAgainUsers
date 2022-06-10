const app = require('../src/index.js');
const request = require('supertest');

describe('GET /signin', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/signin').send();
        expect(response.statusCode).toBe(200);
    });
});


describe('GET /signup', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/signup').send();
        expect(response.statusCode).toBe(200);
    });
});


describe('GET /', () => {
    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/').send();
        expect(response.statusCode).toBe(200);
    });
});

describe('GET /profile', () => {
    test('should respond with a 302 status code', async () => {
        const response = await request(app).get('/profile').send();
        expect(response.statusCode).toBe(302);
    });
});

describe('GET /lists', () => {
    test('should respond with a 302 status code', async () => {
        const response = await request(app).get('/lists').send();
        expect(response.statusCode).toBe(302);
    });
});

describe('GET /lists/add', () => {
    test('should respond with a 302 status code', async () => {
        const response = await request(app).get('/lists/add').send();
        expect(response.statusCode).toBe(302);
    });
});

describe('GET /users/chat', () => {
    test('should respond with a 302 status code', async () => {
        const response = await request(app).get('/users/chat').send();
        expect(response.statusCode).toBe(302);
    });
});
