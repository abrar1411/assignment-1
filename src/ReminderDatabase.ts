import { Reminder } from "./Reminder";

export class ReminderDatabase {
  private reminders: Map<string, Reminder> = new Map();

  createReminder(id: string, title: string, dueDate: Date, description?: string): void {
    if (this.reminders.has(id)) {
      throw new Error("Reminder with this ID already exists.");
    }
    this.reminders.set(id, { id, title, description, dueDate, completed: false });
  }

  exists(id: string): boolean {
    return this.reminders.has(id);
  }

  markReminderAsCompleted(id: string): void {
    const reminder = this.reminders.get(id);
    if (reminder) {
      reminder.completed = true;
    }
  }

  unmarkReminderAsCompleted(id: string): void {
    const reminder = this.reminders.get(id);
    if (reminder) {
      reminder.completed = false;
    }
  }

  getAllReminders(): Reminder[] {
    return Array.from(this.reminders.values());
  }

  getReminder(id: string): Reminder | null {
    return this.reminders.get(id) || null;
  }

  getAllRemindersMarkedAsCompleted(): Reminder[] {
    return this.getAllReminders().filter(reminder => reminder.completed);
  }

  getAllRemindersNotMarkedAsCompleted(): Reminder[] {
    return this.getAllReminders().filter(reminder => !reminder.completed);
  }

  getAllRemindersDueByToday(): Reminder[] {
    const today = new Date();
    return this.getAllReminders().filter(reminder => reminder.dueDate <= today);
  }

  updateReminder(id: string, title?: string, dueDate?: Date, description?: string): void {
    const reminder = this.reminders.get(id);
    if (reminder) {
      if (title) reminder.title = title;
      if (dueDate) reminder.dueDate = dueDate;
      if (description) reminder.description = description;
    }
  }

  removeReminder(id: string): void {
    this.reminders.delete(id);
  }
}
