import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-componentes';

  form = new FormGroup({
    nomeCliente: new FormControl({ value: null, disabled: false }, [Validators.maxLength(10), Validators.minLength(3)]),
    data: new FormControl({ value: null, disabled: false }, [Validators.required]),
    valor: new FormControl({ value: 10, disabled: false }, [Validators.required, Validators.max(10), Validators.min(0)]),
    qtdProduto: new FormControl({ value: null, disabled: false }, [Validators.required, Validators.max(10), Validators.min(0)]),
  });

  constructor() {
  }

  handleEnviarFormulario() {
    alert(JSON.stringify(this.form.value));
  }
}
