var test = "it works";
$(document).ready(function () {
    $(".listJobs").click(function () {
        $.ajax({
            type: 'GET',
            url: '/Jobs/Index',
            success: function (result) {
                var div = $(result).find('#jobClaimDiv').html();
                $('#result').html(div);
            }
        });
    });
    $(".makeActive").click(function () {
        $.ajax({
            type: 'GET',
            url: '/Jobs/Index',
            success: function (result) {
                var d = document.getElementById("active");
                d.className += "current";
            }
        });
    });
    //$(".jobSelectConfirm").click(function () {
    //    $.ajax({
    //        type: 'GET',
    //        url: '/Jobs/Claim',
    //        success: function (result) {
    //            var div = $(result).find('#jobSelectConfirm').html(div);
    //        }
    //    });
    //});
    //$(".JobSelect").submit(function (event) {
    //    event.preventDefault();
    //    $.ajax({
    //        url:'/Jobs/Claim'
    //    })
    //})
});