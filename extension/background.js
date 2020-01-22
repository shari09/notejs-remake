chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'hihih',
    title: 'Comment',
    type: 'normal',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  
  chrome.tabs.sendMessage(tab.id, {action: 'comment'}, (response) => {
    console.log(response.message);
  });
});