import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderTopComponent } from "./components/header-top/header-top.component";
import { HeaderSectionComponent } from "./components/header-section/header-section.component";
import { OurServicesComponent } from "./components/our-services/our-services.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { IframeVideoComponent } from "./components/iframe-video/iframe-video.component";
import { WhatsappBtnComponent } from "./components/whatsapp-btn/whatsapp-btn.component";
import { MapComponent } from "./components/map/map.component";
import { ReviewsComponent } from "./components/reviews/reviews.component";
import { FooterComponent } from "./components/footer/footer.component";
import { ContactsComponent } from "./components/contacts/contacts.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderTopComponent, HeaderSectionComponent, OurServicesComponent, AboutUsComponent, IframeVideoComponent, WhatsappBtnComponent, MapComponent, ReviewsComponent, FooterComponent, ContactsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rommelefranco';
}
