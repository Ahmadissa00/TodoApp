package com.spring_and_react.SpringReact.helloworld;

import java.util.Locale;

import org.springframework.context.MessageSource;
import org.springframework.context.i18n.LocaleContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {
	
	private MessageSource messageSource;

	public HelloWorldController(MessageSource messageSource) {
		super();
		this.messageSource = messageSource;
	}

	@GetMapping( path = "/basicauth")
	public String basicAuth() {
		return "Basic Authentication";
	}
	
	@GetMapping( path = "/hello-world")
	public String helloworld() {
		return "Hello World v2";
	}
	
	@GetMapping( path = "/hello-world-bean")
	public HelloWorldBean helloworldBean() {
		return new HelloWorldBean( "Hello World bean");
	}
	
	@GetMapping( path = "/hello-world/path-var/{name}")
	public HelloWorldBean helloworldPathVar(@PathVariable String name) {
		return new HelloWorldBean( "Hello World "  + name);
	}
	
	@GetMapping( path = "/hello-world-Inter")
	public String helloworldInter() {
		
		Locale locale = LocaleContextHolder.getLocale();
		return messageSource.getMessage("good.morning.message", null, "Default Message", locale );
		
		//return "Hello World";
	}

}
