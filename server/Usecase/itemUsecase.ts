import type { ItemModel } from '$/commonTypesWithClient/models';
import { itemRepository } from '$/repository/itemRepository';

export const itemUsecase = {
  create: async (
    id: ItemModel['id'],
    itemname: ItemModel['itemname'],
    itemvalue: ItemModel['itemvalue'],
    createdAt: ItemModel['createdAt']
  ) => {
    const item: ItemModel = {
      id,
      itemname,
      itemvalue,
      createdAt,
    };
    await itemRepository.save(item);

    return 'ok';
  },
};
