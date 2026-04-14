import { Component } from '@angular/core';
import { Cards } from './component/cards/cards';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [Cards,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}
