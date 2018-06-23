package sample;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Inventory {
    private String book;
    private Integer total;

    @Id
    @Column(name = "book", nullable = false, length = 45)
    public String getBook() {
        return book;
    }

    public void setBook(String book) {
        this.book = book;
    }

    @Basic
    @Column(name = "total", nullable = true)
    public Integer getTotal() {
        return total;
    }

    public void setTotal(Integer total) {
        this.total = total;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Inventory inventory = (Inventory) o;
        return Objects.equals(book, inventory.book) &&
                Objects.equals(total, inventory.total);
    }

    @Override
    public int hashCode() {

        return Objects.hash(book, total);
    }
}
