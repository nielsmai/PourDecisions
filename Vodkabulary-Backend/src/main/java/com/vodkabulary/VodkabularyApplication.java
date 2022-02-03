package com.vodkabulary;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.SpringApplication;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@SpringBootApplication
public class VodkabularyApplication {

	public static void main(String[] args) {
		SpringApplication.run(VodkabularyApplication.class, args);
	}
	@RequestMapping("/")
	public String greeting(){
	  return "Hello world!";
	}

}
