import {Component, HostBinding, Input} from "@angular/core";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-screen',
  templateUrl: './screen.component.html',
  styleUrls: ['./screen.component.css'],
  imports: [
    NgIf
  ],
  standalone: true
})
export class ScreenComponent {

  @HostBinding('class.screen')
  private readonly hbClassScreen = true;

  @HostBinding('class.screen--with-footer')
  @Input() hasFooter: boolean = false;

}
