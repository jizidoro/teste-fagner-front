import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AirplaneEditComponent } from './airplane-edit.component';

const routes: Routes = [
  {
    path: '',
    component: AirplaneEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AirplaneEditRouting {}
