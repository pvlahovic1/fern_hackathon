package hr.fern.hackathon.model;

import lombok.Data;

import java.util.List;

@Data
public class RegistracijaModel {

    private String teamname;
    private String password;
    private List<Member> members;

}
