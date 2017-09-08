$("#sub").on("click", function () {
    $("#trois").html('<iframe src="https://giphy.com/embed/3o7bu8sRnYpTOG1p8k" class="giphy-embed"></iframe> ');
    $.ajax({
        url: 'http://192.168.1.12:8000/users',
        type: 'POST',
        data: { name: 'cheurfa', content: "pas d'idée" },
        success: function (data, statut) {
            console.log(data);
            $.ajax({
                url: 'http://192.168.1.12:8000/users',
                type: 'GET',
                data: "name=tiraboschi",
                success: function (data, statut) {
                    $("#trois").html(data.content);
                },
                error: function () {
                    $("#trois").html("<h1>error post</h1>");
                }
            });

        },

        error: function (resultat, statut, erreur) {

            $("#trois").html("<h1>error get</h1>");
        },

    });


});

$("#subm").on("click", function () {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/forecast",
        type: 'GET',
        data: "q=" + $("#tamere").val() + "&APPID=8e625c3c868e484db57a6f15f5fb5f19",
        success: function (data) {
            for (var i = 0; i < 24; i += 8) {

                $("#trois").append("<div><img src ='http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png' />" + (data.list[i].main.temp - 273.15));
            }
        },
        error: function () {
            console.log("error meteo");
        }

    })


})