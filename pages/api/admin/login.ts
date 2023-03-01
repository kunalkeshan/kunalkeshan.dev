import { withSessionRoute } from "../../../utils/withSession";
import { NextApiRequest, NextApiResponse } from "next";
import { z } from "zod";
import ApiError from "../../../utils/apiError";

export default withSessionRoute(
  async (req: NextApiRequest, res: NextApiResponse) => {
    switch (req.method) {
      case "POST": {
        return await loginRoute(req, res);
      }
    }
  }
);

const loginBodySchema = z.string();

interface LoginAdminApiRequest extends NextApiRequest {
  body: {
    password: z.infer<typeof loginBodySchema>;
  };
}

async function loginRoute(req: LoginAdminApiRequest, res: NextApiResponse) {
  try {
    const { password } = req.body;
    const valid = loginBodySchema.safeParse(password);
    if (!valid.success)
      throw new ApiError({
        statusCode: 400,
        message: "admin/invalid-password-type",
      });
    const validPassword = password! === process.env.ADMIN_PASSWORD!;
    if (!validPassword)
      throw new ApiError({
        statusCode: 401,
        message: "admin/wrong-password",
      });
    req.session = { ...req.session, user: { admin: true } };
    await req.session.save();
    return res.status(200).json({ ok: true });
  } catch (error) {
    if (error instanceof ApiError) {
      return res
        .status(error.statusCode)
        .json({ message: error.message, data: error.data });
    } else {
      return res.status(500).json({ message: "app/internal-server-error" });
    }
  }
}
