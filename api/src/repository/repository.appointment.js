import { query } from "../database/sqlite.js";

async function Listar(id_user) {
  console.log("ID recebido no repositório:", id_user); // Log do ID

  const sql = `
    SELECT a.id_appointment, s.description as service, d.name as doctor, d.specialty, 
           a.booking_date, a.booking_hour, u.name as user, ds.price
    FROM appointments a
    JOIN services s on (s.id_service = a.id_service)
    JOIN doctors d on (d.id_doctor = a.id_doctor)
    JOIN users u on (u.id_user = a.id_user)
    JOIN doctors_services ds on (ds.id_doctor = a.id_doctor AND ds.id_service = a.id_service)
    WHERE a.id_user = ?
    ORDER BY a.booking_date, a.booking_hour
  `;

  try {
    const appointments = await query(sql, [id_user]);
    console.log("Resultado da query no repositório:", appointments); // Log do resultado
    return appointments;
  } catch (error) {
    console.error("Erro no repositório ao executar query:", error.message); // Log do erro
    throw error;
  }
}

export default { Listar };
