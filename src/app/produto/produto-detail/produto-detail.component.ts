import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoDetailService } from './produto-detail.service';

@Component({
  selector: 'app-produto-detail',
  templateUrl: './produto-detail.component.html',
  styleUrls: ['./produto-detail.component.css']
})
export class ProdutoDetailComponent implements OnInit {

  produto: any;
  constructor(private produtoDetailService: ProdutoDetailService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.produtoDetailService.getProduto(params['id']).subscribe(response => {
        this.produto = response;
      });
    });
  }

  editar() {
    this.router.navigate(["produto/edit", this.produto.id]);
  }
}
