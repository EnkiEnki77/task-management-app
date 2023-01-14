import * as user from '../user'
import sinon from "sinon"
import { stub, match } from 'sinon'
import { mockRequest, mockResponse } from 'mock-req-res'
import request from 'supertest'
import app from '../../server'
import { faker } from '@faker-js/faker';

const options = { method: 'GET', }

describe('user handler', () => {

    it('token should be truthy', async () => {
        let token = '';
        const user = {username: faker.name.firstName(), password: faker.internet.password()}
        const response = await request(app).post('/register').send(user);
        token = response.body.token;

        expect(token).toBeTruthy()
    })
})