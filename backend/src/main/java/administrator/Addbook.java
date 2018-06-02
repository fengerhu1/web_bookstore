package administrator;

import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;


import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import net.sf.json.JSONArray;
import sample.Shopcart;
import sample.Book;
import java.util.ArrayList;
//import org.hibernate.cfg.Configuration;

/**
 * Servlet implementation class UserManagerServlet
 */
public class Addbook extends ActionSupport {
    private Book concretebook;
    public Book getconcretebook() {
        return concretebook;
    }
    public void setConcretebook(Book concretebook) {
        this.concretebook = concretebook;
    }
    public void add() throws Exception {
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("UTF-8");    //设置响应的字符集格式为UTF-8
        response.setContentType("text/html");  //设置响应正文的MIME类型

        Configuration configuration = new Configuration().configure();
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        Session session = sessionFactory.getCurrentSession();

        String book = (String) request.getParameter("book");
        String author = (String) request.getParameter("author");
        String language = (String) request.getParameter("language");
        String published = (String) request.getParameter("published");
        String sales = (String) request.getParameter("sales");
        Transaction tx = null;
        PrintWriter out = response.getWriter();
        try {
            tx=session.beginTransaction();    //4.开始一个事务
            Query result =session.createQuery("select max(id) from Book");
            List<String> list = result.list();
            int numId;
            numId = Integer.parseInt(list.get(0))+1;
            String id;
            id = String.valueOf(numId);
            System.out.println(id);
            Book addbook = new Book();
            addbook.setId(id);
            addbook.setSale(sales);
            addbook.setTitle(book);
            addbook.setPublished(published);
            addbook.setAuthor(author);
            addbook.setLanguage(language);
            session.save(addbook);
            //out.println(list.get(0));
            tx.commit();    //6.提交事务
        } catch (Exception e) {
            if(tx!=null){
                tx.rollback();  //事务回滚
            }
            e.printStackTrace();
        }finally{
            //session.close();   //7.关闭session
        }
        out.flush();
        out.close();
    }
}
