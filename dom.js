function addListItem () {
    let list = document.getElementById('grocery-list');
    let item = document.createElement('li');
    item.innerText = 'Milk and bread';
    list.appendChild(item);
}

$('#button-id').click(function(){
    let item = '<li class="red">Apples and Oranges</li>';
    $('#grocery-list').append(item);
})

$('#style-me').click(function(){
    $('.red').css('color', 'red');
});

$(document).ready(function(){
    $('<div></div>').css({
        'background-color': 'red',
        'height': '100px',
        'width': '100px'
    }).insertAfter('#grocery-list');
});







/*$('.button-class').click(function() {
   console.log('A button with class "button-class" was clicked.')
   });*/