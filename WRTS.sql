-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 17, 2020 at 01:01 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `WRTS`
--

-- --------------------------------------------------------

--
-- Table structure for table `lists`
--

CREATE TABLE `lists` (
  `id` int(11) UNSIGNED NOT NULL,
  `name_list` varchar(256) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int(255) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `lists`
--

INSERT INTO `lists` (`id`, `name_list`, `created_at`, `updated_at`, `user_id`) VALUES
(39, 'Rheimer', '2020-02-01 13:34:37', '2020-02-01 13:34:37', 33),
(40, 'Engels h2', '2020-02-01 14:26:19', '2020-02-01 14:26:19', 33),
(43, '1234', '2020-03-03 19:30:36', '2020-03-03 19:30:36', 33);

-- --------------------------------------------------------

--
-- Table structure for table `list_items`
--

CREATE TABLE `list_items` (
  `id` int(11) UNSIGNED NOT NULL,
  `word` varchar(256) DEFAULT NULL,
  `translation` varchar(256) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `list_id` int(255) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `list_items`
--

INSERT INTO `list_items` (`id`, `word`, `translation`, `created_at`, `updated_at`, `list_id`) VALUES
(73, '1', '1', '2020-02-01 13:34:37', '2020-02-01 13:34:37', 39),
(74, '2', '2', '2020-02-01 13:34:37', '2020-02-01 13:34:37', 39),
(75, '3', '3', '2020-02-01 13:34:37', '2020-02-01 13:34:37', 39),
(76, '4', '4', '2020-02-01 13:34:37', '2020-02-01 13:34:37', 39),
(77, '1', '1', '2020-02-01 14:26:19', '2020-02-01 14:26:19', 40),
(78, '2', '2', '2020-02-01 14:26:19', '2020-02-01 14:26:19', 40),
(79, '3', '3', '2020-02-01 14:26:19', '2020-02-01 14:26:19', 40),
(80, '4', '4', '2020-02-01 14:26:19', '2020-02-01 14:26:19', 40),
(81, '5', '5', '2020-02-01 14:26:19', '2020-02-01 14:26:19', 40),
(82, '6', '6', '2020-02-01 14:26:19', '2020-02-01 14:26:19', 40),
(83, '7', '7', '2020-02-01 14:26:19', '2020-02-01 14:26:19', 40),
(84, '8', '8', '2020-02-01 14:26:19', '2020-02-01 14:26:19', 40),
(85, '9', '9', '2020-02-01 14:26:19', '2020-02-01 14:26:19', 40),
(97, '1', '1', '2020-03-03 19:30:36', '2020-03-03 19:30:36', 43);

-- --------------------------------------------------------

--
-- Table structure for table `scores`
--

CREATE TABLE `scores` (
  `id` int(11) UNSIGNED NOT NULL,
  `score` int(11) DEFAULT NULL,
  `total` int(11) DEFAULT NULL,
  `correct` int(11) DEFAULT NULL,
  `date` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `user_id` int(11) UNSIGNED DEFAULT NULL,
  `list_id` int(11) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `scores`
--

INSERT INTO `scores` (`id`, `score`, `total`, `correct`, `date`, `created_at`, `updated_at`, `user_id`, `list_id`) VALUES
(4, 100, 4, 4, '2020-02-01 13:35:50', '2020-02-01 13:35:50', '2020-02-01 13:35:50', 33, 39),
(5, 44, 9, 4, '2020-02-01 14:26:42', '2020-02-01 14:26:42', '2020-02-01 14:26:42', 33, 40),
(6, 44, 9, 4, '2020-02-01 14:28:19', '2020-02-01 14:28:19', '2020-02-01 14:28:19', 33, 40),
(8, 100, 4, 4, '2020-03-03 19:27:41', '2020-03-03 19:27:41', '2020-03-03 19:27:41', 33, 39);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) UNSIGNED NOT NULL,
  `username` varchar(30) DEFAULT NULL,
  `password` varchar(256) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `created_at`, `updated_at`) VALUES
(33, 'rheimer@icloud.com', '$2y$10$0VOcUWQasdFSLewS9oldseQZH6xT46giejFxABe9rdj6zUTjvzXQO', '2020-02-02 14:59:54', '2020-02-02 14:59:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `lists`
--
ALTER TABLE `lists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `list -> user` (`user_id`);

--
-- Indexes for table `list_items`
--
ALTER TABLE `list_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `list_item -> list` (`list_id`);

--
-- Indexes for table `scores`
--
ALTER TABLE `scores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id -> user` (`user_id`),
  ADD KEY `list_id -> list` (`list_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `lists`
--
ALTER TABLE `lists`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `list_items`
--
ALTER TABLE `list_items`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=98;

--
-- AUTO_INCREMENT for table `scores`
--
ALTER TABLE `scores`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `lists`
--
ALTER TABLE `lists`
  ADD CONSTRAINT `list -> user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `list_items`
--
ALTER TABLE `list_items`
  ADD CONSTRAINT `list_item -> list` FOREIGN KEY (`list_id`) REFERENCES `lists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `scores`
--
ALTER TABLE `scores`
  ADD CONSTRAINT `list_id -> list` FOREIGN KEY (`list_id`) REFERENCES `lists` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_id -> user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
