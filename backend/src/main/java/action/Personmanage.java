package action;

import com.opensymphony.xwork2.ActionSupport;
import net.sf.json.JSONArray;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import sample.Users;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
//import org.hibernate.cfg.Configuration;

/**
 * Servlet implementation class UserManagerServlet
 */
public class Personmanage extends  ActionSupport {

    public void manage() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        HttpServletResponse response = ServletActionContext.getResponse();
        response.setContentType("text/html;charset=utf-8");
        PrintWriter pw = response.getWriter();
        Configuration configuration = new Configuration().configure();
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        Session session = sessionFactory.getCurrentSession();
        Transaction tx = null;

        try{
            tx=session.beginTransaction();
            HttpSession session1 = request.getSession();
            String name1 = (String)session1.getAttribute("name");
            List<Users> result = session.createQuery("from Users where username = :username").setParameter("username", name1).list();
            Iterator<Users> it = result.iterator();

            ArrayList<JSONArray> booksJson = new ArrayList<JSONArray>();
            while (it.hasNext()) {
                Users user = (Users) it.next();
                ArrayList<String> arrayList = new ArrayList<String>();
                arrayList.add(user.getUsername());
                arrayList.add(user.getEmail());
                arrayList.add(user.getPassword());
                arrayList.add(user.getPhone());
                arrayList.add(user.getAddress());
                booksJson.add(JSONArray.fromObject(arrayList));
            }
            JSONArray users = JSONArray.fromArray(booksJson.toArray());
            System.out.println("persondata");
            System.out.println(users);
            pw.println(users);
            pw.flush();
            pw.close();
            tx.commit();
        } catch (Exception e) {
            tx.rollback();
            throw new RuntimeException(e);
        } finally{
            //session.close();
        }

        //session.getTransaction().commit();//事务提交
        //session.close();

        //HibernateUtil.getSessionFactory().getCurrentSession().getTransaction().commit();


	}



}
