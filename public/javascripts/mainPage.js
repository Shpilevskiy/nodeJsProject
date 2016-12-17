var customDownload = function () {
    $("#test").append($("#test").load('/moreinfo'));
};
$( "#ButMore" ).on("click", function() {
    $("#test").empty();
    $("#ButMore").remove();
});