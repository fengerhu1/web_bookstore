package action;

import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;
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
//import org.hibernate.cfg.Configuration;

/**
 * Servlet implementation class UserManagerServlet
 */

public class Getuserback extends ActionSupport {

    public void getuser() throws Exception {
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        response.setContentType("text/html;charset=utf-8");
        Boolean isValid = false;
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
            String name = (String)session1.getAttribute("name");
            if (name == null)
                name = "who are you";
            out.println(name);
            System.out.println(name);
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
