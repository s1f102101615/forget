import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ user, body }) => ({
    status: 200,
    body: await itemUsecase.create(user.id, body.itemname, body.itemvalue, body.createdAt),
  }),
}));
