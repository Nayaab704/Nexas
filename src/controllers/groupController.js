import Group from '../model/Group.js';

// Create a new group
export const createGroup = async (req, res) => {
  const { name, description, category, keywords } = req.body;

  try {
    const existingGroup = await Group.findOne({ name });

    if (existingGroup) {
      return res.status(400).json({ message: 'A group with the same name already exists.' });
    }

    const group = new Group({
      name,
      description,
      category,
      keywords
    });

    const savedGroup = await group.save();

    res.status(201).json({ group: savedGroup });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// more controller methods to be added e.g., getGroup, updateGroup, deleteGroup, etc.
