-- MySQL dump 10.13  Distrib 9.1.0, for Win64 (x86_64)
--
-- Host: localhost    Database: sahakorn
-- ------------------------------------------------------
-- Server version	9.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_permission` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`),
  CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can view log entry',1,'view_logentry'),(5,'Can add permission',2,'add_permission'),(6,'Can change permission',2,'change_permission'),(7,'Can delete permission',2,'delete_permission'),(8,'Can view permission',2,'view_permission'),(9,'Can add group',3,'add_group'),(10,'Can change group',3,'change_group'),(11,'Can delete group',3,'delete_group'),(12,'Can view group',3,'view_group'),(13,'Can add user',4,'add_user'),(14,'Can change user',4,'change_user'),(15,'Can delete user',4,'delete_user'),(16,'Can view user',4,'view_user'),(17,'Can add content type',5,'add_contenttype'),(18,'Can change content type',5,'change_contenttype'),(19,'Can delete content type',5,'delete_contenttype'),(20,'Can view content type',5,'view_contenttype'),(21,'Can add session',6,'add_session'),(22,'Can change session',6,'change_session'),(23,'Can delete session',6,'delete_session'),(24,'Can view session',6,'view_session'),(25,'Can add producer type',7,'add_producertype'),(26,'Can change producer type',7,'change_producertype'),(27,'Can delete producer type',7,'delete_producertype'),(28,'Can view producer type',7,'view_producertype'),(29,'Can add member',8,'add_member'),(30,'Can change member',8,'change_member'),(31,'Can delete member',8,'delete_member'),(32,'Can view member',8,'view_member'),(33,'Can add equipment',9,'add_equipment'),(34,'Can change equipment',9,'change_equipment'),(35,'Can delete equipment',9,'delete_equipment'),(36,'Can view equipment',9,'view_equipment'),(37,'Can add borrowing',10,'add_borrowing'),(38,'Can change borrowing',10,'change_borrowing'),(39,'Can delete borrowing',10,'delete_borrowing'),(40,'Can view borrowing',10,'view_borrowing'),(41,'Can add common fee',11,'add_commonfee'),(42,'Can change common fee',11,'change_commonfee'),(43,'Can delete common fee',11,'delete_commonfee'),(44,'Can view common fee',11,'view_commonfee'),(45,'Can add item type',12,'add_itemtype'),(46,'Can change item type',12,'change_itemtype'),(47,'Can delete item type',12,'delete_itemtype'),(48,'Can view item type',12,'view_itemtype'),(49,'Can add loans',13,'add_loans'),(50,'Can change loans',13,'change_loans'),(51,'Can delete loans',13,'delete_loans'),(52,'Can view loans',13,'view_loans'),(53,'Can add stock',14,'add_stock'),(54,'Can change stock',14,'change_stock'),(55,'Can delete stock',14,'delete_stock'),(56,'Can view stock',14,'view_stock'),(57,'Can add market item',15,'add_marketitem'),(58,'Can change market item',15,'change_marketitem'),(59,'Can delete market item',15,'delete_marketitem'),(60,'Can view market item',15,'view_marketitem'),(61,'Can add transaction',16,'add_transaction'),(62,'Can change transaction',16,'change_transaction'),(63,'Can delete transaction',16,'delete_transaction'),(64,'Can view transaction',16,'view_transaction');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$870000$sumdPwkZBpQc514i0WRuVa$anjOIF1dXbrLQX7MNxixN68+Bbi2zQ2w3X9sFHudi1Q=','2024-11-28 02:23:04.118352',1,'admin','','','a@a.com',1,1,'2024-11-28 02:02:21.049027'),(2,'pbkdf2_sha256$870000$rWdq3N9PI2aly7xAZERRIv$wbMeuoIJASmYzPpFrH8fjIxOkYnjYxFF9X4cWn99/5k=','2024-11-28 02:34:47.774869',0,'farmer1','','','',0,1,'2024-11-28 02:10:48.290404'),(3,'pbkdf2_sha256$870000$696if4dNWeSnUXLJg9vVxC$uz7I7yQYfulrWcKVw1NSfaYFH+d6Xjb+9nVjLyL6Nf0=','2024-11-28 02:35:51.775003',0,'farmer2','','','',0,1,'2024-11-28 02:21:28.025196');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`),
  CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_admin_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `django_admin_log_chk_1` CHECK ((`action_flag` >= 0))
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2024-11-28 02:03:57.589860','1','ProducerType object (1)',1,'[{\"added\": {}}]',7,1),(2,'2024-11-28 02:04:15.651021','2','ProducerType object (2)',1,'[{\"added\": {}}]',7,1),(3,'2024-11-28 02:04:47.242691','3','ProducerType object (3)',1,'[{\"added\": {}}]',7,1),(4,'2024-11-28 02:05:05.706297','1','Crop',1,'[{\"added\": {}}]',12,1),(5,'2024-11-28 02:05:19.747108','2','Artisan',1,'[{\"added\": {}}]',12,1),(6,'2024-11-28 02:05:32.417925','3','Processed',1,'[{\"added\": {}}]',12,1),(7,'2024-11-28 02:06:33.296749','1','Tractor of John',2,'[{\"changed\": {\"fields\": [\"Name\"]}}]',9,1),(8,'2024-11-28 02:23:38.132310','4','Meat',1,'[{\"added\": {}}]',12,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_content_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(10,'sahakorn','borrowing'),(11,'sahakorn','commonfee'),(9,'sahakorn','equipment'),(12,'sahakorn','itemtype'),(13,'sahakorn','loans'),(15,'sahakorn','marketitem'),(8,'sahakorn','member'),(7,'sahakorn','producertype'),(14,'sahakorn','stock'),(16,'sahakorn','transaction'),(6,'sessions','session');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2024-11-17 14:39:22.671005'),(2,'auth','0001_initial','2024-11-17 14:39:23.525464'),(3,'admin','0001_initial','2024-11-17 14:39:23.743567'),(4,'admin','0002_logentry_remove_auto_add','2024-11-17 14:39:23.756270'),(5,'admin','0003_logentry_add_action_flag_choices','2024-11-17 14:39:23.764508'),(6,'contenttypes','0002_remove_content_type_name','2024-11-17 14:39:23.898914'),(7,'auth','0002_alter_permission_name_max_length','2024-11-17 14:39:23.990430'),(8,'auth','0003_alter_user_email_max_length','2024-11-17 14:39:24.088630'),(9,'auth','0004_alter_user_username_opts','2024-11-17 14:39:24.094959'),(10,'auth','0005_alter_user_last_login_null','2024-11-17 14:39:24.197592'),(11,'auth','0006_require_contenttypes_0002','2024-11-17 14:39:24.197592'),(12,'auth','0007_alter_validators_add_error_messages','2024-11-17 14:39:24.212864'),(13,'auth','0008_alter_user_username_max_length','2024-11-17 14:39:24.305753'),(14,'auth','0009_alter_user_last_name_max_length','2024-11-17 14:39:24.406721'),(15,'auth','0010_alter_group_name_max_length','2024-11-17 14:39:24.489872'),(16,'auth','0011_update_proxy_permissions','2024-11-17 14:39:24.505283'),(17,'auth','0012_alter_user_first_name_max_length','2024-11-17 14:39:24.604627'),(18,'sessions','0001_initial','2024-11-17 14:39:24.659097'),(19,'token_blacklist','0001_initial','2024-11-18 07:30:00.387669'),(20,'token_blacklist','0002_outstandingtoken_jti_hex','2024-11-18 07:30:00.423786'),(21,'token_blacklist','0003_auto_20171017_2007','2024-11-18 07:30:00.440261'),(22,'token_blacklist','0004_auto_20171017_2013','2024-11-18 07:30:00.536020'),(23,'token_blacklist','0005_remove_outstandingtoken_jti','2024-11-18 07:30:00.617335'),(24,'token_blacklist','0006_auto_20171017_2113','2024-11-18 07:30:00.652013'),(25,'token_blacklist','0007_auto_20171017_2214','2024-11-18 07:30:00.924703'),(26,'token_blacklist','0008_migrate_to_bigautofield','2024-11-18 07:30:01.301569'),(27,'token_blacklist','0010_fix_migrate_to_bigautofield','2024-11-18 07:30:01.318883'),(28,'token_blacklist','0011_linearizes_history','2024-11-18 07:30:01.320663'),(29,'token_blacklist','0012_alter_outstandingtoken_user','2024-11-18 07:30:01.334711'),(30,'sahakorn','0001_initial','2024-11-24 09:41:21.637713'),(31,'sahakorn','0002_remove_stock_type_stock_item_type_and_more','2024-11-24 15:00:18.274434'),(32,'sahakorn','0003_rename_payed_loans_paid_and_more','2024-11-24 15:00:19.142530'),(33,'sahakorn','0004_remove_marketitem_item_type','2024-11-27 13:13:58.142076');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('4l6w7q3ac2zfd0fkel5816zwlanrrdl0','.eJxVjDsOwjAQBe_iGll2vM5uKOk5g7X-4QCypTipEHeHSCmgfTPzXsLxtha39bS4OYqzMOL0u3kOj1R3EO9cb02GVtdl9nJX5EG7vLaYnpfD_Tso3Mu3JrQ5WWAax8EqjGwY2RhChCEm0hnQR50njUDKKxMS2axhAk8MFo14fwDHXjb6:1tGUNj:pE6T55mo49T8Qr6fOZXvG-MDEkUOIMVTMSt9l2YL_g0','2024-12-12 02:35:51.781434');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sahakorn_borrowing`
--

