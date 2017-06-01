USE dating_db;

ALTER TABLE `accounts` MODIFY COLUMN `createdAt` DATETIME NOT NULL DEFAULT NOW();
ALTER TABLE `accounts` MODIFY COLUMN `updatedAt` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW();

INSERT INTO accounts (username, password, email) VALUES ("brad", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "brad@brad.com");
INSERT INTO accounts (username, password, email) VALUES ("brian", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "brian@brian.com");
INSERT INTO accounts (username, password, email) VALUES ("chris", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "chris@chris.com");
INSERT INTO accounts (username, password, email) VALUES ("deon", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "deon@deon.com");
INSERT INTO accounts (username, password, email) VALUES ("elsa", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "elsa@elsa.com");
INSERT INTO accounts (username, password, email) VALUES ("emily", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "emily@emily.com");
INSERT INTO accounts (username, password, email) VALUES ("gary", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "gary@gary.com");
INSERT INTO accounts (username, password, email) VALUES ("hanna", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "hanna@hanna.com");
INSERT INTO accounts (username, password, email) VALUES ("jack", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "jack@jack.com");
INSERT INTO accounts (username, password, email) VALUES ("jackie", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "jackie@jackie.com");
INSERT INTO accounts (username, password, email) VALUES ("jane", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "jane@jane.com");
INSERT INTO accounts (username, password, email) VALUES ("jess", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "jess@jess.com");
INSERT INTO accounts (username, password, email) VALUES ("jill", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "jill@jill.com");
INSERT INTO accounts (username, password, email) VALUES ("kate", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "kate@kate.com");
INSERT INTO accounts (username, password, email) VALUES ("kelly", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "kelly@kelly.com");
INSERT INTO accounts (username, password, email) VALUES ("kerry", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "kerry@kerry.com");
INSERT INTO accounts (username, password, email) VALUES ("kevin", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "kevin@kevin.com");
INSERT INTO accounts (username, password, email) VALUES ("logan", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "logan@logan.com");
INSERT INTO accounts (username, password, email) VALUES ("lu", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "lu@lu.com");
INSERT INTO accounts (username, password, email) VALUES ("mary", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "mary@mary.com");
INSERT INTO accounts (username, password, email) VALUES ("micha", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "micha@micha.com");
INSERT INTO accounts (username, password, email) VALUES ("mike", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "mike@mike.com");
INSERT INTO accounts (username, password, email) VALUES ("nick", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "nick@nick.com");
INSERT INTO accounts (username, password, email) VALUES ("pat", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "pat@pat.com");
INSERT INTO accounts (username, password, email) VALUES ("paul", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "paul@paul.com");
INSERT INTO accounts (username, password, email) VALUES ("pete", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "pete@pete.com");
INSERT INTO accounts (username, password, email) VALUES ("pyra", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "pyra@pyra.com");
INSERT INTO accounts (username, password, email) VALUES ("rajiv", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "rajiv@rajiv.com");
INSERT INTO accounts (username, password, email) VALUES ("rob", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "rob@rob.com");
INSERT INTO accounts (username, password, email) VALUES ("sally", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "sally@sally.com");
INSERT INTO accounts (username, password, email) VALUES ("sam", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "sam@sam.com");
INSERT INTO accounts (username, password, email) VALUES ("sarah", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "sarah@sarah.com");
INSERT INTO accounts (username, password, email) VALUES ("steve", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "steve@steve.com");
INSERT INTO accounts (username, password, email) VALUES ("sue", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "sue@sue.com");
INSERT INTO accounts (username, password, email) VALUES ("sun", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "sun@sun.com");
INSERT INTO accounts (username, password, email) VALUES ("wendy", "$2a$08$0GC42meg9rebqGfcgfu3h.KGeGH/42ez.1mxZw/6VDf0GvXCgvcpy", "wendy@wendy.com");
