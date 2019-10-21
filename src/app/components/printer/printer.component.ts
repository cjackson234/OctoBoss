import { Component, OnInit, Input } from '@angular/core';
import {
  IBarChartOptions,
  IChartistAnimationOptions,
  IChartistData,
  ILineChartOptions
} from 'chartist';
import { OctoprintService } from '../../services/octoprint.service';
import { Subscription, Observable, timer } from 'rxjs';
import { PrinterConfig } from '../../models/printerConfig';
import { Router } from '@angular/router';

@Component({
  selector: 'printer',
  templateUrl: './printer.component.html',
  styleUrls: ['./printer.component.scss']
})
export class PrinterComponent implements OnInit {
  @Input() config: PrinterConfig;
  private statusSub: Subscription = new Subscription();
  private jobSub: Subscription = new Subscription();

  printState = 'Initializing';
  currentFile = '';
  type = 'Line';
  progress = { completion: 0 };

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

  constructor(private octoprintService: OctoprintService, private router: Router,) {

  }

  ngOnInit() {
    this.refreshData();
    this.interval = setInterval(() => {
      this.refreshData();
    }, 5000);

    this.statusSub = this.octoprintService.statusUpdated.subscribe((update) => {
      if (update.key === this.config.key) {
        let newData: PrinterStatus.RootObject = update.data;
        this.printState = newData.state.text;

        let bed = [];
        let tool = [];
        let labels = [];

        newData.temperature.history.forEach(h => {
          labels.push(this.convertTimeToMinuts(h.time));
          bed.push(h.bed.actual);
          tool.push(h.tool0.actual);
        });

        console.log(labels);

        this.data.series = [bed, tool];
        this.data.labels = labels;

      }
      window.dispatchEvent(new Event('resize'));
    });

    this.jobSub = this.octoprintService.jobUpdated.subscribe((update) => {
      if (update.key === this.config.key) {
        let newData: PrintJob.RootObject = update.data;
        console.log(newData)
        this.currentFile = newData.job.file.name;
        this.progress = newData.progress;
      }
    });
  }

  ngOnDestroy() {
    this.statusSub.unsubscribe();
    clearInterval(this.interval);
  }


  refreshData() {
    this.octoprintService.getStatus(this.config.url, this.config.key);
    this.octoprintService.getJobInfo(this.config.url, this.config.key);
  }

  convertTime(unixtime) {
    //day
    var days = Math.floor(unixtime / 86400);
    unixtime -= days * 86400;
    // Hours part from the timestamp
    var hours = Math.floor(unixtime / 3600) % 24;
    unixtime -= days * 3600;
    // Minutes part from the timestamp
    var minutes = Math.floor(unixtime / 60) % 60;
    unixtime -= days * 86400;
    // Seconds part from the timestamp
    var seconds = unixtime % 60;

    // Will display time in 10:30:23 format
    var formattedTime = `${days}days ${hours}hr ${minutes}m ${seconds}s`
    return formattedTime;
  }

  convertTimeToMinuts(unixtime) {
    //day
    var days = Math.floor(unixtime / 86400);
    unixtime -= days * 86400;
    // Hours part from the timestamp
    var hours = Math.floor(unixtime / 3600) % 24;
    unixtime -= days * 3600;
    // Minutes part from the timestamp
    var minutes = Math.floor(unixtime / 60) % 60;
    return (minutes);
  }

  formatPercent(data) {
    return `${Math.ceil(data)}%`;

  }

  test(){
    this.router.navigate(['/printer/detail', this.config.key]);

  }

}
