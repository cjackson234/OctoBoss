import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PrinterConfig } from '../models/printerConfig';

@Injectable({
  providedIn: 'root'
})
export class OctoprintService {

  statusUpdated = new EventEmitter<any>();
  jobUpdated = new EventEmitter<any>();
  fileListUpdated = new EventEmitter<any>();
  printerChanged = new EventEmitter<any>();
  private config: Array<PrinterConfig> = [];

  constructor(private httpClient: HttpClient) {
    this.load();
  }

  getStatus(url, key) {
    return this.httpClient.get(`${url}/api/printer?apikey=${key}&history=true&limit=10`).subscribe((d) => {
      this.statusUpdated.emit({ data: d, key: key });
    });
  }

  getJobInfo(url, key) {
    return this.httpClient.get(`${url}/api/job?apikey=${key}`).subscribe((d) => {
      this.jobUpdated.emit({ data: d, key: key });
    });
  }

  getFileList(url, key) {
    return this.httpClient.get(`${url}/api/files?apikey=${key}`).subscribe((d) => {
      this.fileListUpdated.emit({ data: d, key: key });
    });
  }

  getPrinter(key: string) {
    const result =  this.config.find((d) => {
      return d.key === key
    });

    this.printerChanged.emit(result);
    
    return result;
  }

  getPrinterConfig(){
    let config = [
      { key: '55BB9B0F32A648C183546DC0ECBF1E6A', url: 'http://192.168.86.44', name: 'Trillian' }, 
      { key: '06E227DACB954F9BBE5340C966FDEBF1', url: 'http://192.168.86.55', name: 'Zaphod'}
    ];

    return config;
  }

  load(){
    this.config = this.getPrinterConfig();
  }

}
