import {Component, signal} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'portfolio-floating-section',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="main-floating-section" 
       [style.height]="floatingHeight()"
       [style.width]="floatingWidth()"
       [style.background]="floatingBgColour()"
       [style.color]="floatingTextColour()"
  >
    I am a reusable floating section
  </div>
  `,
  styleUrl: './floating-section.component.scss',
})
export class FloatingSectionComponent {
  floatingHeight = signal("200px");
  floatingWidth= signal("80vw");
  floatingBgColour = signal("black");
  floatingTextColour = signal("#139d08");

  /* Setting above Signal values from each parent component, this is allowing custom values for each use case */
  setHeight(newHeight: string) {
    this.floatingHeight.set(newHeight)
  }

  setWidth(newWidth: string) {
    this.floatingWidth.set(newWidth)
  }

  setBgColour(newBgColour: string) {
    this.floatingBgColour.set(newBgColour)
  }

  setTextColour(newTextColour: string) {
    this.floatingTextColour.set(newTextColour)
  }
}