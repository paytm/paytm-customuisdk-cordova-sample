import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SaveCardPage } from './save-card.page';

describe('SaveCardPage', () => {
  let component: SaveCardPage;
  let fixture: ComponentFixture<SaveCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SaveCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
