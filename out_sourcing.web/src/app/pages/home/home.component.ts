import { Component } from '@angular/core';
import { MenuComponentComponent } from '../../menu-component/menu-component.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponentComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
