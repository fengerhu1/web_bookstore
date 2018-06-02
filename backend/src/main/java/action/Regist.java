package action;

import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import sample.Users;

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

public class Regist extends ActionSupport {

    public void doregist() throws Exception {
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        response.setContentType("text/html;charset=utf-8");

        String username = (String) request.getParameter("username");
        String password = (String) request.getParameter("password");
        String phone = (String) request.getParameter("phone");
        String email = (String) request.getParameter("email");


        response.setCharacterEncoding("UTF-8");    //设置响应的字符集格式为UTF-8
        response.setContentType("text/html");  //设置响应正文的MIME类型

        Configuration configuration = new Configuration().configure();
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        Session session = sessionFactory.getCurrentSession();
        Transaction tx = null;

        PrintWriter out = response.getWriter();
        Boolean isValid = true;
        try {
            tx = session.beginTransaction();
            Query result =session.createQuery("select username from Users where username = :username ").setParameter("username", username);
            List<String> list = result.list();
//使用forEach遍历集合
            if (list.size() > 0)
            {
                isValid = false;
            }
            if (isValid) {

                Users user = new Users();
                user.setId(username);
                user.setUsername(username);
                user.setPassword(password);
                user.setEmail(email);
                user.setPhone(phone);
                user.setFirstname("NO DEFINE");
                user.setLastname("NO DEFINE");
                user.setAddress("NO DEFINE");//4.开始一个事务
                user.setAuthority(0);
                session.save(user);      //5.持久化操作

            }
            out.println(isValid);
            System.out.println(isValid);
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
        //session.getTransaction().commit();//事务提交
        //session.close();
	}



}
