import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FloatingSectionComponent } from './floating-section.component';

describe('FloatingSectionComponent', () => {
  let component: FloatingSectionComponent;
  let fixture: ComponentFixture<FloatingSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FloatingSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FloatingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
