CREATE TABLE `measurement_detail_records` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `record_id` int,
  `type_id` int,
  `type_value` int,
  FOREIGN KEY (`type_id`) REFERENCES measurement_types(id) ON UPDATE CASCADE,
  FOREIGN KEY (`record_id`) REFERENCES measurement_records(id) ON UPDATE CASCADE
);