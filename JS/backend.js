$(document).ready(function()
{
	var a=[1,2,3,4];
	
	function displaydom(a)
	{
		for(var i=0;i<a.length;i++)
		{
			var b = a[i];
			$("ol").append(a[i]+ "<br>");
		}
	}
	
	
	$("#toggle").on("click", function()
	{
		
		var flag= true;
		for(var i=0;i<a.length;i++)
		{
			
			if($("#input").val() == a[i])
			{
				
				flag=false;
				console.log(flag);
				console.log($("#input").val());
			}
		}
		
		if(flag)
		{
			var b = $("#input").val();
			a.push(b);
			$("ol").append(b+ "<br>");

		}
		else
		{
			alert(" The given input already exists");	
		}	
		
	});
	
	
	
	
	
	
		
});