package service.impl;

import java.util.List;

import sample.Book;
import sample.Shopcart;
import sample.Userorder;
import sample.Users;
import service.AppService;
import dao.ShopcartDao;
import dao.BookDao;
/**
 * @author seniyuting
 * @version 1.0
 * 
 */
public class AppServiceImpl implements AppService {

	private BookDao bookDao;
	private ShopcartDao ShopcartDao;

	public void setBookDao(BookDao bookDao) {
		this.bookDao = bookDao;
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



}
