package dao.impl;

import dao.ShopcartDao;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import sample.Shopcart;

import java.util.List;

public class ShopcartDaoImpl extends HibernateDaoSupport implements ShopcartDao {

	public Integer save(Shopcart shopcart) {
		return (Integer) getHibernateTemplate().save(shopcart);
	}

	public void delete(Shopcart shopcart) {
		getHibernateTemplate().delete(shopcart);
	}

	public void update(Shopcart shopcart) {
		getHibernateTemplate().merge(shopcart);
	}

	public Shopcart getShopcartById(int id) {
		@SuppressWarnings("unchecked")
		List<Shopcart> shopcarts = (List<Shopcart>) getHibernateTemplate().find(
				"from Shopcart as b where b.id=?", id);
		Shopcart shopcart = shopcarts.size() > 0 ? shopcarts.get(0) : null;
		return shopcart;
	}

	public List<Shopcart> getAllShopcarts() {
		@SuppressWarnings("unchecked")
		List<Shopcart> shopcarts = (List<Shopcart>) getHibernateTemplate()
				.find("from Shopcart");
		return shopcarts;
	}

}
