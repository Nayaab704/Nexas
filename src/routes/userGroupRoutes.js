import express from 'express';
import userGroupController from './controllers/userGroupController';

const router = express.Router();

// UserGroup routes
router.post('/user-group/create', userGroupController.createUserGroup);
router.get('/user-group/:id', userGroupController.getUserGroupById);
router.put('/user-group/:id', userGroupController.updateUserGroup);
router.delete('/user-group/:id', userGroupController.deleteUserGroup);
router.get('/user-group/user/:userId', userGroupController.getUserGroupsByUserId);
router.get('/user-group/group/:groupId', userGroupController.getUserGroupsByGroupId);

// Other routes for other controllers go here


export default router;
