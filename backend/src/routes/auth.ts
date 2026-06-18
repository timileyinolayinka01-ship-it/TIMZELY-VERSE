import express, { Router, Request, Response } from 'express';
import { validateEmail, validatePassword } from '../utils/validators';

const router: Router = express.Router();

// Sign Up
router.post('/signup', async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;

    // Validation
    if (!validateEmail(email) || !validatePassword(password) || !name) {
      return res.status(400).json({ error: 'Invalid input' });
    }

    // TODO: Create user in database
    // TODO: Send verification email

    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Login
router.post('/login', async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // TODO: Verify credentials
    // TODO: Generate JWT token

    res.json({ message: 'Logged in successfully', token: '' });
  } catch (error) {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Google Login
router.post('/google-login', async (req: Request, res: Response) => {
  try {
    const { token } = req.body;

    // TODO: Verify Google token
    // TODO: Create or update user

    res.json({ message: 'Logged in successfully' });
  } catch (error) {
    res.status(401).json({ error: 'Authentication failed' });
  }
});

module.exports = router;
