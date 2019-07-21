// javascript grab the value of what the user click the button in the input field
function grabUserInput(){
let inputvalue = document.getElementById("userInput").value;
console.log(inputvalue);
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
   
    var img = document.createElement("img");
    img.src = images;

     console.log(img);
     
    document.getElementById("box1").appendChild(img);
  }

} )
.catch( error => console.error('error:', error) );


//clear input
document.getElementById("userInput").value = "";
}

/*this was made to take the input when user user enter.
was getting onclick errors
and then it was not even showing any errors but still 
not grabing the vaule when user enter key*/
let input = document.getElementById("userInput");
if(input){
input.addEventListener("keyup", function(event) {
    event.preventDefault();
  if (event.keyCode == 13) {
  document.getElementById("submitBtn").click();
  }
});

}


