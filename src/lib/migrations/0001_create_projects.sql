CREATE TABLE `projects` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`onshapePartId` text NOT NULL,
	`onshapeDocIds` blob,
	`mainAssembly` blob,
	`status` text
);
