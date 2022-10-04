CREATE TABLE `measurement_records` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `measurement_date` DATETIME DEFAULT NOW(),
  `weight` double,
  `user_id` int,
  FOREIGN KEY (`user_id`) REFERENCES users(id) ON UPDATE CASCADE
);