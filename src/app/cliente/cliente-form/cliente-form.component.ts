import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-form',
  templateUrl: './cliente-form.component.html',
  styleUrls: ['./cliente-form.component.css']
})
export class ClienteFormComponent implements OnInit {

  public cliente: any;
  public clienteId: any;
  public formCliente: FormGroup = new FormGroup({});

  constructor(private clienteDetailService: ClienteService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { 
    this.initializeForm()
  }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.clienteDetailService.getCliente(params['id']).subscribe(response => {
        this.clienteId = params['id'];
        this.cliente = response;

        this.formCliente?.setValue(
          {
            nome: this.cliente.nome,
            rg: this.cliente.rg,
            cpf: this.cliente.cpf,
            endereco: this.cliente.endereco,
            telefone: this.cliente.telefone,
            email: this.cliente.email,
            dataCadastro: this.cliente.dataCadastro
          })

      });
    });
  }

  initializeForm() {
    this.formCliente = this. formBuilder.group(
      {
        nome: new FormControl(),
        rg: new FormControl(),
        cpf: new FormControl(),
        endereco: new FormControl(),
        telefone: new FormControl(),
        email: new FormControl(),
        dataCadastro: new FormControl()
      });
  }

  salvarCliente(){
    this.clienteDetailService.salvarCliente(this.formCliente.getRawValue(), this.clienteId).subscribe(response => {
      console.log(response);
    });
  }

}
