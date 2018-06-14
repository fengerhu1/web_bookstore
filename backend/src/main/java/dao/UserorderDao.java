package dao;

import sample.Userorder;

import java.util.List;

public interface UserorderDao {

	public Integer save(Userorder userorder);

	public void delete(Userorder userorder);

	public void update(Userorder userorder);

	public List<Userorder> getUserorderById(String id);

	public List<Userorder> getAllUserorders();

}