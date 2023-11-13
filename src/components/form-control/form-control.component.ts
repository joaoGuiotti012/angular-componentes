import { Component, OnInit, Input, ViewChild, AfterViewInit, ElementRef, ContentChild, ContentChildren, QueryList } from '@angular/core';
import { NgControl, NgModel, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'snc-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent {
  @ContentChild(NgControl) formComponent!: NgControl;
  @Input() title?: string = '';
  @Input() tooltipMessage?: string = '';

  get control() {
    return this?.formComponent?.control;
  }

  get required(): boolean | undefined {
    return this.control?.hasValidator(Validators.required);
  }

  get showTooltip(): boolean {
    return !!this?.tooltipMessage || !!this.control?.disabled;
  }

  get iconTooltip() {
    let icon = 'pi ';
    if (this?.control?.disabled)
      icon += 'pi-ban';
    else
      if (this.tooltipMessage) icon += 'pi-exclamation-circle';
    return icon;
  }

  get messageTooltip(): string | undefined {
    let message = ''
    if (this?.formComponent?.disabled)
      message = 'Campo Desabilitado';
    else
      message = this?.tooltipMessage ?? '';
    return message;
  }

  getErrorDescriptions(errors: ValidationErrors | null): Array<ErrorDescription> {
    let messages: Array<ErrorDescription> = [];
    if (!!errors)
      Object.entries(errors).forEach(e => {
        messages.push(new ErrorDescription({ errorName: e[0], errorProps: e[1] }));
      });
    return messages;
  }

}

class ErrorDescription {
  errorName!: string;
  errorProps!: any;
  constructor(data: Partial<ErrorDescription>) {
    Object.assign(this, data);
  }

  description = () => {
    let description: string = '';
    const props = this.errorProps;
    switch (this.errorName.toLocaleLowerCase()) {
      case 'required':
        description = 'Campo Obrigatório!';
        break;
      case 'max':
        description = `O Campo deve ser menor que ${props?.max}`;
        break;
      case 'min':
        description = `O Campo deve ser maior que ${props?.min}`;
        break;
      case 'maxlength':
        description = `O Campo deve ter menos de ${props?.requiredLength} caracteres`;
        break;
      case 'minlength':
        description = `O Campo deve ter mais de ${props?.requiredLength} caracteres`;
        break;
      default:
        break;
    }
    return description;
  }
}

