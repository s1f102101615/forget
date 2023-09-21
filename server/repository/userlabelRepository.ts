import type { userlabelModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';

export const userlabelRepository = {
  save: async (userlabels: userlabelModel) => {
    // upsertを使って、useridが存在する場合は更新、存在しない場合は作成する
    await prismaClient.userlabel.upsert({
      where: {
        userid: userlabels.userid,
      },
      update: {
        label: userlabels.label,
      },
      create: {
        userid: userlabels.userid,
        label: userlabels.label,
      },
    });
  },
};
