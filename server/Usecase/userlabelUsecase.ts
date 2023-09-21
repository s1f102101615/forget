import type { userlabelModel } from '$/commonTypesWithClient/models';
import { userlabelRepository } from '$/repository/userlabelRepository';

export const userlabelUsecase = {
  create: async (userid: userlabelModel['userid'], label: userlabelModel['label']) => {
    const userlabels = {
      userid,
      label,
    };
    await userlabelRepository.save(userlabels);

    return 'ok';
  },
};
