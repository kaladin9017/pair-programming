import config from '../config';

/**
 * Use email + password to create user
 * @param {*} req
 * @param {*} res
 */
export const signup = async (req, res) => {
  try {
  } catch (e) {
    return res.status(500).end();
  }
};

/**
 * Use email + password to authenticate user
 * @param {*} req
 * @param {*} res
 */
export const signin = async (req, res) => {
  try {
  } catch (e) {
    console.error(e);
    res.status(500).end();
  }
};

/**
 * Protect routes
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const protect = async (req, res, next) => {};
