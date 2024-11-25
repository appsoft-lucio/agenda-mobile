import repoUser from "../repository/repository.user.js";
import bcrypt from "bcrypt";
import jwt from "../token.js";

async function Inserir(name, email, password) {
  // Validações de entrada
  if (!name || !email || !password) {
    throw new Error("Todos os campos são obrigatórios.");
  }

  // Validação simples do formato do e-mail
  if (!email.includes("@") || !email.includes(".")) {
    throw new Error("Formato de e-mail inválido.");
  }

  // Verifica se o e-mail já está cadastrado
  const existingUser = await repoUser.ListarByEmail(email);
  if (existingUser) {
    throw new Error("E-mail já está cadastrado.");
  }

  // Criptografa a senha
  const hashPassword = await bcrypt.hash(password, 10);

  // Insere o usuário no repositório
  const user = await repoUser.Inserir(name, email, hashPassword);

  console.log("ID do usuário para criar token:", user.id_user);
  user.token = jwt.CreateToken(user.id_user);

  return user;
}

async function Login(email, password) {
  const user = await repoUser.ListarByEmail(email);
  if (!user) return []; // Corrigido para verificar `null` ou `undefined`

  if (await bcrypt.compare(password, user.password)) {
    console.log("ID do usuário para o token:", user.id_user);
    const token = jwt.CreateToken(user.id_user); // Cria o token antes de excluir
    delete user.password; // Remove o password por segurança
    user.token = token; // Adiciona o token ao objeto
    return user; // Retorna o usuário com o token
  } else {
    return [];
  }
}

export default { Inserir, Login };
