import serviceUser from "../service/service.user.js";

async function Inserir(req, res) {
  const { name, email, password } = req.body;

  try {
    const user = await serviceUser.Inserir(name, email, password);
    return res.status(201).json(user); // Sucesso
  } catch (error) {
    // Retorna erro específico para o cliente
    return res.status(400).json({ error: error.message });
  }
}

async function Login(req, res) {
  const { email, password } = req.body;

  const user = await serviceUser.Login(email, password);
  if (user.length == 0)
    return res.status(401).json({ error: "E-mail ou senha iválidos" });
  else res.status(200).json(user);
}

export default { Inserir, Login };
