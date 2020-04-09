/*
SQLyog Community v13.1.2 (64 bit)
MySQL - 10.3.15-MariaDB : Database - paperdocks
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`paperdocks` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `paperdocks`;


/*Table structure for table `card_category_info` */

DROP TABLE IF EXISTS `card_category_info`;

CREATE TABLE `card_category_info` (
  `CATEGORY_ID` INT(11) NOT NULL AUTO_INCREMENT,
  `CATEGORY_NAME` VARCHAR(64) NOT NULL,
  `CATEGORY_DISPLAY_NAME` VARCHAR(64) NOT NULL,
  `CATEGORY_DISPLAY_IMAGE_URL` VARCHAR(128) DEFAULT NULL,
  `LAST_MAINT_ID` VARCHAR(64) NOT NULL,
  `LAST_MAINT_TS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `OPTCOUNTER` INT(11) NOT NULL,
  PRIMARY KEY (`CATEGORY_ID`)
) ENGINE=INNODB DEFAULT CHARSET=latin1;

/*Table structure for table `card_info` */

DROP TABLE IF EXISTS `card_info`;

CREATE TABLE `card_info` (
  `CARD_ID` INT(11) NOT NULL AUTO_INCREMENT,
  `CARD_NAME` VARCHAR(64) NOT NULL,
  `CARD_DISPLAY_NAME` VARCHAR(128) NOT NULL,
  `CARD_TAGLINE_TEXT` VARCHAR(512) NOT NULL,
  `CARD_DESCRIPTION_TEXT` VARCHAR(512) NOT NULL,
  `CARD_PRIMARY_DIMENSIONS` VARCHAR(32) NOT NULL,
  `CARD_PRIMARY_PRICE` DECIMAL(10,2) NOT NULL,
  `CARD_MATERIAL` VARCHAR(64) NOT NULL,
  `CARD_AVAILABLITY` TINYINT(1) NOT NULL,
  `NUMBER_OF_CARDS_AVAILABLE` INT(3) DEFAULT NULL,
  `LAST_MAINT_ID` VARCHAR(64) NOT NULL,
  `LAST_MAINT_TS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `OPTCOUNTER` INT(11) NOT NULL,
  PRIMARY KEY (`CARD_ID`)
) ENGINE=INNODB DEFAULT CHARSET=latin1;

/*Table structure for table `card_occassion_info` */

DROP TABLE IF EXISTS `card_occassion_info`;

CREATE TABLE `card_occassion_info` (
  `OCCASSION_ID` INT(11) NOT NULL AUTO_INCREMENT,
  `OCCASSION_NAME` VARCHAR(64) NOT NULL,
  `OCCASSION_DISPLAY_NAME` VARCHAR(64) NOT NULL,
  `OCCASSION_DISPLAY_IMAGE_URL` VARCHAR(128) DEFAULT NULL,
  `LAST_MAINT_ID` VARCHAR(64) NOT NULL,
  `LAST_MAINT_TS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `OPTCOUNTER` INT(11) NOT NULL,
  PRIMARY KEY (`OCCASSION_ID`)
) ENGINE=INNODB DEFAULT CHARSET=latin1;

/*Table structure for table `card_tag_info` */

DROP TABLE IF EXISTS `card_tag_info`;

CREATE TABLE `card_tag_info` (
  `TAG_ID` INT(11) NOT NULL AUTO_INCREMENT,
  `TAG_NAME` VARCHAR(64) NOT NULL,
  `TAG_DISPLAY_NAME` VARCHAR(64) NOT NULL,
  `TAG_DESCRIPTION` VARCHAR(512) NOT NULL,
  `TAG_DISPLAY_IMAGE_URL` VARCHAR(128) DEFAULT NULL,
  `LAST_MAINT_ID` VARCHAR(64) NOT NULL,
  `LAST_MAINT_TS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `OPTCOUNTER` INT(11) NOT NULL,
  PRIMARY KEY (`TAG_ID`)
) ENGINE=INNODB DEFAULT CHARSET=latin1;

/*Table structure for table `product_discount_info` */

DROP TABLE IF EXISTS `product_discount_info`;

