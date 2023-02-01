package com.example.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.example.mdoel.SanPham;
import com.example.services.SanPhamService;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class HomeController {
	
	@Autowired
	SanPhamService service;

	@RequestMapping(value = "/",method = RequestMethod.GET)
	public String getHomePage(Model model) {
		model.addAttribute("sanphams", service.findAll());
		return "home";
	}
	
	@GetMapping("/buyCourse")
	public String saveCourse(HttpServletRequest req,Model model) {
		String tenSP = req.getParameter("name");
		model.addAttribute("name", tenSP);
		System.out.println(tenSP);
		
		return "/chitietsp";
	}

	@RequestMapping(value = "/show/{tenSanpham}")
	public String showSP(Model model,@PathVariable(name = "tenSanpham")String tenSanpham) {
		List<SanPham> ds = new ArrayList<>();
		ds = service.findBytenSanpham(tenSanpham);
		model.addAttribute("sanpham", ds);
		return "show";
	}
	
	@RequestMapping(value = "/sanpham/{iphone}")
	public String collectIphone(Model model,@PathVariable(name = "iphone")String iphone) {
		List<SanPham> ds = new ArrayList<>();
		ds = service.findBySlug(iphone);
		ds.forEach(e -> System.out.println(e));
		model.addAttribute("sanphams", ds);
		return "home";
	}
}
