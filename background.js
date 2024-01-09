// https://developer.chrome.com/docs/extensions/reference/manifest/background




//API KEY & URL
const apiKey="zpAJWuWgF++1OeTRzDpVnQ==NUdczhqSWGHOGpvU";
//free key with 10k calls per month :) not worried about it being public since it's free and will shut down afterwards
const apiUrl="https://api.api-ninjas.com/v1/webscraper?url=";

chrome.runtime.onMessage.addListener(data => {
    const { event, prefs } = data;

    switch(event){
        case 'onStart':
            handleOnStart(prefs);
            break;
        default:
            break;
    }
})

const handleOnStart = (prefs) => {
    console.log("onStart in background")
    console.log("prefs received:", prefs)
    chrome.storage.local.set(prefs)
    const url= apiUrl+prefs.inputEntry; //url is the api url plus the input entry
    console.log(url);

    fetch(url, { 
        //method: 'GET',
        headers: {  //headers for the api
            'X-API-KEY': apiKey  //api key
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
};



