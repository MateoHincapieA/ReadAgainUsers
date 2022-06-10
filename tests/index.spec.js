const app = require('../src/app.js');
const request = require('supertest');

describe('GET /user', () => {

    test('should respond with a 200 status code', async () => {
        const response = await request(app).get('/signin').send();
        expect(response.statusCode).toBe(200);
    });
});