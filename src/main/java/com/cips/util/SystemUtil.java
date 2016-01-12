package com.cips.util;

import java.lang.reflect.Field;

public class SystemUtil {
	 private SystemUtil() {  
	 }  
	 
	 /** 
	   * 获取系统访问的相对路径，如:/WTAS 
	   *  
	   * @return 
	   */  
	 public static String getContextPath() {  
	     return System.getProperty("");  
	 }
	 
	 public static Field getFieldByFieldName(Object obj, String fieldName){  
		  for (Class<?> superClass = obj.getClass(); superClass != Object.class; superClass = superClass.getSuperclass()) {  
			  try {  
				  return superClass.getDeclaredField(fieldName);  
			  }catch (NoSuchFieldException e) {  
			  }  
		 }  
		 return null;  
	}

	 
	 public static Object getValueByFieldName(Object obj, String fieldName) 
			 throws SecurityException, NoSuchFieldException, IllegalArgumentException, IllegalAccessException {  
	 	        Field field = getFieldByFieldName(obj, fieldName);  
	 	        Object value = null;  
	            if(field != null){  
	 	           if(field.isAccessible()){  
	 	                value = field.get(obj);  
	               }else{  
	            	    field.setAccessible(true);  
	     	            value = field.get(obj);  
	                    field.setAccessible(false);  
	    	       }  
	            }  
	     	    return value;  
	 } 
	 
	 public static void setValueByFieldName(Object obj, String fieldName,
			 Object value) throws SecurityException, NoSuchFieldException,IllegalArgumentException, IllegalAccessException {
		 Field field = obj.getClass().getDeclaredField(fieldName);
		 if(field.isAccessible()){ 
			 field.set(obj, value); 
		 }else{ 
			 field.setAccessible(true);
			 field.set(obj, value); 
			 field.setAccessible(false);
		 }
	 }


}
