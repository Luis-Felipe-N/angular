import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLvendasComponent } from './container-lvendas.component';

describe('ContainerLvendasComponent', () => {
  let component: ContainerLvendasComponent;
  let fixture: ComponentFixture<ContainerLvendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerLvendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerLvendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
