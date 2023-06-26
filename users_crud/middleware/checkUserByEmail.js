import { USERS } from '../user_DB.js';

const checkUserByEmail = (req, res, next) => {
  const { email } = req.body;
  const userExist = USERS.find((user) => user.email === email);

  if (userExist) return res.status(404).json({ status: 'Bad request', msg: 'El usuario ya existe' });

  next();
};

export default checkUserByEmail;
