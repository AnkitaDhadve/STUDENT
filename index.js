/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var jpdbBaseURL = 'http://api.login2explore.com:5577';
var jpdbBaseIRL = '/api/irl';
var jpdbBaseIML = '/api/iml';
var STUDENT = 'STUD_DB'
var connToken = '90938212|-31949273265086079|90954908'
$('#Roll_No').focus();

function validateAndGetFormData() {
    var Roll_NoVar = $("#Roll_No").val();
    if (Roll_NoVar === "") {
        alert("Student Roll-No Required Value");
        $("#Roll_No").focus();
        return "";
    }
    var FullNameVar = $("#FullName").val();
    if (FullNameVar === "") {
        alert("Student Name is Required Value");
        $("#FullName").focus();
        return "";
    }
    var classVar = $("#class").val();
    if (classVar === "") {
        alert("Student class is Required Value");
        $("#class").focus();
        return "";
    }
    var Birth_DateVar = $("#Birth_Date").val();
    if (Birth_DateVar === "") {
        alert("Student Birth-Date is Required Value");
        $("#Birth_Date").focus();
        return "";
    }
    var AddressVar = $("#Address").val();
    if (AddressVar === "") {
        alert("Student Address is Required Value");
        $("#Address").focus();
        return "";
    }
    var Enrollment_DateVar = $("#Enrollment_Date").val();
    if (Enrollment_DateVar === "") {
        alert("Student Enrollment-Date is Required Value");
        $("#Enrollment_Date").focus();
        return "";
    }

    var jsonStrObj = {
        Roll_No: Roll_NoVar,
        FullName: FullNameVar,
        class: classVar,
        Birth_Date: Birth_DateVar,
        Address: AddressVar,
        Enrollment_Date: Enrollment_DateVar,
    };
    return JSON.stringify(jsonStrObj);
}


function resetForm() {
    $("#STUDRoll_No").val("")
    $("#STUDFullName").val("");
    $("#STUDclass").val("");
    $("#STUDBirth_Date").val("");
    $("#STUDAddress").val("");
    $("#STUDEnrollment_Date").val("");
    $("#STUDRoll_No").focus();
}

function saveStudent() {

    var jsonStr = validateAndGetFormData();
    if (jsonStr === "") {
        return;
    }

    var putReqStr = createPUTRequest("90938212|-31949273265086079|90954908",
            jsonStr, "STUDENT", "STUD-REL");
    alert(putReqStr);
    jQuery.ajaxSetup({async: false});
    var resultObj = executeCommandAtGivenBaseUrl(putReqStr, "http://api.login2explore.com:5577", "/api/iml");

    jQuery.ajaxSetup({async: true});

    alert(JSON.stringify(resultObj));
    resetForm();
}
