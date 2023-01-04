/* We use the document to manipulate the DOM calling a ready function that has 2 nested functions inside 1st one is waiting a Onclick event that when proc will apply the property of active (which in this case is a predifined CSS class) to the modal_box class in order to display as block, making it visible.*/

/*Same logic goes to the 2nd function that waits a Onclick event that this time will remove the property of active given on the 1st function this way applying a display:none to the modal making it invisible.*/

$(document).ready(function () {
    $(".modal_btn").click(function () {
        $(".modal_box").addClass("active");
    });
    $(".modal_close").click(function () {
        $(".modal_box").removeClass("active");
    });
    $(".btn_cancel").click(function () {
        $(".modal_box").removeClass("active");
    });
});