package com.example.services;

import java.util.List;
import java.util.Optional;

import com.example.mdoel.SanPham;

public interface SanPhamService {

	void deleteAll();

	void deleteAll(Iterable<? extends SanPham> entities);

	void deleteAllById(Iterable<? extends Integer> ids);

	void delete(SanPham entity);

	void deleteById(Integer id);

	long count();

	Iterable<SanPham> findAllById(Iterable<Integer> ids);

	List<SanPham> findAll();

	boolean existsById(Integer id);

	Optional<SanPham> findById(Integer id);

	List<SanPham> saveAll(List<SanPham> entities);

	SanPham save(SanPham sanPham);

}
