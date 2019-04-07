var page1=document.getElementById('page1')

var xhr=new XMLHttpRequest()
xhr.open("get","../php/xiaoyuanzhaopin.php",true)
xhr.onreadystatechange=function () {
	if (xhr.readyState==4&&xhr.status==200) {
		var data=JSON.parse(xhr.responseText)
		console.log(data)
		var domStr="<table cellpadding='0' cellspacing='0' class='data'><tr style='background:lightblue'><td style='width:340px;padding-left: 35px'>职位名称</td><td style='width:160px'>职位类别</td><td style='width:160px'>职位类型</td><td style='width:130px'>工作地点</td><td style='width:130px'>发布时间</td></tr>"
		for (var i = 0; i < data.data.length; i++) {
			domStr+="<tr><td style='padding-left: 35px'>"+data.data[i].职位名称+"</td><td>"+data.data[i].职位类别+"</td><td>"+data.data[i].职位类型+"</td><td>"+data.data[i].工作地点+"</td><td>"+data.data[i].发布时间+"</td></tr>"
		}
		domStr+="</table>"
		console.log(domStr)
		page1.innerHTML= domStr	
	}
}
xhr.send(null)