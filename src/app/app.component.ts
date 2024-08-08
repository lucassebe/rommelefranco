import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderTopComponent } from "./components/header-top/header-top.component";
import { HeaderSectionComponent } from "./components/header-section/header-section.component";
import { OurServicesComponent } from "./components/our-services/our-services.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { IframeVideoComponent } from "./components/iframe-video/iframe-video.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderTopComponent, HeaderSectionComponent, OurServicesComponent, AboutUsComponent, IframeVideoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rommelefranco';
}
