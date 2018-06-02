package sample;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Shopcart {
    private String bookname;
    private String number;
    private String writer;
    private String price;
    private String buyer;
    private int id;

    @Basic
    @Column(name = "bookname", nullable = true, length = 45)
    public String getBookname() {
        return bookname;
    }

    public void setBookname(String bookname) {
        this.bookname = bookname;
    }

    @Basic
    @Column(name = "number", nullable = true, length = 45)
    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }

    @Basic
    @Column(name = "writer", nullable = true, length = 45)
    public String getWriter() {
        return writer;
    }

    public void setWriter(String writer) {
        this.writer = writer;
    }

    @Basic
    @Column(name = "price", nullable = true, length = 45)
    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    @Basic
    @Column(name = "buyer", nullable = true, length = 45)
    public String getBuyer() {
        return buyer;
    }

    public void setBuyer(String buyer) {
        this.buyer = buyer;
    }

    @Id
    @Column(name = "id", nullable = false)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Shopcart shopcart = (Shopcart) o;
        return id == shopcart.id &&
                Objects.equals(bookname, shopcart.bookname) &&
                Objects.equals(number, shopcart.number) &&
                Objects.equals(writer, shopcart.writer) &&
                Objects.equals(price, shopcart.price) &&
                Objects.equals(buyer, shopcart.buyer);
    }

    @Override
    public int hashCode() {

        return Objects.hash(bookname, number, writer, price, buyer, id);
    }
}
