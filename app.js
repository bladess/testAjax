$("#sub").on("click",function(){
    
   $.ajax({ 
        url : 'http://192.168.1.12:8000/users',
        type : 'POST',
        data : {name:'cheurfa', content:"pas d'idée"},
        success : function(data, statut){
            console.log(data);
            $.ajax({
                url : 'http://192.168.1.12:8000/users',
                type : 'GET',
                data : "name=cheurfa",
                succes : function(data, statut){
                    console.log(1);
                },
                error : function(){
                    console.log(3);
                }
            });

        },
            
            
        error : function(resultat, statut, erreur){
            
            $("#trois").text("<h1>error get</h1>");
        },

    });


});

