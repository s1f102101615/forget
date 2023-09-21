import { userlabelUsecase } from '$/Usecase/userlabelUsecase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: 'Hello' }),
  post: async ({ user, body }) => ({
    status: 200,
    body: await userlabelUsecase.create(user.id, body.label),
  }),
}));
