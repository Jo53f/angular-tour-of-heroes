import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Heroes } from "./heroes/heroes";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Heroes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'Tour of heroes';
}
