var customDownload = function () {
    $("#test").load('/moreinfo');
};
$( "#ButMore" ).on("click", function() {
    $("#test").empty();
    $("#ButMore").remove();
});