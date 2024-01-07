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

//other buttons & elements 

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
const punctuationRemoveCheckbox = document.getElementById('punctuationRemove');
const numberRemoveCheckbox = document.getElementById('numberRemove');
const accentRemoveCheckbox = document.getElementById('accentRemove');



//------------OUR MAIN BUTTON TO SCRAPE AND CLEAN DATA ------------------//
const scrapecleanStartButton= document.getElementById('scrapecleanStart');

scrapecleanStartButton.onclick = () => {  
	console.log("scrapecleanStartButton clicked");
	console.log("scrapeSourceElement.value: " + scrapeSourceElement.value);
	console.log("scrapeMethodElement.value: " + scrapeMethodElement.value);

	if (inputEntryElement.value){

		console.log("inputEntryElement.value: " + inputEntryElement.value);
		console.log("userCommentElement.value: " + userCommentElement.value);
		const prefs = {
			"scrapeSource": scrapeSourceElement.value,
			"scrapeMethod": scrapeMethodElement.value,
			"inputEntry": inputEntryElement.value,
			"userComment": userCommentElement.value,
			"basicFeatures": basicFeaturesRadio.value,
			"advFeatures": advFeaturesRadio.value,
			"stopWord": stopWordCheckbox.checked,
			"extraSpace": extraSpaceCheckbox.checked,
			"urlRemove": urlRemoveCheckbox.checked,
			"lowerCase": lowerCaseCheckbox.checked,
			"outContractions": outContractionsCheckbox.checked,
			"lemmatizeText": lemmatizeTextCheckbox.checked,
			"hashRemove": hashRemoveCheckbox.checked,
			"unicodeRemove": unicodeRemoveCheckbox.checked,
			"xmlRemove": xmlRemoveCheckbox.checked,
			"htmlRemove": htmlRemoveCheckbox.checked,
			"emojiRemove": emojiRemoveCheckbox.checked,
			"emoticonRemove": emoticonRemoveCheckbox.checked,
			"pictographRemove": pictographRemoveCheckbox.checked,
			"mapSymbol": mapSymbolCheckbox.checked,
			"punctuationRemove": punctuationRemoveCheckbox.checked,
			"numberRemove": numberRemoveCheckbox.checked,
			"accentRemove": accentRemoveCheckbox.checked
		};
		chrome.runtime.sendMessage({event: 'onStart', prefs});

		}
	

	else {
		console.log("Input Below: Box is Blank");
	}

}

//-----------------------------------------------------------------------//	
chrome.storage.local.get(['scrapeSource','scrapeMethod','inputEntry','userComment',
'basicFeatures','advFeatures', 'stopWord', 'extraSpace', 'urlRemove', 'lowerCase', 'outContractions', 'lemmatizeText', 'hashRemove',
'unicodeRemove', 'xmlRemove', 'htmlRemove', 'emojiRemove', 'emoticonRemove', 'pictographRemove', 'mapSymbol',
'punctuationRemove', 'numberRemove', 'accentRemove'],(result)=>{
		const {scrapeSource,scrapeMethod,inputEntry,userComment,basicFeatures,advFeatures,stopWord, extraSpace, urlRemove, lowerCase, outContractions, lemmatizeText, hashRemove,
			unicodeRemove, xmlRemove, htmlRemove, emojiRemove, emoticonRemove, pictographRemove, mapSymbol,
			punctuationRemove, numberRemove, accentRemove} = result;

			console.log('Settings retrieved', result);
			if (scrapeSource) {
				scrapeSourceElement.value = scrapeSource;
			}	
			if(scrapeMethod){
				scrapeMethodElement.value = scrapeMethod;
			}	
			if(inputEntry){
				inputEntryElement.value = inputEntry;
			}	
			if(userComment){
				userCommentElement.value = userComment;
			}	
			if(basicFeatures){
				basicFeaturesRadio.value = basicFeatures;
			}	
			if(advFeatures){
				advFeaturesRadio.value = advFeatures;
			}
			if(stopWord){
				stopWordCheckbox.checked = stopWord;
			}
			if(extraSpace){
				extraSpaceCheckbox.checked = extraSpace;
			}
			if(urlRemove){
				urlRemoveCheckbox.checked = urlRemove;
			}
			if(lowerCase){
				lowerCaseCheckbox.checked = lowerCase;
			}
			if(outContractions){
				outContractionsCheckbox.checked = outContractions;
			}
			if(lemmatizeText){
				lemmatizeTextCheckbox.checked = lemmatizeText;
			}
			if(hashRemove){
				hashRemoveCheckbox.checked = hashRemove;
			}
			if(unicodeRemove){
				unicodeRemoveCheckbox.checked = unicodeRemove;
			}
			if(xmlRemove){
				xmlRemoveCheckbox.checked = xmlRemove;
			}
			if(htmlRemove){
				htmlRemoveCheckbox.checked = htmlRemove;
			}
			if(emojiRemove){
				emojiRemoveCheckbox.checked = emojiRemove;
			}
			if(emoticonRemove){
				emoticonRemoveCheckbox.checked = emoticonRemove;
			}	
			if(pictographRemove){
				pictographRemoveCheckbox.checked = pictographRemove;
			}
			if(mapSymbol){
				mapSymbolCheckbox.checked = mapSymbol;
			}
			if(punctuationRemove){
				punctuationRemoveCheckbox.checked = punctuationRemove;
			}
			if(numberRemove){
				numberRemoveCheckbox.checked = numberRemove;
			}
			if(accentRemove){
				accentRemoveCheckbox.checked = accentRemove;
			}
			
			
})


