import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLvendasComponent } from './header-lvendas.component';

describe('HeaderLvendasComponent', () => {
  let component: HeaderLvendasComponent;
  let fixture: ComponentFixture<HeaderLvendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderLvendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderLvendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
