

// Vars for APIXU
const url = "http://api.apixu.com/v1/current.json?key=";
const apiKey = "ebddb0d547454ebaa50172942190202"



const $input = $("#search-input");


// AJAX functions
const getWeather = async () =>{
	const city = $input.val();
	const urlToFetch = `${url}${apiKey}&q=${city}`;
	try {
		const response = await fetch(urlToFetch);
		if (response.ok){
			
			const jsonResponse = await response.json()
			
			const temp = jsonResponse.current.temp_c;
			console.log(temp);
			return [temp, city];

		} 
	}catch (error){
			console.log(error.message);
		}


};

const executeSearch = async ()=>{
     let weather =  await getWeather();
     
     $('#testing').append('The weather in ' + weather[1] + ' is ' + weather[0] + '<br>');
};
$("#button").click(executeSearch);
  
  $(window).keydown(function(event){
    if(event.keyCode === 13) {
      
      executeSearch();
     
      return false;
 
    }
  });
