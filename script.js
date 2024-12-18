$(document).ready(function () {
    $("#submitButton").click(function () {
        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            dob: $("#dob").val(),
            gender: $("#gender").val(),
            message: $("#message").val(),
        };

        $.post("process.php", formData, function (response) {
            $("#responseMessage").html(response).fadeIn();
        });
    });
});