CREATE TABLE `product_discount_info` (
  `DISCOUNT_ID` INT(11) NOT NULL AUTO_INCREMENT,
  `PRODUCT_TYPE` VARCHAR(32) NOT NULL,
  `PRODUCT_ID` INT(11) NOT NULL,
  `DISCOUNT_AMOUNT` DECIMAL(10,2) NOT NULL,
  `DISCOUNT_END_DATE` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),

  `LAST_MAINT_ID` VARCHAR(64) NOT NULL,
  `LAST_MAINT_TS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP(),
  `OPTCOUNTER` INT(11) NOT NULL,
  PRIMARY KEY (`DISCOUNT_ID`,`PRODUCT_TYPE`,`PRODUCT_ID`)
) ENGINE=INNODB DEFAULT CHARSET=latin1;

/*Table structure for table `card_book_info` */

DROP TABLE IF EXISTS `card_book_info`;

CREATE TABLE `card_book_info` (
  `CARD_ID` INT(11) NOT NULL,
  `TAG_ID` INT(11) NOT NULL,
  `OCCASSION_ID` INT(11) NOT NULL,
  `CATEGORY_ID` INT(11) NOT NULL,
  `IS_PRESENT` TINYINT(1) NOT NULL,
  `LAST_MAINT_ID` VARCHAR(64) NOT NULL,
  `LAST_MAINT_TS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `OPTCOUNTER` INT(11) NOT NULL,
  PRIMARY KEY (`CARD_ID`,`TAG_ID`,`OCCASSION_ID`,`CATEGORY_ID`),
  KEY `card_book_info_fk2` (`TAG_ID`),
  KEY `card_book_info_fk3` (`OCCASSION_ID`),
  KEY `card_book_info_fk4` (`CATEGORY_ID`),
  CONSTRAINT `card_book_info_fk1` FOREIGN KEY (`CARD_ID`) REFERENCES `card_info` (`CARD_ID`),
  CONSTRAINT `card_book_info_fk2` FOREIGN KEY (`TAG_ID`) REFERENCES `card_tag_info` (`TAG_ID`),
  CONSTRAINT `card_book_info_fk3` FOREIGN KEY (`OCCASSION_ID`) REFERENCES `card_occassion_info` (`OCCASSION_ID`),
  CONSTRAINT `card_book_info_fk4` FOREIGN KEY (`CATEGORY_ID`) REFERENCES `card_category_info` (`CATEGORY_ID`)
) ENGINE=INNODB DEFAULT CHARSET=latin1;



/*Table structure for table `product_order_delivery_address_info` */

DROP TABLE IF EXISTS `product_order_delivery_address_info`;

CREATE TABLE `product_order_delivery_address_info` (
  `ADDRESS_ID` INT(11) NOT NULL AUTO_INCREMENT,
  `ADRESS_LINE_1` VARCHAR(128) NOT NULL,
  `ADRESS_LINE_2` VARCHAR(128) DEFAULT NULL,
  `ADRESS_LINE_3` VARCHAR(128) DEFAULT NULL,
  `CITY` VARCHAR(128) NOT NULL,
  `STATE` VARCHAR(128) NOT NULL,
  `PINCODE` VARCHAR(8) NOT NULL,
  `LAST_MAINT_ID` VARCHAR(64) NOT NULL,
  `LAST_MAINT_TS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `OPTCOUNTER` INT(11) NOT NULL,
  PRIMARY KEY (`ADDRESS_ID`)
) ENGINE=INNODB DEFAULT CHARSET=latin1;

/*Table structure for table `product_order_delivery_charge_info` */

DROP TABLE IF EXISTS `product_order_delivery_charge_info`;

CREATE TABLE `product_order_delivery_charge_info` (
  `DELIVERY_CHARGE_ID` INT(11) NOT NULL AUTO_INCREMENT,
  `CITY` VARCHAR(128) NOT NULL,
  `STATE` VARCHAR(128) NOT NULL,
  `PINCODE` VARCHAR(8) DEFAULT NULL,
  `DELIVERY_CHARGE_AMOUNT` DECIMAL(10,2) NOT NULL,
  `DELIVERY_CHARGE_DESCRIPTION` VARCHAR(256) DEFAULT NULL,
  `LAST_MAINT_ID` VARCHAR(64) NOT NULL,
  `LAST_MAINT_TS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `OPTCOUNTER` INT(11) NOT NULL,
  PRIMARY KEY (`DELIVERY_CHARGE_ID`)
) ENGINE=INNODB DEFAULT CHARSET=latin1;

