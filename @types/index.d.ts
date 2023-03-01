import * as IronSession from "iron-session";

type Required<T, K extends keyof T> = T & { [P in K]-?: T[P] };

type WithRequired<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> &
  Required<T, K>;

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      admin?: boolean;
    };
  }
}
