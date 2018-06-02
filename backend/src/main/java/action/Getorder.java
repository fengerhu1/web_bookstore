package action;

import com.opensymphony.xwork2.ActionSupport;
import net.sf.json.JSONArray;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import sample.Userorder;

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
public class Getorder extends  ActionSupport {
    public Getorder(){}
    private JSONArray result1;
    public JSONArray getResult(){
        return result1;
    }
    public void get() throws Exception {
        HttpServletRequest request = ServletActionContext.getRequest();
        HttpServletResponse response = ServletActionContext.getResponse();
        response.setContentType("text/html;charset=utf-8");
        PrintWriter pw = response.getWriter();
        Configuration configuration = new Configuration().configure();
        SessionFactory sessionFactory = configuration.buildSessionFactory();
        Session session = sessionFactory.getCurrentSession();
        HttpSession session1 = request.getSession();
        String name = (String)session1.getAttribute("name");
        Transaction tx = null;

        try{
            tx=session.beginTransaction();
            List<Userorder> result = session.createQuery("from Userorder where username = :username").setParameter("username", name).list();
            Iterator<Userorder> it = result.iterator();

            ArrayList<JSONArray> booksJson = new ArrayList<JSONArray>();
            while (it.hasNext()) {
                Userorder userorder = (Userorder) it.next();
                ArrayList<String> arrayList = new ArrayList<String>();
                arrayList.add(userorder.getId());
                arrayList.add(userorder.getUsername());
                arrayList.add(userorder.getSum());
                arrayList.add(userorder.getDetail());

                booksJson.add(JSONArray.fromObject(arrayList));
            }
            JSONArray userorders = JSONArray.fromArray(booksJson.toArray());

            pw.println(userorders);
            pw.flush();
            pw.close();
            System.out.println(userorders);

            result1 = userorders;
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
