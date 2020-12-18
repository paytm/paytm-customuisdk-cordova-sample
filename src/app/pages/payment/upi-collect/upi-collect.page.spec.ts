import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpiCollectPage } from './upi-collect.page';

describe('UpiCollectPage', () => {
  let component: UpiCollectPage;
  let fixture: ComponentFixture<UpiCollectPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpiCollectPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpiCollectPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
