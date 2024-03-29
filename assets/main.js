// javascript grab the value of what the user click the button in the input field
function grabUserInput(){
//clear the div if there are any images already there
document.getElementById("unsplashResults").innerHTML = "";
//getting the the user input value
let inputvalue = document.getElementById("userInput").value;
//check if we got any value and the correct vaule the user enter
console.log(inputvalue);
//display user search text
var searchElement = document.createElement("h2");
var searchText = document.createTextNode('Search results for '+ inputvalue);
searchElement.appendChild(searchText);
document.getElementById("unsplashResults").appendChild(searchElement);
//getting json data from unsplash
fetch(
  'https://api.unsplash.com/search/photos?page=1&per_page=25&query='+ inputvalue +'&client_id=39ecb897c1aef54f924ea8933270bfcb898e3618437cd8abf9eb7240671dd777',
  { method: 'GET' }
)
.then( response => response.json() )
//going through the json data
.then( function(data){
  //getting the urls images of the results
  var i;
  for (i = 0; i < 25; i++) {
    let images = data.results[i].urls.thumb;
    //creating the images to then add them to the div  
    var img = document.createElement("img");
    img.src = images;
    document.getElementById("unsplashResults").appendChild(img);
  }
})
.catch( error => console.error('error:', error) );
//clear input
document.getElementById("userInput").value = "";
}

/*this was made to take the input when user user enter.*/
let input = document.getElementById("userInput");
// add condition statement to remove addEventListener error
if(input){
input.addEventListener("keyup", function(event) {
    event.preventDefault();
  if (event.keyCode == 13) {
  document.getElementById("submitBtn").click();
  }
});

}


