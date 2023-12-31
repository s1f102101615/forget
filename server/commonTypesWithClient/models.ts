import { z } from 'zod';
import { taskIdParser } from '../service/idParsers';
import type { UserId } from './ids';

export type UserModel = {
  id: UserId;
  email: string;
  displayName: string | undefined;
  photoURL: string | undefined;
};

export const taskParser = z.object({
  id: taskIdParser,
  label: z.string(),
  done: z.boolean(),
  created: z.number(),
});

export type TaskModel = z.infer<typeof taskParser>;

export type ItemModel = {
  userid: UserId;
  id: number;
  itemname: string;
  itemvalue: number;
  createdAt: Date;
};

export type userlabelModel = {
  userid: UserId;
  label: string[];
};
