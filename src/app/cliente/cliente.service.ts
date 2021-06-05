import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable()
export class ClienteService{
    constructor(private http: HttpClient){}

    loadClientes(){
        return this.http.get(`${environment.apiUrl}/cliente`);
    }

    getCliente(id: number){
        return this.http.get(`${environment.apiUrl}/cliente/${id}`);
    }

    salvarCliente(cliente: any, id: number){
        return this.http.put(`${environment.apiUrl}/cliente/${id}`, cliente);
    }
    
}