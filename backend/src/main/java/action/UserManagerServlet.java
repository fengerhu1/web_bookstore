package action;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
//import org.hibernate.cfg.Configuration;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.hibernate.Query;
import sample.Users;

/**
 * Servlet implementation class UserManagerServlet
 */

public class UserManagerServlet extends ActionSupport {

    public void usermanage() throws Exception {
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("UTF-8");    //设置响应的字符集格式为UTF-8
        response.setContentType("text/html");  //设置响应正文的MIME类型
        //Session session = new Configuration().configure().buildSessionFactory().getCurrentSession();
        //session.beginTransaction();//开始事务
        Configuration configuration = new Configuration().configure();
        //如果不使用configure()方法,这时hibernate会在classpath下面寻找hibernate.properties文件，如果没有找到该文件，系统会打印如下信息并抛出HibernateException异常。
        //2.创建SessionFactory工厂对象
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        //3.获取Session对象
        Session session = sessionFactory.getCurrentSession();
        Transaction tx = session.beginTransaction();
            PrintWriter out = response.getWriter();
            out.println("<html><head><title>User Manager</title></head><body>");
        Query result =session.createQuery("from Users");
        List<Users> list = result.list();
//使用forEach遍历集合
        if (list.size() > 0) {
            out.println("<h2>Users in database:</h2>");
            out.println("<table border='1'>");
            out.println("<tr>");
            out.println("<th>id</th>");
            out.println("<th>Firstname</th>");
            out.println("<th>Lastname</th>");
            out.println("<th>Password</th>");
            out.println("<th>email</th>");
            out.println("</tr>");
            Iterator it = list.iterator();
            while (it.hasNext()) {
                Users user = (Users) it.next();
                out.println("<tr>");
                out.println("<td>" + user.getId() + "</td>");
                out.println("<td>" + user.getFirstname() + "</td>");
                out.println("<td>" + user.getLastname() + "</td>");
                out.println("<td>" + user.getPhone() + "</td>");
                out.println("<td>" + user.getEmail() + "</td>");
                out.println("</tr>");
            }
            out.println("</table>");
        }
        tx.commit();
           // Print page
           //printUserForm(out);

           // Write HTML footer
           out.println("<div>lalalala</div></body></html>");
           out.println("</body></html>");
           out.flush();
           out.close();
        //session.getTransaction().commit();//事务提交
        //session.close();

        //HibernateUtil.getSessionFactory().getCurrentSession().getTransaction().commit();


	}



}
