import { Component, OnInit } from '@angular/core';
import { OctoprintService } from '../../services/octoprint.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { PrinterFiles } from '../../models/printer-files';

@Component({
  selector: 'app-printer-file-list',
  templateUrl: './printer-file-list.component.html',
  styleUrls: ['./printer-file-list.component.scss']
})
export class PrinterFileListComponent implements OnInit {
  private fileSub: Subscription = new Subscription();
  list = [];

  constructor(private route: ActivatedRoute, private octoprintService: OctoprintService) { }
  printer:any = { key: '' };

  ngOnInit() {
    this.printer = this.octoprintService.getPrinter(this.route.snapshot.params.key);
    this.octoprintService.getFileList(this.printer.url, this.printer.key);
    this.fileSub = this.octoprintService.fileListUpdated.subscribe((update) => {
      this.list = update.data;
      console.log(this.list);
    });
  }

}
