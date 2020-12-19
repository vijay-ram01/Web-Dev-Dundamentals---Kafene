
function generateOrderList(userData) {
    $('tbody')
    .append($('<tr>').addClass("tableRow")
    .append($('<td>').addClass("userID").text(userData.id))
    .append($('<td>').addClass("userProfilePic")
        .append($('<img>').attr({"src": userData.profilePic, "alt": "profile-pic"})))
    .append($('<td>').addClass("userName").text(userData.fullName))
    .append($('<td>').addClass("userDOB").text(userData.dob))
    .append($('<td>').addClass("userGender").text(userData.gender))
    .append($('<td>').addClass("userLocation").text(userData.currentCity+","+userData.currentCountry))
    )
  
}

    // =========================== SEARCH functionality ===================================

    function searchResult(searchIT, userData) {
        if(userData.fullName.contains(searchIT)) {
            generateOrderList(userData)
        } else {
            console.log("not Found")
        }
      }
    
    
    
$.get('https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users', (data) => {

        
    for(var i=0 ; i<data.length ; i++) {

        generateOrderList(data[i])

        $('#search-area input').keyup( 
            (e) => {
                console.log("here")
              if(($('#search-area input').val()).length >= 2 && (e.key == "Enter")) {
                  let valToSearch = $('#search-area input').val()
                  searchResult(valToSearch, data[i])
              } else if (e.key == "Enter") {
                  alert("Please enter at least 2 characters")
              }
            
        })
        
    }


}).fail(() => alert("Users GET failed"))

$("#reset-btn").click( ( )=> {$('#search-area input').val("")})