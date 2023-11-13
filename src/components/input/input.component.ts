import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl } from '@angular/forms';
import { Component, OnInit, Optional, Self, forwardRef, Input } from '@angular/core';

@Component({
  selector: 'snc-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {

  @Input() type: InputTypes = 'text';
  @Input() inputValue: any = null;
  @Input() readonly: boolean = false;

  disabled = false;

  private _registerOnTouched!: any;
  private _registerOnChange!: any;

  constructor(
   
  ) {
  }

  writeValue(obj: any): void {
    this.inputValue = obj;
  }

  registerOnChange(fn: any): void {
    this._registerOnChange = fn;
  }

  registerOnTouched(fn: any): void {
    this._registerOnTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  ngOnInit() {
  }

  onChangeInputValue(value: any) {
    this._registerOnChange(value);
  }

  onClick(e: any) {
    this._registerOnTouched();
  }

}

export type InputTypes =
  'button'
  | 'checkbox'
  | 'color'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'url'
  | 'week';
