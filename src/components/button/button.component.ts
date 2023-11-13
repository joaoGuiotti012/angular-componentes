import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'snc-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() type: IButtonTypes = 'primary';
  @Input() buttonType!: string;
  @Input() disabled!: boolean;
  @Input() hidden!: boolean;
  @Output() onClick: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClick(event: any) {
    this.onClick.emit(event);
  }
}


export type IButtonTypes = 'primary'
  | 'secondary'
  | 'none'
  | 'danger'
  | 'warning';