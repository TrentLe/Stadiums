// let eventname = ""
// var requestOptions = {
//     type:"GET",
//     url:"https://app.ticketmaster.com/discovery/v2/",
//     async:true,
//     dataType: "json",
//     success: function(json) {
//                 console.log(json);
//                 // Parse the response.
//                 // Do other things.
//              },
//     error: function(xhr, status, err) {
//                 // This time, we do not end up here!
//              }
//   };

//   function fetchID() {
//     fetch('https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=1Lys8jMm0LYLlgs8JGDJSD7NvBVszCiy', requestOptions)
//       .then(function (response) {
//         console.log(response);
//       })
//   }

const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
})

// fetchID();