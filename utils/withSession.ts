import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
  NextApiHandler,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { ironOptions } from "../config";
import { Session, withIronSession } from "next-iron-session";

export type NextIronRequest = NextApiRequest & { session: Session };
type ServerSideContext = GetServerSidePropsContext & { req: NextIronRequest };

export type ApiHandler = (
  req: NextIronRequest,
  res: NextApiResponse
) => Promise<void>;

export type ServerSideHandler = (
  context: ServerSideContext
) => ReturnType<GetServerSideProps>;

// Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
export function withSession<T extends ApiHandler | ServerSideHandler>(
  handler: T
) {
  return withIronSession(handler, ironOptions);
}
