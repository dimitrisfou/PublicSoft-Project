import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Supplier } from './supplier';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

//configure the servise in the angular app
//component that hosted in the html web page//all the others components buid in this component(root)
//ean den kaname to inject edw eprepe mesa sto module.ts na vazame ston provider to supplier.service.ts

@Injectable({
    providedIn: 'root'
})

export class SupplierService{
    private apiServerUrl = environment.apiBaseUrl;

    //define the httpclient into modules.ts
    constructor(private http: HttpClient){}

    public getSuppliers(): Observable<Supplier[]>{
        return this.http.get<Supplier[]>(`${this.apiServerUrl}/supplier/all`);
    }

    public addSupplier(supplier: Supplier): Observable<Supplier>{
        return this.http.post<Supplier>(`${this.apiServerUrl}/supplier/add`,supplier);
    }

    public updateSupplier(supplier: Supplier): Observable<Supplier>{
        return this.http.put<Supplier>(`${this.apiServerUrl}/supplier/update`,supplier);
    }

    public deleteSupplier(supplierId: number): Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/supplier/delete/${supplierId}`);
    }

  
}