import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotSpaceInvadersComponent } from './not-space-invaders.component';

describe('NotSpaceInvadersComponent', () => {
  let component: NotSpaceInvadersComponent;
  let fixture: ComponentFixture<NotSpaceInvadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotSpaceInvadersComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NotSpaceInvadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
