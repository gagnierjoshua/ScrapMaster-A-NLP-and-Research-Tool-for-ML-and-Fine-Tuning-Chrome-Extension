// Inject the payload.js script into the current tab after the popout has loaded
/*window.addEventListener('load', function (evt) {
	chrome.extension.getBackgroundPage().chrome.tabs.executeScript(null, {
		file: 'payload.js'
	});;
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
	document.getElementById('pagetitle').innerHTML = message;
});

*/

//DATA INPUT ELEMENTS: Drop down menus, text boxes, etc

const scrapeSourceElement = document.getElementById('scrapeSource');
const scrapeMethodElement = document.getElementById('scrapeMethod');
const inputEntryElement = document.getElementById('inputEntry');
const userCommentElement = document.getElementById('userComment');

//BUTTON ELEMENTS: Buttons, radio buttons, etc

const basicFeaturesRadio = document.getElementById('basicFeatures'); 
const advFeaturesRadio = document.getElementById('advFeatures');

//------------OUR MAIN BUTTON TO SCRAPE AND CLEAN DATA ------------------//
const scrapecleanStartButton= document.getElementById('scrapecleanStart');

scrapecleanStartButton.onclick= function(){
	console.log("scrapecleanStartButton clicked");
	console.log("scrapeSourceElement.value: " + scrapeSourceElement.value);
	console.log("scrapeMethodElement.value: " + scrapeMethodElement.value);

	if (inputEntryElement.value){
		chrome.runtime.sendMessage({event: 'onStart'});
		console.log("inputEntryElement.value: " + inputEntryElement.value);
		console.log("userCommentElement.value: " + userCommentElement.value);
		
	}
	else{
		console.log("Input Below: Box is Blank");
	}

}

//-----------------------------------------------------------------------//	



const scrapecleanInProgButton = document.getElementById('scrapecleanInProg');
const saveAllButton = document.getElementById('saveAll');
const deleteAllButton = document.getElementById('deleteAll'); 
const dataOnlyButton =	document.getElementById('dataOnly');
const tokensOnly = document.getElementById('tokensOnly');

//CHECK BOX ELEMENTS: Check boxes, etc

const stopWordCheckbox = document.getElementById('stopWord');
const extraSpaceCheckbox = document.getElementById('extraSpace');
const urlRemoveCheckbox = document.getElementById('urlRemove');
const lowerCaseCheckbox = document.getElementById('lowerCase');
const outContractionsCheckbox = document.getElementById('outContractions');
const lemmatizeTextCheckbox = document.getElementById('lemmatizeText');
const hashRemoveCheckbox = document.getElementById('hashRemove');
const unicodeRemoveCheckbox = document.getElementById('unicodeRemove');
const xmlRemoveCheckbox = document.getElementById('xmlRemove');
const htmlRemoveCheckbox = document.getElementById('htmlRemove');
const emojiRemoveCheckbox = document.getElementById('emojiRemove');
const emoticonRemoveCheckbox = document.getElementById('emoticonRemove');
const pictographRemoveCheckbox = document.getElementById('pictographRemove');
const mapSymbolCheckbox = document.getElementById('mapSymbol');
const puctuationRemoveCheckbox = document.getElementById('puctuationRemove');
const numberRemoveCheckbox = document.getElementById('numberRemove');
const accentRemoveCheckbox = document.getElementById('accentRemove');