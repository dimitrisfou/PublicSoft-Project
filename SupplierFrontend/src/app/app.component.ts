import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Supplier } from './supplier';
import { SupplierService } from './supplier.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//implements on OnInit to call function getsuppliers whenever this component is loaded
export class AppComponent implements OnInit{

  //define variable for all suppliers (from backend)
  public suppliers: Supplier[] = []; 
  public editSupplier: Supplier;
  public deleteSupplier: Supplier;
  //inject our service
  constructor(private supplierService: SupplierService){}

  ngOnInit(){
    this.getSuppliers();
  }

  public getSuppliers(): void {
    this.supplierService.getSuppliers().subscribe(
      (Response: Supplier[])=>{
        this.suppliers=Response;
      },
      (error: HttpErrorResponse)=> {
        alert(error.message);
      }
    )

  };


  public onAddSupplier(addForm: NgForm): void{
    //to dispay the form add when i click save (click close button)
    document.getElementById('add-supplier-form').click();

    this.supplierService.addSupplier(addForm.value).subscribe(
      (Response: Supplier) => {
        //for each response do save and relog the page
        console.log(Response);
        this.getSuppliers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
      
    );

  }

  public onUpdateSupplier(supplier: Supplier): void{

    this.supplierService.updateSupplier(supplier).subscribe(
      (Response: Supplier) => {
        console.log(Response);
        this.getSuppliers();
      },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }

    );

  }

  public onDeleteSupplier(supplierId: number): void{
    this.supplierService.deleteSupplier(supplierId).subscribe(

      (Response: void) => {
        console.log(Response);
        this.getSuppliers();
      },
      (error: HttpErrorResponse) =>{
        alert(error.message);
      }
      
    );


  }

  // public searchSupplier(key: string): void{
  //   const results1: Supplier[] = [];
  //   for (const supplier of this.suppliers){
  //     if(supplier.company.toLocaleLowerCase().indexOf(key.toLowerCase()) !== -1)
  //     {
  //       results1.push(this)
  //     }
  //   }

  // }

  public searchSuppliers(key: string): void{
    console.log(key);                                                   //stin input form gia kathe input(akoma kai gramma) kanei save kai relog(emfanizei parallila minimata stn consola)
    const results: Supplier[] = [];                                     //this is the result of all the supplier,using ts we give it a type(supplier array)
    for (const supplier of this.suppliers){                             //first suppliers is the supplier ,second is the suppliers is that we have in the actual application
      if(supplier.company.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
      || supplier.vat.toLocaleLowerCase().indexOf(key.toLocaleLowerCase()) !== -1
      ){

        results.push(supplier);

      }

    }
    this.suppliers = results;
    if(results.length === 0 || !key){
      this.getSuppliers();

    }
  }



  //function for call modal(edit - add - delete)
  public onOpenModal(supplier: Supplier, mode: string): void {

    //insert this button in main container
    const container = document.getElementById('main');

    //https://getbootstrap.com/docs/5.1/components/modal/
    //create button to trigger the modal() and add the attribute for button

    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');

    if(mode === 'add'){
      button.setAttribute('data-target', '#addSupplierModal');

    }
    if(mode === 'edit'){
      this.editSupplier = supplier;
      button.setAttribute('data-target', '#updateSupplierModal');
    }
    if(mode === 'delete'){
      this.deleteSupplier = supplier;
      button.setAttribute('data-target', '#deleteSupplierModal');
    }

    //put inside the div(into html) this button
    container?.appendChild(button);

    //with click we call the button
    button.click();


  }

}
