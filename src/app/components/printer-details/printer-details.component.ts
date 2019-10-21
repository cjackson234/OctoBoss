import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData,
  ILineChartOptions
} from 'chartist';
import { OctoprintService } from '../../services/octoprint.service';
import { PrinterConfig } from '../../models/printerConfig';

@Component({
  selector: 'app-printer-details',
  templateUrl: './printer-details.component.html',
  styleUrls: ['./printer-details.component.scss']
})
export class PrinterDetailsComponent implements OnInit {
  printer = {key:''};
  interval: any;
  data: IChartistData = {
    labels: [

    ],
    series: [

    ]

  };

  options: ILineChartOptions = {
    axisX: {
      showGrid: false,

    },
    showArea: true
  };
  constructor(private route: ActivatedRoute, private octoprintService: OctoprintService) { }

  ngOnInit() {
      this.printer = this.octoprintService.getPrinter(this.route.snapshot.params.key);
      console.log(this.printer);
  }

}
