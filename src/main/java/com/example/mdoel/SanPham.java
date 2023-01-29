package com.example.mdoel;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "SanPham")
public class SanPham implements Serializable {
	@Id
	@Column(name = "id", length = 50)
	private int id;

	@Column(name = "tenSanpham", length = 100)
	private String tenSanpham;

	@ElementCollection
	@CollectionTable(name = "HinhAnh", joinColumns = { @JoinColumn( name="id") })
	@Column(name = "img", nullable = false)
	private Set<String> dsImg;

	@Column(name = "chip", length = 50)
	private String chip;

	@Column(name = "manHinh", columnDefinition = "decimal(10,2)")
	private double manHinh;

	@Column(name = "rom", columnDefinition = "int")
	private int rom;

	@Column(name = "ram", columnDefinition = "int")
	private int ram;

	@Column(name = "gia", columnDefinition = "decimal(10,2)")
	private double gia;

	public SanPham() {
		super();
		// TODO Auto-generated constructor stub
	}


	

	public SanPham(int id, String tenSanpham, Set<String> dsImg, String chip, double manHinh, int rom, int ram,
			double gia) {
		super();
		this.id = id;
		this.tenSanpham = tenSanpham;
		this.dsImg = dsImg;
		this.chip = chip;
		this.manHinh = manHinh;
		this.rom = rom;
		this.ram = ram;
		this.gia = gia;
	}




	public Set<String> getDsImg() {
		return dsImg;
	}




	public void setDsImg(Set<String> dsImg) {
		this.dsImg = dsImg;
	}




	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTenSanpham() {
		return tenSanpham;
	}

	public void setTenSanpham(String tenSanpham) {
		this.tenSanpham = tenSanpham;
	}

	public String getChip() {
		return chip;
	}

	public void setChip(String chip) {
		this.chip = chip;
	}

	public double getManHinh() {
		return manHinh;
	}

	public void setManHinh(double manHinh) {
		this.manHinh = manHinh;
	}

	public int getRom() {
		return rom;
	}

	public void setRom(int rom) {
		this.rom = rom;
	}

	public int getRam() {
		return ram;
	}

	public void setRam(int ram) {
		this.ram = ram;
	}

	public double getGia() {
		return gia;
	}

	public void setGia(double gia) {
		this.gia = gia;
	}

	@Override
	public String toString() {
		return "SanPham [id=" + id + ", tenSanpham=" + tenSanpham + ", chip=" + chip + ", manHinh=" + manHinh + ", rom="
				+ rom + ", ram=" + ram + ", gia=" + gia + "]";
	}

}
