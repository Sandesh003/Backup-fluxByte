import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicContactComponent } from './basic-contact.component';

describe('BasicContactComponent', () => {
  let component: BasicContactComponent;
  let fixture: ComponentFixture<BasicContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