DROP TABLE IF EXISTS `sahakorn_borrowing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sahakorn_borrowing` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `s_date` date NOT NULL,
  `r_date` date NOT NULL,
  `equipment_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sahakorn_borrowing_equipment_id_c06c19ad_fk_sahakorn_` (`equipment_id`),
  KEY `sahakorn_borrowing_user_id_42e16931_fk_sahakorn_member_id` (`user_id`),
  CONSTRAINT `sahakorn_borrowing_equipment_id_c06c19ad_fk_sahakorn_` FOREIGN KEY (`equipment_id`) REFERENCES `sahakorn_equipment` (`id`),
  CONSTRAINT `sahakorn_borrowing_user_id_42e16931_fk_sahakorn_member_id` FOREIGN KEY (`user_id`) REFERENCES `sahakorn_member` (`id`),
  CONSTRAINT `equipment must be return after borrowing date.` CHECK ((`r_date` >= `s_date`))
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sahakorn_borrowing`
--

LOCK TABLES `sahakorn_borrowing` WRITE;
/*!40000 ALTER TABLE `sahakorn_borrowing` DISABLE KEYS */;
INSERT INTO `sahakorn_borrowing` VALUES (1,'2024-11-28','2024-11-30',3,3),(2,'2024-11-28','2024-11-30',1,2),(3,'2024-11-28','2024-11-30',2,3);
/*!40000 ALTER TABLE `sahakorn_borrowing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sahakorn_commonfee`
--

DROP TABLE IF EXISTS `sahakorn_commonfee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sahakorn_commonfee` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `month` int NOT NULL,
  `year` int NOT NULL,
  `total_paid` double NOT NULL,
  `total_due` double NOT NULL,
  `member_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sahakorn_commonfee_member_id_f3642ebe_fk_sahakorn_member_id` (`member_id`),
  CONSTRAINT `sahakorn_commonfee_member_id_f3642ebe_fk_sahakorn_member_id` FOREIGN KEY (`member_id`) REFERENCES `sahakorn_member` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sahakorn_commonfee`
