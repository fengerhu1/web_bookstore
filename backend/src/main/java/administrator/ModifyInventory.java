package administrator;

import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import sample.Inventory;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
//import org.hibernate.cfg.Configuration;

/**
 * Servlet implementation class UserManagerServlet
 */
public class ModifyInventory extends ActionSupport {

    public void modify() throws Exception {
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("UTF-8");    //设置响应的字符集格式为UTF-8
        response.setContentType("text/html");  //设置响应正文的MIME类型

        Configuration configuration = new Configuration().configure();
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        Session session = sessionFactory.getCurrentSession();

        String book = (String) request.getParameter("bookname");
        String inventory = (String) request.getParameter("inventory");
        int intInventory = Integer.parseInt(inventory);
        Transaction tx = null;
        PrintWriter out = response.getWriter();
        try {
            tx=session.beginTransaction();    //4.开始一个事务
            Query result1 =session.createQuery("delete from Inventory where book=:book").setParameter("book", book);
            result1.executeUpdate();
            Inventory addbook = new Inventory();
            addbook.setBook(book);
            addbook.setTotal(intInventory);
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
