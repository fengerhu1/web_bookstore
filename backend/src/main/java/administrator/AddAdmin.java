package administrator;

import com.opensymphony.xwork2.ActionSupport;
import net.sf.json.JSONArray;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import sample.Shopcart;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import sample.Users;
//import org.hibernate.cfg.Configuration;

/**
 * Servlet implementation class UserManagerServlet
 */

public class AddAdmin extends ActionSupport {

    private String obj;
    public String getObj() {
        return obj;
    }
    public void setObj(String obj) {
        this.obj = obj;
    }
    public void addAdmin() throws Exception {
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        response.setContentType("text/html;charset=utf-8");

        PrintWriter out = response.getWriter();

        response.setCharacterEncoding("UTF-8");    //设置响应的字符集格式为UTF-8
        response.setContentType("text/html");  //设置响应正文的MIME类型

        Configuration configuration = new Configuration().configure();
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        Session session = sessionFactory.getCurrentSession();
        Transaction tx = null;

        try{
            tx=session.beginTransaction();
            List<Users> result = session.createQuery("from Users ").list();
            Iterator<Users> it = result.iterator();
            System.out.println("print obj");
            System.out.println(getObj());
            ArrayList<JSONArray> booksJson = new ArrayList<JSONArray>();
            while (it.hasNext()) {

                Users user = (Users) it.next();
                ArrayList<String> arrayList = new ArrayList<String>();
                arrayList.add(user.getUsername());
                arrayList.add(user.getPhone());
                arrayList.add(user.getEmail());
                arrayList.add( String.valueOf(user.getAuthority()));
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
