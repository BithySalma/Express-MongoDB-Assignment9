const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const adminController = require('../Controllers/adminController');
const subAdminController = require('../Controllers/subAdminController');
const postController = require('../Controllers/postController');

// User routes
router.get('/users/create', userController.create);
router.get('/users/read', userController.read);
router.get('/users/delete', userController.delete);
router.get('/users/update', userController.update);

// Admin routes
router.get('/admin/create', adminController.create);
router.get('/admin/read', adminController.read);
router.get('/admin/delete', adminController.delete);
router.get('/admin/update', adminController.update);

// Sub-Admin routes
router.get('/subadmin/create', subAdminController.create);
router.get('/subadmin/read', subAdminController.read);
router.get('/subadmin/delete', subAdminController.delete);
router.get('/subadmin/update', subAdminController.update);

// Post routes
router.get('/posts/create', postController.create);
router.get('/posts/read', postController.read);
router.get('/posts/delete', postController.delete);
router.get('/posts/update', postController.update);

module.exports = router;