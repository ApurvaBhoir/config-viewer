import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfigViewerComponent } from './config-viewer/config-viewer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ConfigViewerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'config-viewer';
}
