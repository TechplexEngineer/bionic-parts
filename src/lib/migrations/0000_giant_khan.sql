CREATE TABLE `parts` (
	`id` integer PRIMARY KEY NOT NULL,
	`projectId` text,
	`onshapePartId` text NOT NULL,
	`onshapeReleasedVersion` text
);
--> statement-breakpoint
CREATE TABLE `projects` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`slug` text NOT NULL,
	`onshapeDocIds` blob,
	`mainAssembly` blob,
	`status` text
);
