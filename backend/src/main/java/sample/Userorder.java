package sample;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Userorder {
    private String username;
    private String id;
    private String sum;
    private String detail;

    @Basic
    @Column(name = "username", nullable = false, length = 45)
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    @Id
    @Column(name = "ID", nullable = false, length = 45)
    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    @Basic
    @Column(name = "sum", nullable = true, length = 45)
    public String getSum() {
        return sum;
    }

    public void setSum(String sum) {
        this.sum = sum;
    }

    @Basic
    @Column(name = "detail", nullable = true, length = 200)
    public String getDetail() {
        return detail;
    }

    public void setDetail(String detail) {
        this.detail = detail;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Userorder userorder = (Userorder) o;
        return Objects.equals(username, userorder.username) &&
                Objects.equals(id, userorder.id) &&
                Objects.equals(sum, userorder.sum) &&
                Objects.equals(detail, userorder.detail);
    }

    @Override
    public int hashCode() {

        return Objects.hash(username, id, sum, detail);
    }
}
