$("#sub").on("click",function(){
$("#trois").html('<iframe src="https://giphy.com/embed/3o7bu8sRnYpTOG1p8k" class="giphy-embed"></iframe> ');
    $.ajax({ 
        url : 'http://192.168.1.12:8000/users',
        type : 'POST',
        data : {name:'cheurfa', content:"pas d'idée"},
        success : function(data, statut){
            console.log(data);
            $.ajax({
                url : 'http://192.168.1.12:8000/users',
                type : 'GET',
                data : "name=tiraboschi",
                success : function(data, statut){
                    $("#trois").html(data.content);
                },
                error : function(){
                    $("#trois").html("<h1>error post</h1>");                }
            });

        },
                
        error : function(resultat, statut, erreur){
            
            $("#trois").html("<h1>error get</h1>");
        },

    });


});

