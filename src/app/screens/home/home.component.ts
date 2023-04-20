import {Component} from "@angular/core";
import {NgOptimizedImage} from "@angular/common";
import {ButtonComponent} from "../../common/button";
import {ScreenComponent} from "../../common/screen";
import {LogoComponent} from "../../common/logo";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [
    NgOptimizedImage,
    ButtonComponent,
    ScreenComponent,
    LogoComponent
  ],
  standalone: true
})
export class HomeComponent {

}
