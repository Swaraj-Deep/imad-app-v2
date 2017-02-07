var button =document.getElementById("counter");



button.onclick=function(){
    
    var request=new XMLHttprequest();
    
    
    request.onreadystatechange= function(){
        
        if(request.readystate===XMLHttprequest.DONE)
        {
            if(request.status===200)
            {
                 var counter=request.responseText;
                 var span=document.getElementById("count");
                 span.innerHTML=counter.toString();             
            }
            
        }
        
    };
    
    request.open('GET','http://swaraj-deep.imad.hasura-app.io/counter',true);
    request.send(null);
   
};