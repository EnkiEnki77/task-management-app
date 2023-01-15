// import * as user from '../user'
// import sinon from "sinon"
// import { stub, match } from 'sinon'
// import { mockRequest, mockResponse } from 'mock-req-res'
import request from 'supertest'
import app from '../../server'
import { faker } from '@faker-js/faker';

const options = { method: 'GET', }

describe('POST /register', () => {
    const user = {username: faker.name.firstName(), password: faker.internet.password()}
    const oldUser = {username: 'layman212@gmail.com', password: faker.internet.password()}

    it('token should be truthy meaning user was created', async () => {
        let token = '';
        const response = await request(app).post('/register').send(user);
        token = response.body.token;

        expect(token).toBeTruthy()
    })

    it('should return error if user already exists', async () => {
        let token = '';
        const response = await request(app).post('/register').send(oldUser);
        token = response.body.token;

        expect(response.statusCode).toBe(500)
    })
})

describe('POST /signin', () => {
    const user =     {
        "username": "call",
        "password": "whore"
    }

    it('token should be truthy meaaning user was signed in', async () => {
        let token = '';
        const response = await request(app).post('/signin').send(user);
        token = response.body.token;

        expect(response.statusCode).toBe(200)
    })
})