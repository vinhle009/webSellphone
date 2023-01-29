package com.example.controllers;

import java.util.HashSet;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import com.example.mdoel.SanPham;
import com.example.services.SanPhamService;

import jakarta.servlet.http.HttpServletRequest;

@Controller
public class AdminController {
	@Autowired
	SanPhamService service;

	@GetMapping("/admin")
	public String getAdmin() {
		return "Admin";
	}
	@GetMapping("/admin/createCourse")
	public String getCreateCourse() {
		return "Admin";
	}
	@PostMapping("/admin/saveCourse")
	public String saveCourse(HttpServletRequest req) {
		int id = Integer.parseInt(req.getParameter("id"));
		String tenSP = req.getParameter("tenSanpham");
		String img = req.getParameter("img");
		String chip = req.getParameter("chip");
		double manHinh = Double.parseDouble(req.getParameter("manHinh"));
		int rom =Integer.parseInt( req.getParameter("rom"));
		int ram = Integer.parseInt(req.getParameter("ram"));
		double gia = Double.parseDouble(req.getParameter("gia"));
		
		Set<String> dsimg = new HashSet<>();
		dsimg.add(img);
		
		SanPham sanPham = new SanPham(id, tenSP, dsimg, chip, manHinh, rom, ram, gia);
		service.save(sanPham);
	
		return "redirect:/";
	}
}
