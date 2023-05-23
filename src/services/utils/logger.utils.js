/* eslint-disable no-console */

const logger = {
  Response: message => {
    console.log(`[Response]${message}`);
  },
  error: message => {
    console.error(`[Response] ${message}`);
  }
};

module.exports = { logger };
