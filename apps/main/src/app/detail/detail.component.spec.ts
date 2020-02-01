import { DetailComponent } from './detail.component';
import { createHostComponentFactory, SpectatorWithHost } from '@netbasal/spectator/jest';

describe('DetailComponent', () => {
  let host: SpectatorWithHost<DetailComponent>;
  const createHost = createHostComponentFactory(DetailComponent);

  it('should create', () => {
    host = createHost(`<nws-detail type="1"></nws-detail>`);
    expect(host.component).toBeTruthy();
  });

  it('should contain text Case 0', () => {
    host = createHost(`<nws-detail type="0"></nws-detail>`);
    expect(host.query('p')).toHaveText('Case 0');
  });

  it('should contain text Default', () => {
    host = createHost(`<nws-detail type="10"></nws-detail>`);
    expect(host.query('p')).toHaveText('Default');
  });
});
