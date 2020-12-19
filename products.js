
function generateOrderList(ProductData) {
    $('tbody')
    .append($('<tr>').addClass("tableRow")
    .append($('<td>').addClass("productID").text(ProductData.id))
    .append($('<td>').addClass("medicineName").text(ProductData.medicineName))
    .append($('<td>').addClass("medicineBrand").text(ProductData.medicineBrand))
    .append($('<td>').addClass("expDate").text(ProductData.expiryDate))
    .append($('<td>').addClass("unitPrice").text("$"+ProductData.unitPrice))
    .append($('<td>').addClass("stock").text(ProductData.stock))
    )

    
    // $('#lowCB').click( () => {
    //     ($('#lowCB').prop('checked') == false && ProductData.stock < 100) ? ($('.tableRow').addClass('hide')) : $('.tableRow').removeClass('hide')
    // })
    
}



// $('#packedCB').click( () => {
//     ($('#packedCB').prop('checked') == false) ?  $('.Packed').addClass('hide') :  $('.Packed').removeClass('hide')
// })

// $('#inTransmitCB').click( () => {
//     ($('#inTransmitCB').prop('checked') == false) ?  $('.InTransit').addClass('hide') :  $('.InTransit').removeClass('hide')
// })

// $('#deliveredCB').click( () => {
//     ($('#deliveredCB').prop('checked') == false) ?  $('.Delivered').addClass('hide') :  $('.Delivered').removeClass('hide')
// })



let ProductCount = 0

$.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products', (data) => {
    
    ProductCount = data.length

    $('#productCount').text(ProductCount)


    for(var i=0 ; i<data.length ; i++) {

        generateOrderList(data[i])
        
    }
    

}).fail(() => alert("order GET failed"))


