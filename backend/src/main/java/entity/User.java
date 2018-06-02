package entity;

import org.hibernate.Session;

import java.util.List;

public class User {
    private Long id;

    private String pwd;
    private String icon;
    private String phone;
    private String email;
    private String name;

    public User() {
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    private void setMyUser(User item) {
        setName(item.getName());
        setEmail(item.getEmail());
        if (item.getIcon() == null) setIcon("");
        else setIcon(item.getIcon());
        setPhone(item.getPhone());
        setPwd(item.getPwd());
        setId(item.getId());
    }


}
