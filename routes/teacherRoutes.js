const express = require('express');
const router = express.Router();
const Teacher = require('../models/Teacher');

// 1. New Teacher Add Karne Ki API
router.post('/add', async (req, res) => {
  try {
    const newTeacher = new Teacher(req.body);
    const savedTeacher = await newTeacher.save();
    res.status(201).json({ message: 'Teacher added successfully!', teacher: savedTeacher });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 2. Sabhi Teachers Ki List Mangwane Ki API
router.get('/all', async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
