package sample;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection="users")
public class MongoUsers {
    private String name;
    private int age;
    private String pic;
    public MongoUsers() {
    }
    public MongoUsers(String name, String pic) {
        this.name = name;
        this.pic = pic;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPic() {
        return pic;
    }
    public void setPic(String pic) {
        this.pic = pic;
    }
    public int getAge() {
        return age;
    }
    public void setAge(int age) {
        this.age = age;
    }

    @Override
    public String toString() {
        return "User [name=" + name + ", pic=" + pic + "]";
    }

}
