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
import { signup, login } from '../src/controllers/authController.js';
import path from 'path';
import dotenv from 'dotenv';
import appRootPath from 'app-root-path';

dotenv.config({ path: path.resolve(appRootPath.path, './src/.env') });

describe('POST /signup', () => {
  beforeEach(() => {
    // clear database before each test
    return User.deleteMany({});
  });

  it('should create a new user', async () => {
    const user = {
      username: 'testuser',
      password: 'password',
      language: ['Java'],
      domain: 'back-end',
      experience: '1-3'
    };

    const response = await request(app)
      .post('/signup')
      .send(user);

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('user');
    expect(response.body).toHaveProperty('token');

    const savedUser = await User.findOne({ username: user.username });
    expect(savedUser).toBeDefined();
    expect(savedUser.username).toBe(user.username);
    expect(savedUser.language).toEqual(user.language);
    expect(savedUser.domain).toBe(user.domain);
    expect(savedUser.experience).toBe(user.experience);
    expect(await bcrypt.compare(user.password, savedUser.password)).toBe(true);
  });

  it('should return 400 if required fields are missing', async () => {
    const response = await request(app)
      .post('/signup')
      .send({});

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'Missing required fields');
  });

  it('should return 400 if domain is invalid', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        username: 'testuser',
        password: 'password',
        language: ['Java'],
        domain: 'invalid',
        experience: '1-3'
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'Invalid domain');
  });

  it('should return 400 if language is invalid', async () => {
    const response = await request(app)
      .post('/signup')
      .send({
        username: 'testuser',
        password: 'password',
        language: ['invalid'],
        domain: 'back-end',
        experience: '1-3'
      });

    expect(response.status).toBe(400);
    expect(response.body).toHaveProperty('message', 'Invalid languages');
  });
});
