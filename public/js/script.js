$(function () {
    // add burger
    $("#add-burger-button").on("click", function (event) {
        event.preventDefault();

        if ($("#burger-text").val()) {

            var newBurger = {
                burger_name: $("#burger-text").val().trim()
            };

            $.ajax("/api/burger", {
                type: "POST",
                data: newBurger
            }).then(function (res) {
                console.log(res);
                location.reload();
            }).catch(function (err) {
                console.log(err);
            });

        } else {
            alert("Enter a burger you want to eat.");
        }


    });

    // devour
    $(".devour-btn").on("click", function (event) {
        event.preventDefault();

        var burgerId = $(this).data("id");
        var devourThis = {
            id: burgerId
        };

        $.ajax("/api/burger/" + burgerId, {
            type: "PUT",
            data: devourThis
        }).then(function (res) {
            console.log(res);
            location.reload();
        });

    });

    // cleanUp
    $("#del-burger-button").on("click", function (event) {
        event.preventDefault();

        $.ajax("/api/burger/delete", {
            type: "DELETE"
        }).then(function (res) {
            console.log(res);
            location.reload();
        });

    });
});