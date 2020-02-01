import { TestService } from './test.service';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator/jest';

describe('Service: Test', () => {
  let spectator: SpectatorService<TestService>;
  const createService = createServiceFactory(TestService);

  beforeEach(() => spectator = createService());

  it('should have method getData', () => {
    expect(spectator.service.getData).toBeDefined()
  });
});
