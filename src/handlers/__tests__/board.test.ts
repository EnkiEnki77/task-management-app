import assert from 'assert'
import app from '../../server'
import request from 'supertest'
import { faker } from '@faker-js/faker';

let token;

describe('GET /board', function(){
    const signUp = '/register'
    const user = {name: faker.internet.email, password: faker.internet.password}

    beforeEach(function(done){
        request(app)
            .post(signUp)
            .send(user)
            .end((err, res) => {
                expect(res.statusCode).toEqual(200)
                token = res.body.token
                done()
            })
    })
    it('respond with json', function(done){
      request(app)
        .get('/api/board')
        .set('Accept', 'application/json')
        .expect(200)
        .end(function(err, res){
          if (err) return done(err);
          done()
        });
    })
  });