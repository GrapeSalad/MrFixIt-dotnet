﻿var test = "it works";
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
    //$(".showSetActiveForm").click(function () {
    //    console.log($(this).serialize());
    //    $.ajax({
    //        type: 'GET',
    //        dataType: 'html',
    //        data: $(this).serialize(),
    //        url: '/Jobs/ActiveForm',
    //        success: function (result) {
    //            var form = $(result).find('.setActive').html();
    //            $('#activeFormShow').html(form);
    //        }
    //    });
    //});
    //$(".setActive").submit(function (event) {//why doesnt this work
    //    event.preventDefault();
    //    console.log(test);
    //    console.log("data " + $(this).serialize());
    //    $.ajax({
    //        type: 'POST',
    //        url: '/Jobs/Activate',
    //        data: $(this).serialize(),
    //        dataType: 'json',
    //        success: function (result) {
    //            var resultMessage = "This job "+ result.Name + " is now active";
    //            $('#activateResult').html(resultMessage);
    //        },
    //        error: function (result) {
    //            var resultMessage = "Its broke, but it shows";
    //            $('#activateResult').html(resultMessage);
    //        }
    //    });
    //});
    //$(".showCompletionForm").click(function () {
    //    $.ajax({
    //        type: 'GET',
    //        dataType: 'html',
    //        url: '/Jobs/CompleteForm',
    //        success: function (result) {
    //            var form = $(result).find('form').html();
    //            $('#completionFormShow').html(form);
    //        }
    //    });
    //});
    //$(".setCompletedForm").submit(function (event) {
    //    event.preventDefault();
    //    $.ajax({
    //        type: 'POST',
    //        url: '/Jobs/Complete',
    //        data: $(this).serialize(),
    //        success: function (result) {
    //            var resultMessage = "This job " + result.Name + " is now complete";
    //            $('#completionResult').html(resultMessage);
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