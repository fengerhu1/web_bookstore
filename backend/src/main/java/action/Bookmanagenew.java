package action;

import com.opensymphony.xwork2.ActionSupport;
import net.sf.json.JSONArray;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import sample.Book;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.PrintWriter;
import java.util.List;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import dao.impl.BookDaoImpl;
import service.AppService;
//import org.hibernate.cfg.Configuration;

/**
 * Servlet implementation class UserManagerServlet
 */

public class Bookmanagenew extends  ActionSupport {
    private AppService appService;
    public void setAppService(AppService appService) {
        this.appService = appService;
    }
    public BookDaoImpl bookDaoImpl;
    public Bookmanagenew(){}
    private JSONArray result1;
    public JSONArray getResult(){
        return result1;
    }

    public void get() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        HttpServletResponse response = ServletActionContext.getResponse();
        response.setContentType("text/html;charset=utf-8");
        PrintWriter pw = response.getWriter();
        //Configuration configuration = new Configuration().configure();
        //SessionFactory sessionFactory = configuration.buildSessionFactory();
        //Session session = sessionFactory.getCurrentSession();
        //Transaction tx = null;

        try{
            //tx=session.beginTransaction();
            //List<Book> result = session.createQuery("from Book").list();
            List<Book> result = appService.getAllBooks();
            //BookDaoImpl obj = new BookDaoImpl();
            //List<Book> result = obj.getAllBooks();
            Iterator<Book> it = result.iterator();

            ArrayList<JSONArray> booksJson = new ArrayList<JSONArray>();
            while (it.hasNext()) {
                Book book = (Book) it.next();
                ArrayList<String> arrayList = new ArrayList<String>();
                arrayList.add(book.getTitle());
                arrayList.add(book.getAuthor());
                arrayList.add(book.getLanguage());
                arrayList.add(book.getPublished());
                arrayList.add(book.getSale());
                arrayList.add(book.getId());
                booksJson.add(JSONArray.fromObject(arrayList));
            }
            JSONArray books = JSONArray.fromArray(booksJson.toArray());

            pw.println(books);
            pw.flush();
            pw.close();
            System.out.println(books);

            result1 = books;
            //tx.commit();
        } catch (Exception e) {
            //tx.rollback();
            throw new RuntimeException(e);
        } finally{
            //session.close();
        }

        //session.getTransaction().commit();//事务提交
        //session.close();

        //HibernateUtil.getSessionFactory().getCurrentSession().getTransaction().commit();


	}



}
