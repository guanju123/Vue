function sendGet(url,callback){
	var ajax = new XMLHttpRequest();
	ajax.open("GET",url)
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			callback(ajax.responseText)
		}
	}
	ajax.send(null);
}

function sendPost(url,data,callback){
	var str = ""
	for(var i in data){
		str = str + i+"="+ data[i] + "&"
	}
	data = str.slice(0,str.length-1);
	
	var ajax = new XMLHttpRequest();
	ajax.open("POST",url)
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			callback(ajax.responseText)
		}
	}
	ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	ajax.send(data);	//字符，提前设置，格式
}