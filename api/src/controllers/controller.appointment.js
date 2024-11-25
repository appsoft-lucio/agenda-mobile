import serviceAppointment from "../service/service.appointment.js";

async function ListarByUser(req, res) {
  const user = req.id_user;
  console.log("ID do usuário:", user);
  try {
    const appointment = await serviceAppointment.ListarByUser(user);
    console.log("Dados retornados pelo serviço:", appointment);
    res.status(200).json(appointment);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar usuário" });
  }
}

export default { ListarByUser };
