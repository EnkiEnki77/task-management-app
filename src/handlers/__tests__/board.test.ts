import assert from 'assert'
import app from '../../server'
import request from 'supertest'
import { faker } from '@faker-js/faker';

let token;
const signin = '/signin'
const user =     {
  "username": "call",
  "password": "whore"
}

beforeEach(function(done){
    request(app)
        .post(signin)
        .send(user)
        .end((err, res) => {
            expect(res.statusCode).toEqual(200)
            token = res.body.token
            done()
        })
})

describe('GET /board', function(){

    it('respond with json', function(done){
      request(app)
        .get('/api/board')
        .set('Authorization', `Bearer ${token}`)
        .expect(200)
        .end(function(err, res){
          if (err) return done(err);
          done()
        });
    })
  });