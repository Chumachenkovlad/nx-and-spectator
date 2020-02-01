import { createRoutingFactory, SpectatorRouting } from '@ngneat/spectator/jest';

import { PageComponentComponent } from './page-component.component';

describe('PageComponentComponent', () => {
  let spectator: SpectatorRouting<PageComponentComponent>;
  const createComponent = createRoutingFactory({
    component: PageComponentComponent,
    data: {
      title: 'mocked data'
    }
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {
    expect(spectator.component).toBeTruthy();
  });

  it('should set title form mocked routed', () => {
    expect(spectator.query('h1')).toHaveText('mocked data');
  });

  it('title should be updated after routing changes', async () => {
    spectator.setRouteData('title', 'new data');

    await spectator.fixture.whenStable();
    expect(spectator.query('h1')).toHaveText('new data');
  });




});
