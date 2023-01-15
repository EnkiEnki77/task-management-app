// import * as user from '../user'
// import sinon from "sinon"
// import { stub, match } from 'sinon'
// import { mockRequest, mockResponse } from 'mock-req-res'
import request from 'supertest'
import app from '../../server'
import { faker } from '@faker-js/faker';

const options = { method: 'GET', }

describe('POST /register', () => {
    const user = {username: 'fuuuuuuck', password: 'ty'}

    it('token should be truthy meaning user was created', async () => {
        let token = '';
        const response = await request(app).post('/register').send(user);
        token = response.body.token;

        expect(token).toBeTruthy()
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