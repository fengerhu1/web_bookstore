package action;

import com.opensymphony.xwork2.ActionSupport;
import net.sf.json.JSONArray;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import sample.Amountpermouth;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
//import org.hibernate.cfg.Configuration;

/**
 * Servlet implementation class UserManagerServlet
 */

public class ShowTu extends ActionSupport {


    public void ShowTu() throws Exception {
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
            List<Amountpermouth> result = session.createQuery("from Amountpermouth ").list();
            Iterator<Amountpermouth> it = result.iterator();

            ArrayList<String> arrayList = new ArrayList<String>();
            while (it.hasNext()) {

                Amountpermouth user = (Amountpermouth) it.next();
                arrayList.add(user.getBook());
            }

            JSONArray shopcarts = JSONArray.fromArray(arrayList.toArray());


            System.out.println(shopcarts);

            out.println(shopcarts);

            tx.commit();
        } catch (Exception e) {
            tx.rollback();
            throw new RuntimeException(e);
        } finally{
        }
        out.flush();
        out.close();
	}

}
