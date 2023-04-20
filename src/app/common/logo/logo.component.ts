import {Component, HostBinding} from "@angular/core";

@Component({
  selector: '[app-logo]',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css'],
  standalone: true
})
export class LogoComponent {

  @HostBinding('class.logo')
  private readonly hbClassLogo = true
}
