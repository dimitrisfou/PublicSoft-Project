package com.example.Supplier.supplier;

import com.example.Supplier.exception.UserNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class SupplierService {

    private final SupplierRepository supplierRepository;

    @Autowired
    public SupplierService(SupplierRepository supplierRepository) {
        this.supplierRepository = supplierRepository;
    }


    public Supplier addSupplier(Supplier supplier){
        supplier.setVat(UUID.randomUUID().toString());
        return supplierRepository.save(supplier);
    }

    public List<Supplier> findAllSuppliers(){
        return supplierRepository.findAll();
    }

    public Supplier updateSupplier(Supplier supplier){
        return supplierRepository.save(supplier);
    }

    public void deleteSupplier(Long id){
        supplierRepository.deleteSupplierById(id);
    }

    public Supplier findSupplierByCompany(String company){
        return supplierRepository.findSupplierByCompany(company).orElseThrow(() ->  new UserNotFoundException("Supplier with company "+ company + " was not found" ));
    }

//    public Supplier findSupplierByVat(String vat){
//        return  supplierRepository.findSupplierByVat(vat).orElseThrow(() -> new UserNotFoundException("Supplier by VAT " +vat+ " was not found"));
//    }

}
