import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbenComponent } from './alben.component';

describe('AlbenComponent', () => {
  let component: AlbenComponent;
  let fixture: ComponentFixture<AlbenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlbenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
