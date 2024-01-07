// https://developer.chrome.com/docs/extensions/reference/manifest/background

//Listen for specific events in here for a trigger



chrome.runtime.onMessage.addListener(data => {
        switch(data.event){
            case 'onStart':
                console.log("onStart in background");
                break;
            default:
                break;
        }
})