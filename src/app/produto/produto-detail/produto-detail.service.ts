import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable()
export class ProdutoDetailService {
    constructor(private http: HttpClient){}

    getProduto(id: number){
        return this.http.get(`${environment.apiUrl}/produto/${id}`);
    }

    salvarProduto(produto: any, id: number){
        return this.http.put(`${environment.apiUrl}/produto/${id}`, produto);
    }
}