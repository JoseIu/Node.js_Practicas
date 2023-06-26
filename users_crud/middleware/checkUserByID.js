import { USERS } from '../user_DB.js';

const checkUserByID = (req, res, next) => {
  console.log(req.params);
  const { id } = req.params;
  const userExist = USERS.some((user) => user.id === id);

  if (!userExist) return res.status(404).json({ status: 'Bad request', msg: 'El usuario no existe' });
  next();
};

export default checkUserByID;
