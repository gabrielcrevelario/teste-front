import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDetalhesComponent } from './dashboard-detalhes.component';

describe('DashboardDetalhesComponent', () => {
  let component: DashboardDetalhesComponent;
  let fixture: ComponentFixture<DashboardDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