--

LOCK TABLES `sahakorn_commonfee` WRITE;
/*!40000 ALTER TABLE `sahakorn_commonfee` DISABLE KEYS */;
INSERT INTO `sahakorn_commonfee` VALUES (1,11,2024,100,100,1),(2,11,2024,100,100,3);
/*!40000 ALTER TABLE `sahakorn_commonfee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sahakorn_equipment`
--

DROP TABLE IF EXISTS `sahakorn_equipment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sahakorn_equipment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(300) NOT NULL,
  `equipment_type` varchar(100) NOT NULL,
  `owner_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sahakorn_equipment_owner_id_3544892b_fk_sahakorn_member_id` (`owner_id`),
  CONSTRAINT `sahakorn_equipment_owner_id_3544892b_fk_sahakorn_member_id` FOREIGN KEY (`owner_id`) REFERENCES `sahakorn_member` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sahakorn_equipment`
--

LOCK TABLES `sahakorn_equipment` WRITE;
/*!40000 ALTER TABLE `sahakorn_equipment` DISABLE KEYS */;
INSERT INTO `sahakorn_equipment` VALUES (1,'Tractor','Vehicle',1),(2,'Wheat Miller','Machinery',1),(3,'Forklift','Vehicle',1),(4,'Cultivator','Soil cultivation',2),(5,'Seed drill','Planting',2),(6,'Grain dryer','Harvesting',2),(7,'Heater','Livestock',3);
/*!40000 ALTER TABLE `sahakorn_equipment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sahakorn_itemtype`
--

DROP TABLE IF EXISTS `sahakorn_itemtype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sahakorn_itemtype` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(300) NOT NULL,
  `color` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sahakorn_itemtype`
--

LOCK TABLES `sahakorn_itemtype` WRITE;
/*!40000 ALTER TABLE `sahakorn_itemtype` DISABLE KEYS */;
INSERT INTO `sahakorn_itemtype` VALUES (1,'Crop','#2803fc'),(2,'Artisan','#fcbe03'),(3,'Processed','#6603fc'),(4,'Meat','#f5a742');
/*!40000 ALTER TABLE `sahakorn_itemtype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sahakorn_loans`
--

DROP TABLE IF EXISTS `sahakorn_loans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sahakorn_loans` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount` double NOT NULL,
  `loan_date` date NOT NULL,
  `paid` double NOT NULL,
  `member_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sahakorn_loans_member_id_65c33bdd_fk_sahakorn_member_id` (`member_id`),
  CONSTRAINT `sahakorn_loans_member_id_65c33bdd_fk_sahakorn_member_id` FOREIGN KEY (`member_id`) REFERENCES `sahakorn_member` (`id`),
  CONSTRAINT `paid amount less than borrow amount` CHECK ((`paid` <= `amount`))
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sahakorn_loans`
--

LOCK TABLES `sahakorn_loans` WRITE;
/*!40000 ALTER TABLE `sahakorn_loans` DISABLE KEYS */;
INSERT INTO `sahakorn_loans` VALUES (1,5000,'2024-12-28',0,2),(2,10000,'2024-12-28',0,3),(3,500,'2024-11-29',500,3),(4,1000,'2024-11-01',1000,3);
/*!40000 ALTER TABLE `sahakorn_loans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sahakorn_marketitem`
--

DROP TABLE IF EXISTS `sahakorn_marketitem`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sahakorn_marketitem` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `price` int NOT NULL,
  `stock_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sahakorn_marketitem_stock_id_d60ee30e_fk_sahakorn_stock_id` (`stock_id`),
  CONSTRAINT `sahakorn_marketitem_stock_id_d60ee30e_fk_sahakorn_stock_id` FOREIGN KEY (`stock_id`) REFERENCES `sahakorn_stock` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sahakorn_marketitem`
--

LOCK TABLES `sahakorn_marketitem` WRITE;
/*!40000 ALTER TABLE `sahakorn_marketitem` DISABLE KEYS */;
INSERT INTO `sahakorn_marketitem` VALUES (1,487,10,5),(2,200,50,6),(3,880,30,7),(4,10,52,1),(5,56,60,2),(6,452,62,3),(7,3,200,4),(8,50,200,9),(9,73,500,8),(10,40,30,10);
/*!40000 ALTER TABLE `sahakorn_marketitem` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sahakorn_member`
--

DROP TABLE IF EXISTS `sahakorn_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sahakorn_member` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`),
  CONSTRAINT `sahakorn_member_user_id_48b0f33b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sahakorn_member`
--

LOCK TABLES `sahakorn_member` WRITE;
/*!40000 ALTER TABLE `sahakorn_member` DISABLE KEYS */;
INSERT INTO `sahakorn_member` VALUES (1,'John',1),(2,'Cole',2),(3,'Joe',3);
/*!40000 ALTER TABLE `sahakorn_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sahakorn_member_produce_type`
--

DROP TABLE IF EXISTS `sahakorn_member_produce_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sahakorn_member_produce_type` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `member_id` bigint NOT NULL,
  `producertype_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sahakorn_member_produce__member_id_producertype_i_56e0a106_uniq` (`member_id`,`producertype_id`),
  KEY `sahakorn_member_prod_producertype_id_88272851_fk_sahakorn_` (`producertype_id`),
  CONSTRAINT `sahakorn_member_prod_member_id_38bacffa_fk_sahakorn_` FOREIGN KEY (`member_id`) REFERENCES `sahakorn_member` (`id`),
  CONSTRAINT `sahakorn_member_prod_producertype_id_88272851_fk_sahakorn_` FOREIGN KEY (`producertype_id`) REFERENCES `sahakorn_producertype` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sahakorn_member_produce_type`
--

LOCK TABLES `sahakorn_member_produce_type` WRITE;
/*!40000 ALTER TABLE `sahakorn_member_produce_type` DISABLE KEYS */;
INSERT INTO `sahakorn_member_produce_type` VALUES (1,1,2),(2,2,1),(3,3,3);
/*!40000 ALTER TABLE `sahakorn_member_produce_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sahakorn_producertype`
--

DROP TABLE IF EXISTS `sahakorn_producertype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sahakorn_producertype` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(300) NOT NULL,
  `color` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sahakorn_producertype`
--

LOCK TABLES `sahakorn_producertype` WRITE;
/*!40000 ALTER TABLE `sahakorn_producertype` DISABLE KEYS */;
INSERT INTO `sahakorn_producertype` VALUES (1,'Agriculture','#07fc03'),(2,'Fishing','#03ecfc'),(3,'Livestock','#fc03b6');
/*!40000 ALTER TABLE `sahakorn_producertype` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sahakorn_stock`
--

DROP TABLE IF EXISTS `sahakorn_stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sahakorn_stock` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `p_name` varchar(300) NOT NULL,
  `quantity` int NOT NULL,
  `member_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sahakorn_stock_member_id_38a3ecba_fk_sahakorn_member_id` (`member_id`),
  CONSTRAINT `sahakorn_stock_member_id_38a3ecba_fk_sahakorn_member_id` FOREIGN KEY (`member_id`) REFERENCES `sahakorn_member` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sahakorn_stock`
--

LOCK TABLES `sahakorn_stock` WRITE;
/*!40000 ALTER TABLE `sahakorn_stock` DISABLE KEYS */;
INSERT INTO `sahakorn_stock` VALUES (1,'Canned fish',2,1),(2,'Dried fish',44,1),(3,'raw fish',348,1),(4,'Fish oil',7,1),(5,'Wheat',500,2),(6,'Corn',300,2),(7,'Rice',100,2),(8,'Lamb Meat',27,3),(9,'Cow Meat',25,3),(10,'Bamboo',50,2);
/*!40000 ALTER TABLE `sahakorn_stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sahakorn_stock_item_type`
--

DROP TABLE IF EXISTS `sahakorn_stock_item_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sahakorn_stock_item_type` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `stock_id` bigint NOT NULL,
  `itemtype_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `sahakorn_stock_item_type_stock_id_itemtype_id_eae4fd04_uniq` (`stock_id`,`itemtype_id`),
  KEY `sahakorn_stock_item__itemtype_id_26ad9b3a_fk_sahakorn_` (`itemtype_id`),
  CONSTRAINT `sahakorn_stock_item__itemtype_id_26ad9b3a_fk_sahakorn_` FOREIGN KEY (`itemtype_id`) REFERENCES `sahakorn_itemtype` (`id`),
  CONSTRAINT `sahakorn_stock_item_type_stock_id_ad31bbe4_fk_sahakorn_stock_id` FOREIGN KEY (`stock_id`) REFERENCES `sahakorn_stock` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sahakorn_stock_item_type`
--

LOCK TABLES `sahakorn_stock_item_type` WRITE;
/*!40000 ALTER TABLE `sahakorn_stock_item_type` DISABLE KEYS */;
INSERT INTO `sahakorn_stock_item_type` VALUES (1,1,3),(2,2,2),(3,3,2),(4,4,3),(5,5,1),(6,6,1),(7,7,1),(8,8,4),(9,9,4),(10,10,1);
/*!40000 ALTER TABLE `sahakorn_stock_item_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sahakorn_transaction`
--

DROP TABLE IF EXISTS `sahakorn_transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sahakorn_transaction` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `quantity` int NOT NULL,
  `total_paid` double NOT NULL,
  `date` date NOT NULL,
  `market_item_id` bigint NOT NULL,
  `member_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sahakorn_transaction_market_item_id_1ff7c249_fk_sahakorn_` (`market_item_id`),
  KEY `sahakorn_transaction_member_id_14977542_fk_sahakorn_member_id` (`member_id`),
  CONSTRAINT `sahakorn_transaction_market_item_id_1ff7c249_fk_sahakorn_` FOREIGN KEY (`market_item_id`) REFERENCES `sahakorn_marketitem` (`id`),
  CONSTRAINT `sahakorn_transaction_member_id_14977542_fk_sahakorn_member_id` FOREIGN KEY (`member_id`) REFERENCES `sahakorn_member` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sahakorn_transaction`
--

LOCK TABLES `sahakorn_transaction` WRITE;
/*!40000 ALTER TABLE `sahakorn_transaction` DISABLE KEYS */;
INSERT INTO `sahakorn_transaction` VALUES (1,13,130,'2024-11-28',1,1),(2,20,600,'2024-11-28',3,1),(3,200,12400,'2024-11-28',6,2),(4,10,300,'2024-11-28',10,3),(5,8,416,'2024-11-28',4,3);
/*!40000 ALTER TABLE `sahakorn_transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token_blacklist_blacklistedtoken`
--

DROP TABLE IF EXISTS `token_blacklist_blacklistedtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token_blacklist_blacklistedtoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `blacklisted_at` datetime(6) NOT NULL,
  `token_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token_id` (`token_id`),
  CONSTRAINT `token_blacklist_blacklistedtoken_token_id_3cc7fe56_fk` FOREIGN KEY (`token_id`) REFERENCES `token_blacklist_outstandingtoken` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token_blacklist_blacklistedtoken`
--

LOCK TABLES `token_blacklist_blacklistedtoken` WRITE;
/*!40000 ALTER TABLE `token_blacklist_blacklistedtoken` DISABLE KEYS */;
/*!40000 ALTER TABLE `token_blacklist_blacklistedtoken` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token_blacklist_outstandingtoken`
--

DROP TABLE IF EXISTS `token_blacklist_outstandingtoken`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `token_blacklist_outstandingtoken` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `token` longtext NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `expires_at` datetime(6) NOT NULL,
  `user_id` int DEFAULT NULL,
  `jti` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token_blacklist_outstandingtoken_jti_hex_d9bdf6f7_uniq` (`jti`),
  KEY `token_blacklist_outs_user_id_83bc629a_fk_auth_user` (`user_id`),
  CONSTRAINT `token_blacklist_outs_user_id_83bc629a_fk_auth_user` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token_blacklist_outstandingtoken`
--

LOCK TABLES `token_blacklist_outstandingtoken` WRITE;
/*!40000 ALTER TABLE `token_blacklist_outstandingtoken` DISABLE KEYS */;
INSERT INTO `token_blacklist_outstandingtoken` VALUES (1,'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTczMjAwMTc5MSwiaWF0IjoxNzMxOTE1MzkxLCJqdGkiOiI2YjQyYTdhOWM0OWQ0NDQyODc1ZDhjYjc2YjJkZWI5MyIsInVzZXJfaWQiOjF9.qm2B8hg0JREEmulkMMkfF3-wTXVjPm71_AzUmJPb6FE','2024-11-18 07:36:31.035947','2024-11-19 07:36:31.000000',1,'6b42a7a9c49d4442875d8cb76b2deb93');
/*!40000 ALTER TABLE `token_blacklist_outstandingtoken` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-28 11:59:27
