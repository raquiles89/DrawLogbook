import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineCanvasLogbookComponent } from './line-canvas-logbook.component';

describe('LineCanvasLogbookComponent', () => {
  let component: LineCanvasLogbookComponent;
  let fixture: ComponentFixture<LineCanvasLogbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineCanvasLogbookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineCanvasLogbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
