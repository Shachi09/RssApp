const express = require('express');
// import express from "express";
import app from '../app.js'
const PORT = process.env.PORT || 8000;


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});