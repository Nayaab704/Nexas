// tests/userGroupController.test.js

import register from '@babel/register';
register({
  ignore: [/(node_modules)/],
  presets: ['@babel/preset-env'],
  plugins: ['@babel/plugin-transform-runtime']
});

import request from 'supertest';
import app from '../server.js';
import User_Group from '../src/model/User_Group.js';
import path from 'path';
import dotenv from 'dotenv';
import { path as appRootPath } from 'app-root-path';

dotenv.config({ path: path.resolve(appRootPath, './src/.env') });

// test for 
async function createSampleUser() {
    const user = new User({
      username: 'testuser',
      email: 'testuser@gmail.com',
      // other user properties...
    });
    await user.save();
    return user;
  }
  
  async function createSampleGroup() {
    const group = new Group({
      name: 'Test Group',
      description: 'A test group for testing purposes.',
      category: 'webdevelopment',
      keywords: ['test', 'group']
    });
    await group.save();
    return group;
  }
  
  async function createSampleUserGroup(userId, groupId) {
    const userGroup = new User_Group({
      user: userId,
      group: groupId,
      role: 'member'
    });
    await userGroup.save();
    return userGroup;
  }
  
describe('User Group Controller', () => {
    beforeEach(async () => {
      await User_Group.deleteMany();
    });
  
    afterEach(async () => {
      await User_Group.deleteMany();
    });
  
    describe('POST /user-group/create', () => {
      test('should create a new user-group association', async () => {
        const sampleUser = await createSampleUser();
        const sampleGroup = await createSampleGroup();
  
        const res = await request(app)
          .post('/user-group/create')
          .send({
            user: sampleUser._id,
            group: sampleGroup._id,
            role: 'member'
          });
  
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('userGroup');
      });
    });
  
    describe('PATCH /user-group/:id/update', () => {
      test('should update a user-group association', async () => {
        // Adding sample user-group data from those helper functions
        const sampleUser = await createSampleUser();
        const sampleGroup = await createSampleGroup();
        const sampleUserGroup = await createSampleUserGroup(sampleUser._id, sampleGroup._id);
  
        const res = await request(app)
          .patch(`/user-group/${sampleUserGroup._id}/update`)
          .send({
            user: sampleUser._id,
            group: sampleGroup._id,
            role: 'admin'
          });
  
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('userGroup');
      });
    });
  
    describe('DELETE /user-group/:id/delete', () => {
      test('should delete a user-group association', async () => {
        // Adding sample user-group data from those helper functions
        const sampleUser = await createSampleUser();
        const sampleGroup = await createSampleGroup();
        const sampleUserGroup = await createSampleUserGroup(sampleUser._id, sampleGroup._id);
  
        const res = await request(app)
          .delete(`/user-group/${sampleUserGroup._id}/delete`);
  
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('message', 'User-Group association deleted successfully');
      });
    });
  });
  



