import ListProviderDayAvailabilityService from './ListProviderDayAvailabilityService';
import FakeAppointemnetsRepository from '../repositories/fakes/FakeAppointmentRepository';

let listProviderDayAvalibility: ListProviderDayAvailabilityService;
let fakeAppointemnetsRepository: FakeAppointemnetsRepository;

describe('ListProviderMonthAvailability', () => {
  beforeEach(() => {
    fakeAppointemnetsRepository = new FakeAppointemnetsRepository();
    listProviderDayAvalibility = new ListProviderDayAvailabilityService(
      fakeAppointemnetsRepository,
    );
  });
  it('should be able show to list the day availability from provider', async () => {
    await fakeAppointemnetsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 8, 0, 0),
    });

    await fakeAppointemnetsRepository.create({
      provider_id: 'user',
      date: new Date(2020, 4, 20, 10, 0, 0),
    });

    const availability = await listProviderDayAvalibility.execute({
      provider_id: 'user',
      yaer: 2020,
      month: 5,
      day: 20,
    });

    expect(availability).toEqual(
      expect.arrayContaining([
        { hour: 8, available: false },
        { hour: 9, available: true },
        { hour: 10, available: false },
        { hour: 11, available: true },
      ]),
    );
  });
});
