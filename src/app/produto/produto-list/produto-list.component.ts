import { Component, Input, OnInit } from '@angular/core';
import { ProdutoListService } from './produto-list.service';

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.css']
})
export class ProdutoListComponent implements OnInit {

  produtos:any;

  constructor(
    private produtoListService: ProdutoListService
  ) { }

  ngOnInit(): void {
    this.loadProdutos();
  }

  loadProdutos(){
    this.produtoListService.loadProdutos().subscribe(response => {this.produtos = response;});
  }

}
