-- CreateTable
CREATE TABLE `booking` (
    `booking_id` INTEGER NOT NULL,
    `customer_id` INTEGER NOT NULL,
    `screening_id` INTEGER NOT NULL,
    `num_tickets` INTEGER NOT NULL,
    `total_cost` DECIMAL(10, 2) NOT NULL,

    INDEX `customer_id`(`customer_id`),
    INDEX `screening_id`(`screening_id`),
    PRIMARY KEY (`booking_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer` (
    `customer_id` INTEGER NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(20) NOT NULL,

    PRIMARY KEY (`customer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `movie` (
    `movie_id` INTEGER NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `release_year` INTEGER NOT NULL,
    `genre` VARCHAR(255) NOT NULL,
    `director` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`movie_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `screening` (
    `screening_id` INTEGER NOT NULL,
    `movie_id` INTEGER NOT NULL,
    `start_time` DATETIME(0) NOT NULL,
    `theater_num` INTEGER NOT NULL,

    INDEX `movie_id`(`movie_id`),
    PRIMARY KEY (`screening_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `theater` (
    `theater_num` INTEGER NOT NULL,
    `capacity` INTEGER NOT NULL,
    `location` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`theater_num`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer`(`customer_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `booking` ADD CONSTRAINT `booking_ibfk_2` FOREIGN KEY (`screening_id`) REFERENCES `screening`(`screening_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `screening` ADD CONSTRAINT `screening_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `movie`(`movie_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
