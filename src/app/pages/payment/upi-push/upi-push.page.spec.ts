import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpiPushPage } from './upi-push.page';

describe('UpiPushPage', () => {
  let component: UpiPushPage;
  let fixture: ComponentFixture<UpiPushPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpiPushPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpiPushPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
