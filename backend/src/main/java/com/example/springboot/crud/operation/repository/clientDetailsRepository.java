package com.example.springboot.crud.operation.repository;

import com.example.springboot.crud.operation.model.clientDetails;
import org.hibernate.type.descriptor.converter.spi.JpaAttributeConverter;
import org.springframework.data.jpa.repository.JpaRepository;

public interface clientDetailsRepository extends JpaRepository<clientDetails,Long> {

}
