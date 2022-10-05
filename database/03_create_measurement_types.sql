CREATE TABLE `measurement_types` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `type_name` varchar(100)
);

ALTER TABLE measurement_types ADD min INT;
ALTER TABLE measurement_types ADD max INT;