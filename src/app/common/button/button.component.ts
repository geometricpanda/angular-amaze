import {Component, HostBinding, HostListener} from "@angular/core";

@Component({
  selector: 'a[app-button],button[app-button]',
  styleUrls: ['./button.component.css'],
  standalone: true,
  template: `
    <ng-content/>`
})
export class ButtonComponent {

  @HostBinding('class.button')
  private readonly hbClassButton = true;

  @HostBinding('class.button--pressed')
  private hbClassButtonPressed = false;

  @HostListener('touchstart')
  hlTouchStart = () => {
    this.hbClassButtonPressed = true;
  }

  @HostListener('touchend')
  hlTouchEnd = () => {
    this.hbClassButtonPressed = false;
  }

}
