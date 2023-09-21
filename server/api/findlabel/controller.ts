import { userlabelRepository } from '$/repository/userlabelRepository';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async ({ user }) => ({ status: 200, body: await userlabelRepository.getlabels(user.id) }),
}));
