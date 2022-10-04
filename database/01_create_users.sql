CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `user_name` varchar(50),
  `birth_date` varchar(100),
  `height` double,
  `phone_number` varchar(100),
  `create_at` DATETIME DEFAULT NOW(),
  `update_at` DATETIME DEFAULT NOW() ON UPDATE CURRENT_TIMESTAMP
);