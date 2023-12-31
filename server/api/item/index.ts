import type { DefineMethods } from 'aspida';

export type Methods = DefineMethods<{
  get: {
    resBody: string;
  };
  post: {
    reqBody: {
      itemname: string;
      itemvalue: number;
      createdAt: Date;
    };
  };
}>;
