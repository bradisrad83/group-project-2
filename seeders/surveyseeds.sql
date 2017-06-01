use dating_db;

ALTER TABLE `Surveys` MODIFY COLUMN `createdAt` DATETIME NOT NULL DEFAULT NOW();
ALTER TABLE `Surveys` MODIFY COLUMN `updatedAt` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW();

INSERT INTO Survey (title, description) VALUES ("basic survey", "this is our first survey");
