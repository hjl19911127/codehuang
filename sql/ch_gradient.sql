/*
Navicat MySQL Data Transfer

Source Server         : qdm182656631.my3w.com
Source Server Version : 50148
Source Host           : qdm182656631.my3w.com:3306
Source Database       : qdm182656631_db

Target Server Type    : MYSQL
Target Server Version : 50148
File Encoding         : 65001

Date: 2017-03-07 14:53:51
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for ch_gradient
-- ----------------------------
DROP TABLE IF EXISTS `ch_gradient`;
CREATE TABLE `ch_gradient` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `sc` varchar(255) DEFAULT NULL,
  `ec` varchar(255) DEFAULT NULL,
  `style` text,
  `word` varchar(255) DEFAULT NULL,
  `emoji` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1621 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ch_gradient
-- ----------------------------
INSERT INTO `ch_gradient` VALUES ('1441', 'Warm', '#ff9a9e', '#fad0c4', 'background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)', 'Awesome!', '%EF%B8%8F');
INSERT INTO `ch_gradient` VALUES ('1442', 'Night', '#a18cd1', '#fbc2eb', 'background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)', 'Wohoo!', '%F0%9F%8C%88');
INSERT INTO `ch_gradient` VALUES ('1443', 'Spring', '#fad0c4', '#fad0c4', 'background-image: linear-gradient(to top, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%)', 'Done!', '%F0%9F%A4%98');
INSERT INTO `ch_gradient` VALUES ('1444', 'Juicy', '#ffecd2', '#fcb69f', 'background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%)', 'Done!', '%F0%9F%92%9D');
INSERT INTO `ch_gradient` VALUES ('1445', 'Young', null, null, 'background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%)', 'Success!', '%F0%9F%91%8A');
INSERT INTO `ch_gradient` VALUES ('1446', 'Lady', '#ff9a9e', '#fecfef', 'background-image: linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)', 'Wohoo!', '%F0%9F%8D%AC');
INSERT INTO `ch_gradient` VALUES ('1447', 'Sunny', '#f6d365', '#fda085', 'background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%)', 'Done!', '%F0%9F%8C%88');
INSERT INTO `ch_gradient` VALUES ('1448', 'Rainy', '#fbc2eb', '#a6c1ee', 'background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%)', 'Gotcha!', '%E2%9C%8C');
INSERT INTO `ch_gradient` VALUES ('1449', 'Frozen', '#fdcbf1', '#e6dee9', 'background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%)', 'Awesome!', '%F0%9F%8C%88');
INSERT INTO `ch_gradient` VALUES ('1450', 'Winter', '#a1c4fd', '#c2e9fb', 'background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)', 'Gotcha!', '%F0%9F%91%8C');
INSERT INTO `ch_gradient` VALUES ('1451', 'Dusty', '#d4fc79', '#96e6a1', 'background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)', 'Grats!', '%F0%9F%91%8A');
INSERT INTO `ch_gradient` VALUES ('1452', 'Tempting', '#84fab0', '#8fd3f4', 'background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%)', 'Done!', '%E2%98%95');
INSERT INTO `ch_gradient` VALUES ('1453', 'Heavy', '#cfd9df', '#e2ebf0', 'background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)', 'Awesome!', '%F0%9F%8D%AC');
INSERT INTO `ch_gradient` VALUES ('1454', 'Amy', '#a6c0fe', '#f68084', 'background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%)', 'Awesome!', '%EF%B8%8F');
INSERT INTO `ch_gradient` VALUES ('1455', 'Mean', '#fccb90', '#d57eeb', 'background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%)', 'Wohoo!', '%F0%9F%91%8A');
INSERT INTO `ch_gradient` VALUES ('1456', 'Deep', '#e0c3fc', '#8ec5fc', 'background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%)', 'Great Job!', '%F0%9F%92%A5');
INSERT INTO `ch_gradient` VALUES ('1457', 'Ripe', '#f093fb', '#f5576c', 'background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%)', 'Great Job!', '%F0%9F%A6%84');
INSERT INTO `ch_gradient` VALUES ('1458', 'Cloudy', '#fdfbfb', '#ebedee', 'background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)', 'Gotcha!', '%EF%B8%8F');
INSERT INTO `ch_gradient` VALUES ('1459', 'Malibu', '#4facfe', '#00f2fe', 'background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%)', 'Wohoo!', '%F0%9F%A4%98');
INSERT INTO `ch_gradient` VALUES ('1460', 'New', '#43e97b', '#38f9d7', 'background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%)', 'Bingo!', '%E2%9C%8C');
INSERT INTO `ch_gradient` VALUES ('1461', 'True', '#fa709a', '#fee140', 'background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%)', 'Success!', '%EF%B8%8F');
INSERT INTO `ch_gradient` VALUES ('1462', 'Morpheus', '#30cfd0', '#330867', 'background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%)', 'Awesome!', '%F0%9F%91%8C');
INSERT INTO `ch_gradient` VALUES ('1463', 'Rare', '#a8edea', '#fed6e3', 'background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%)', 'Gotcha!', '%F0%9F%94%A5');
INSERT INTO `ch_gradient` VALUES ('1464', 'Near', '#5ee7df', '#b490ca', 'background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%)', 'Grats!', '%F0%9F%91%8C');
INSERT INTO `ch_gradient` VALUES ('1465', 'Wild', '#d299c2', '#fef9d7', 'background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%)', 'Grats!', '%F0%9F%8F%87');
INSERT INTO `ch_gradient` VALUES ('1466', 'Saint', '#f5f7fa', '#c3cfe2', 'background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', 'Awesome!', '%F0%9F%92%AB');
INSERT INTO `ch_gradient` VALUES ('1467', 'Arielle\'s', null, null, 'background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)', 'Great Job!', '%F0%9F%8D%AC');
INSERT INTO `ch_gradient` VALUES ('1468', 'Plum', '#667eea', '#764ba2', 'background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 'Great Job!', '%F0%9F%8D%AC');
INSERT INTO `ch_gradient` VALUES ('1469', 'Everlasting', '#fdfcfb', '#e2d1c3', 'background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%)', 'Wohoo!', '%F0%9F%9A%80');
INSERT INTO `ch_gradient` VALUES ('1470', 'Happy', '#89f7fe', '#66a6ff', 'background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%)', 'Wohoo!', '%F0%9F%8F%8C');
INSERT INTO `ch_gradient` VALUES ('1471', 'Blessing', '#fddb92', '#d1fdff', 'background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%)', 'Great Job!', '%F0%9F%8D%BB');
INSERT INTO `ch_gradient` VALUES ('1472', 'Sharpeye', '#9890e3', '#b1f4cf', 'background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%)', 'Bingo!', '%EF%B8%8F');
INSERT INTO `ch_gradient` VALUES ('1473', 'Ladoga', '#ebc0fd', '#d9ded8', 'background-image: linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%)', 'Success!', '%F0%9F%A5%82');
INSERT INTO `ch_gradient` VALUES ('1474', 'Lemon', '#96fbc4', '#f9f586', 'background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%)', 'Gotcha!', '%F0%9F%91%8D');
INSERT INTO `ch_gradient` VALUES ('1475', 'Itmeo', '#2af598', '#009efd', 'background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%)', 'Done!', '%F0%9F%92%9D');
INSERT INTO `ch_gradient` VALUES ('1476', 'Zeus', '#cd9cf2', '#f6f3ff', 'background-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%)', 'Gotcha!', '%F0%9F%92%8E');
INSERT INTO `ch_gradient` VALUES ('1477', 'Old', null, null, 'background-image: linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%)', 'Bingo!', '%F0%9F%91%8D');
INSERT INTO `ch_gradient` VALUES ('1478', 'Star', null, null, 'background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%)', 'Bingo!', '%F0%9F%91%8C');
INSERT INTO `ch_gradient` VALUES ('1479', 'Deep', '#6a11cb', '#2575fc', 'background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%)', 'Success!', '%F0%9F%8E%82');
INSERT INTO `ch_gradient` VALUES ('1480', 'Coup', null, null, 'background-color: #DCD9D4; \n background-image: linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%); \n background-blend-mode: soft-light,screen', 'Success!', '%E2%9C%8A');
INSERT INTO `ch_gradient` VALUES ('1481', 'Happy', '#37ecba', '#72afd3', 'background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%)', 'Gotcha!', '%F0%9F%92%AB');
INSERT INTO `ch_gradient` VALUES ('1482', 'Awesome', '#ebbba7', '#cfc7f8', 'background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%)', 'Awesome!', '%F0%9F%A6%84');
INSERT INTO `ch_gradient` VALUES ('1483', 'New', '#fff1eb', '#ace0f9', 'background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%)', 'Gotcha!', '%EF%B8%8F');
INSERT INTO `ch_gradient` VALUES ('1484', 'Shy', null, null, 'background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%)', 'Grats!', '%F0%9F%A5%82');
INSERT INTO `ch_gradient` VALUES ('1485', 'Loon', null, null, 'background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; \n background-blend-mode: multiply,multiply', 'Awesome!', '%F0%9F%A6%84');
INSERT INTO `ch_gradient` VALUES ('1486', 'Mixed', '#c471f5', '#fa71cd', 'background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%)', 'Bingo!', '%E2%9C%8A');
INSERT INTO `ch_gradient` VALUES ('1487', 'Fly', '#48c6ef', '#6f86d6', 'background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%)', 'Grats!', '%F0%9F%92%AB');
INSERT INTO `ch_gradient` VALUES ('1488', 'Strong', null, null, 'background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%)', 'Success!', '%F0%9F%A5%82');
INSERT INTO `ch_gradient` VALUES ('1489', 'Fresh', '#feada6', '#f5efef', 'background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%)', 'Success!', '%F0%9F%92%97');
INSERT INTO `ch_gradient` VALUES ('1490', 'Snow', '#e6e9f0', '#eef1f5', 'background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%)', 'Bingo!', '%F0%9F%91%8A');
INSERT INTO `ch_gradient` VALUES ('1491', 'February', '#accbee', '#e7f0fd', 'background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%)', 'Awesome!', '%F0%9F%8F%87');
INSERT INTO `ch_gradient` VALUES ('1492', 'Kind', '#e9defa', '#fbfcdb', 'background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%)', 'Success!', '%F0%9F%92%8E');
INSERT INTO `ch_gradient` VALUES ('1493', 'Soft', '#c1dfc4', '#deecdd', 'background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%)', 'Great Job!', '%F0%9F%91%8C');
INSERT INTO `ch_gradient` VALUES ('1494', 'Grown', '#0ba360', '#3cba92', 'background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%)', 'Grats!', '%F0%9F%A4%98');
INSERT INTO `ch_gradient` VALUES ('1495', 'Sharp', '#00c6fb', '#005bea', 'background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%)', 'Wohoo!', '%E2%9C%8A');
INSERT INTO `ch_gradient` VALUES ('1496', 'Shady', '#74ebd5', '#9face6', 'background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%)', 'Success!', '%F0%9F%8F%87');
INSERT INTO `ch_gradient` VALUES ('1497', 'Dirty', '#6a85b6', '#bac8e0', 'background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%)', 'Done!', '%F0%9F%8D%AC');
INSERT INTO `ch_gradient` VALUES ('1498', 'Great', '#a3bded', '#6991c7', 'background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%)', 'Success!', '%F0%9F%92%97');
INSERT INTO `ch_gradient` VALUES ('1499', 'Teen', '#9795f0', '#fbc8d4', 'background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%)', 'Done!', '%F0%9F%8E%82');
INSERT INTO `ch_gradient` VALUES ('1500', 'Polite', '#a7a6cb', '#8989ba', 'background-image: linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%)', 'Grats!', '%F0%9F%91%8A');
INSERT INTO `ch_gradient` VALUES ('1501', 'Sweet', null, null, 'background-image: linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%)', 'Grats!', '%F0%9F%8E%82');
INSERT INTO `ch_gradient` VALUES ('1502', 'Wide', null, null, 'background-image: linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)', 'Great Job!', '%F0%9F%9A%80');
INSERT INTO `ch_gradient` VALUES ('1503', 'Soft', null, null, 'background-image: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%)', 'Done!', '%F0%9F%8D%B0');
INSERT INTO `ch_gradient` VALUES ('1504', 'Red', '#f43b47', '#453a94', 'background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%)', 'Wohoo!', '%F0%9F%8D%BB');
INSERT INTO `ch_gradient` VALUES ('1505', 'Burning', null, null, 'background-image: linear-gradient(to top, #4fb576 0%, #44c489 30%, #28a9ae 46%, #28a2b7 59%, #4c7788 71%, #6c4f63 86%, #432c39 100%)', 'Wohoo!', '%F0%9F%91%8A');
INSERT INTO `ch_gradient` VALUES ('1506', 'Night', '#0250c5', '#d43f8d', 'background-image: linear-gradient(to top, #0250c5 0%, #d43f8d 100%)', 'Success!', '%F0%9F%91%8C');
INSERT INTO `ch_gradient` VALUES ('1507', 'Sky', '#88d3ce', '#6e45e2', 'background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%)', 'Done!', '%F0%9F%91%8B');
INSERT INTO `ch_gradient` VALUES ('1508', 'Heaven', '#d9afd9', '#97d9e1', 'background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%)', 'Gotcha!', '%F0%9F%92%AB');
INSERT INTO `ch_gradient` VALUES ('1509', 'Purple', '#7028e4', '#e5b2ca', 'background-image: linear-gradient(to top, #7028e4 0%, #e5b2ca 100%)', 'Success!', '%F0%9F%8D%AD');
INSERT INTO `ch_gradient` VALUES ('1510', 'Aqua', '#13547a', '#80d0c7', 'background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%)', 'Success!', '%EF%B8%8F');
INSERT INTO `ch_gradient` VALUES ('1511', 'Above', null, null, 'background-image: linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%);\n background-blend-mode: normal, lighten, soft-light', 'Wohoo!', '%F0%9F%91%8F');
INSERT INTO `ch_gradient` VALUES ('1512', 'Spiky', null, null, 'background-image: linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%)', 'Awesome!', '%F0%9F%92%97');
INSERT INTO `ch_gradient` VALUES ('1513', 'Love', '#ff0844', '#ffb199', 'background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%)', 'Wohoo!', '%F0%9F%90%AF');
INSERT INTO `ch_gradient` VALUES ('1514', 'Sharp', null, null, 'background: #C9CCD3;\n background-image: linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%);\n background-blend-mode: lighten', 'Success!', '%F0%9F%90%AF');
INSERT INTO `ch_gradient` VALUES ('1515', 'Clean', '#93a5cf', '#e4efe9', 'background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)', 'Done!', '%F0%9F%8D%BB');
INSERT INTO `ch_gradient` VALUES ('1516', 'Premium', '#434343', '#000000', 'background-image: linear-gradient(to right, #434343 0%, black 100%)', 'Gotcha!', '%F0%9F%9A%80');
INSERT INTO `ch_gradient` VALUES ('1517', 'Cold', null, null, 'background-image: linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%)', 'Gotcha!', '%F0%9F%8D%B0');
INSERT INTO `ch_gradient` VALUES ('1518', 'Cochiti', '#93a5cf', '#e4efe9', 'background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%)', 'Bingo!', '%F0%9F%91%8B');
INSERT INTO `ch_gradient` VALUES ('1519', 'Summer', '#92fe9d', '#00c9ff', 'background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)', 'Success!', '%EF%B8%8F');
INSERT INTO `ch_gradient` VALUES ('1520', 'Passionate', '#ff758c', '#ff7eb3', 'background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%)', 'Gotcha!', '%F0%9F%91%8D');
INSERT INTO `ch_gradient` VALUES ('1521', 'Mountain', '#868f96', '#596164', 'background-image: linear-gradient(to right, #868f96 0%, #596164 100%)', 'Awesome!', '%F0%9F%8F%87');
INSERT INTO `ch_gradient` VALUES ('1522', 'Desert', '#c79081', '#dfa579', 'background-image: linear-gradient(to top, #c79081 0%, #dfa579 100%)', 'Success!', '%F0%9F%A4%98');
INSERT INTO `ch_gradient` VALUES ('1523', 'Jungle', '#8baaaa', '#ae8b9c', 'background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%)', 'Grats!', '%F0%9F%94%A5');
INSERT INTO `ch_gradient` VALUES ('1524', 'Phoenix', '#f83600', '#f9d423', 'background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%)', 'Bingo!', '%F0%9F%91%8C');
INSERT INTO `ch_gradient` VALUES ('1525', 'October', '#b721ff', '#21d4fd', 'background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%)', 'Grats!', '%E2%98%95');
INSERT INTO `ch_gradient` VALUES ('1526', 'Faraway', '#6e45e2', '#88d3ce', 'background-image: linear-gradient(-20deg, #6e45e2 0%, #88d3ce 100%)', 'Grats!', '%F0%9F%90%AF');
INSERT INTO `ch_gradient` VALUES ('1527', 'Alchemist', '#d558c8', '#24d292', 'background-image: linear-gradient(-20deg, #d558c8 0%, #24d292 100%)', 'Success!', '%F0%9F%8D%B0');
INSERT INTO `ch_gradient` VALUES ('1528', 'Over', '#abecd6', '#fbed96', 'background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%)', 'Done!', '%F0%9F%92%97');
INSERT INTO `ch_gradient` VALUES ('1529', 'Premium', null, null, 'background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%)', 'Grats!', '%E2%98%95');
INSERT INTO `ch_gradient` VALUES ('1530', 'Mars', '#5f72bd', '#9b23ea', 'background-image: linear-gradient(to top, #5f72bd 0%, #9b23ea 100%)', 'Success!', '%F0%9F%8D%BB');
INSERT INTO `ch_gradient` VALUES ('1531', 'Eternal', '#09203f', '#537895', 'background-image: linear-gradient(to top, #09203f 0%, #537895 100%)', 'Grats!', '%F0%9F%94%A5');
INSERT INTO `ch_gradient` VALUES ('1532', 'Japan', '#ddd6f3', '#faaca8', 'background-image: linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%)', 'Great Job!', '%F0%9F%92%AA');
INSERT INTO `ch_gradient` VALUES ('1533', 'Smiling', '#dcb0ed', '#99c99c', 'background-image: linear-gradient(-20deg, #dcb0ed 0%, #99c99c 100%)', 'Success!', '%F0%9F%92%8E');
INSERT INTO `ch_gradient` VALUES ('1534', 'Cloudy', '#f3e7e9', '#e3eeff', 'background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)', 'Done!', '%F0%9F%92%AA');
INSERT INTO `ch_gradient` VALUES ('1535', 'Big', '#c71d6f', '#d09693', 'background-image: linear-gradient(to top, #c71d6f 0%, #d09693 100%)', 'Bingo!', '%E2%98%95');
INSERT INTO `ch_gradient` VALUES ('1536', 'Healthy', '#96deda', '#50c9c3', 'background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%)', 'Wohoo!', '%E2%98%95');
INSERT INTO `ch_gradient` VALUES ('1537', 'Amour', '#f77062', '#fe5196', 'background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%)', 'Done!', '%F0%9F%92%97');
INSERT INTO `ch_gradient` VALUES ('1538', 'Risky', null, null, 'background-image: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%)', 'Gotcha!', '%F0%9F%8D%BB');
INSERT INTO `ch_gradient` VALUES ('1539', 'Strong', '#a8caba', '#5d4157', 'background-image: linear-gradient(to right, #a8caba 0%, #5d4157 100%)', 'Done!', '%F0%9F%8E%82');
INSERT INTO `ch_gradient` VALUES ('1540', 'Vicious', '#29323c', '#485563', 'background-image: linear-gradient(60deg, #29323c 0%, #485563 100%)', 'Done!', '%F0%9F%91%8B');
INSERT INTO `ch_gradient` VALUES ('1541', 'Palo', '#16a085', '#f4d03f', 'background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%)', 'Great Job!', '%EF%B8%8F');
INSERT INTO `ch_gradient` VALUES ('1542', 'Happy', '#ff5858', '#f09819', 'background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%)', 'Great Job!', '%F0%9F%8D%AC');
INSERT INTO `ch_gradient` VALUES ('1543', 'Midnight', '#2b5876', '#4e4376', 'background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)', 'Bingo!', '%E2%9C%8C');
INSERT INTO `ch_gradient` VALUES ('1544', 'Crystalline', '#00cdac', '#8ddad5', 'background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)', 'Bingo!', '%F0%9F%8C%88');
INSERT INTO `ch_gradient` VALUES ('1545', 'Raccoon', null, null, 'background: linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%);\n background-blend-mode: screen', 'Bingo!', '%F0%9F%91%8A');
INSERT INTO `ch_gradient` VALUES ('1546', 'Party', '#4481eb', '#04befe', 'background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%)', 'Great Job!', '%F0%9F%92%A5');
INSERT INTO `ch_gradient` VALUES ('1547', 'Confident', '#dad4ec', '#f3e7e9', 'background-image: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%)', 'Great Job!', '%F0%9F%8D%AC');
INSERT INTO `ch_gradient` VALUES ('1548', 'Le', '#874da2', '#c43a30', 'background-image: linear-gradient(45deg, #874da2 0%, #c43a30 100%)', 'Awesome!', '%E2%9C%8A');
INSERT INTO `ch_gradient` VALUES ('1549', 'River', '#4481eb', '#04befe', 'background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%)', 'Awesome!', '%F0%9F%8C%88');
INSERT INTO `ch_gradient` VALUES ('1550', 'Frozen', '#e8198b', '#c7eafd', 'background-image: linear-gradient(to top, #e8198b 0%, #c7eafd 100%)', 'Awesome!', '%E2%9C%8C');
INSERT INTO `ch_gradient` VALUES ('1551', 'Elegance', null, null, 'background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);\n background-blend-mode: screen', 'Great Job!', '%F0%9F%8C%88');
INSERT INTO `ch_gradient` VALUES ('1552', 'Child', '#f794a4', '#fdd6bd', 'background-image: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%)', 'Success!', '%F0%9F%92%97');
INSERT INTO `ch_gradient` VALUES ('1553', 'Flying', '#64b3f4', '#c2e59c', 'background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%)', 'Great Job!', '%F0%9F%92%97');
INSERT INTO `ch_gradient` VALUES ('1554', 'New', null, null, 'background-image: linear-gradient(to top, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%)', 'Done!', '%F0%9F%A5%82');
INSERT INTO `ch_gradient` VALUES ('1555', 'Hidden', '#0fd850', '#f9f047', 'background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%)', 'Bingo!', '%F0%9F%92%AB');
INSERT INTO `ch_gradient` VALUES ('1556', 'Above', null, null, 'background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%)', 'Wohoo!', '%F0%9F%8F%8C');
INSERT INTO `ch_gradient` VALUES ('1557', 'Nega', '#ee9ca7', '#ffdde1', 'background-image: linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%)', 'Bingo!', '%F0%9F%8D%B0');
INSERT INTO `ch_gradient` VALUES ('1558', 'Dense', null, null, 'background-image: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%)', 'Bingo!', '%F0%9F%8D%AC');
INSERT INTO `ch_gradient` VALUES ('1559', 'Chemic', null, null, 'background-color: #CDDCDC;\n background-image: radial-gradient(at 50% 100%, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(0,0,0,0.25) 100%);\n background-blend-mode: screen, overlay', 'Success!', '%F0%9F%92%9D');
INSERT INTO `ch_gradient` VALUES ('1560', 'Seashore', '#209cff', '#68e0cf', 'background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%)', 'Awesome!', '%F0%9F%92%AB');
INSERT INTO `ch_gradient` VALUES ('1561', 'Marble', '#bdc2e8', '#e6dee9', 'background-image: linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%)', 'Success!', '%F0%9F%9A%80');
INSERT INTO `ch_gradient` VALUES ('1562', 'Cheerful', '#e6b980', '#eacda3', 'background-image: linear-gradient(to top, #e6b980 0%, #eacda3 100%)', 'Gotcha!', '%F0%9F%8D%AD');
INSERT INTO `ch_gradient` VALUES ('1563', 'Night', '#1e3c72', '#2a5298', 'background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)', 'Done!', '%F0%9F%8D%AD');
INSERT INTO `ch_gradient` VALUES ('1564', 'Magic', null, null, 'background-image: linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%)', 'Grats!', '%EF%B8%8F');
INSERT INTO `ch_gradient` VALUES ('1565', 'Young', '#9be15d', '#00e3ae', 'background-image: linear-gradient(to top, #9be15d 0%, #00e3ae 100%)', 'Success!', '%EF%B8%8F');
INSERT INTO `ch_gradient` VALUES ('1566', 'Colorful', '#ed6ea0', '#ec8c69', 'background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)', 'Wohoo!', '%F0%9F%8D%BB');
INSERT INTO `ch_gradient` VALUES ('1567', 'Gentle', '#ffc3a0', '#ffafbd', 'background-image: linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%)', 'Bingo!', '%F0%9F%91%8C');
INSERT INTO `ch_gradient` VALUES ('1568', 'Plum', '#cc208e', '#6713d2', 'background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%)', 'Success!', '%F0%9F%A5%82');
INSERT INTO `ch_gradient` VALUES ('1569', 'Happy', '#b3ffab', '#12fff7', 'background-image: linear-gradient(to top, #b3ffab 0%, #12fff7 100%)', 'Awesome!', '%F0%9F%92%97');
INSERT INTO `ch_gradient` VALUES ('1570', 'Full', null, null, 'background: linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%);\n background-blend-mode: normal,color-burn', 'Great Job!', '%F0%9F%92%AB');
INSERT INTO `ch_gradient` VALUES ('1571', 'African', null, null, 'background-image: linear-gradient(to top, #65bd60 0%, #5ac1a8 25%, #3ec6ed 50%, #b7ddb7 75%, #fef381 100%)', 'Awesome!', '%F0%9F%92%9D');
INSERT INTO `ch_gradient` VALUES ('1572', 'Solid', '#243949', '#517fa4', 'background-image: linear-gradient(to right, #243949 0%, #517fa4 100%)', 'Done!', '%F0%9F%91%8C');
INSERT INTO `ch_gradient` VALUES ('1573', 'Orange', '#fc6076', '#ff9a44', 'background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%)', 'Grats!', '%EF%B8%8F');
INSERT INTO `ch_gradient` VALUES ('1574', 'Glass', '#dfe9f3', '#ffffff', 'background-image: linear-gradient(to top, #dfe9f3 0%, white 100%)', 'Grats!', '%F0%9F%A6%84');
INSERT INTO `ch_gradient` VALUES ('1575', 'Slick', null, null, 'background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);\n background-blend-mode: multiply', 'Grats!', '%F0%9F%91%8C');
INSERT INTO `ch_gradient` VALUES ('1576', 'North', '#00dbde', '#fc00ff', 'background-image: linear-gradient(to right, #00dbde 0%, #fc00ff 100%)', 'Gotcha!', '%F0%9F%94%A5');
INSERT INTO `ch_gradient` VALUES ('1577', 'Fruit', '#f9d423', '#ff4e50', 'background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%)', 'Gotcha!', '%F0%9F%A4%98');
INSERT INTO `ch_gradient` VALUES ('1578', 'Millennium', '#50cc7f', '#f5d100', 'background-image: linear-gradient(to top, #50cc7f 0%, #f5d100 100%)', 'Grats!', '%F0%9F%A6%84');
INSERT INTO `ch_gradient` VALUES ('1579', 'High', '#0acffe', '#495aff', 'background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%)', 'Done!', '%F0%9F%92%9D');
INSERT INTO `ch_gradient` VALUES ('1580', 'Mole', '#616161', '#9bc5c3', 'background-image: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%)', 'Grats!', '%F0%9F%A6%84');
INSERT INTO `ch_gradient` VALUES ('1581', 'Earl', null, null, 'background-color: #E4E4E1;\n background-image: radial-gradient(at top center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.03) 100%), linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%);\n 	background-blend-mode: normal, multiply', 'Bingo!', '%F0%9F%8D%BB');
INSERT INTO `ch_gradient` VALUES ('1582', 'Space', null, null, 'background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%)', 'Gotcha!', '%F0%9F%A4%98');
INSERT INTO `ch_gradient` VALUES ('1583', 'Forest', '#df89b5', '#bfd9fe', 'background-image: linear-gradient(to top, #df89b5 0%, #bfd9fe 100%)', 'Wohoo!', '%E2%98%95');
INSERT INTO `ch_gradient` VALUES ('1584', 'Royal', '#ed6ea0', '#ec8c69', 'background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%)', 'Awesome!', '%F0%9F%8E%82');
INSERT INTO `ch_gradient` VALUES ('1585', 'Rich', '#d7d2cc', '#304352', 'background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%)', 'Bingo!', '%F0%9F%8D%BB');
INSERT INTO `ch_gradient` VALUES ('1586', 'Juicy', '#e14fad', '#f9d423', 'background-image: linear-gradient(to top, #e14fad 0%, #f9d423 100%)', 'Grats!', '%F0%9F%8D%B0');
INSERT INTO `ch_gradient` VALUES ('1587', 'Smart', '#b224ef', '#7579ff', 'background-image: linear-gradient(to top, #b224ef 0%, #7579ff 100%)', 'Grats!', '%F0%9F%A5%82');
INSERT INTO `ch_gradient` VALUES ('1588', 'Sand', '#c1c161', '#d4d4b1', 'background-image: linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%)', 'Great Job!', '%EF%B8%8F');
INSERT INTO `ch_gradient` VALUES ('1589', 'Norse', '#ec77ab', '#7873f5', 'background-image: linear-gradient(to right, #ec77ab 0%, #7873f5 100%)', 'Wohoo!', '%F0%9F%91%8C');
INSERT INTO `ch_gradient` VALUES ('1590', 'Aqua', '#007adf', '#00ecbc', 'background-image: linear-gradient(to top, #007adf 0%, #00ecbc 100%)', 'Awesome!', '%F0%9F%8F%87');
INSERT INTO `ch_gradient` VALUES ('1591', 'Sun', '#20E2D7', '#F9FEA5', 'background-image: linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%)', 'Success!', '%F0%9F%90%AF');
INSERT INTO `ch_gradient` VALUES ('1592', 'Sea', null, null, 'background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%)', 'Success!', '%F0%9F%8D%BB');
INSERT INTO `ch_gradient` VALUES ('1593', 'Black', null, null, 'background-image: linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%)', 'Done!', '%F0%9F%91%8C');
INSERT INTO `ch_gradient` VALUES ('1594', 'Grass', null, null, 'background-image: linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%)', 'Great Job!', '%F0%9F%A5%82');
INSERT INTO `ch_gradient` VALUES ('1595', 'Landing', null, null, 'background-image: linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%)', 'Done!', '%F0%9F%A6%84');
INSERT INTO `ch_gradient` VALUES ('1596', 'Witch', '#A8BFFF', '#884D80', 'background-image: linear-gradient(-225deg, #A8BFFF 0%, #884D80 100%)', 'Great Job!', '%F0%9F%8D%AC');
INSERT INTO `ch_gradient` VALUES ('1597', 'Sleepless', null, null, 'background-image: linear-gradient(-225deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%)', 'Bingo!', '%F0%9F%8F%8C');
INSERT INTO `ch_gradient` VALUES ('1598', 'Angel', null, null, 'background-image: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%)', 'Bingo!', '%F0%9F%91%8C');
INSERT INTO `ch_gradient` VALUES ('1599', 'Crystal', null, null, 'background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%)', 'Awesome!', '%F0%9F%92%AB');
INSERT INTO `ch_gradient` VALUES ('1600', 'Soft', '#B6CEE8', '#F578DC', 'background-image: linear-gradient(-225deg, #B6CEE8 0%, #F578DC 100%)', 'Wohoo!', '%F0%9F%90%AF');
INSERT INTO `ch_gradient` VALUES ('1601', 'Salt', '#FFFEFF', '#D7FFFE', 'background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%)', 'Great Job!', '%F0%9F%8D%AD');
INSERT INTO `ch_gradient` VALUES ('1602', 'Perfect', '#E3FDF5', '#FFE6FA', 'background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%)', 'Bingo!', '%F0%9F%8E%82');
INSERT INTO `ch_gradient` VALUES ('1603', 'Fresh', '#7DE2FC', '#B9B6E5', 'background-image: linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%)', 'Great Job!', '%F0%9F%8F%87');
INSERT INTO `ch_gradient` VALUES ('1604', 'Strict', '#CBBACC', '#2580B3', 'background-image: linear-gradient(-225deg, #CBBACC 0%, #2580B3 100%)', 'Great Job!', '%F0%9F%94%A5');
INSERT INTO `ch_gradient` VALUES ('1605', 'Morning', '#B7F8DB', '#50A7C2', 'background-image: linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%)', 'Wohoo!', '%EF%B8%8F');
INSERT INTO `ch_gradient` VALUES ('1606', 'Deep', null, null, 'background-image: linear-gradient(-225deg, #7085B6 0%, #87A7D9 50%, #DEF3F8 100%)', 'Done!', '%E2%9C%8C');
INSERT INTO `ch_gradient` VALUES ('1607', 'Sea', null, null, 'background-image: linear-gradient(-225deg, #77FFD2 0%, #6297DB 48%, #1EECFF 100%)', 'Gotcha!', '%E2%9C%8C');
INSERT INTO `ch_gradient` VALUES ('1608', 'Night', null, null, 'background-image: linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%)', 'Grats!', '%F0%9F%91%8D');
INSERT INTO `ch_gradient` VALUES ('1609', 'Supreme', null, null, 'background-image: linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%)', 'Great Job!', '%F0%9F%91%8C');
INSERT INTO `ch_gradient` VALUES ('1610', 'Light', null, null, 'background-image: linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%)', 'Gotcha!', '%E2%98%95');
INSERT INTO `ch_gradient` VALUES ('1611', 'Mind', null, null, 'background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%)', 'Done!', '%F0%9F%8F%8C');
INSERT INTO `ch_gradient` VALUES ('1612', 'Lily', '#007adf', '#00ecbc', 'background-image: linear-gradient(-225deg, #65379B 0%, #886AEA 53%, #6457C6 100%)', 'Done!', '%F0%9F%A6%84');
INSERT INTO `ch_gradient` VALUES ('1613', 'Sugar', null, null, 'background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)', 'Wohoo!', '%F0%9F%8E%82');
INSERT INTO `ch_gradient` VALUES ('1614', 'Sweet', null, null, 'background-image: linear-gradient(-225deg, #7742B2 0%, #F180FF 52%, #FD8BD9 100%)', 'Great Job!', '%F0%9F%91%8D');
INSERT INTO `ch_gradient` VALUES ('1615', 'Magic', null, null, 'background-image: linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%)', 'Great Job!', '%F0%9F%8D%AD');
INSERT INTO `ch_gradient` VALUES ('1616', 'Teen', null, null, 'background-image: linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%)', 'Wohoo!', '%F0%9F%91%8D');
INSERT INTO `ch_gradient` VALUES ('1617', 'Frozen', null, null, 'background-image: linear-gradient(-225deg, #FF057C 0%, #7C64D5 48%, #4CC3FF 100%)', 'Gotcha!', '%F0%9F%91%8B');
INSERT INTO `ch_gradient` VALUES ('1618', 'Gagarin', null, null, 'background-image: linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%)', 'Done!', '%F0%9F%A4%98');
INSERT INTO `ch_gradient` VALUES ('1619', 'Fabled', null, null, 'background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%)', 'Great Job!', '%F0%9F%91%8F');
INSERT INTO `ch_gradient` VALUES ('1620', 'Perfect', null, null, 'background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%)', 'Gotcha!', '%EF%B8%8F');