/*Table structure for table `product_order_info` */

DROP TABLE IF EXISTS `product_order_info`;

CREATE TABLE `product_order_info` (
  `ORDER_ID` INT(11) NOT NULL AUTO_INCREMENT,
  `ORDER_TYPE` VARCHAR(32) NOT NULL,
  `PRODUCT_ID` INT(11) NOT NULL,
  `CUSTOMER_NAME` VARCHAR(128) NOT NULL,
  `CUSTOMER_MOBILE_NUMBER` VARCHAR(10) NOT NULL,
  `CUSTOMER_ALTERNATE_MOBILE_NUMBER` VARCHAR(10) DEFAULT NULL,
  `CUSTOMER_EMAIL_ID` VARCHAR(128) DEFAULT NULL,
  `CUSTOMER_DELIVERY_ADDRESS_ID` INT(11) NOT NULL,
  `CUSTOMER_DELIVERY_CHARGE_ID` INT(11) NOT NULL,
  `PRODUCT_PRICE_PRIMARY` DECIMAL(10,2) NOT NULL,
  `PRODUCT_PRICE_TAX` DECIMAL(10,2) NOT NULL,
  `PRODUCT_PRICE_DISCOUNT` DECIMAL(10,2) NOT NULL,
  `PRODUCT_PRICE_NET` DECIMAL(10,2) NOT NULL,
  `ORDER_CURRENT_STATUS` VARCHAR(16) NOT NULL,
  `TENTATIVE_DELIVERY_DATE` DATE DEFAULT NULL,
  `PREFERRED_DELIVERY_TIME_RANGE` VARCHAR(64) DEFAULT NULL,
  `LAST_MAINT_ID` VARCHAR(64) NOT NULL,
  `LAST_MAINT_TS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `OPTCOUNTER` INT(11) NOT NULL,
  PRIMARY KEY (`ORDER_ID`),
  KEY `product_order_info_fk1` (`CUSTOMER_DELIVERY_ADDRESS_ID`),
  KEY `product_order_info_fk2` (`CUSTOMER_DELIVERY_CHARGE_ID`),
  CONSTRAINT `product_order_info_fk1` FOREIGN KEY (`CUSTOMER_DELIVERY_ADDRESS_ID`) REFERENCES `product_order_delivery_address_info` (`ADDRESS_ID`),
  CONSTRAINT `product_order_info_fk2` FOREIGN KEY (`CUSTOMER_DELIVERY_CHARGE_ID`) REFERENCES `product_order_delivery_charge_info` (`DELIVERY_CHARGE_ID`)
) ENGINE=INNODB DEFAULT CHARSET=latin1;



/*Table structure for table `product_order_status_log` */

DROP TABLE IF EXISTS `product_order_status_log`;

CREATE TABLE `product_order_status_log` (
  `ORDER_ID` INT(11) NOT NULL,
  `ORDER_STATUS` VARCHAR(16) NOT NULL, 
  `ORDER_STATUS_TIMESTAMP` TIMESTAMP NOT NULL,
  `ORDER_STATUS_CREATOR_PHONE_NUMBER` VARCHAR(10) DEFAULT NULL,
  `ORDER_STATUS_CREATOR_NAME` VARCHAR(16) NOT NULL,
  `LAST_MAINT_ID` VARCHAR(64) NOT NULL,
  `LAST_MAINT_TS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `OPTCOUNTER` INT(11) NOT NULL,
  PRIMARY KEY (`ORDER_ID`,`ORDER_STATUS`),
  CONSTRAINT `product_order_status_log_fk1` FOREIGN KEY (`ORDER_ID`) REFERENCES `product_order_info` (`ORDER_ID`)
) ENGINE=INNODB DEFAULT CHARSET=latin1;



/*Table structure for table `product_order_note`*/

DROP TABLE IF EXISTS `product_order_note`;

