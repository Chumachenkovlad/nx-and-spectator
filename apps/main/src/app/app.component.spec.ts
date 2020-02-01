import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Spectator, createComponentFactory } from '@ngneat/spectator/jest';


describe('AppComponent', () => {
  let spectator: Spectator<AppComponent>;
  const createComponent = createComponentFactory(AppComponent);

  beforeEach(() => spectator = createComponent());

  it('should create the app', () => {
    expect(spectator.component).toBeTruthy();
  });

  it(`should have as title 'main'`, () => {
    expect(spectator.component.title).toEqual('main');
  });

  it('should render title', () => {
    expect(spectator.query('h1')).toHaveText('Welcome to main!')
  });
});
