// https://developer.chrome.com/docs/extensions/reference/manifest/background

//Listen for specific events in here for a trigger
/*
chrome.runtime.onMessage.addListener(data => //listen for message from popup.js
    {
    const { scrapeSource,scrapeMethod, inputEntry, userComment, basicFeatures, advFeatures, 
    stopWord,extraSpace,urlRemove,lowerCase,outContractions,lemmatizeText,hashRemove,
    unicodeRemove,xmlRemove,htmlRemove,emojiRemove,emoticonRemove,pictographRemove,mapSymbol,
    punctuationRemove,numberRemove,accentRemove } = data //destructure data object
        switch(event){ //switch on event
            case 'onStart': //if event is onStart
                handleOnStart(prefs); //call handleOnStart function
                break;
            default:
                break;
        }
})

const handleOnStart= (prefs) => { //handleOnStart function
    console.log("onStart in background"); //log to console
    console.log("prefs recieved:", prefs); //log to console
    chrome.storage.local.set(prefs);  //set prefs in local storage
} */


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
};