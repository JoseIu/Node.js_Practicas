import { USERS } from '../user_DB.js';
const getUsers = (req, res) => {
  res.status(200).json({ status: 'okey', USERS });
};

const getUser = (req, res) => {
  const { id } = req.params;

  const userFinded = USERS.find((user) => user.id === id);

  if (!userFinded) return res.status(400).json({ status: 'NOT FOUND' });

  return res.status(200).json({ status: 'OK', user: userFinded });
};

const addUser = (req, res) => {
  const { id, nombre, edad, email, telefono, direccion } = req.body;

  if ([id, nombre, edad, email, telefono, direccion].includes('')) {
    return res.status(404).json({ status: 'Bad request', msg: 'Todos los campos son obligatios' });
  }

  USERS.push(req.body);

  return res.status(200).json({ status: 'OK', msg: 'Agregado correctamente' });
};

const upDateUser = (req, res) => {
  const { id } = req.params;

  const user = USERS.find((user) => user.id === id);
  const usertoUpdate = req.body;

  // Verificar si los campos enviados coinciden con los campos esperados
  const expectedFields = ['nombre', 'apellido', 'edad', 'email', 'telefono', 'direccion'];
  const receivedFields = Object.keys(usertoUpdate);

  const fieldsMatch = expectedFields.every((field) => receivedFields.includes(field));

  if (!fieldsMatch) return res.status(400).json({ status: 'Bad request', msg: 'Los campos no coinciden' });

  console.log(usertoUpdate);
  user.nombre = usertoUpdate.nombre;
  user.apellido = usertoUpdate.apellido;
  user.edad = usertoUpdate.edad;
  user.email = usertoUpdate.email;
  user.telefono = usertoUpdate.telefono;
  user.direccion = usertoUpdate.direccion;
  console.log(user);

  res.status(200).json({ staus: 'OK', smg: 'Usuario modificado correctamente', user });
};

export { addUser, getUser, getUsers, upDateUser };
