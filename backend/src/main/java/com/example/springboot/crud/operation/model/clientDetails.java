package com.example.springboot.crud.operation.model;

import jakarta.persistence.*;
import lombok.*;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@Entity
@Setter
@Getter
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name="clientDetails")
public class clientDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long Id;
    private String clientName;
    private String Email;
    private String Adress;





    public long getId() {
        return Id;
    }

    public void setId(long id) {
        Id = id;
    }

    public String getClientName() {
        return clientName;
    }

    public void setClientName(String clientName) {
        this.clientName = clientName;
    }

    public String getEmail() {
        return Email;
    }

    public void setEmail(String email) {
        Email = email;
    }

    public String getAdress() {
        return Adress;
    }

    public void setAdress(String adress) {
        Adress = adress;
    }

    @Override
    public String toString() {
        return "clientDetails{" +
                "Id=" + Id +
                ", clientName='" + clientName + '\'' +
                ", Email='" + Email + '\'' +
                ", Adress='" + Adress + '\'' +
                '}';
    }
}
