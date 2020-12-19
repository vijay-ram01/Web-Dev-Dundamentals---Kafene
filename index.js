
function generateOrderList(orderData) {

    console.log(orderData.id)
    $('tbody')
    .append($('<tr>').addClass("tableRow "+orderData.orderStatus)
    .append($('<td>').addClass("orderID").text(orderData.id))
    .append($('<td>').addClass("CustomerName").text(orderData.customerName))
    .append($('<td>').addClass("date").text(orderData.orderDate).append($('<br>'))
        .append($('<span>').addClass('time').text(orderData.orderTime)))
    .append($('<td>').addClass("amount").text(orderData.amount))
    .append($('<td>').addClass("status").text(orderData.orderStatus))
    )
    
}

$('#newCB').click( () => {
    ($('#newCB').prop('checked') == false) ? ($('.New').addClass('hide')) : $('.New').removeClass('hide')
})

$('#packedCB').click( () => {
    ($('#packedCB').prop('checked') == false) ?  $('.Packed').addClass('hide') :  $('.Packed').removeClass('hide')
})

$('#inTransmitCB').click( () => {
    ($('#inTransmitCB').prop('checked') == false) ?  $('.InTransit').addClass('hide') :  $('.InTransit').removeClass('hide')
})

$('#deliveredCB').click( () => {
    ($('#deliveredCB').prop('checked') == false) ?  $('.Delivered').addClass('hide') :  $('.Delivered').removeClass('hide')
})



let orderCount = 0

$.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', (data) => {
    
    orderCount = data.length

    $('#orderCount').text(orderCount)
    
    for(var i=0 ; i<data.length ; i++) {

        generateOrderList(data[i])
        
    }

}).fail(() => alert("order GET failed"))


