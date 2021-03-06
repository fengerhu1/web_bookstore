package dao.impl;

import dao.UsersDao;
import org.springframework.orm.hibernate3.support.HibernateDaoSupport;
import sample.Users;

import java.util.List;

public class UsersDaoImpl extends HibernateDaoSupport implements UsersDao {

	public Integer save(Users user) {
		return (Integer) getHibernateTemplate().save(user);
	}

	public void delete(Users user) {
		getHibernateTemplate().delete(user);
	}

	public void update(Users user) {
		getHibernateTemplate().merge(user);
	}

	public Users getUserById(String id) {
		@SuppressWarnings("unchecked")
		List<Users> users = (List<Users>) getHibernateTemplate().find(
				"from Users as b where b.username=?", id);
		Users user = users.size() > 0 ? users.get(0) : null;
		return user;
	}

	public List<Users> getAllUsers() {
		@SuppressWarnings("unchecked")
		List<Users> users = (List<Users>) getHibernateTemplate()
				.find("from Users");
		return users;
	}
	public List<String> getUserByPassword(String username,String password)
	{
		@SuppressWarnings("unchecked")
		List<String> users = (List<String>) getHibernateTemplate().find("select username from Users where username = ? and password = ?",new String[]{username, password});
		return users;
	}

}
