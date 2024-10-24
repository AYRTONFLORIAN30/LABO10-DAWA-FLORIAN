import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dia: string = '';  
  title = 'apli101';

  personas = [
    { nombre: 'Ricardo', edad: 40 },
    { nombre: 'Salvador', edad: 20 }
  ];
}
