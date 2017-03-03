CREATE TABLE `ch_article` (
`id`  int(10) NOT NULL AUTO_INCREMENT ,
`title`  varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL ,
`content`  text CHARACTER SET utf8 COLLATE utf8_general_ci NULL ,
`top_type`  tinyint(2) NOT NULL DEFAULT 0 COMMENT '置顶  0-否 1-是' ,
`online_type`  tinyint(2) NOT NULL DEFAULT 0 COMMENT '0-下线 1-上线' ,
`create_time`  int(10) NULL DEFAULT NULL ,
`update_time`  int(10) NULL DEFAULT NULL ,
`create_user_id`  int(10) NULL DEFAULT NULL ,
PRIMARY KEY (`id`)
)
ENGINE=InnoDB
DEFAULT CHARACTER SET=utf8 COLLATE=utf8_general_ci
AUTO_INCREMENT=1
ROW_FORMAT=COMPACT
;
