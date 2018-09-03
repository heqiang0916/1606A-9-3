$(function() {
    $('.wrap p').on('click', function() {
        $.ajax({
            url: "./api/sou",
            dataType: "json",
            success: function(data) {

            }
        })
    })
})