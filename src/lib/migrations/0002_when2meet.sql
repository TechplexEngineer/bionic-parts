CREATE TABLE `w2m_events` (
  `id` TEXT PRIMARY KEY NOT NULL,
  `slug` TEXT NOT NULL UNIQUE,
  `organizer_token` TEXT NOT NULL UNIQUE,
  `title` TEXT NOT NULL,
  `description` TEXT,
  `mode` TEXT NOT NULL CHECK(mode IN ('specific_dates','days_of_week')),
  `timezone` TEXT NOT NULL,
  `start_time_minutes` INTEGER NOT NULL,
  `end_time_minutes` INTEGER NOT NULL,
  `slot_interval_minutes` INTEGER NOT NULL DEFAULT 15,
  `status` TEXT NOT NULL DEFAULT 'active' CHECK(status IN ('active','locked','deleted')),
  `created_at` INTEGER NOT NULL,
  `updated_at` INTEGER NOT NULL
);

CREATE TABLE `w2m_event_dates` (
  `event_id` TEXT NOT NULL,
  `date_iso` TEXT NOT NULL,
  PRIMARY KEY (`event_id`, `date_iso`),
  FOREIGN KEY (`event_id`) REFERENCES `w2m_events`(`id`) ON DELETE CASCADE
);

CREATE TABLE `w2m_event_weekdays` (
  `event_id` TEXT NOT NULL,
  `weekday` INTEGER NOT NULL CHECK(weekday BETWEEN 0 AND 6),
  PRIMARY KEY (`event_id`, `weekday`),
  FOREIGN KEY (`event_id`) REFERENCES `w2m_events`(`id`) ON DELETE CASCADE
);

CREATE TABLE `w2m_participants` (
  `id` TEXT PRIMARY KEY NOT NULL,
  `event_id` TEXT NOT NULL,
  `display_name` TEXT NOT NULL,
  `display_name_normalized` TEXT NOT NULL,
  `edit_token` TEXT NOT NULL UNIQUE,
  `created_at` INTEGER NOT NULL,
  `updated_at` INTEGER NOT NULL,
  `last_seen_at` INTEGER NOT NULL,
  UNIQUE(`event_id`, `display_name_normalized`),
  FOREIGN KEY (`event_id`) REFERENCES `w2m_events`(`id`) ON DELETE CASCADE
);

CREATE TABLE `w2m_availability_slots` (
  `event_id` TEXT NOT NULL,
  `participant_id` TEXT NOT NULL,
  `column_key` TEXT NOT NULL,
  `slot_index` INTEGER NOT NULL,
  `created_at` INTEGER NOT NULL,
  PRIMARY KEY (`participant_id`, `column_key`, `slot_index`),
  FOREIGN KEY (`event_id`) REFERENCES `w2m_events`(`id`) ON DELETE CASCADE,
  FOREIGN KEY (`participant_id`) REFERENCES `w2m_participants`(`id`) ON DELETE CASCADE
);

CREATE INDEX `idx_w2m_participants_event_id` ON `w2m_participants`(`event_id`);
CREATE INDEX `idx_w2m_availability_event_id` ON `w2m_availability_slots`(`event_id`);
CREATE INDEX `idx_w2m_availability_event_column_slot` ON `w2m_availability_slots`(`event_id`, `column_key`, `slot_index`);
CREATE INDEX `idx_w2m_event_dates_event_id` ON `w2m_event_dates`(`event_id`);
CREATE INDEX `idx_w2m_event_weekdays_event_id` ON `w2m_event_weekdays`(`event_id`);
