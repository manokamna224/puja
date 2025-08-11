import User from '../models/user.js';

export const registerUser = async (req, res) => {
  const { uid, name, email } = req.body;
  try {
    let user = await User.findOne({ uid });
    if (!user) {
      user = await User.create({ uid, name, email });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
};
