import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { PrinterListComponent } from './components/printer-list/printer-list.component';
import { PrinterDetailsComponent } from './components/printer-details/printer-details.component'
import { NavWrapComponent } from './components/nav-wrap/nav-wrap.component';
import { PrinterFileListComponent } from './components/printer-file-list/printer-file-list.component';

const routes: Routes = [
  { path: '',   redirectTo: '/printer/all', pathMatch: 'full' },
  {
  path: 'printer',
  component: NavWrapComponent,
  children: [
    {
      path: 'all',
      component: PrinterListComponent,
      data: { title: 'Printers' },
    },
    {

      path: 'detail/:key',
      component: PrinterDetailsComponent,
      data: { state: 'printer-details' }
    },
    {
      path: 'detail/:key/files',
      component: PrinterFileListComponent,
      data: { state: 'printer-files' }
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
