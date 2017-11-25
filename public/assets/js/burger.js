$(function() {
    // when create-burger is clicked, run the post function
    $(".create-burger").on("submit", function(event) {

        event.preventDefault();

        var newBurger = {
            burger_name: $("#burg").val().trim()
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        })
        .then (
            function() {
                location.reload();
            }
        );
    });
    // if this button is clicked, change state of devoured to true
    $(".if-eaten").on("click", function(event) {

        event.preventDefault();

        var id = $(this).data("id");
        var justDevoured = true;
        var justDevouredState = {
            devoured: justDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: justDevouredState
        })
        .then (
            function() {
                console.log("Burger has been eaten ", id);
                location.reload();
            }
        );
    });
});