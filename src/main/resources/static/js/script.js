console.log("This Is Script File");


const toggleSidebar = () => {
	
	if($('.sidebar').is(":visible")){
		//ture
		//band karna hai
		
		$(".sidebar").css("display", "none");
		$(".content").css("margin-left","0%");

	}else{
		//false
		//show karna hai
		$(".sidebar").css("display","block");
		$(".content").css("margin-left","20%");
	}
};