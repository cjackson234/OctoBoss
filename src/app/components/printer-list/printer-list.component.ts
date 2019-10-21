import { Component, OnInit } from '@angular/core';
import { OctoprintService } from '../../services/octoprint.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-printer-list',
  templateUrl: './printer-list.component.html',
  styleUrls: ['./printer-list.component.scss']
})
export class PrinterListComponent implements OnInit {
  list = [];
  private fileSub: Subscription = new Subscription();
  
  constructor(private octoprintService: OctoprintService) { }

  ngOnInit() {
    this.list = this.octoprintService.getPrinterConfig();
    this.fileSub = this.octoprintService.fileListUpdated.subscribe((update) => {
      this.list = update.data;
    });

  }

}
