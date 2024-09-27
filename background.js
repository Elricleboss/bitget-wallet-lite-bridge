chrome.runtime.onInstalled.addListener(() => {
    console.log("Bitget Wallet Lite extension installed.");
  });
  
  chrome.storage.local.set({ walletStatus: 'connected' }, function() {
    console.log('Wallet status saved.');
  });
  
  chrome.storage.local.get(['walletStatus'], function(result) {
    console.log('Wallet status retrieved: ' + result.walletStatus);
  });
  
