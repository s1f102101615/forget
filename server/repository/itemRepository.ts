import type { UserId } from '$/commonTypesWithClient/ids';
import type { ItemModel } from '$/commonTypesWithClient/models';
import { prismaClient } from '$/service/prismaClient';

export const itemRepository = {
  save: async (item: ItemModel) => {
    await prismaClient.item.create({
      data: {
        userid: item.userid,
        itemname: item.itemname,
        itemvalue: item.itemvalue,
        createdAt: item.createdAt,
      },
    });
  },
  getitems: async (userid: UserId) => {
    // dbのUserDataのinvolvedidのリストから約束の情報を返す
    const items = await prismaClient.item.findMany({
      where: {
        userid,
      },
    });
    return items;
  },
};
