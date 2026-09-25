const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

// 1. New Student Add Karne Ki API
router.post('/add', async (req, res) => {
  try {
    const newStudent = new Student(req.body);
    const savedStudent = await newStudent.save();
    res.status(201).json({ message: 'Student added successfully!', student: savedStudent });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// 2. Sabhi Students Ki List Mangwane Ki API
router.get('/all', async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
