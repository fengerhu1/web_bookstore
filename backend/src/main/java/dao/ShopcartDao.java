package dao;

import sample.Shopcart;

import java.util.List;

public interface ShopcartDao {

	public Integer save(Shopcart shopcart);

	public void delete(Shopcart shopcart);

	public void update(Shopcart shopcart);

	public Shopcart getShopcartById(int id);

	public List<Shopcart> getAllShopcarts();

}