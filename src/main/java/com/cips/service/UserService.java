package com.cips.service;

import java.util.List;
import java.util.Map;

import com.cips.model.User;

public interface UserService {
	public User loginUser(User user);
	
	public void updateUser(User user);
	
	public void deleteUser(String userId);
	
	public void insertUser(User user);
	
	public List<User> getUserList(Map<String,Object> map);
	
	public List<User> selectUserInfo(String userInfo);
	
	public User getUserByUserId(String userId);
}
