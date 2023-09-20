import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: {
      userid: string;
      id: number;
      itemname: string;
      itemvalue: number;
      createdAt: Date;
    }[];
  };
}>;
