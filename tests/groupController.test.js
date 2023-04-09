// groupController.test.js
import register from '@babel/register';
register({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime']
});

import request from 'supertest';
import app from '../server.js';
import Group from '../src/model/Group.js';
import path from 'path';
import dotenv from 'dotenv';
import { path as appRootPath } from 'app-root-path';

dotenv.config({ path: path.resolve(appRootPath, './src/.env') });

describe('Group Controller', () => {
  // clean test cases
  beforeEach(async () => {
    await Group.deleteMany({});
  });

  afterEach(async () => {
    await Group.deleteMany({});
  });



  //test cases
  describe('POST /group/create', () => {

    test('should create a new group', async () => {
      const res = await request(app)
        .post('/group/create')
        .send({
          name: 'Test Group',
          description: 'A test group for testing purposes.',
          category: 'webdevelopment',
          keywords: ['test', 'group']
        });
        console.log(res.body);
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('group');
    });

    test('should return 400 if group with the same name already exists', async () => {
      await Group.create({
        name: 'Test Group',
        description: 'A test group for testing purposes.',
        category: 'webdevelopment',
        keywords: ['test', 'group']
      });

      const res = await request(app)
        .post('/group/create')
        .send({
          name: 'Test Group',
          description: 'Another test group with the same name.',
          category: 'webdevelopment',
          keywords: ['test', 'group']
        });
      expect(res.statusCode).toEqual(400);
      expect(res.body).toHaveProperty('message', 'A group with the same name already exists.');
    });

    test('should return 500 if server error', async () => {
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {}); // just hiding server error issues, just a schema validation test case

      jest.spyOn(Group, 'findOne').mockRejectedValueOnce(new Error('Server error'));
      const res = await request(app)
        .post('/group/create')
        .send({
          name: 'Test Group',
          description: 'A test group for testing purposes.',
          category: 'webdevelopment',
          keywords: ['test', 'group']
        });
      expect(res.statusCode).toEqual(500);
      expect(res.body).toHaveProperty('message', 'Internal server error');
      consoleErrorSpy.mockRestore();
      
    });
  });

  
});
