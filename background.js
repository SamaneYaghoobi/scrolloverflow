async function getCurrentTab() {
	let queryOptions = { active: true, currentWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);
	return tab;
}

chrome.tabs.onActivated.addListener(async () => {
	let tab = await getCurrentTab();
	if (tab.url.includes("stackoverflow")) {
		chrome.scripting.executeScript({
			target: { tabId: tab.id },
			files: ["content-script.js"],
		});
	}
});
