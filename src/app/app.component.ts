import { Component } from '@angular/core';
import { OctoprintService } from './services/octoprint.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'octoboss';

  constructor(private octoprintService: OctoprintService) { 
   

  }

  
}
