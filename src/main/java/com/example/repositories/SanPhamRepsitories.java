package com.example.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.mdoel.SanPham;

public interface SanPhamRepsitories extends CrudRepository<SanPham, Integer>{
	public List<SanPham> findByTenSanpham(String tenSanpham);
	
	@Query("SELECT a FROM SanPham a WHERE a.slug= ?1")
	public List<SanPham> findBySlug(String slug);
}
