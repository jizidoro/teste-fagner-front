import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { FormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { BranchesComponent } from "./branches.component";

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatCheckboxModule,
    FormsModule
  ],
  declarations: [BranchesComponent],
  exports: [BranchesComponent]
})
export class BranchesModule { }
