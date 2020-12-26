import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeliviriesPage } from './deliviries.page';

describe('DeliviriesPage', () => {
  let component: DeliviriesPage;
  let fixture: ComponentFixture<DeliviriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliviriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeliviriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
