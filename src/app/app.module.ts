import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { ClienteComponent } from './cliente/cliente.component';
import { PedidoComponent } from './pedido/pedido.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProdutoListComponent } from './produto/produto-list/produto-list.component';
import { ProdutoListService } from './produto/produto-list/produto-list.service';
import { ProdutoDetailComponent } from './produto/produto-detail/produto-detail.component';
import { ProdutoFormComponent } from './produto/produto-form/produto-form.component';
import { ProdutoDetailService } from './produto/produto-detail/produto-detail.service';
import { ClienteListComponent } from './cliente/cliente-list/cliente-list.component';
import { ClienteDetailsComponent } from './cliente/cliente-details/cliente-details.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteService } from './cliente/cliente.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PedidoFormComponent } from './pedido/pedido-form/pedido-form.component';
import { PedidoDetailsComponent } from './pedido/pedido-details/pedido-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ClienteComponent,
    PedidoComponent,
    HomeComponent,
    LoginComponent,
    ProdutoListComponent,
    ProdutoDetailComponent,
    ProdutoFormComponent,
    ClienteListComponent,
    ClienteDetailsComponent,
    ClienteFormComponent,
    PedidoFormComponent,
    PedidoDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ProdutoListService, 
    ProdutoDetailService,
    ClienteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