CREATE TABLE `product_order_note` (
  `ORDER_ID` INT(11) NOT NULL AUTO_INCREMENT,
  `ORDER_NOTE` VARCHAR(512) NOT NULL, 
  `ORDER_NOTE_TIMESTAMP` TIMESTAMP NOT NULL,
  `ORDER_CREATOR_PHONE_NUMBER` VARCHAR(10) DEFAULT NULL,
  `ORDER_CREATOR_NAME` VARCHAR(16) DEFAULT NULL,
  `LAST_MAINT_ID` VARCHAR(64) NOT NULL,
  `LAST_MAINT_TS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `OPTCOUNTER` INT(11) NOT NULL,
  PRIMARY KEY (`ORDER_ID`,`ORDER_NOTE`),
  CONSTRAINT `product_order_note_fk1` FOREIGN KEY (`ORDER_ID`) REFERENCES `product_order_info` (`ORDER_ID`)
) ENGINE=INNODB DEFAULT CHARSET=latin1;




/*Table structure for table `product_order_recipt_header`*/

DROP TABLE IF EXISTS `product_order_receipt_header`;

CREATE TABLE `product_order_receipt_header` (
  `ORDER_RECEIPT_ID` INT(11) NOT NULL AUTO_INCREMENT,
  `RECEIPT_TOTAL_AMOUNT` DECIMAL(10,2) NOT NULL,
  `RECEIPT_TOTAL_TAX` DECIMAL(10,2) DEFAULT NULL,
  `RECEIPT_TOTAL_DISCOUNT` DECIMAL(10,2) DEFAULT NULL,
  `RECEIPT_DELIVERY_CHARGES` DECIMAL(10,2) NOT NULL,
  `LAST_MAINT_ID` VARCHAR(64) NOT NULL,
  `LAST_MAINT_TS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `OPTCOUNTER` INT(11) NOT NULL,
  PRIMARY KEY (`ORDER_RECEIPT_ID`)
) ENGINE=INNODB DEFAULT CHARSET=latin1;



/*Table structure for table `product_order_recipt_lines`*/

DROP TABLE IF EXISTS `product_order_receipt_lines`;

CREATE TABLE `product_order_receipt_lines` (
  `ORDER_RECEIPT_ID` INT(11) NOT NULL ,
  `ORDER_RECEIPT_LINE_NO` INT(11) NOT NULL,
  `LINE_ITEM` VARCHAR(64) NOT NULL,
  `LINE_ITEM_PRICE` DECIMAL(10,2) NOT NULL,
  `LINE_ITEM_QUANTITY` INT(3) NOT NULL,
  `LINE_ITEM_TOTAL_TAX` DECIMAL(10,2) DEFAULT NULL,
  `LINE_ITEM_TOTAL_DISCOUNT` DECIMAL(10,2) DEFAULT NULL,
  `LAST_MAINT_ID` VARCHAR(64) NOT NULL,
  `LAST_MAINT_TS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `OPTCOUNTER` INT(11) NOT NULL,
  PRIMARY KEY (`ORDER_RECEIPT_ID`,`ORDER_RECEIPT_LINE_NO`),
  CONSTRAINT `product_order_recipt_lines_fk1` FOREIGN KEY (`ORDER_RECEIPT_ID`) REFERENCES `product_order_receipt_header` (`ORDER_RECEIPT_ID`)
) ENGINE=INNODB DEFAULT CHARSET=latin1;





/*Table structure for table `product_order_receipt_info`*/

DROP TABLE IF EXISTS `product_order_receipt_info`;

CREATE TABLE `product_order_receipt_info` (
  `ORDER_ID` INT(11) NOT NULL,
  `ORDER_RECEIPT_ID` INT(11) NOT NULL ,
  `PAYMENT_STATUS` INT(11) NOT NULL,
  `LAST_MAINT_ID` VARCHAR(64) NOT NULL,
  `LAST_MAINT_TS` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP() ON UPDATE CURRENT_TIMESTAMP(),
  `OPTCOUNTER` INT(11) NOT NULL,
  PRIMARY KEY (`ORDER_ID`,`ORDER_RECEIPT_ID`),
  CONSTRAINT `product_order_receipt_info_fk1` FOREIGN KEY (`ORDER_ID`) REFERENCES `product_order_info` (`ORDER_ID`),
  CONSTRAINT `product_order_receipt_info_fk2` FOREIGN KEY (`ORDER_RECEIPT_ID`) REFERENCES `product_order_receipt_header` (`ORDER_RECEIPT_ID`)
) ENGINE=INNODB DEFAULT CHARSET=latin1;






/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
