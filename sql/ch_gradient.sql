/*
Navicat MariaDB Data Transfer

Source Server         : 127.0.0.1
Source Server Version : 100119
Source Host           : 127.0.0.1:3306
Source Database       : codehuang

Target Server Type    : MariaDB
Target Server Version : 100119
File Encoding         : 65001

Date: 2017-03-04 20:33:47
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
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=181 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ch_gradient
-- ----------------------------
INSERT INTO `ch_gradient` VALUES ('1', 'Warm Flame', '#ff9a9e', '#fad0c4', 'background-image: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%);');
INSERT INTO `ch_gradient` VALUES ('2', 'Night Fade', '#a18cd1', '#fbc2eb', 'background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);');
INSERT INTO `ch_gradient` VALUES ('3', 'Spring Warmth', '#fad0c4', '#fad0c4', 'background-image: linear-gradient(to top, #fad0c4 0%, #fad0c4 1%, #ffd1ff 100%);');
INSERT INTO `ch_gradient` VALUES ('4', 'Juicy Peach', '#ffecd2', '#fcb69f', 'background-image: linear-gradient(to right, #ffecd2 0%, #fcb69f 100%);');
INSERT INTO `ch_gradient` VALUES ('5', 'Young Passion', null, null, 'background-image: linear-gradient(to right, #ff8177 0%, #ff867a 0%, #ff8c7f 21%, #f99185 52%, #cf556c 78%, #b12a5b 100%);');
INSERT INTO `ch_gradient` VALUES ('6', 'Lady Lips', '#ff9a9e', '#fecfef', 'background-image: linear-gradient(to top, #ff9a9e 0%, #fecfef 99%, #fecfef 100%);');
INSERT INTO `ch_gradient` VALUES ('7', 'Sunny Morning', '#f6d365', '#fda085', 'background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);');
INSERT INTO `ch_gradient` VALUES ('8', 'Rainy Ashville', '#fbc2eb', '#a6c1ee', 'background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);');
INSERT INTO `ch_gradient` VALUES ('9', 'Frozen Dreams', '#fdcbf1', '#e6dee9', 'background-image: linear-gradient(to top, #fdcbf1 0%, #fdcbf1 1%, #e6dee9 100%);');
INSERT INTO `ch_gradient` VALUES ('10', 'Winter Neva', '#a1c4fd', '#c2e9fb', 'background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);');
INSERT INTO `ch_gradient` VALUES ('11', 'Dusty Grass', '#d4fc79', '#96e6a1', 'background-image: linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%);');
INSERT INTO `ch_gradient` VALUES ('12', 'Tempting Azure', '#84fab0', '#8fd3f4', 'background-image: linear-gradient(120deg, #84fab0 0%, #8fd3f4 100%);');
INSERT INTO `ch_gradient` VALUES ('13', 'Heavy Rain', '#cfd9df', '#e2ebf0', 'background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);');
INSERT INTO `ch_gradient` VALUES ('14', 'Amy Crisp', '#a6c0fe', '#f68084', 'background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);');
INSERT INTO `ch_gradient` VALUES ('15', 'Mean Fruit', '#fccb90', '#d57eeb', 'background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);');
INSERT INTO `ch_gradient` VALUES ('16', 'Deep Blue', '#e0c3fc', '#8ec5fc', 'background-image: linear-gradient(120deg, #e0c3fc 0%, #8ec5fc 100%);');
INSERT INTO `ch_gradient` VALUES ('17', 'Ripe Malinka', '#f093fb', '#f5576c', 'background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);');
INSERT INTO `ch_gradient` VALUES ('18', 'Cloudy Knoxville', '#fdfbfb', '#ebedee', 'background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);');
INSERT INTO `ch_gradient` VALUES ('19', 'Malibu Beach', '#4facfe', '#00f2fe', 'background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);');
INSERT INTO `ch_gradient` VALUES ('20', 'New Life', '#43e97b', '#38f9d7', 'background-image: linear-gradient(to right, #43e97b 0%, #38f9d7 100%);');
INSERT INTO `ch_gradient` VALUES ('21', 'True Sunset', '#fa709a', '#fee140', 'background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);');
INSERT INTO `ch_gradient` VALUES ('22', 'Morpheus Den', '#30cfd0', '#330867', 'background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);');
INSERT INTO `ch_gradient` VALUES ('23', 'Rare Wind', '#a8edea', '#fed6e3', 'background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);');
INSERT INTO `ch_gradient` VALUES ('24', 'Near Moon', '#5ee7df', '#b490ca', 'background-image: linear-gradient(to top, #5ee7df 0%, #b490ca 100%);');
INSERT INTO `ch_gradient` VALUES ('25', 'Wild Apple', '#d299c2', '#fef9d7', 'background-image: linear-gradient(to top, #d299c2 0%, #fef9d7 100%);');
INSERT INTO `ch_gradient` VALUES ('26', 'Saint Petersburg', '#f5f7fa', '#c3cfe2', 'background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);');
INSERT INTO `ch_gradient` VALUES ('27', 'Arielle\'s Smile', null, null, 'background-image: radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%);');
INSERT INTO `ch_gradient` VALUES ('28', 'Plum Plate', '#667eea', '#764ba2', 'background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);');
INSERT INTO `ch_gradient` VALUES ('29', 'Everlasting Sky', '#fdfcfb', '#e2d1c3', 'background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);');
INSERT INTO `ch_gradient` VALUES ('30', 'Happy Fisher', '#89f7fe', '#66a6ff', 'background-image: linear-gradient(120deg, #89f7fe 0%, #66a6ff 100%);');
INSERT INTO `ch_gradient` VALUES ('31', 'Blessing', '#fddb92', '#d1fdff', 'background-image: linear-gradient(to top, #fddb92 0%, #d1fdff 100%);');
INSERT INTO `ch_gradient` VALUES ('32', 'Sharpeye Eagle', '#9890e3', '#b1f4cf', 'background-image: linear-gradient(to top, #9890e3 0%, #b1f4cf 100%);');
INSERT INTO `ch_gradient` VALUES ('33', 'Ladoga Bottom', '#ebc0fd', '#d9ded8', 'background-image: linear-gradient(to top, #ebc0fd 0%, #d9ded8 100%);');
INSERT INTO `ch_gradient` VALUES ('34', 'Lemon Gate', '#96fbc4', '#f9f586', 'background-image: linear-gradient(to top, #96fbc4 0%, #f9f586 100%);');
INSERT INTO `ch_gradient` VALUES ('35', 'Itmeo Branding', '#2af598', '#009efd', 'background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);');
INSERT INTO `ch_gradient` VALUES ('36', 'Zeus Miracle', '#cd9cf2', '#f6f3ff', 'background-image: linear-gradient(to top, #cd9cf2 0%, #f6f3ff 100%);');
INSERT INTO `ch_gradient` VALUES ('37', 'Old Hat', null, null, 'background-image: linear-gradient(to right, #e4afcb 0%, #b8cbb8 0%, #b8cbb8 0%, #e2c58b 30%, #c2ce9c 64%, #7edbdc 100%);');
INSERT INTO `ch_gradient` VALUES ('38', 'Star Wine', null, null, 'background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);');
INSERT INTO `ch_gradient` VALUES ('39', 'Deep Blue', '#6a11cb', '#2575fc', 'background-image: linear-gradient(to right, #6a11cb 0%, #2575fc 100%);');
INSERT INTO `ch_gradient` VALUES ('40', 'Coup de Grace', null, null, 'background-color: #DCD9D4; \n background-image: linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), radial-gradient(at 50% 0%, rgba(255,255,255,0.10) 0%, rgba(0,0,0,0.50) 50%); \n background-blend-mode: soft-light,screen;');
INSERT INTO `ch_gradient` VALUES ('41', 'Happy Acid', '#37ecba', '#72afd3', 'background-image: linear-gradient(to top, #37ecba 0%, #72afd3 100%);');
INSERT INTO `ch_gradient` VALUES ('42', 'Awesome Pine', '#ebbba7', '#cfc7f8', 'background-image: linear-gradient(to top, #ebbba7 0%, #cfc7f8 100%);');
INSERT INTO `ch_gradient` VALUES ('43', 'New York', '#fff1eb', '#ace0f9', 'background-image: linear-gradient(to top, #fff1eb 0%, #ace0f9 100%);');
INSERT INTO `ch_gradient` VALUES ('44', 'Shy Rainbow', null, null, 'background-image: linear-gradient(to right, #eea2a2 0%, #bbc1bf 19%, #57c6e1 42%, #b49fda 79%, #7ac5d8 100%);');
INSERT INTO `ch_gradient` VALUES ('45', 'Loon Crest', null, null, 'background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898; \n background-blend-mode: multiply,multiply;');
INSERT INTO `ch_gradient` VALUES ('46', 'Mixed Hopes', '#c471f5', '#fa71cd', 'background-image: linear-gradient(to top, #c471f5 0%, #fa71cd 100%);');
INSERT INTO `ch_gradient` VALUES ('47', 'Fly High', '#48c6ef', '#6f86d6', 'background-image: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);');
INSERT INTO `ch_gradient` VALUES ('48', 'Strong Bliss', null, null, 'background-image: linear-gradient(to right, #f78ca0 0%, #f9748f 19%, #fd868c 60%, #fe9a8b 100%);');
INSERT INTO `ch_gradient` VALUES ('49', 'Fresh Milk', '#feada6', '#f5efef', 'background-image: linear-gradient(to top, #feada6 0%, #f5efef 100%);');
INSERT INTO `ch_gradient` VALUES ('50', 'Snow Again', '#e6e9f0', '#eef1f5', 'background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);');
INSERT INTO `ch_gradient` VALUES ('51', 'February Ink', '#accbee', '#e7f0fd', 'background-image: linear-gradient(to top, #accbee 0%, #e7f0fd 100%);');
INSERT INTO `ch_gradient` VALUES ('52', 'Kind Steel', '#e9defa', '#fbfcdb', 'background-image: linear-gradient(-20deg, #e9defa 0%, #fbfcdb 100%);');
INSERT INTO `ch_gradient` VALUES ('53', 'Soft Grass', '#c1dfc4', '#deecdd', 'background-image: linear-gradient(to top, #c1dfc4 0%, #deecdd 100%);');
INSERT INTO `ch_gradient` VALUES ('54', 'Grown Early', '#0ba360', '#3cba92', 'background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%);');
INSERT INTO `ch_gradient` VALUES ('55', 'Sharp Blues', '#00c6fb', '#005bea', 'background-image: linear-gradient(to top, #00c6fb 0%, #005bea 100%);');
INSERT INTO `ch_gradient` VALUES ('56', 'Shady Water', '#74ebd5', '#9face6', 'background-image: linear-gradient(to right, #74ebd5 0%, #9face6 100%);');
INSERT INTO `ch_gradient` VALUES ('57', 'Dirty Beauty', '#6a85b6', '#bac8e0', 'background-image: linear-gradient(to top, #6a85b6 0%, #bac8e0 100%);');
INSERT INTO `ch_gradient` VALUES ('58', 'Great Whale', '#a3bded', '#6991c7', 'background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);');
INSERT INTO `ch_gradient` VALUES ('59', 'Teen Notebook', '#9795f0', '#fbc8d4', 'background-image: linear-gradient(to top, #9795f0 0%, #fbc8d4 100%);');
INSERT INTO `ch_gradient` VALUES ('60', 'Polite Rumors', '#a7a6cb', '#8989ba', 'background-image: linear-gradient(to top, #a7a6cb 0%, #8989ba 52%, #8989ba 100%);');
INSERT INTO `ch_gradient` VALUES ('61', 'Sweet Period', null, null, 'background-image: linear-gradient(to top, #3f51b1 0%, #5a55ae 13%, #7b5fac 25%, #8f6aae 38%, #a86aa4 50%, #cc6b8e 62%, #f18271 75%, #f3a469 87%, #f7c978 100%);');
INSERT INTO `ch_gradient` VALUES ('62', 'Wide Matrix', null, null, 'background-image: linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%);');
INSERT INTO `ch_gradient` VALUES ('63', 'Soft Cherish', null, null, 'background-image: linear-gradient(to top, #dbdcd7 0%, #dddcd7 24%, #e2c9cc 30%, #e7627d 46%, #b8235a 59%, #801357 71%, #3d1635 84%, #1c1a27 100%);');
INSERT INTO `ch_gradient` VALUES ('64', 'Red Salvation', '#f43b47', '#453a94', 'background-image: linear-gradient(to top, #f43b47 0%, #453a94 100%);');
INSERT INTO `ch_gradient` VALUES ('65', 'Burning Spring', null, null, 'background-image: linear-gradient(to top, #4fb576 0%, #44c489 30%, #28a9ae 46%, #28a2b7 59%, #4c7788 71%, #6c4f63 86%, #432c39 100%);');
INSERT INTO `ch_gradient` VALUES ('66', 'Night Party', '#0250c5', '#d43f8d', 'background-image: linear-gradient(to top, #0250c5 0%, #d43f8d 100%);');
INSERT INTO `ch_gradient` VALUES ('67', 'Sky Glider', '#88d3ce', '#6e45e2', 'background-image: linear-gradient(to top, #88d3ce 0%, #6e45e2 100%);');
INSERT INTO `ch_gradient` VALUES ('68', 'Heaven Peach', '#d9afd9', '#97d9e1', 'background-image: linear-gradient(to top, #d9afd9 0%, #97d9e1 100%);');
INSERT INTO `ch_gradient` VALUES ('69', 'Purple Division', '#7028e4', '#e5b2ca', 'background-image: linear-gradient(to top, #7028e4 0%, #e5b2ca 100%);');
INSERT INTO `ch_gradient` VALUES ('70', 'Aqua Splash', '#13547a', '#80d0c7', 'background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);');
INSERT INTO `ch_gradient` VALUES ('71', 'Above Clouds', null, null, 'background-image: linear-gradient(to left, #BDBBBE 0%, #9D9EA3 100%), radial-gradient(88% 271%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 254, 254, 0.25) 1%, rgba(0, 0, 0, 0.25) 100%), radial-gradient(50% 100%, rgba(255, 255, 255, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%);\n background-blend-mode: normal, lighten, soft-light;');
INSERT INTO `ch_gradient` VALUES ('72', 'Spiky Naga', null, null, 'background-image: linear-gradient(to top, #505285 0%, #585e92 12%, #65689f 25%, #7474b0 37%, #7e7ebb 50%, #8389c7 62%, #9795d4 75%, #a2a1dc 87%, #b5aee4 100%);');
INSERT INTO `ch_gradient` VALUES ('73', 'Love Kiss', '#ff0844', '#ffb199', 'background-image: linear-gradient(to top, #ff0844 0%, #ffb199 100%);');
INSERT INTO `ch_gradient` VALUES ('74', 'Sharp Glass', null, null, 'background: #C9CCD3;\n background-image: linear-gradient(-180deg, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%);\n background-blend-mode: lighten;');
INSERT INTO `ch_gradient` VALUES ('75', 'Clean Mirror', '#93a5cf', '#e4efe9', 'background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);');
INSERT INTO `ch_gradient` VALUES ('76', 'Premium Dark', '#434343', '#000000', 'background-image: linear-gradient(to right, #434343 0%, black 100%);');
INSERT INTO `ch_gradient` VALUES ('77', 'Cold Evening', null, null, 'background-image: linear-gradient(to top, #0c3483 0%, #a2b6df 100%, #6b8cce 100%, #a2b6df 100%);');
INSERT INTO `ch_gradient` VALUES ('78', 'Cochiti Lake', '#93a5cf', '#e4efe9', 'background-image: linear-gradient(45deg, #93a5cf 0%, #e4efe9 100%);');
INSERT INTO `ch_gradient` VALUES ('79', 'Summer Games', '#92fe9d', '#00c9ff', 'background-image: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);');
INSERT INTO `ch_gradient` VALUES ('80', 'Passionate Bed', '#ff758c', '#ff7eb3', 'background-image: linear-gradient(to right, #ff758c 0%, #ff7eb3 100%);');
INSERT INTO `ch_gradient` VALUES ('81', 'Mountain Rock', '#868f96', '#596164', 'background-image: linear-gradient(to right, #868f96 0%, #596164 100%);');
INSERT INTO `ch_gradient` VALUES ('82', 'Desert Hump', '#c79081', '#dfa579', 'background-image: linear-gradient(to top, #c79081 0%, #dfa579 100%);');
INSERT INTO `ch_gradient` VALUES ('83', 'Jungle Day', '#8baaaa', '#ae8b9c', 'background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);');
INSERT INTO `ch_gradient` VALUES ('84', 'Phoenix Start', '#f83600', '#f9d423', 'background-image: linear-gradient(to right, #f83600 0%, #f9d423 100%);');
INSERT INTO `ch_gradient` VALUES ('85', 'October Silence', '#b721ff', '#21d4fd', 'background-image: linear-gradient(-20deg, #b721ff 0%, #21d4fd 100%);');
INSERT INTO `ch_gradient` VALUES ('86', 'Faraway River', '#6e45e2', '#88d3ce', 'background-image: linear-gradient(-20deg, #6e45e2 0%, #88d3ce 100%);');
INSERT INTO `ch_gradient` VALUES ('87', 'Alchemist Lab', '#d558c8', '#24d292', 'background-image: linear-gradient(-20deg, #d558c8 0%, #24d292 100%);');
INSERT INTO `ch_gradient` VALUES ('88', 'Over Sun', '#abecd6', '#fbed96', 'background-image: linear-gradient(60deg, #abecd6 0%, #fbed96 100%);');
INSERT INTO `ch_gradient` VALUES ('89', 'Premium White', null, null, 'background-image: linear-gradient(to top, #d5d4d0 0%, #d5d4d0 1%, #eeeeec 31%, #efeeec 75%, #e9e9e7 100%);');
INSERT INTO `ch_gradient` VALUES ('90', 'Mars Party', '#5f72bd', '#9b23ea', 'background-image: linear-gradient(to top, #5f72bd 0%, #9b23ea 100%);');
INSERT INTO `ch_gradient` VALUES ('91', 'Eternal Constance', '#09203f', '#537895', 'background-image: linear-gradient(to top, #09203f 0%, #537895 100%);');
INSERT INTO `ch_gradient` VALUES ('92', 'Japan Blush', '#ddd6f3', '#faaca8', 'background-image: linear-gradient(-20deg, #ddd6f3 0%, #faaca8 100%, #faaca8 100%);');
INSERT INTO `ch_gradient` VALUES ('93', 'Smiling Rain', '#dcb0ed', '#99c99c', 'background-image: linear-gradient(-20deg, #dcb0ed 0%, #99c99c 100%);');
INSERT INTO `ch_gradient` VALUES ('94', 'Cloudy Apple', '#f3e7e9', '#e3eeff', 'background-image: linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%);');
INSERT INTO `ch_gradient` VALUES ('95', 'Big Mango', '#c71d6f', '#d09693', 'background-image: linear-gradient(to top, #c71d6f 0%, #d09693 100%);');
INSERT INTO `ch_gradient` VALUES ('96', 'Healthy Water', '#96deda', '#50c9c3', 'background-image: linear-gradient(60deg, #96deda 0%, #50c9c3 100%);');
INSERT INTO `ch_gradient` VALUES ('97', 'Amour Amour', '#f77062', '#fe5196', 'background-image: linear-gradient(to top, #f77062 0%, #fe5196 100%);');
INSERT INTO `ch_gradient` VALUES ('98', 'Risky Concrete', null, null, 'background-image: linear-gradient(to top, #c4c5c7 0%, #dcdddf 52%, #ebebeb 100%);');
INSERT INTO `ch_gradient` VALUES ('99', 'Strong Stick', '#a8caba', '#5d4157', 'background-image: linear-gradient(to right, #a8caba 0%, #5d4157 100%);');
INSERT INTO `ch_gradient` VALUES ('100', 'Vicious Stance', '#29323c', '#485563', 'background-image: linear-gradient(60deg, #29323c 0%, #485563 100%);');
INSERT INTO `ch_gradient` VALUES ('101', 'Palo Alto', '#16a085', '#f4d03f', 'background-image: linear-gradient(-60deg, #16a085 0%, #f4d03f 100%);');
INSERT INTO `ch_gradient` VALUES ('102', 'Happy Memories', '#ff5858', '#f09819', 'background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%);');
INSERT INTO `ch_gradient` VALUES ('103', 'Midnight Bloom', '#2b5876', '#4e4376', 'background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);');
INSERT INTO `ch_gradient` VALUES ('104', 'Crystalline', '#00cdac', '#8ddad5', 'background-image: linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%);');
INSERT INTO `ch_gradient` VALUES ('105', 'Raccoon Back', null, null, 'background: linear-gradient(-180deg, #BCC5CE 0%, #929EAD 98%), radial-gradient(at top left, rgba(255,255,255,0.30) 0%, rgba(0,0,0,0.30) 100%);\n background-blend-mode: screen;');
INSERT INTO `ch_gradient` VALUES ('106', 'Party Bliss', '#4481eb', '#04befe', 'background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);');
INSERT INTO `ch_gradient` VALUES ('107', 'Confident Cloud', '#dad4ec', '#f3e7e9', 'background-image: linear-gradient(to top, #dad4ec 0%, #dad4ec 1%, #f3e7e9 100%);');
INSERT INTO `ch_gradient` VALUES ('108', 'Le Cocktail', '#874da2', '#c43a30', 'background-image: linear-gradient(45deg, #874da2 0%, #c43a30 100%);');
INSERT INTO `ch_gradient` VALUES ('109', 'River City', '#4481eb', '#04befe', 'background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);');
INSERT INTO `ch_gradient` VALUES ('110', 'Frozen Berry', '#e8198b', '#c7eafd', 'background-image: linear-gradient(to top, #e8198b 0%, #c7eafd 100%);');
INSERT INTO `ch_gradient` VALUES ('111', 'Elegance', null, null, 'background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);\n background-blend-mode: screen;');
INSERT INTO `ch_gradient` VALUES ('112', 'Child Care', '#f794a4', '#fdd6bd', 'background-image: linear-gradient(-20deg, #f794a4 0%, #fdd6bd 100%);');
INSERT INTO `ch_gradient` VALUES ('113', 'Flying Lemon', '#64b3f4', '#c2e59c', 'background-image: linear-gradient(60deg, #64b3f4 0%, #c2e59c 100%);');
INSERT INTO `ch_gradient` VALUES ('114', 'New Retrowave', null, null, 'background-image: linear-gradient(to top, #3b41c5 0%, #a981bb 49%, #ffc8a9 100%);');
INSERT INTO `ch_gradient` VALUES ('115', 'Hidden Jaguar', '#0fd850', '#f9f047', 'background-image: linear-gradient(to top, #0fd850 0%, #f9f047 100%);');
INSERT INTO `ch_gradient` VALUES ('116', 'Above The Sky', null, null, 'background-image: linear-gradient(to top, lightgrey 0%, lightgrey 1%, #e0e0e0 26%, #efefef 48%, #d9d9d9 75%, #bcbcbc 100%);');
INSERT INTO `ch_gradient` VALUES ('117', 'Nega', '#ee9ca7', '#ffdde1', 'background-image: linear-gradient(45deg, #ee9ca7 0%, #ffdde1 100%);');
INSERT INTO `ch_gradient` VALUES ('118', 'Dense Water', null, null, 'background-image: linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%);');
INSERT INTO `ch_gradient` VALUES ('119', 'Chemic Aqua', null, null, 'background-color: #CDDCDC;\n background-image: radial-gradient(at 50% 100%, rgba(255,255,255,0.50) 0%, rgba(0,0,0,0.50) 100%), linear-gradient(to bottom, rgba(255,255,255,0.25) 0%, rgba(0,0,0,0.25) 100%);\n background-blend-mode: screen, overlay;');
INSERT INTO `ch_gradient` VALUES ('120', 'Seashore', '#209cff', '#68e0cf', 'background-image: linear-gradient(to top, #209cff 0%, #68e0cf 100%);');
INSERT INTO `ch_gradient` VALUES ('121', 'Marble Wall', '#bdc2e8', '#e6dee9', 'background-image: linear-gradient(to top, #bdc2e8 0%, #bdc2e8 1%, #e6dee9 100%);');
INSERT INTO `ch_gradient` VALUES ('122', 'Cheerful Caramel', '#e6b980', '#eacda3', 'background-image: linear-gradient(to top, #e6b980 0%, #eacda3 100%);');
INSERT INTO `ch_gradient` VALUES ('123', 'Night Sky', '#1e3c72', '#2a5298', 'background-image: linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%);');
INSERT INTO `ch_gradient` VALUES ('124', 'Magic Lake', null, null, 'background-image: linear-gradient(to top, #d5dee7 0%, #ffafbd 0%, #c9ffbf 100%);');
INSERT INTO `ch_gradient` VALUES ('125', 'Young Grass', '#9be15d', '#00e3ae', 'background-image: linear-gradient(to top, #9be15d 0%, #00e3ae 100%);');
INSERT INTO `ch_gradient` VALUES ('126', 'Colorful Peach', '#ed6ea0', '#ec8c69', 'background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);');
INSERT INTO `ch_gradient` VALUES ('127', 'Gentle Care', '#ffc3a0', '#ffafbd', 'background-image: linear-gradient(to right, #ffc3a0 0%, #ffafbd 100%);');
INSERT INTO `ch_gradient` VALUES ('128', 'Plum Bath', '#cc208e', '#6713d2', 'background-image: linear-gradient(to top, #cc208e 0%, #6713d2 100%);');
INSERT INTO `ch_gradient` VALUES ('129', 'Happy Unicorn', '#b3ffab', '#12fff7', 'background-image: linear-gradient(to top, #b3ffab 0%, #12fff7 100%);');
INSERT INTO `ch_gradient` VALUES ('130', 'Full Metal', null, null, 'background: linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%);\n background-blend-mode: normal,color-burn;');
INSERT INTO `ch_gradient` VALUES ('131', 'African Field', null, null, 'background-image: linear-gradient(to top, #65bd60 0%, #5ac1a8 25%, #3ec6ed 50%, #b7ddb7 75%, #fef381 100%);');
INSERT INTO `ch_gradient` VALUES ('132', 'Solid Stone', '#243949', '#517fa4', 'background-image: linear-gradient(to right, #243949 0%, #517fa4 100%);');
INSERT INTO `ch_gradient` VALUES ('133', 'Orange Juice', '#fc6076', '#ff9a44', 'background-image: linear-gradient(-20deg, #fc6076 0%, #ff9a44 100%);');
INSERT INTO `ch_gradient` VALUES ('134', 'Glass Water', '#dfe9f3', '#ffffff', 'background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);');
INSERT INTO `ch_gradient` VALUES ('135', 'Slick Carbon', null, null, 'background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%);\n background-blend-mode: multiply;');
INSERT INTO `ch_gradient` VALUES ('136', 'North Miracle', '#00dbde', '#fc00ff', 'background-image: linear-gradient(to right, #00dbde 0%, #fc00ff 100%);');
INSERT INTO `ch_gradient` VALUES ('137', 'Fruit Blend', '#f9d423', '#ff4e50', 'background-image: linear-gradient(to right, #f9d423 0%, #ff4e50 100%);');
INSERT INTO `ch_gradient` VALUES ('138', 'Millennium Pine', '#50cc7f', '#f5d100', 'background-image: linear-gradient(to top, #50cc7f 0%, #f5d100 100%);');
INSERT INTO `ch_gradient` VALUES ('139', 'High Flight', '#0acffe', '#495aff', 'background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);');
INSERT INTO `ch_gradient` VALUES ('140', 'Mole Hall', '#616161', '#9bc5c3', 'background-image: linear-gradient(-20deg, #616161 0%, #9bc5c3 100%);');
INSERT INTO `ch_gradient` VALUES ('141', 'Earl Gray', null, null, 'background-color: #E4E4E1;\n background-image: radial-gradient(at top center, rgba(255,255,255,0.03) 0%, rgba(0,0,0,0.03) 100%), linear-gradient(to top, rgba(255,255,255,0.1) 0%, rgba(143,152,157,0.60) 100%);\n 	background-blend-mode: normal, multiply;');
INSERT INTO `ch_gradient` VALUES ('142', 'Space Shift', null, null, 'background-image: linear-gradient(60deg, #3d3393 0%, #2b76b9 37%, #2cacd1 65%, #35eb93 100%);');
INSERT INTO `ch_gradient` VALUES ('143', 'Forest Inei', '#df89b5', '#bfd9fe', 'background-image: linear-gradient(to top, #df89b5 0%, #bfd9fe 100%);');
INSERT INTO `ch_gradient` VALUES ('144', 'Royal Garden', '#ed6ea0', '#ec8c69', 'background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);');
INSERT INTO `ch_gradient` VALUES ('145', 'Rich Metal', '#d7d2cc', '#304352', 'background-image: linear-gradient(to right, #d7d2cc 0%, #304352 100%);');
INSERT INTO `ch_gradient` VALUES ('146', 'Juicy Cake', '#e14fad', '#f9d423', 'background-image: linear-gradient(to top, #e14fad 0%, #f9d423 100%);');
INSERT INTO `ch_gradient` VALUES ('147', 'Smart Indigo', '#b224ef', '#7579ff', 'background-image: linear-gradient(to top, #b224ef 0%, #7579ff 100%);');
INSERT INTO `ch_gradient` VALUES ('148', 'Sand Strike', '#c1c161', '#d4d4b1', 'background-image: linear-gradient(to right, #c1c161 0%, #c1c161 0%, #d4d4b1 100%);');
INSERT INTO `ch_gradient` VALUES ('149', 'Norse Beauty', '#ec77ab', '#7873f5', 'background-image: linear-gradient(to right, #ec77ab 0%, #7873f5 100%);');
INSERT INTO `ch_gradient` VALUES ('150', 'Aqua Guidance', '#007adf', '#00ecbc', 'background-image: linear-gradient(to top, #007adf 0%, #00ecbc 100%);');
INSERT INTO `ch_gradient` VALUES ('151', 'Sun Veggie', '#20E2D7', '#F9FEA5', 'background-image: linear-gradient(-225deg, #20E2D7 0%, #F9FEA5 100%);');
INSERT INTO `ch_gradient` VALUES ('152', 'Sea Lord', null, null, 'background-image: linear-gradient(-225deg, #2CD8D5 0%, #C5C1FF 56%, #FFBAC3 100%);');
INSERT INTO `ch_gradient` VALUES ('153', 'Black Sea', null, null, 'background-image: linear-gradient(-225deg, #2CD8D5 0%, #6B8DD6 48%, #8E37D7 100%);');
INSERT INTO `ch_gradient` VALUES ('154', 'Grass Shampoo', null, null, 'background-image: linear-gradient(-225deg, #DFFFCD 0%, #90F9C4 48%, #39F3BB 100%);');
INSERT INTO `ch_gradient` VALUES ('155', 'Landing Aircraft', null, null, 'background-image: linear-gradient(-225deg, #5D9FFF 0%, #B8DCFF 48%, #6BBBFF 100%);');
INSERT INTO `ch_gradient` VALUES ('156', 'Witch Dance', '#A8BFFF', '#884D80', 'background-image: linear-gradient(-225deg, #A8BFFF 0%, #884D80 100%);');
INSERT INTO `ch_gradient` VALUES ('157', 'Sleepless Night', null, null, 'background-image: linear-gradient(-225deg, #5271C4 0%, #B19FFF 48%, #ECA1FE 100%);');
INSERT INTO `ch_gradient` VALUES ('158', 'Angel Care', null, null, 'background-image: linear-gradient(-225deg, #FFE29F 0%, #FFA99F 48%, #FF719A 100%);');
INSERT INTO `ch_gradient` VALUES ('159', 'Crystal River', null, null, 'background-image: linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%);');
INSERT INTO `ch_gradient` VALUES ('160', 'Soft Lipstick', '#B6CEE8', '#F578DC', 'background-image: linear-gradient(-225deg, #B6CEE8 0%, #F578DC 100%);');
INSERT INTO `ch_gradient` VALUES ('161', 'Salt Mountain', '#FFFEFF', '#D7FFFE', 'background-image: linear-gradient(-225deg, #FFFEFF 0%, #D7FFFE 100%);');
INSERT INTO `ch_gradient` VALUES ('162', 'Perfect White', '#E3FDF5', '#FFE6FA', 'background-image: linear-gradient(-225deg, #E3FDF5 0%, #FFE6FA 100%);');
INSERT INTO `ch_gradient` VALUES ('163', 'Fresh Oasis', '#7DE2FC', '#B9B6E5', 'background-image: linear-gradient(-225deg, #7DE2FC 0%, #B9B6E5 100%);');
INSERT INTO `ch_gradient` VALUES ('164', 'Strict November', '#CBBACC', '#2580B3', 'background-image: linear-gradient(-225deg, #CBBACC 0%, #2580B3 100%);');
INSERT INTO `ch_gradient` VALUES ('165', 'Morning Salad', '#B7F8DB', '#50A7C2', 'background-image: linear-gradient(-225deg, #B7F8DB 0%, #50A7C2 100%);');
INSERT INTO `ch_gradient` VALUES ('166', 'Deep Relief', null, null, 'background-image: linear-gradient(-225deg, #7085B6 0%, #87A7D9 50%, #DEF3F8 100%);');
INSERT INTO `ch_gradient` VALUES ('167', 'Sea Strike', null, null, 'background-image: linear-gradient(-225deg, #77FFD2 0%, #6297DB 48%, #1EECFF 100%);');
INSERT INTO `ch_gradient` VALUES ('168', 'Night Call', null, null, 'background-image: linear-gradient(-225deg, #AC32E4 0%, #7918F2 48%, #4801FF 100%);');
INSERT INTO `ch_gradient` VALUES ('169', 'Supreme Sky', null, null, 'background-image: linear-gradient(-225deg, #D4FFEC 0%, #57F2CC 48%, #4596FB 100%);');
INSERT INTO `ch_gradient` VALUES ('170', 'Light Blue', null, null, 'background-image: linear-gradient(-225deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 100%);');
INSERT INTO `ch_gradient` VALUES ('171', 'Mind Crawl', null, null, 'background-image: linear-gradient(-225deg, #473B7B 0%, #3584A7 51%, #30D2BE 100%);');
INSERT INTO `ch_gradient` VALUES ('172', 'Lily Meadow', '#007adf', '#00ecbc', 'background-image: linear-gradient(-225deg, #65379B 0%, #886AEA 53%, #6457C6 100%);');
INSERT INTO `ch_gradient` VALUES ('173', 'Sugar Lollipop', null, null, 'background-image: linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%);');
INSERT INTO `ch_gradient` VALUES ('174', 'Sweet Dessert', null, null, 'background-image: linear-gradient(-225deg, #7742B2 0%, #F180FF 52%, #FD8BD9 100%);');
INSERT INTO `ch_gradient` VALUES ('175', 'Magic Ray', null, null, 'background-image: linear-gradient(-225deg, #FF3CAC 0%, #562B7C 52%, #2B86C5 100%);');
INSERT INTO `ch_gradient` VALUES ('176', 'Teen Party', null, null, 'background-image: linear-gradient(-225deg, #FF057C 0%, #8D0B93 50%, #321575 100%);');
INSERT INTO `ch_gradient` VALUES ('177', 'Frozen Heat', null, null, 'background-image: linear-gradient(-225deg, #FF057C 0%, #7C64D5 48%, #4CC3FF 100%);');
INSERT INTO `ch_gradient` VALUES ('178', 'Gagarin View', null, null, 'background-image: linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);');
INSERT INTO `ch_gradient` VALUES ('179', 'Fabled Sunset', null, null, 'background-image: linear-gradient(-225deg, #231557 0%, #44107A 29%, #FF1361 67%, #FFF800 100%);');
INSERT INTO `ch_gradient` VALUES ('180', 'Perfect Blue', null, null, 'background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);');
