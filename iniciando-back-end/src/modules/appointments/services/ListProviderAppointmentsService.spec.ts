import ListProviderAppointmentsService from './ListProviderAppointmentsService';
import FakeAppointemnetsRepository from '../repositories/fakes/FakeAppointmentRepository';

let fakeAppointemnetsRepository: FakeAppointemnetsRepository;
let listProviderAppointments: ListProviderAppointmentsService;

describe('ListProviderAppointments', () => {
  beforeEach(() => {
    fakeAppointemnetsRepository = new FakeAppointemnetsRepository();
    listProviderAppointments = new ListProviderAppointmentsService(
      fakeAppointemnetsRepository,
    );
  });
  it('should be able show to list the appointments on a specific day', async () => {
    const appointemt1 = await fakeAppointemnetsRepository.create({
      provider_id: 'provider',
      user_id: 'user',
      date: new Date(2020, 4, 20, 14, 0, 0),
    });

    const appointemt2 = await fakeAppointemnetsRepository.create({
      provider_id: 'provider',
      user_id: 'user',
      date: new Date(2020, 4, 20, 15, 0, 0),
    });

    jest.spyOn(Date, 'now').mockImplementationOnce(() => {
      return new Date(2020, 4, 20, 11).getTime();
    });

    const appointments = await listProviderAppointments.execute({
      provider_id: 'provider',
      year: 2020,
      month: 5,
      day: 20,
    });

    expect(appointments).toEqual([appointemt1, appointemt2]);
  });
});
