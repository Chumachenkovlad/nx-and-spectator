import { Spectator, createComponentFactory, mockProvider } from '@ngneat/spectator/jest';

import { ItemComponent } from './item.component';
import { TestService } from '../test.service';
import { of } from 'rxjs';

describe('ItemComponent', () => {
  let spectator: Spectator<ItemComponent>;
  const createComponent = createComponentFactory({
    component: ItemComponent,
    providers: [
      mockProvider(TestService, {
        getData: jest.fn(() => of('Mocked Data'))
      })
    ]
  });

  beforeEach(() => spectator = createComponent());

  it('should create', () => {


    expect(spectator.component).toBeTruthy();
  });

  it('should contain title with text "other"', () => {
    expect(spectator.query('h1')).toHaveText('other');
  });

  it('should trigger output on click button-1', () => {
    jest.spyOn(spectator.component.buttonClicked, 'emit');
    const button1 = spectator.query('.button-1');
    spectator.dispatchMouseEvent(button1, 'click');
    expect(spectator.component.buttonClicked.emit).toHaveBeenCalled();
  });

  it('should update title after click on button-2', async () => {
    const button2 = spectator.query('.button-2');
    spectator.dispatchMouseEvent(button2, 'click');

    await spectator.fixture.whenStable();

    expect(spectator.query('h1')).toHaveText('Mocked Data')
  });
});
