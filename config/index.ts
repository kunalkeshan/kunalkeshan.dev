/**
 * Application Configuration
 */

// Dependencies
import { SessionOptions } from "next-iron-session";

export const isProduction = process.env.NODE_ENV === "production";

export const IMAGE_SOURCE = {
  PROFILE_IMAGE:
    "https://res.cloudinary.com/kunalkeshan/image/upload/v1674944977/Portfolio/profile-pic-kunal-keshan.png",
  ART_IMAGE:
    "https://res.cloudinary.com/kunalkeshan/image/upload/v1675069234/Portfolio/art-pic-kunal-keshan.jpg",
};

export const ironOptions: SessionOptions = {
  cookieName: "kunalkeshan.dev_admin_auth_cookie",
  password: process.env.IRON_SESSION_COOKIE_PASSWORD!,
  ...(isProduction && { secure: true }),
  cookieOptions: {
    secure: isProduction,
  },
};
