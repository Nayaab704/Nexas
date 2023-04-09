//
import User_Group from '../models/User_Group.js';

const userGroupController = {
  create: async (req, res) => {
    try {
      const { user, group, role } = req.body;

      const userGroup = new User_Group({
        user,
        group,
        role
      });

      const savedUserGroup = await userGroup.save();

      res.status(201).json({ userGroup: savedUserGroup });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  },

  update: async (req, res) => {
    try {
      const { user, group, role } = req.body;
      const { id } = req.params;

      const updatedUserGroup = await User_Group.findByIdAndUpdate(
        id,
        { user, group, role },
        { new: true }
      );

      if (!updatedUserGroup) {
        return res.status(404).json({ message: 'User-Group association not found' });
      }

      res.status(200).json({ userGroup: updatedUserGroup });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  },

  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const deletedUserGroup = await User_Group.findByIdAndDelete(id);

      if (!deletedUserGroup) {
        return res.status(404).json({ message: 'User-Group association not found' });
      }

      res.status(200).json({ message: 'User-Group association deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error', error });
    }
  }
};

export default userGroupController;
