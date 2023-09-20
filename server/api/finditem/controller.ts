import { itemRepository } from '$/repository/itemRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ user }) => ({ status: 200, body: await itemRepository.getitems(user.id) }),
}));
