CREATE TABLE `projects` (
	`id` integer PRIMARY KEY NOT NULL,
	`slug` text NOT NULL,
	`name` text NOT NULL,
	`data` text
);
--> statement-breakpoint
CREATE UNIQUE INDEX `slugUniqueIdx` ON `projects` (`slug`);