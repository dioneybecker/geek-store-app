import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable()
export class ProdutoListService{
    constructor(private http: HttpClient){}

    loadProdutos(){
        return this.http.get(`${environment.apiUrl}/produto`);
    }
    
}