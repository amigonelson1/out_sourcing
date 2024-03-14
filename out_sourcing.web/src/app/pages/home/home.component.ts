import { Component } from '@angular/core';
import { MenuComponentComponent } from '../../menu-component/menu-component.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MenuComponentComponent, 
    RouterModule  
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
