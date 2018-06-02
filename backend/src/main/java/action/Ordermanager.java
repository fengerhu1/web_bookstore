package action;

import com.opensymphony.xwork2.ActionSupport;
import net.sf.json.JSONArray;
import org.apache.struts2.ServletActionContext;
import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;
import sample.Userorder;
import sample.Amountpermouth;
//import org.hibernate.cfg.Configuration;

/**
 * Servlet implementation class UserManagerServlet
 */

public class Ordermanager extends ActionSupport {

    public void manager() throws Exception {
        HttpServletResponse response = ServletActionContext.getResponse();
        HttpServletRequest request = ServletActionContext.getRequest();
        response.setContentType("text/html;charset=utf-8");

        String table = (String) request.getParameter("table");
        String id = (String) request.getParameter("id");
        String sum = (String) request.getParameter("sum");
        HttpSession session1 = request.getSession();
        String name = (String)session1.getAttribute("name");

        System.out.println(table);
        System.out.println("table");
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
            if (isValid) {

                Userorder userorder = new Userorder();
                userorder.setDetail(table);
                userorder.setId(id);
                userorder.setSum(sum);
                userorder.setUsername(name);
                session.save(userorder);      //5.持久化操作

            }
            //out.println(isValid);
            System.out.println(isValid);
            //tx.commit();    //6.提交事务
            //Transaction tx2 = session.beginTransaction();
            System.out.println("num per month0");
            JSONArray jsonArray = JSONArray.fromObject(table);
            for (int i = 0; i < jsonArray.length(); i++) {
                System.out.println(jsonArray.get(i));

                JSONArray jsonArray2 = JSONArray.fromObject(jsonArray.get(i));
                System.out.println(jsonArray2.get(0));
                System.out.println(jsonArray2.get(1));
                System.out.println(jsonArray2.get(2));
                System.out.println(jsonArray2.get(3));
                String bookname = (String)jsonArray2.get(0);
                int num=Integer.parseInt((String)jsonArray2.get(1));
                Query result =session.createQuery("select amount from Amountpermouth where book = :bookname").setParameter("bookname", bookname);
                List<Object> list = result.list();
                if (list.size() > 0)
                {
                    Iterator it=list.iterator();
                    int totalnum = num +(Integer) it.next();
                    System.out.println("num per month1");
                    Query query1 =session.createQuery("update Amountpermouth set book=:bookname , amount=:totalnum where book=:bookname2").setParameter("bookname", bookname).setParameter("bookname2", bookname).setParameter("totalnum", totalnum);
                    query1.executeUpdate();
                }
                else
                {
                    System.out.println("num per month2");
                    System.out.println(num);
                    Amountpermouth amountpermouth = new Amountpermouth();
                    amountpermouth.setBook(bookname);
                    amountpermouth.setAmount(num);
                    session.save(amountpermouth);
                }
            }
            /*Book book = new Book();
            book.setLanguage("chinese");
            book.setAuthor("fengerhu");
            book.setPublished("lalala");
            book.setSale("190");
            book.setTitle("dsadasda");
            session.save(book);*/
            tx.commit();

        }
        //catch (Exception e) {
            //if(tx!=null){
            //    tx.rollback();  //事务回滚
            //}
            //e.printStackTrace();
        //}
        finally{
            //session.close();   //7.关闭session
        }

        out.flush();
        out.close();
        //session.getTransaction().commit();//事务提交
        //session.close();
	}



}
