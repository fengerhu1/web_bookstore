package service;

import java.util.List;

import sample.Book;
import sample.Shopcart;

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



}
