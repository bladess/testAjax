$("#sub").on("click",function(){
   
   $.ajax({ 
        url : 'http://192.168.1.12:8000/public/secret.json',
        type : 'GET',
        success : function(data, statut){
            $("#trois").html("le mdp est : "+data.secret);

        },
            
            
        error : function(resultat, statut, erreur){

            
            $("#trois").html("<h1>error</h1>");
        },


        complete : function(resultat, statut){
    

        }
    });


});

        