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
import net.sf.json.JSONArray;
import sample.Shopcart;

import java.util.ArrayList;
//import org.hibernate.cfg.Configuration;

/**
 * Servlet implementation class UserManagerServlet
 */
public class Save extends ActionSupport {

    public void dosave() throws Exception {
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
        String table =  request.getParameter("table");
        JSONArray jsonArray = JSONArray.fromObject(table);
        try {
            tx=session.beginTransaction();    //4.开始一个事务
            HttpSession session1 = request.getSession();
            String name1 = (String)session1.getAttribute("name");
            Query result =session.createQuery("delete from Shopcart where buyer=:buyer").setParameter("buyer", name1);
            result.executeUpdate();//5.持久化操作
            for (int i = 0; i < jsonArray.length(); i++) {
                System.out.println(jsonArray.get(i));

                JSONArray jsonArray2 = JSONArray.fromObject(jsonArray.get(i));
                System.out.println(jsonArray2.get(0));
                System.out.println(jsonArray2.get(1));
                System.out.println(jsonArray2.get(2));
                System.out.println(jsonArray2.get(3));
                Shopcart shopcart=new Shopcart();
                shopcart.setBookname((String)jsonArray2.get(0));
                shopcart.setNumber((String)jsonArray2.get(1));
                shopcart.setWriter((String)jsonArray2.get(2));
                shopcart.setPrice((String)jsonArray2.get(3));
                shopcart.setBuyer(name1);
                session.save(shopcart);
            }
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
