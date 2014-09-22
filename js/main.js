window.onload = init;
function init(){
    //document.getElementById("btnSubmit").addEventListener("click", validate);
    document.getElementById("btnSubmit").onclick = validate;

    var formElemNode = document.forms.myformName;
    var sameFormElemNode = document.forms.myformID;
    var preferredFormElemNode = document.getElementById("myformID");

    console.log("access form element node using name property: ", formElemNode);
    console.log("access from element node using id property: ", sameFormElemNode);
    console.log("access form element node using getElementByID: ", preferredFormElemNode);
}

function validate( ){
    var fname = document.getElementById("fullname").value;
    //the variable fname contains the VALUE which the user enter in the field.
    console.log("Value of fname is:", fname);

    var utype = document.getElementById("usertype").value;
    //utype will contain the value from the dropdown list which the user selected
    console.log("Value of utype is:", utype);

    if( fname.length > 0 ){
        return true;  //stop the form submission if they entered nothing for fullname
    }
    else{
        return false;
    }
}
