import { withSession, NextIronRequest } from "../../../utils/withSession";
import { NextApiResponse } from "next";

export default withSession(loginRoute);

async function loginRoute(req: NextIronRequest, res: NextApiResponse) {
  // get user from database then:
  req.session.user = {
    id: 230,
    admin: true,
  };
  await req.session.save();
  return res.send({ ok: true });
}
