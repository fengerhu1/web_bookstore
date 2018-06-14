package action;

import com.opensymphony.xwork2.ActionSupport;
import org.apache.struts2.ServletActionContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import sample.MongoUsers;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.PrintWriter;
import java.util.List;

public class mongoUserUpdata extends  ActionSupport{
    private static MongoTemplate template;
    static{
        ClassPathXmlApplicationContext applicationContext = new ClassPathXmlApplicationContext("spring-config.xml");
        template = (MongoTemplate) applicationContext.getBean("mongoTemplate");
    }
    public void findAll() throws Exception{
        HttpServletRequest request = ServletActionContext.getRequest();
        HttpServletResponse response = ServletActionContext.getResponse();
        response.setContentType("text/html;charset=utf-8");
        PrintWriter pw = response.getWriter();
        String pic = (String) request.getParameter("pic");
        pic = pic.replaceAll(" ", "+");
        HttpSession session1 = request.getSession();
        String name1 = (String)session1.getAttribute("name");
        System.out.println(pic);
        template.updateMulti(new Query(Criteria.where("name").is(name1)),
                new Update().set("pic", pic),
                MongoUsers.class);
    }

}
