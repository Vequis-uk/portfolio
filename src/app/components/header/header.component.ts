import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'portfolio-header',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  template: `
    <div class="header-main-section">
      <div class="header-main-logo-container">
        <img class="header-main-logo" ngSrc="../../../assets/images/david-logo.png" alt="David Bonser Logo" height="288" width="457">
      </div>
    </div>
  `,
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
