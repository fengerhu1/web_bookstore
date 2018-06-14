package dao.impl;

import dao.UserorderDao;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import sample.Userorder;

import java.util.List;

public class UserorderDaoImpl extends HibernateDaoSupport implements UserorderDao {

	public Integer save(Userorder userorder) {
		return (Integer) getHibernateTemplate().save(userorder);
	}

	public void delete(Userorder userorder) {
		getHibernateTemplate().delete(userorder);
	}

	public void update(Userorder userorder) {
		getHibernateTemplate().merge(userorder);
	}

	public List<Userorder> getUserorderById(String id) {
		@SuppressWarnings("unchecked")
		List<Userorder> userorders = (List<Userorder>) getHibernateTemplate().find(
				"from Userorder as b where b.username=?", id);
		Userorder userorder = userorders.size() > 0 ? userorders.get(0) : null;
		return userorders;
	}

	public List<Userorder> getAllUserorders() {

		System.out.println("getAllBooks");
		@SuppressWarnings("unchecked")
		List<Userorder> userorders = (List<Userorder>) getHibernateTemplate().find("from Userorder");
		return userorders;
	}

}
