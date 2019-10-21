import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OctoprintService } from '../../services/octoprint.service';
import { Subscription } from 'rxjs';
import { PrinterConfig } from '../../models/printerConfig';

@Component({
  selector: 'app-nav-wrap',
  templateUrl: './nav-wrap.component.html',
  styleUrls: ['./nav-wrap.component.scss']
})
export class NavWrapComponent implements OnInit {
  printer: any = { };
  printerLoaded: boolean;
  private printerSub: Subscription = new Subscription();

  constructor(private route: ActivatedRoute, private router: Router, private octoprintService: OctoprintService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params.key);
    let result = this.octoprintService.getPrinter(this.route.snapshot.params.key);
    this.updatePrinter(result);
    this.printerSub = this.octoprintService.printerChanged.subscribe((update) => {
      this.updatePrinter(update);
    });
  }

  updatePrinter(printer: PrinterConfig) {

    if (printer) { 
      this.printer = printer;
      this.printerLoaded = true;
    }
    else{
      this.printerLoaded = false;
    }
    console.log(this.printer);
  }

  goto(page:string){
    console.log(`printer/${this.printer.key}/${page}`);
    this.router.navigate([`/printer/detail/${this.printer.key}/${page}`]);
  }

}
