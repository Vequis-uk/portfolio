import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {FooterComponent} from "./components/footer/footer.component";
import {TopSectionComponent} from "./components/top-section/top-section.component";
import {MiddleSectionComponent} from "./components/middle-section/middle-section.component";
import {BottomSectionComponent} from "./components/bottom-section/bottom-section.component";

@Component({
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent, TopSectionComponent, MiddleSectionComponent, BottomSectionComponent],
  selector: 'portfolio-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}
