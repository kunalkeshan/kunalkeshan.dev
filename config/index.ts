/**
 * Application Configuration
 */

// Dependencies

const isProduction = process.env.NODE_ENV === "production";

// Configuration Object
const configuration = {
  isProduction,
};

export default configuration;
