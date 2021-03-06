$(document).ready(function() {
	$("#addUserForm").validate({
		success:function(){
			$(".errorinfo").remove();
		},
		rules:{
			"userName":{
				required:true
			},
			"roleId":{
				required:true
			},
			"mobile":{
				required:true
			},
			"creditId":{
				required:true
			},
			"email":{
				required:true,
				email:true
			}	
		},
		message:{
			"userName":{
				required:"用户名不能为空"
			},
			"roleId":{
				required:"至少选择一个角色"
			},
			"mobile":{
				required:"电话号码不能为空"
			},
			"creditId":{
				required:"身份证号不能为空"
			},
			"email":{
				required:"邮件不能为空",
				email:"请输入正确的邮箱地址"
			}
		},
		errorPlacement: function(error, element) {
  			error.removeClass("error");
				var span = $("<span class='icon errorinfo' />").append(error);
				span.appendTo(element.parent());
		}
	});
	
	$("#btnAddUser").click(function(){
		if($("#addUserForm").valid()){
			$("#addUserForm").submit();
		}
	});
	
	function validateForm(obj){
		$(obj).validate({
			success:function(){
				$(".errorinfo").remove();
			},
			rules:{
				"userName":{
					required:true
				},
				"mobile":{
					required:true
				},
				"creditId":{
					required:true
				},
				"email":{
					required:true,
					email:true
				}	
			},
			message:{
				"userName":{
					required:"用户名不能为空"
				},
				"mobile":{
					required:"电话号码不能为空"
				},
				"creditId":{
					required:"身份证号不能为空"
				},
				"email":{
					required:"邮件不能为空",
					email:"请输入正确的邮箱地址"
				}
			},
			errorPlacement: function(error, element) {
	  			error.removeClass("error");
					var span = $("<span class='icon errorinfo' />").append(error);
					span.appendTo(element.parent());
			}
		});
	}
	
	
	$("#btnUpdateUser").click(function(){
		var validForm = $(this).parent().find("#updateUserForm");
		if($(validForm).valid()){
			$(validForm).submit();
		}
	});
	
	
	
	function deleteUser(id){
		if(confirm("确定删除该用户？")){
			$.ajax({
				url:"user/deleteUser",
				type:"post",
				data:{
					userId:id
				},
				success:function(data){
					if(data["success"]){
						alert("删除成功");
						window.location.href="user/toUserManage";
					}else{
						alert("删除失败");
					}
				},
				error:function(){
					alert("删除失败");
				}
			});
		}
	}
	
	$("input[type=checkbox]").change(function(){
		var roleIdInput = $(this).parent().parent().parent().find("#roleId").val("");
		String roleIds = "";
		$(this).parent().find("input[type=checkbox]").each(function(){
			if($(this).checked==true){
				if(roleIds==""){
					roleIds = $(this).val();
				}else{
					roleIds = "," + $(this).val();
				}
			}
		});
		$(this).parent().parent().parent().find("#roleId").val(roleIds);
	})
})


