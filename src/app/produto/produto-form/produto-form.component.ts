import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutoDetailService } from '../produto-detail/produto-detail.service';


@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.css']
})
export class ProdutoFormComponent implements OnInit {

  public produto: any;
  public produtoId: any;
  public formProduto: FormGroup = new FormGroup({});

  constructor(private produtoDetailService: ProdutoDetailService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { 
    this.initializeForm()
  }

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      this.produtoDetailService.getProduto(params['id']).subscribe(response => {
        this.produtoId = params['id'];
        this.produto = response;

        this.formProduto?.setValue(
          {
            nome: this.produto.nome,
            categoria: this.produto.categoria,
            fabricante: this.produto.fabricante,
            quantidade: this.produto.quantidade,
            valor: this.produto.valor,
            plataforma: this.produto.plataforma,
            prazoGarantia: this.produto.prazoGarantia,
            imageUrl: this.produto.imageUrl
          })

      });
    });
  }

  initializeForm() {
    this.formProduto = this. formBuilder.group(
      {
        nome: new FormControl(),
        categoria: new FormControl(),
        fabricante: new FormControl(),
        quantidade: new FormControl(),
        valor: new FormControl(),
        plataforma: new FormControl(),
        prazoGarantia: new FormControl(),
        imageUrl: new FormControl()
      });
  }

  salvarProduto(){
    this.produtoDetailService.salvarProduto(this.formProduto.getRawValue(), this.produtoId).subscribe(response => {
      console.log(response);
    });
  }
}
