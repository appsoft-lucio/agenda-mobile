import repositoryUser from "../repository/repository.user.js";

async function Listar(id_user) {
  console.log("ID recebido no serviço:", id_user); // Log do ID recebido no serviço

  const appointments = await repositoryUser.Listar(id_user);
  console.log("Resultado da consulta no banco:", appointments); // Adicione esse log

  if (!appointments || appointments.length === 0) {
    console.log("Nenhum agendamento encontrado.");
  }

  return appointments;

  /*try {
    // Chama o repositório para buscar os agendamentos
    const appointments = await repositoryUser.Listar(id_user);
    console.log(
      "Dados de agendamentos retornados pelo repositório:",
      appointments
    ); // Log dos dados
    return appointments;
  } catch (error) {
    console.error("Erro ao buscar agendamentos no serviço:", error.message); // Log de erro
    throw error; // Propaga o erro para o controller
  }*/
}

export default { Listar };
