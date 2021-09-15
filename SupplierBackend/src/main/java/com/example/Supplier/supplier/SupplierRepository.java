package com.example.Supplier.supplier;

import org.springframework.data.jpa.repository.JpaRepository;

import javax.transaction.Transactional;
import java.util.Optional;

public interface SupplierRepository extends JpaRepository <Supplier, Long> {

    @Transactional
    void deleteSupplierById(Long id);

    Optional<Supplier> findSupplierByCompany(String company);

//    Optional<Supplier> findSupplierByVat(String vat);
}
