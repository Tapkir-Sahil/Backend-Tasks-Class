const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');

// REGISTER USER
router.post('/register', async (req, res) => {
  try {
    const { userName, userEmail, userPhone, userPassword } = req.body;
    const user = new User(req.body);
    const savedUser = await user.save();
    return res.json({
      success: true,
      message: 'data inserted',
      savedUser: savedUser
    });
  } catch (err) {
    res.json({ error: err.message });
  }
});


// GET ALL USERS
router.get('/', async (req, res) => {
  const users = await User.find();
  res.json(users);
});


// DELETE USER
router.delete('/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ 
    success: true,
    message: "User deleted",
    User: User
   });
});

module.exports = router;
