import express from 'express';
import User from './userModel';
import usersRouter from './api/users';

const router = express.Router(); 
app.use('/api/users', usersRouter);

// Get all users
router.get('/', async (req, res) => {
    const users = await User.find();
    res.status(200).json(users);
});

// register(Create) User
router.post('/', async (req, res) => {
    await User(req.body).save();
    res.status(201).json({
        code: 201,
        msg: 'Successful created new user.',
    });
});
export default router;
