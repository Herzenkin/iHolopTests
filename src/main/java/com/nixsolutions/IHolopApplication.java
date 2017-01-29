package com.nixsolutions;

import java.util.HashMap;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.ErrorViewResolver;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.ModelAndView;

@SpringBootApplication
public class IHolopApplication
{
  public static void main(String[] args)
  {
    SpringApplication.run(IHolopApplication.class, args);
  }

  @Bean
  ErrorViewResolver resolvePageNotFound()
  {
    return (request, status, model) -> status == HttpStatus.NOT_FOUND ?
        new ModelAndView("index.html", new HashMap<>(), HttpStatus.OK) :
        null;
  }
}
