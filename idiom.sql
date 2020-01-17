/*
SQLyog Ultimate v11.24 (32 bit)
MySQL - 5.5.40 : Database - idiom
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`idiom` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `idiom`;

/*Table structure for table `alembic_version` */

DROP TABLE IF EXISTS `alembic_version`;

CREATE TABLE `alembic_version` (
  `version_num` varchar(32) NOT NULL,
  PRIMARY KEY (`version_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `alembic_version` */

insert  into `alembic_version`(`version_num`) values ('e6ea8d4b3a4f');

/*Table structure for table `exam` */

DROP TABLE IF EXISTS `exam`;

CREATE TABLE `exam` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pictureUrl` varchar(255) DEFAULT NULL,
  `answer` varchar(20) DEFAULT NULL,
  `candidates` varchar(100) DEFAULT NULL,
  `addtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_exam_addtime` (`addtime`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `exam` */

insert  into `exam`(`id`,`pictureUrl`,`answer`,`candidates`,`addtime`) values (1,'http://www.hydcd.com/cy/fkccy/images/CF91254-53.png','鱼目混珠','珠,眼,目,电,孩,混,双,黑,跤,猪,鱼,摔,睛,童,痛,胖,矮,瞳',NULL),(2,'http://www.hydcd.com/cy/fkccy/images/CF91255.png','水滴石穿','下,透,滴,卵,雨,渴,不,鹅,彻,人,口,心,水,湿,穿,缺,石,施',NULL),(3,'http://www.hydcd.com/cy/fkccy/images/CF91255-50.png','胆大包天','日,玉,口,夫,国,包,禾,月,心,但,大,天,一,旦,小,扣,目,胆',NULL),(4,'http://www.hydcd.com/cy/fkccy/images/CF91256.png','破口大骂','骂,日,蚂,大,破,舔,吕,才,足,亩,口,妈,玛,乳,马,干,码,交',NULL),(5,'http://www.hydcd.com/cy/fkccy/images/CF91259-51.png','对牛弹琴','茧,弦,放,瑟,听,丝,弹,归,马,午,对,牛,骑,断,朱,琴,和,调',NULL);

/*Table structure for table `member` */

DROP TABLE IF EXISTS `member`;

CREATE TABLE `member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(80) DEFAULT NULL,
  `nickname` varchar(100) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `sesion` int(11) DEFAULT NULL,
  `addtime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ix_member_addtime` (`addtime`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

/*Data for the table `member` */

insert  into `member`(`id`,`openid`,`nickname`,`avatar`,`sesion`,`addtime`) values (1,'oVAL60CQxQ1sxIE-r4AT21p-3_eg','林俊杰','https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike180%2C5%2C5%2C180%2C60/sign=03aabcd539fae6cd18b9a3336eda6441/f703738da9773912279ad883f4198618377ae290.jpg',5,'2019-11-12 15:42:25'),(2,'sdfasdfasdfasdffffffffadsaaaaaad','周杰伦','https://img3.doubanio.com/view/photo/m/public/p2019539010.webp',2,'2019-11-12 15:50:48'),(3,'oVAL60CQxQ1sxIE-r4AT21p-dsfa','华晨宇','https://pic1.zhimg.com/80/v2-4d63359941e88c2f7dd3b5a47419b942_hd.jpg',3,'2019-11-12 15:42:25'),(4,'oVAL60CQxQ1sxIE-r4AT21p-ddfa','邓紫棋','http://aliyunimg.9ku.com/9kuimg/geshou/20170121/da2286a9d30e218e.jpg?x-oss-process=image/resize,m_fill,w_300,h_300,limit_0/auto-orient,0',4,'2019-11-12 15:50:48'),(5,'oVAL60CQxQ1sxIE-r4AT21p-3_eg','林子祥','http://aliyunimg.9ku.com/geshoutuji/singertuji/2/262/262_1.jpg?x-oss-process=image/resize,m_fill,w_190,h_190,limit_0/auto-orient,0',5,'2019-11-12 15:42:25'),(6,'sdfasdfasdfasdffffffffadsaaaaaad','黄小琥','http://aliyunimg.9ku.com/geshoutuji/singertuji/2/261/261_1.jpg?x-oss-process=image/resize,m_fill,w_190,h_190,limit_0/auto-orient,0',2,'2019-11-12 15:50:48'),(7,'oVAL60CQxQ1sxIE-r4AT21p-ghnj','李宗盛','https://file.digitaling.com/eImg/uimages/20180702/1530499827428358.jpg',3,'2019-11-12 15:42:25'),(8,'oVAL60CQxQ1sxIE-r4AT21p-mwrc','胡彦斌','https://image.ijq.tv/201506/30/15-31-28-10-16.png',4,'2019-11-12 15:50:48'),(9,'omkn40L01RfzMRv0OWyTlARy72eI','碧龗','https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIhaIMVFXXIicg6pIAYMDJcR36yRA3jV87ib5ibUMibeg29bGNGuULQiatXnIgPHJlYjiaV6NpEqQ22wzibw/132',2,'2019-12-21 16:48:33');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
