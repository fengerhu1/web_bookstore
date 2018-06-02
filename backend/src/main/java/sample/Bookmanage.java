package sample;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import net.sf.json.JSONArray;
//import org.hibernate.cfg.Configuration;

/**
 * Servlet implementation class UserManagerServlet
 */
@WebServlet("/bookback")
public class Bookmanage extends HttpServlet {

	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        PrintWriter out = response.getWriter();

        String username = (String) request.getParameter("username");
        String password = (String) request.getParameter("password");

        response.setCharacterEncoding("UTF-8");    //设置响应的字符集格式为UTF-8
        response.setContentType("text/html");  //设置响应正文的MIME类型

        Configuration configuration = new Configuration().configure();
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        Session session = sessionFactory.getCurrentSession();
        Transaction tx = null;

        try{
            tx=session.beginTransaction();
            List<Book> result = session.createQuery("from Book").list();
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


            System.out.println(books);

            out.println(books);

            tx.commit();
        } catch (Exception e) {
            tx.rollback();
            throw new RuntimeException(e);
        } finally{
            session.close();
        }

        out.flush();
        out.close();
        //session.getTransaction().commit();//事务提交
        //session.close();

        //HibernateUtil.getSessionFactory().getCurrentSession().getTransaction().commit();


	}



}
