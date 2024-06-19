import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true, optional: false, unique: true }),
    username: column.text({ unique: true, optional: false }),
    password: column.text({ optional: false }),
  }
})

const Session = defineTable({
  columns: {
    id: column.text({ primaryKey: true, optional: false, unique: true }),
    userId: column.text({ optional: false, references: () => User.column.id }),
    expiresAt: column.number({ optional: false }),
  }
})

export default defineDb({
  tables: {
    User,
    Session
  }
});
