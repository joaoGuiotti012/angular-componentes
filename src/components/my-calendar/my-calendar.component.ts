import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Injector, NgZone, Renderer2, ViewChild, forwardRef } from '@angular/core';
import { Calendar } from 'primeng/calendar';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'snc-calendar',
  templateUrl: './my-calendar.component.html',
  styleUrls: ['./my-calendar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MyCalendarComponent),
      multi: true
    }
  ]
})
export class MyCalendarComponent extends Calendar implements ControlValueAccessor {

  private _onChange!: any;
  valueDate!: any;
  override disabled!: boolean;

  @ViewChild('pCalendar') pCalendar!: ElementRef<Calendar>;

  override ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
  }

  onNgModelChange(e: any): void {
    this._onChange(e);
  }

  override registerOnChange(fn: any) {
    this._onChange = fn;
  }

  override setDisabledState(isDisabled: boolean) {
    this.disabled = isDisabled;
  }
}

