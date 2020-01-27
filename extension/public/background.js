chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: 'hihih',
    title: 'Comment',
    type: 'normal',
    contexts: ['selection']
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  
  chrome.tabs.sendMessage(tab.id, {action: 'comment'}, (res) => {
    console.log(res.message);
  });
});

chrome.commands.onCommand.addListener(command => {
  if (command === 'comment') {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'comment'}, (res => {
        console.log(res.message);
      }));
    });
  }  
});