$(document).ready(function() {
	$('#addUserForm').validate({
		success:function(){
			$(".icon").remove();
		},
		rules:{
			"userName":{
				required:true
			},
			"roleId":{
				required:true
			},
			"mobile":{
				required:true
			},
			"creditId":{
				required:true
			},
			"email":{
				required:true,
				email:true
			}	
		},
		message:{
			"userName":{
				required:"用户名不能为空"
			},
			"roleId":{
				required:"至少选择一个角色"
			},
			"mobile":{
				required:"电话号码不能为空"
			},
			"creditId":{
				required:"身份证号不能为空"
			},
			"email":{
				required:"邮件不能为空",
				email:"请输入正确的邮箱地址"
			}
		},
		errorPlacement: function(error, element) {
  			error.removeClass("error");
			var span = $("<span class='icon errorInfo' />").append(error);
			span.appendTo(element.parent());
		}
	});
	
	$('#btnAddUser').click(function(e){
		alert("ssss");
		if($('#addUserForm').valid()){
			$('#addUserForm').submit();
		}
	});
	
	function validateForm(obj){
		$(obj).validate({
			success:function(){
				$(".errorInfo").remove();
			},
			rules:{
				"userName":{
					required:true
				},
				"mobile":{
					required:true
				},
				"creditId":{
					required:true
				},
				"email":{
					required:true,
					email:true
				}	
			},
			message:{
				"userName":{
					required:"用户名不能为空"
				},
				"mobile":{
					required:"电话号码不能为空"
				},
				"creditId":{
					required:"身份证号不能为空"
				},
				"email":{
					required:"邮件不能为空",
					email:"请输入正确的邮箱地址"
				}
			},
			errorPlacement: function(error, element) {
	  			error.removeClass("error");
					var span = $("<span class='icon errorInfo' />").append(error);
					span.appendTo(element.parent());
			}
		});
	}
	
	
	$('#btnUpdateUser').click(function(){
		var validForm = $(this).parent().find("#updateUserForm");
		if($(validForm).valid()){
			$(validForm).submit();
		}
	});
	
	
	
	function deleteUser(id){
		if(confirm("确定删除该用户？")){
			$.ajax({
				url:"user/deleteUser",
				type:"post",
				data:{
					userId:id
				},
				success:function(data){
					if(data["success"]){
						alert("删除成功");
						window.location.href="user/toUserManage";
					}else{
						alert("删除失败");
					}
				},
				error:function(){
					alert("删除失败");
				}
			});
		}
	}
	
	$("input[type=checkbox]").change(function(){
		var roleIdInput = $(this).parent().parent().parent().find("#roleId").val("");
		String roleIds = "";
		$(this).parent().find("input[type=checkbox]").each(function(){
			if($(this).checked==true){
				if(roleIds==""){
					roleIds = $(this).val();
				}else{
					roleIds = "," + $(this).val();
				}
			}
		});
		$(this).parent().parent().parent().find("#roleId").val(roleIds);
	})
})


		$("#updateUserForm").validate({
			success:function(label){
				label.remove();
			},
			rules:{
				"userName":{
					required:true
				},
				"mobile":{
					required:true
				},
				"creditId":{
					required:true
				},
				"email":{
					required:true,
					email:true
				}	
			},
			messages:{
				"userName":{
					required:"用户名不能为空"
				},
				"mobile":{
					required:"电话号码不能为空"
				},
				"creditId":{
					required:"身份证号不能为空"
				},
				"email":{
					required:"邮件不能为空",
					email:"请输入正确的邮箱地址"
				}
			},
			errorPlacement: function(error, element) {
				var span = $("<span class='icon errorInfo' />").append(error);
				span.appendTo(element.parent());
			}
		});

	$('#btnUpdateUser').click(function(e){
		//var validForm = $(this).parents(".tcbox").find("#updateUserForm");
		if($(this).parents(".tcbox").find("#updateUserForm").valid()){
			$(this).parents(".tcbox").find("#updateUserForm").submit();
		}else{
			alert("ssssssss");
		}
	});
	
	$('#addUserForm').validate({
		success:function(label){
			label.remove();
		},
		rules:{
			"userName":{
				required:true
			},
			"roleId":{
				required:true
			},
			"mobile":{
				required:true
			},
			"creditId":{
				required:true
			},
			"email":{
				required:true,
				email:true
			}	
		},
		messages:{
			"userName":{
				required:"用户名不能为空"
			},
			"roleId":{
				required:"至少选择一个角色"
			},
			"mobile":{
				required:"电话号码不能为空"
			},
			"creditId":{
				required:"身份证号不能为空"
			},
			"email":{
				required:"邮件不能为空",
				email:"请输入正确的邮箱地址"
			}
		},
		errorPlacement: function(error, element) {
			var span = $("<span class='icon errorInfo' />").append(error);
			span.appendTo(element.parent());
		}
	});
	
	$("#btnAddUser").click(function(e){
		if($('#addUserForm').valid()){
			$('#addUserForm').submit();
		}
	});
	
	$("input[type=checkbox]").change(function(){
		$(this).parents(".li_sex").find("#roleId").val("");
		var roleIds = "";
		$(this).parents(".jsSelect").find("input[type=checkbox]").each(function(){
			if($(this).is(":checked")){
				if(roleIds == ""){
					roleIds = $(this).val();
				}else{
					roleIds = roleIds + "," + $(this).val();
				}
			}
			
		});
		$(this).parents(".li_sex").find("#roleId").val(roleIds);
	});