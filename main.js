//Domashka 10/10/19

function showRequest (){
   
    var xhr=new XMLHttpRequest();
    var url='https://swapi.co/api/people/13/';
    
    xhr.open('Get', url); //запит на сервер
    xhr.send(); // відповідь з сервера методом send
    xhr.onreadystatechange=function(){
        if(xhr.readyState!=4) return;
        var data=JSON.parse(xhr.responseText); //
        show(data);}
    }
    function show(data){ 
        for (var key in data){
    document.write(key+"="+ data[key]+"<br>");
        }
        
        console.log(data);
    }

    function showRequest2 (){
   
        var xhrr=new XMLHttpRequest();
        var url='https://swapi.co/api/people/10/';
        
        xhrr.open('Get', url); //запит на сервер
        xhrr.send(); // відповідь з сервера методом send
        xhrr.onreadystatechange=function(){
            if(xhrr.readyState!=4) return;
            var data=JSON.parse(xhrr.responseText); //
            show(data);}
        }
        function show(data){ 
            for (var key in data){
        document.write(key+"="+ data[key]+"<br>");
            }
            
            console.log(data);
        }
    
    function showRequest3 (){
   
            var xhrrr=new XMLHttpRequest();
            var url='https://swapi.co/api/people/8/';
            
            xhrrr.open('Get', url); //запит на сервер
            xhrrr.send(); // відповідь з сервера методом send
            xhrrr.onreadystatechange=function(){
                if(xhrrr.readyState!=4) return;
                var data=JSON.parse(xhrrr.responseText); //
                show(data);}
            }
            function show(data){ 
                for (var key in data){
            document.write(key+"="+ data[key]+"<br>");
                }
                
                console.log(data);
            }
