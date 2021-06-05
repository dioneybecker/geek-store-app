import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteDetailsComponent } from './cliente/cliente-details/cliente-details.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import { ProdutoDetailComponent } from './produto/produto-detail/produto-detail.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  {
    path: "produto",
    data: { breadcrumb: "Produtos" },
    component: ProdutoListComponent,
    //canActivate: [AuthenticationGuard],
  },
  {
    path: "produto/:id",
    data: { breadcrumb: "Produto" },
    component: ProdutoDetailComponent
  },
  {
    path: "produto/edit/:id",
    data: { breadcrumb: "Produto" },
    component: ProdutoFormComponent
  },
//cliente
  {
    path: "cliente",
    data: { breadcrumb: "Clientes" },
    component: ClienteListComponent,
    //canActivate: [AuthenticationGuard],
  },
  {
    path: "cliente/:id",
    data: { breadcrumb: "Cliente" },
    component: ClienteDetailsComponent
  },
  {
    path: "cliente/edit/:id",
    data: { breadcrumb: "Cliente" },
    component: ClienteFormComponent
  },

  //pedidos
  {
    path: "pedido/novo/:clienteId",
    data: { breadcrumb: "Pedido" },
    component: PedidoFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
