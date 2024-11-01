import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FloatingSectionComponent} from "../floating-section/floating-section.component";
import { NotSpaceInvadersComponent } from '../not-space-invaders/not-space-invaders.component';

@Component({
  selector: 'portfolio-top-section',
  standalone: true,
  imports: [CommonModule, FloatingSectionComponent, NotSpaceInvadersComponent],
  template: `
  <div class="top-section-main-container">
    <portfolio-floating-section>
      <portfolio-not-space-invaders></portfolio-not-space-invaders>
    </portfolio-floating-section>
  </div>
  `,
  styleUrl: './top-section.component.scss',
})
export class TopSectionComponent implements AfterViewInit {
  @ViewChild(FloatingSectionComponent) localFloatingSection!: FloatingSectionComponent;

  ngAfterViewInit() {
    this.localFloatingSection.setHeight("500px")
    this.localFloatingSection.setWidth("80vw")
    this.localFloatingSection.setBgColour("black")
    this.localFloatingSection.setTextColour("80vw")
  }
}
