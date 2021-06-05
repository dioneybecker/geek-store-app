import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {

  cliente:any;
  clienteId: any;

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clienteId = params['id'];
      this.clienteService.getCliente(params['id']).subscribe(response => {
        
        this.cliente = response;
      });
    });
  }

  editar() {
    this.router.navigate(["cliente/edit", this.clienteId]);
  }

  novoPedido(){
    this.router.navigate(["pedido/novo", this.clienteId]);
  }
}
