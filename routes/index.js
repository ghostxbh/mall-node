/**
 * Create by xbh 2019-05-29 集中路由管理
 */
var express = require('express');
var router = express.Router();

router.use('/role',require('./api/role'));
router.use('/permission',require('./api/permission'));

module.exports = router;
