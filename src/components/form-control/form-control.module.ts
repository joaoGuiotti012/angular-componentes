import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlComponent } from './form-control.component';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule
  ],
  exports: [FormControlComponent],
  declarations: [FormControlComponent]
})
export class FormControlModule { }
