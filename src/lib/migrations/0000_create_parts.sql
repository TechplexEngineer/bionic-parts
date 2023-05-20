CREATE TABLE `parts` (
	`id` integer PRIMARY KEY NOT NULL,
	`projectId` text,
	`onshapePartId` text NOT NULL,
	`onshapeReleasedVersion` text
);
