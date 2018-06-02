package sample;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Amountpermouth {
    private String book;
    private int amount;

    @Id
    @Column(name = "book", nullable = false, length = 45)
    public String getBook() {
        return book;
    }

    public void setBook(String book) {
        this.book = book;
    }

    @Basic
    @Column(name = "amount", nullable = false)
    public int getAmount() {
        return amount;
    }

    public void setAmount(int amount) {
        this.amount = amount;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Amountpermouth that = (Amountpermouth) o;
        return amount == that.amount &&
                Objects.equals(book, that.book);
    }

    @Override
    public int hashCode() {

        return Objects.hash(book, amount);
    }
}
