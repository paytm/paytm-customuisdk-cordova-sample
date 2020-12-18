import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpiIntentPage } from './upi-intent.page';

describe('UpiIntentPage', () => {
  let component: UpiIntentPage;
  let fixture: ComponentFixture<UpiIntentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpiIntentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpiIntentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
