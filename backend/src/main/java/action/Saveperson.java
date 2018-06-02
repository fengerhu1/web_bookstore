package action;

import com.opensymphony.xwork2.ActionSupport;
import net.sf.json.JSONArray;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import sample.Users;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
//import org.hibernate.cfg.Configuration;

/**
 * Servlet implementation class UserManagerServlet
 */
public class Saveperson extends ActionSupport {

    public void save() throws Exception {
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        response.setContentType("text/html;charset=utf-8");
        response.setCharacterEncoding("UTF-8");    //设置响应的字符集格式为UTF-8
        response.setContentType("text/html");  //设置响应正文的MIME类型

        Configuration configuration = new Configuration().configure();
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        Session session = sessionFactory.getCurrentSession();
        Transaction tx = null;

        PrintWriter out = response.getWriter();
        String username =  request.getParameter("username");
        String email =  request.getParameter("email");
        String password =  request.getParameter("password");
        String phone =  request.getParameter("phone");
        String address =  request.getParameter("address");
        System.out.println("phone");
        System.out.println(phone);
        try {
            tx=session.beginTransaction();    //4.开始一个事务
            HttpSession session1 = request.getSession();
            String name1 = (String)session1.getAttribute("name");
            Query result =session.createQuery("delete from Users where username=:id").setParameter("id", name1);
            result.executeUpdate();//5.持久化操作
            Users user=new Users();
            user.setId(username);
            user.setUsername(username);
            user.setPassword(password);
            user.setEmail(email);
            user.setPhone(phone);
            user.setFirstname("NO DEFINE");
            user.setLastname("NO DEFINE");
            user.setAddress(address);
            session.save(user);
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
