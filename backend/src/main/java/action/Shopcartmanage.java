package action;

import com.opensymphony.xwork2.ActionSupport;
import net.sf.json.JSONArray;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import sample.Shopcart;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
//import org.hibernate.cfg.Configuration;

/**
 * Servlet implementation class UserManagerServlet
 */

public class Shopcartmanage extends ActionSupport {

    public void shopcart() throws Exception {
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        response.setContentType("text/html;charset=utf-8");

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
            HttpSession session1 = request.getSession();
            String name1 = (String)session1.getAttribute("name");
            List<Shopcart> result = session.createQuery("from Shopcart where buyer = :buyer").setParameter("buyer", name1).list();
            Iterator<Shopcart> it = result.iterator();

            ArrayList<JSONArray> booksJson = new ArrayList<JSONArray>();
            while (it.hasNext()) {

                Shopcart shopcart = (Shopcart) it.next();
                ArrayList<String> arrayList = new ArrayList<String>();
                arrayList.add(shopcart.getBookname());
                arrayList.add(shopcart.getNumber());
                arrayList.add(shopcart.getWriter());
                arrayList.add(shopcart.getPrice());
                booksJson.add(JSONArray.fromObject(arrayList));
            }
            JSONArray shopcarts = JSONArray.fromArray(booksJson.toArray());


            System.out.println(shopcarts);

            out.println(shopcarts);

            tx.commit();
        } catch (Exception e) {
            tx.rollback();
            throw new RuntimeException(e);
        } finally{
            //session.close();
        }

        out.flush();
        out.close();
        //session.getTransaction().commit();//事务提交
        //session.close();

        //HibernateUtil.getSessionFactory().getCurrentSession().getTransaction().commit();


	}



}
