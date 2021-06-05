import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente/cliente.service';
import { ProdutoListService } from 'src/app/produto/produto-list/produto-list.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {

  clienteId: any;
  cliente: any;
  produtos: any;
  clientesSelecionados: any;
  produtosSelecionados: any = [];
  total: number = 0;
  pagamento = "";
  public formProduto: FormGroup = new FormGroup({});
  constructor(
    private produtoService: ProdutoListService,
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.clienteId = params['clienteId'];
      this.clienteService.getCliente(this.clienteId).subscribe(response => {
        this.cliente = response;
      });
    });

    this.produtoService.loadProdutos().subscribe(response => {
      this.produtos = response;
    })
  }

  initializeForm() {
    this.formProduto = this.formBuilder.group(
      {
        cliente: new FormControl(),
        data: new FormControl(),
        pagamento: new FormControl(),
        valor: new FormControl()

      });
  }

  incluido(item: any) {
    return this.produtosSelecionados.filter((f: any) => f.id === item.id).length > 0;
  }

  incluir(item: any) {
    this.produtosSelecionados.push(item);

    // TODO: calcular total * quantidade do item
    this.total = this.produtosSelecionados
      .map((item: any) => item.valor)
      .reduce((a: number, b: number) => a + b);
  }

  excluir(item: any) {
    this.produtosSelecionados.pop(item);

  // TODO: calcular total * quantidade do item
    this.total = this.produtosSelecionados.length > 0 ? this.produtosSelecionados
      .map((item: any) => item.valor)
      .reduce((a: number, b: number) => a + b) : 0;
  }

}

// private Date dataVenda;
// private double valor;
// private Pagamento pagamento;
// private String status;

// @ManyToOne
// private Cliente cliente;

// @OneToMany
// private List<Produto> produtos;