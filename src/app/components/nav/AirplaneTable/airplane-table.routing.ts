import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AirplaneTableComponent } from './airplane-table.component';

const routes: Routes = [
  {
    path: '',
    component: AirplaneTableComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirplaneTableRouting {}
