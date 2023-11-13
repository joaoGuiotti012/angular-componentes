import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyCalendarComponent } from './my-calendar.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MyCalendarComponent,
  ],
  exports: [MyCalendarComponent],
  imports: [
    CommonModule,
    CalendarModule,
    FormsModule
  ]
})
export class MyCalendarModule { }
