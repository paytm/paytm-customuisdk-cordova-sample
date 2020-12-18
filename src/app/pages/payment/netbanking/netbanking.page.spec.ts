import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NetbankingPage } from './netbanking.page';

describe('NetbankingPage', () => {
  let component: NetbankingPage;
  let fixture: ComponentFixture<NetbankingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetbankingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NetbankingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
