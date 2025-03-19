"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReminderDatabase = void 0;
var ReminderDatabase = /** @class */ (function () {
    function ReminderDatabase() {
        this.reminders = new Map();
    }
    ReminderDatabase.prototype.createReminder = function (id, title, dueDate, description) {
        if (this.reminders.has(id)) {
            throw new Error("Reminder with this ID already exists.");
        }
        this.reminders.set(id, { id: id, title: title, description: description, dueDate: dueDate, completed: false });
    };
    ReminderDatabase.prototype.exists = function (id) {
        return this.reminders.has(id);
    };
    ReminderDatabase.prototype.markReminderAsCompleted = function (id) {
        var reminder = this.reminders.get(id);
        if (reminder) {
            reminder.completed = true;
        }
    };
    ReminderDatabase.prototype.unmarkReminderAsCompleted = function (id) {
        var reminder = this.reminders.get(id);
        if (reminder) {
            reminder.completed = false;
        }
    };
    ReminderDatabase.prototype.getAllReminders = function () {
        return Array.from(this.reminders.values());
    };
    ReminderDatabase.prototype.getReminder = function (id) {
        return this.reminders.get(id) || null;
    };
    ReminderDatabase.prototype.getAllRemindersMarkedAsCompleted = function () {
        return this.getAllReminders().filter(function (reminder) { return reminder.completed; });
    };
    ReminderDatabase.prototype.getAllRemindersNotMarkedAsCompleted = function () {
        return this.getAllReminders().filter(function (reminder) { return !reminder.completed; });
    };
    ReminderDatabase.prototype.getAllRemindersDueByToday = function () {
        var today = new Date();
        return this.getAllReminders().filter(function (reminder) { return reminder.dueDate <= today; });
    };
    ReminderDatabase.prototype.updateReminder = function (id, title, dueDate, description) {
        var reminder = this.reminders.get(id);
        if (reminder) {
            if (title)
                reminder.title = title;
            if (dueDate)
                reminder.dueDate = dueDate;
            if (description)
                reminder.description = description;
        }
    };
    ReminderDatabase.prototype.removeReminder = function (id) {
        this.reminders.delete(id);
    };
    return ReminderDatabase;
}());
exports.ReminderDatabase = ReminderDatabase;
