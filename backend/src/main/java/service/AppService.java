package service;

import java.util.List;

import sample.Book;
import sample.Shopcart;
import sample.Userorder;
import sample.Users;
/**
 * @author seniyuting
 * @version 1.0
 * 
 */
public interface AppService {

	/**
	 * book
	 * 
	 */
	public Integer addBook(Book book);

	public void deleteBook(Book book);

	public void updateBook(Book book);

	public Book getBookById(int id);

	public List<Book> getAllBooks();
	/**
	 * shopcart
	 *
	 */
	public Integer addShopcart(Shopcart shopcart);

	public void deleteShopcart(Shopcart shopcart);

	public void updateShopcart(Shopcart shopcart);

	public Shopcart getShopcartById(int id);

	public List<Shopcart> getAllShopcarts();
	/**
	 * userorder
	 *
	 */
	public Integer addUserorder(Userorder userorder);

	public void deleteUserorder(Userorder userorder);

	public void updateUserorder(Userorder userorder);

	public List<Userorder> getUserorderById(String id);

	public List<Userorder> getAllUserorders();
	/**
	 * users
	 *
	 */
	public Integer addUser(Users user);

	public void deleteUser(Users user);

	public void updateUser(Users user);

	public Users getUserById(String id);

	public List<Users> getAllUsers();

	public List<String> getUserByPassword(String username,String password);
}
