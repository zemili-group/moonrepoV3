import { z } from "npm:zod"

export const UserStatsModel = z.object({
  id: z.string(),
  total_users: z.number().int().nonnegative(), // registered users
  active_users: z.number().int().nonnegative().optional(), // active users
  users_by_role: z.record(z.string(), z.number().int().nonnegative())
    .optional(), // users by role
  verified_users: z.number().int().nonnegative().optional(),
  unverified_users: z.number().int().nonnegative().optional(),
  average_age: z.number().nonnegative().optional(),
  last_updated: z.string().datetime().optional(),
})

export type UserStats = z.infer<typeof UserStatsModel>

export const DraftLogTotalsModel = z.object({
  id: z.string(),
  user_id: z.string().uuid(),
  total_dive_hours: z.number().nonnegative(),
  total_depth: z.number().nonnegative(),
  total_logs: z.number().int().nonnegative(),
  equipment_usage: z.record(z.string(), z.number().int().nonnegative()),
  last_updated: z.string().datetime(),
})

export type DraftLogTotals = z.infer<typeof DraftLogTotalsModel>
