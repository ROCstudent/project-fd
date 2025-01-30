-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 30, 2025 at 06:19 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fightinggamehub`
--

-- --------------------------------------------------------

--
-- Table structure for table `characters`
--

CREATE TABLE `characters` (
  `id` int(11) NOT NULL,
  `game_id` int(11) DEFAULT NULL,
  `name` varchar(100) NOT NULL,
  `image_url` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `characters`
--

INSERT INTO `characters` (`id`, `game_id`, `name`, `image_url`) VALUES
(72, 1, 'Ryu', 'assets/images/ryu.jpg'),
(73, 1, 'Ken', 'assets/images/ken.jpg'),
(74, 1, 'Chun-Li', 'assets/images/chunli.jpg'),
(75, 1, 'Luke', 'assets/images/luke.jpg'),
(76, 1, 'Guile', 'assets/images/guile.jpg'),
(77, 1, 'Kimberly', 'assets/images/kimberly.jpg'),
(78, 1, 'Juri', 'assets/images/juri.jpg'),
(79, 1, 'Blanka', 'assets/images/blanka.jpg'),
(80, 1, 'Dhalsim', 'assets/images/dhalsim.jpg'),
(81, 1, 'E. Honda', 'assets/images/ehonda.jpg'),
(82, 1, 'Dee Jay', 'assets/images/deejay.jpg'),
(83, 1, 'Manon', 'assets/images/manon.jpg'),
(84, 1, 'Marisa', 'assets/images/marisa.jpg'),
(85, 1, 'JP', 'assets/images/jp.jpg'),
(86, 1, 'Zangief', 'assets/images/zangief.jpg'),
(87, 1, 'Lily', 'assets/images/lily.jpg'),
(88, 1, 'Cammy', 'assets/images/cammy.jpg'),
(89, 1, 'Rashid', 'assets/images/rashid.jpg'),
(90, 1, 'A.K.I', 'assets/images/aki.jpg'),
(91, 1, 'Ed', 'assets/images/ed.jpg'),
(92, 1, 'Akuma', 'assets/images/akuma.jpg'),
(93, 1, 'M. Bison', 'assets/images/mbison.jpg'),
(94, 1, 'Terry', 'assets/images/terry.jpg'),
(95, 2, 'Jin', 'assets/images/jin.jpg'),
(96, 2, 'Kazuya', 'assets/images/kazuya.jpg'),
(97, 2, 'Paul', 'assets/images/paul.jpg'),
(98, 3, 'Gran', 'assets/images/gran.jpg'),
(99, 3, 'Lancelot', 'assets/images/lancelot.jpg'),
(100, 3, 'Ferry', 'assets/images/ferry.jpg'),
(101, 4, 'Coming Soon!', 'assets/images/peace-coming-soon.jpg'),
(102, 5, 'Coming Soon!', 'assets/images/peace-coming-soon.jpg'),
(103, 6, 'Coming Soon!', 'assets/images/peace-coming-soon.jpg'),
(104, 7, 'Coming Soon!', 'assets/images/peace-coming-soon.jpg'),
(105, 8, 'Coming Soon!', 'assets/images/peace-coming-soon.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `games`
--

CREATE TABLE `games` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `url` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `games`
--

INSERT INTO `games` (`id`, `name`, `url`) VALUES
(1, 'Street Fighter 6', 'assets/images/sf6.jpg'),
(2, 'Tekken 8', 'assets/images/tekken8.jpg'),
(3, 'Granblue Fantasy: Versus', 'assets/images/gbvs.jpg'),
(4, 'Mortal Kombat 1', 'assets/images/mortalkombat1.jpg'),
(5, 'Undernight In-birth 2', 'assets/images/uni2.jpg'),
(6, 'Guilty Gear Strive', 'assets/images/GG.jpg'),
(7, 'KOF XV', 'assets/images/KOF.jpg'),
(8, 'Marvel vs Capcom 2', 'assets/images/MVC2.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`),
  ADD KEY `game_id` (`game_id`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=106;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `characters`
--
ALTER TABLE `characters`
  ADD CONSTRAINT `characters_ibfk_1` FOREIGN KEY (`game_id`) REFERENCES `games` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
