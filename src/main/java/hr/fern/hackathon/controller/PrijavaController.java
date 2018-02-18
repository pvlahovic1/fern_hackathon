package hr.fern.hackathon.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PrijavaController {

    @GetMapping("/prijava")
    public String provideRegisterPage() {
        return "prijava";
    }

}
