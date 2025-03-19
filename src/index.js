"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ReminderDatabase_1 = require("./ReminderDatabase");
var db = new ReminderDatabase_1.ReminderDatabase();
db.createReminder("1", "Submit Assignment", new Date("2025-03-11"), "Submit before 12:30 PM");
console.log("All Reminders:", db.getAllReminders());
console.log("Reminder with ID 1:", db.getReminder("1"));
db.markReminderAsCompleted("1");
console.log("Completed Reminders:", db.getAllRemindersMarkedAsCompleted());
