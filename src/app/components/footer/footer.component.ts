import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'portfolio-footer',
  standalone: true,
  imports: [CommonModule],
  template: `<p>footer works!</p>`,
  styleUrl: './footer.component.scss',
})
export class FooterComponent {}
