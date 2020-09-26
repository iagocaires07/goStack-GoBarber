import Appointments from '../infra/typeorm/entities/Appointment';
import ICreateAppointmentsDTO from '../dtos/ICreateAppointmentsDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateAppointmentsDTO): Promise<Appointments>;
  findByDate(date: Date): Promise<Appointments | undefined>;
}
