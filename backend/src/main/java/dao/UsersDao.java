package dao;

import sample.Users;

import java.util.List;

public interface UsersDao {

	public Integer save(Users user);

	public void delete(Users user);

	public void update(Users user);

	public Users getUserById(String id);

	public List<Users> getAllUsers();

	public List<String> getUserByPassword(String username,String password);
}