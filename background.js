const executeScript = (tab) => {
	if (tab.url.includes("stackoverflow")) {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			files: ["content-script.js"],
		});
	}
};

chrome.tabs.onActivated.addListener(function (activeInfo) {
	chrome.tabs.get(activeInfo.tabId, (tab) => executeScript(tab));
});

chrome.tabs.onUpdated.addListener(function (tabId, _, tab) {
	if (tab.url) {
		chrome.tabs.get(tabId, executeScript(tab));
	}
});
