
import register from '@babel/register';
register({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime']
});

import request from 'supertest';
import app from '../server.js';
import bcrypt from 'bcrypt';
import User from '../src/model/User.js';
import { signup, login } from '../src/controllers/authController';
import path from 'path';
import dotenv from 'dotenv';
import { path as appRootPath } from 'app-root-path';

dotenv.config({ path: path.resolve(appRootPath, './src/.env') });

  describe('Auth Controller', () => {
  describe('POST /signup', () => {
  test('should create a new user', async () => {
  const res = await request(app)
  .post('/signup')
  .send({
  username: 'testuser',
  email: 'testuser@gmail.com',
  password: 'password'
  });
  expect(res.statusCode).toEqual(201);
  expect(res.body).toHaveProperty('user');
  expect(res.body).toHaveProperty('token');
  });

  test('should return 500 if server error', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {}); // just hiding server error issues, just a schema validation test case

    jest.spyOn(User, 'create').mockRejectedValueOnce(new Error('Server error'));
    const res = await request(app)
      .post('/signup')
      .send({
        username: 'testuser',
        email: 'testuser@gmail.com',
        gender: 'female',
        password: 'password'
      });
    expect(res.statusCode).toEqual(500);
    expect(res.body).toHaveProperty('message', 'Internal server error');
    consoleErrorSpy.mockRestore();
  });
  


  });
  describe('POST /login', () => {
    test('should authenticate a user and return a token', async () => {
    const user = await User.create({
    username: 'testuser',
    email: 'testuser@gmail.com',
    gender: 'male',
    password: await bcrypt.hash('password', 10)
    });
    const res = await request(app)
    .post('/login')
    .send({
    email: 'testuser@gmail.com',
    password: 'password'
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
    expect(res.body).toHaveProperty('token');
    });
    test('should return 401 if invalid credentials', async () => {
      const res = await request(app)
        .post('/login')
        .send({
          email: 'testuser@gmail.com',
          password: 'wrongpassword'
        });
      expect(res.statusCode).toEqual(401);
      expect(res.body).toHaveProperty('message', 'Invalid credentials');
    });
    
    test('should return 500 if server error', async () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {}); // just hiding server error issues, just a schema validation test case

      jest.spyOn(User, 'findOne').mockRejectedValueOnce(new Error('Server error'));
      const res = await request(app)
        .post('/login')
        .send({
          email: 'testuser@gmail.com',
          password: 'password'
        });
      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Internal server error');
      consoleErrorSpy.mockRestore();
    });
  });
});

   