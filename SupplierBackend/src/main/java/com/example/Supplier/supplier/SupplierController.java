package com.example.Supplier.supplier;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//exposing the api

@RestController
@RequestMapping("/supplier")
public class SupplierController {
    private final SupplierService supplierService;


    public SupplierController(SupplierService supplierService) {
        this.supplierService = supplierService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Supplier>> getAllSuppliers(){
        List<Supplier> suppliers = supplierService.findAllSuppliers();
        return new ResponseEntity<>(suppliers, HttpStatus.OK);
    }

    @GetMapping("/find/{company}")
    public ResponseEntity<Supplier> getSupplierByCompany(@PathVariable("company") String company){
        Supplier supplier = supplierService.findSupplierByCompany(company);
        return new ResponseEntity<>(supplier, HttpStatus.OK);
    }

//    @GetMapping("/find/vat/{vat}")
//    public ResponseEntity<Supplier> getSupplierByVat(@PathVariable("vat") String vat){
//        Supplier supplier = supplierService.findSupplierByCompany(vat);
//        return new ResponseEntity<>(supplier, HttpStatus.OK);
//    }

    @PostMapping("/add")
    public ResponseEntity<Supplier> addSupplier(@RequestBody Supplier supplier){
        Supplier supplier1 = supplierService.addSupplier(supplier);
        return new ResponseEntity<>(supplier1, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Supplier> updateSupplier(@RequestBody Supplier supplier){
        Supplier supplier1 = supplierService.updateSupplier(supplier);
        return new ResponseEntity<>(supplier1, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> deleteSupplierById(@PathVariable("id") Long id){
        supplierService.deleteSupplier(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

}
