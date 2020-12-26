import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AssembliesPage } from './assemblies.page';

describe('AssembliesPage', () => {
  let component: AssembliesPage;
  let fixture: ComponentFixture<AssembliesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssembliesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AssembliesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
