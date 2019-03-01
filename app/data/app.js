$(document).ready(function(){
    
    $('select').formSelect();
})

$("#submit").on("click", function (event) {
    event.preventDefault();
    instance.getSelectedValues();
    console.log(instance)
});
