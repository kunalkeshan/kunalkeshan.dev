/**
 * Mailer Utility
 */

// Dependencies
import axios from "axios";
import { isProduction } from "../config";

axios.defaults.baseURL = isProduction
  ? "https://api.kunalkeshan.dev" // Replace this with your production URL
  : "http://localhost:5000"; // Replace this with your local server URL

export const sendContactMail = async (data: PortfolioContactMail) => {
  try {
    const response = await axios.post<{ message: string }>(
      "/api/contact/portfolio",
      data
    );
    if (response.status === 200) {
      return Promise.resolve();
    }
  } catch (error) {
    return Promise.reject();
  }
};
