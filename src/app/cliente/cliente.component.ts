import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  @Input() cliente:any;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loadClienteDetail(){
    this.router.navigate(["cliente"], this.cliente?.id);
  }
}
