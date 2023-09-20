import type { ItemModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';

export const itemRepository = {
  save: async (item: ItemModel) => {
    await prismaClient.item.create({
      data: {
        id: item.id,
        itemname: item.itemname,
        itemvalue: item.itemvalue,
        createdAt: item.createdAt,
      },
    });
  },
};
