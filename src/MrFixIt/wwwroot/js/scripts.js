var test = "it works";
$(document).ready(function () {
    $(".jobSelect").click(function () {
        $.ajax({
            type: 'GET',
            url: '/Jobs/Index',
            success: function (result) {
                var div = $(result).find('#jobClaimDiv').html();
                $('#result').html(div);
            }
        });
    });
});