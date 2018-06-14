package service.impl;

import java.util.List;

import sample.Book;
import sample.Shopcart;
import sample.Userorder;
import sample.Users;
import service.AppService;
import dao.ShopcartDao;
import dao.BookDao;
import dao.UserorderDao;
import dao.UsersDao;
/**
 * @author seniyuting
 * @version 1.0
 * 
 */
public class AppServiceImpl implements AppService {

	private BookDao bookDao;
	private ShopcartDao ShopcartDao;
	private UserorderDao userorderDao;
	private UsersDao usersDao;
	public void setBookDao(BookDao bookDao) {
		this.bookDao = bookDao;
	}
	public void setUsersDao(UsersDao usersDao) {
		this.usersDao = usersDao;
	}
	public void setUserorderDao(UserorderDao userorderDao) {
		this.userorderDao = userorderDao;
	}
	/**
	 * book
	 * 
	 */
	public Integer addBook(Book book) {
		return bookDao.save(book);
	}

	public void deleteBook(Book book) {
		bookDao.delete(book);
	}

	public void updateBook(Book book) {
		bookDao.update(book);
	}

	public Book getBookById(int id) {
		return bookDao.getBookById(id);
	}

	public List<Book> getAllBooks() {
		return bookDao.getAllBooks();
	}
	/**
	 * shopcart
	 *
	 */
	public Integer addShopcart(Shopcart shopcart) {
		return ShopcartDao.save(shopcart);
	}

	public void deleteShopcart(Shopcart shopcart) {
		ShopcartDao.delete(shopcart);
	}

	public void updateShopcart(Shopcart shopcart) {
		ShopcartDao.update(shopcart);
	}

	public Shopcart getShopcartById(int id) {
		return ShopcartDao.getShopcartById(id);
	}

	public List<Shopcart> getAllShopcarts() {
		return ShopcartDao.getAllShopcarts();
	}
	/**
	 * Userorder
	 *
	 */
	public Integer addUserorder(Userorder userorder) {
		return userorderDao.save(userorder);
	}

	public void deleteUserorder(Userorder userorder) {
		userorderDao.delete(userorder);
	}

	public void updateUserorder(Userorder userorder) {
		userorderDao.update(userorder);
	}

	public List<Userorder> getUserorderById(String id) {
		return userorderDao.getUserorderById(id);
	}

	public List<Userorder> getAllUserorders() {
		return userorderDao.getAllUserorders();
	}
	/**
	 * User
	 *
	 */
	public Integer addUser(Users user) {
		return usersDao.save(user);
	}

	public void deleteUser(Users user) {
		usersDao.delete(user);
	}

	public void updateUser(Users user) {
		usersDao.update(user);
	}

	public Users getUserById(String id) {
		return usersDao.getUserById(id);
	}

	public List<Users> getAllUsers() {
		return usersDao.getAllUsers();
	}

	public List<String> getUserByPassword(String username,String password){return usersDao.getUserByPassword(username, password);}
}
