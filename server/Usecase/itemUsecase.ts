import type { ItemModel } from '$/commonTypesWithClient/models';
import { itemRepository } from '$/repository/itemRepository';

export const itemUsecase = {
  create: async (
    userid: ItemModel['userid'],
    itemname: ItemModel['itemname'],
    itemvalue: ItemModel['itemvalue'],
    createdAt: ItemModel['createdAt']
  ) => {
    const item: ItemModel = {
      userid,
      id: Math.floor(Math.random() * 100000000),
      itemname,
      itemvalue,
      createdAt,
    };
    await itemRepository.save(item);

    return 'ok';
  },
};
