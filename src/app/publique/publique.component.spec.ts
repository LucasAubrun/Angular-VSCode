import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliqueComponent } from './publique.component';

describe('PubliqueComponent', () => {
  let component: PubliqueComponent;
  let fixture: ComponentFixture<PubliqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubliqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubliqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
