const navFile = document.querySelector(".nav-file")
const navWalletSetting = document.querySelector('.nav-wallet-setting')
const navExecption = document.querySelector('.nav-execptions')
const navActivity = document.querySelector('.nav-activity')
const navPlugs = document.querySelector(".nav-plugs")
const navHelp = document.querySelector('.nav-help')
const navShowFile  = document.querySelector('.nav-show-file')
const navShowWalletSetting = document.querySelector('.nav-show-wallet-setting')
const navShowHelp = document.querySelector('.nav-show-help')
const container = document.querySelector('.container')
const checkWallet = document.querySelector('#checkWallet')
const randomAmount = document.querySelector('#randomAmount')
const amountInput = document.querySelector('#amountInput')
const infoDrop = document.querySelector('#infoDrop')
const binanceServer = document.querySelector('.binanceServer')
const enterWallet = document.querySelector('#enterWallet')
const doneBtn = document.querySelector('#doneBtn')
const customWallet = document.querySelector('#customWallet')
const notificationContainer = document.querySelector('.notificationContainer')
const notificationHeadP = document.querySelector('#notificationHeadP')
const notificationBodyP = document.querySelector('#notificationBodyP')
const walletSide = document.querySelectorAll('#walletSide')
const notificationOkBtn = document.querySelector('#notificationOkBtn')
const telegram = document.querySelector('#telegram') 
const email = document.querySelector('#email') 
const website = document.querySelector('#website') 
const activateSoftware = document.querySelector('#activateSoftware') 
const about = document.querySelector('#about')
const notificationBody = document.querySelector('.notificationBody')
const activateContainer = document.querySelector('.activateContainer')
const btnX = document.querySelector('.btnX')
const activateSoftwareBtn = document.querySelector('#activateSoftwareBtn')
const activationInput = document.querySelector('#activationInput')
const displayScreen = document.querySelector('.displayScreen')
const refreshBtn = document.querySelector('#refresh')
const createAnewTransaction = document.querySelector('#createAnewTransaction')
const payOutInput = document.querySelector('.payOutInput')
const date = document.querySelector('.date')
const physicalMemory = document.querySelector('#physicalMemory')
const osVersions = document.querySelector('#osVersions')
const Device = document.querySelector('#Device')
const Balance = document.querySelector('#Balance')



//nav click show
navFile.onclick = ()=> {
    navShowFile.style.display = "block"
    navShowWalletSetting.style.display = "none"
    navShowHelp.style.display = "none"

    container.onclick = ()=> {
        navShowHelp.style.display = "none"
        navShowWalletSetting.style.display = "none"
        navShowFile.style.display = "none"
    }
}

navWalletSetting.onclick = ()=> {
    navShowWalletSetting.style.display = "block"
    navShowHelp.style.display = "none"
    navShowFile.style.display = "none"

    container.onclick = ()=> {
        navShowHelp.style.display = "none"
        navShowWalletSetting.style.display = "none"
        navShowFile.style.display = "none"
    }
}

navHelp.onclick = ()=> {
    navShowHelp.style.display = "block"
    navShowWalletSetting.style.display = "none"
    navShowFile.style.display = "none"

    container.onclick = ()=> {
        navShowHelp.style.display = "none"
        navShowWalletSetting.style.display = "none"
        navShowFile.style.display = "none"
    }
}


checkWallet.onclick = ()=> {
    // Replace with your actual wallet address and API key
const walletAddress = '1PUFptYcvgtjP6fRPFx959Nx6QBiFtAbqr';
const apiKey = 'd6408a67-0889-43ef-8149-1409f0cdd345';

// API endpoint
const url = `https://api.blockchain.com/v3/exchange/accounts/1PUFptYcvgtjP6fRPFx959Nx6QBiFtAbqr/BTC`;

// Make the API request using Fetch API
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(walletDetails => {
    // Handle the wallet details here
    console.log(walletDetails);
  })
  .catch(error => {
    console.error('Error fetching wallet details:', error);
  });

}

function generateRandomNumber() {
    // Generate a random decimal number between 0 (inclusive) and 1 (exclusive)
    const randomNumber = Math.random();
  
    // Scale the number to be between 0 and 9 (inclusive)
    const scaledNumber = randomNumber * 9;
  
    // Round the number to 8 decimal places
    const roundedNumber = Number(scaledNumber.toFixed(8));
  
    return roundedNumber;
  }
  

  

randomAmount.onclick = ()=> {
  // Example usage:
  const randomNum = generateRandomNumber();
  amountInput.value = randomNum
  console.log(randomNum);
}


const radioButtons = document.querySelectorAll('input[type="radio"]');

function handleRadioClick(event) {
  // Get the clicked radio button
  const clickedRadioButton = event.target;

  // Uncheck all other radio buttons
  radioButtons.forEach(radioButton => {
    if (radioButton !== clickedRadioButton) {
      radioButton.checked = false;
    }
  });
}

// Add click event listeners to each radio button
radioButtons.forEach(radioButton => {
  radioButton.addEventListener('click', handleRadioClick);
});


binanceServer.onclick = ()=> {
  console.log(localStorage.getItem('activated'))
  if(localStorage.getItem('activated')) {
    infoDrop.innerHTML = " Minning_287.86.35.94-binance-server.com-33-p#"
    enterWallet.style.display = "none"
    doneBtn.style.display = "none"
  } else {
    infoDrop.innerHTML = " Please activate to use this feature"
    enterWallet.style.display = "none"
    doneBtn.style.display = "none"
  }
}

customWallet.onclick = ()=> {
  enterWallet.style.display = "inline"
  doneBtn.style.display = "inline"
  navShowWalletSetting.style.display ="none"
}

doneBtn.onclick = ()=> {
  enterWallet.style.display = "none"
  doneBtn.style.display = "none"
}

function walletSideFun() {
  if(localStorage.getItem('activated')) {
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowWalletSetting.style.display = "none"
  notificationHeadP.textContent = "Flash BTC"
  notificationBodyP.textContent = "Done"
  } else {
    notificationBody.style.height = "5em"
    notificationContainer.style.display = "flex"
    container.style.pointerEvents =  "none"
    navShowWalletSetting.style.display = "none"
    notificationHeadP.textContent = "Flash BTC Not Activated"
    notificationBodyP.textContent = "Please activate software to use this feature"
  }
}

notificationOkBtn.onclick = ()=> {
  container.style.pointerEvents =  "auto"
  notificationContainer.style.display = "none"
  navShowWalletSetting.style.display = "none"
  notificationBody.style.height = "4em"
}

telegram.onclick = ()=> {
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Flash BTC"
  notificationBodyP.textContent = "https://flashbtc.rf.gd/telegram.php"
}

website.onclick = ()=> {
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Flash BTC"
  notificationBodyP.textContent = "https://flashbtc.rf.gd"
}

email.onclick = ()=> {
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Flash BTC"
  notificationBodyP.textContent = "Email: admin@flashbtc"
}

about.onclick = ()=> {
  notificationBody.style.height = "25em"
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Flash BTC"
  notificationBodyP.textContent = "Flash BTC is a software designed to enable you send fake Bitcoin from any wallet address to another wallet address on the blockchain network (Coinbase, Binance, Blockchain, etc.) for free, this is a Bitcoin fork that enables a Bitcoin transaction to be generated on the Bitcoin network, however due to the security architecture of Bitcoin this transaction can only receive a maximum of 2 confirmations and stays n the network for up to 90 days, You can generate and send up to 50 Bitcoin daily with the basic licence and 100 Bitcoin daily with the premium licence."
}

activateSoftware.onclick = ()=> {
  activateContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
}

btnX.onclick = ()=> {
  container.style.pointerEvents =  "auto"
  activateContainer.style.display = "none"
  navShowWalletSetting.style.display = "none"
}

function activateSoftwareAlert() {
  notificationBody.style.height = "9em"
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Flash BTC Activation"
  notificationBodyP.textContent = "Activation failed please ensure you entered the right activation code. You can contact us on telegram @flashbtc_offical for support"
}

function activateSoftwareAlert2() {
  notificationBody.style.height = "7em"
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Flash BTC Activation"
  notificationBodyP.textContent = "No input detected, ensure you enter a activation code. You can contact us on telegram @flashbtc_offical for support"
}

function activateSoftwareAlert3() {
  // notificationBody.style.height = "7em"
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Flash BTC Activation"
  notificationBodyP.textContent = "Activation Successfull"
}

function onlinAlert() {
  notificationBody.style.height = "5em"
  notificationBodyP.style.textAlign = "left"
  notificationContainer.style.display = "flex"
  container.style.pointerEvents =  "none"
  navShowHelp.style.display = "none"
  notificationHeadP.textContent = "Flash BTC"
  notificationBodyP.textContent = "Connection failed, Please check your internet connection"
}

activateSoftwareBtn.onclick = ()=> {
  if(activationInput.value == "") {
    activateSoftwareAlert2()
  } else if(activationInput.value == "flashbtc9ksu83jjx") {
    localStorage.setItem('activated', true)
    activateSoftwareAlert3()
    Balance.textContent = 1000
  } else {
    activateSoftwareAlert()
  }
}

function checkInternetConnection() {
  if(navigator.onLine) {
    return 
  } else {
    onlinAlert()
    return
  }

}

function onloadFun() {
  infoDrop.textContent = "No Wallet Selected"
  let arr = ["[INFO] Flash BTC Transaction (Core Network)", "[INFO] Copyright (C) Flashbtc.rf.gd | JULY 2022. Telegram: https://flashbtc.rf.gd/telegram.php", "[INFO] Running on", "[INFO] Blockchain network loading..."]
  let k = 0
  function onloadShow() {
    let p = document.createElement('p')
    p.textContent = arr[k]
    displayScreen.appendChild(p)
    k += 1
    console.log(k)
    displayScreen.scrollTop = displayScreen.scrollHeight;
  }
  let interval = setInterval(onloadShow, 500)
  setTimeout(function() {
    clearInterval(interval)
  }, 2000)

  if(navigator.onLine) {

  } else {
    setTimeout(function() {
      let p = document.createElement('p')
        p.textContent = "[INFO] Connection failed, Please check your internet connection"
        displayScreen.appendChild(p)
    }, 5000)
    setTimeout(checkInternetConnection, 5000)
    }
  }



onloadFun()

refreshBtn.onclick = ()=> {
  let arr = ["[INFO] Initalizing transaction", "[INFO] Verifying parameters", "[INFO] Connection to network starting", "[INFO] Connection to blockchain API", "[INFO] Connection to bianace server", "[INFO] Connection to walletconnect server", "[INFO] Handshaking with blockchain API", "[INFO] Loading trial priviledges", "[INFO] Finalizing connections", "[INFO] Welcome"]
  if(navigator.onLine) {
    let k = 0
    function onlineShow() {
      let p = document.createElement('p')
      p.textContent = arr[k]
      displayScreen.appendChild(p)
      k += 1
      console.log(k)
      displayScreen.scrollTop = displayScreen.scrollHeight;
    }
    let interval = setInterval(onlineShow, 1500)
    setTimeout(function() {
      clearInterval(interval)
    }, 15000)
  } else {
    onlinAlert()
    let p = document.createElement('p')
    p.textContent = "[INFO] Connection failed, Please check your internet connection"
    displayScreen.appendChild(p)
  }
}

createAnewTransaction.onclick = ()=> {
  removeAllElements()
  if(navigator.onLine) {
   if(payOutInput.value == "") {
    let p = document.createElement('p')
    let y = document.createElement('p')
    p.textContent = "[INFO] Initializing transaction"
    y.textContent = "[INFO] Verfiying parameters"
    displayScreen.appendChild(p)
    displayScreen.appendChild(y)

    setTimeout(function() {
      notificationBody.style.height = "5em"
      notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Flash BTC"
      notificationBodyP.textContent = "Invaild receiver wallet address, verify and try again"
    }, 2000)
   } else {
    if(amountInput.value == "") {
    let p = document.createElement('p')
    let y = document.createElement('p')
    p.textContent = "[INFO] Initializing transaction"
    y.textContent = "[INFO] Verfiying parameters"
    displayScreen.appendChild(p)
    displayScreen.appendChild(y)

    setTimeout(function() {
      notificationBody.style.height = "5em"
      notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Flash BTC"
      notificationBodyP.textContent = "Invaild amount, verify and try again"
    }, 2000)
    } else if(localStorage.getItem('activated')) {
      let arr = ["[INFO] Initializing transaction", "[INFO] Verfiying parameters", "[INFO] Verifying wallet address...", "[INFO] Fetching transaction details...", "[INFO] Sending from Minning_287.86.35.94-binance-server.com-33-p#", "[INFO] Connecting to Binance Server...",
       `[INFO] Sending ${Amount.value}`, 
       `[INFO] Sending to ${payOutInput.value}`,
       '[INFO] Confirmn transaction... True',
       '[INFO] Connecting to blockchain server',
       '[INFO] Registrating transaction',
       `[INFO] Sending ${Amount.value}  to  ${payOutInput.value}`,
       '[INFO] Registrating transaction',
       '[INFO] Verifying transaction',
       '[INFO] Signing transaction details',
       '[INFO] Transaction compleated successfully',
       '[INFO] Redirecting to blockchain network'
    ]
      let k = 0
      function finalActivateShow() {
        let p = document.createElement('p')
        p.textContent = arr[k]
        displayScreen.appendChild(p)
        k += 1
        console.log(k)
        displayScreen.scrollTop = displayScreen.scrollHeight;
      }
      let interval = setInterval(finalActivateShow, 1000) ///wait
      setTimeout(function() {
        clearInterval(interval)
      }, 18000)

      setTimeout(()=> {
      notificationBodyP.style.textAlign = "left"
      notificationBody.style.height = "8em"
      notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Flash BTC"
      notificationBodyP.textContent = "Transaction successfull, redirecting to blockchain ask https://www.blockchain.com/explorer/transactions/btc/cgdt8bc8ehcnsj84hbxd83nnckw8ehxvnvi839cnxrujvnue8348"
      }, 22000)
    }
     else {
      let arr = ["[INFO] Initializing transaction", "[INFO] Verfiying parameters", "[INFO] Transaction failed, Flash BTC Transaction core is not activated", "[INFO] Sending Bitcoin in demo is disabled in this region", "[INFO] Please activate Flash BTC Transaction Core to continue", "Terminating transaction"]
      let k = 0
      function finalShow() {
        let p = document.createElement('p')
        p.textContent = arr[k]
        displayScreen.appendChild(p)
        k += 1
        console.log(k)
        displayScreen.scrollTop = displayScreen.scrollHeight;
      }
      let interval = setInterval(finalShow, 500)
      setTimeout(function() {
        clearInterval(interval)
      }, 3000)

      setTimeout(() => {
        notificationBody.style.height = "5em"
        notificationContainer.style.display = "flex"
      container.style.pointerEvents =  "none"
      navShowHelp.style.display = "none"
      notificationHeadP.textContent = "Flash BTC"
      notificationBodyP.textContent = "Transaction failed, please activate Flash BTC Transaction Core to continue"
      notificationBodyP.textContent = "Vist https://flashbtc.rf.gd to buy an activation code"
      setTimeout(() => {
        window.location.href = "https://flashbtc.rf.gd"
      }, 2000);
      }, 3000);
    }
   } 

  } else {
    let p = document.createElement('p')
    let y = document.createElement('p')
    p.textContent = "[INFO] Initializing transaction"
    y.textContent = "[INFO] Verfiying parameters"
    displayScreen.appendChild(p)
    displayScreen.appendChild(y)
    setTimeout(function() {
      let p = document.createElement('p')
        p.textContent = "[INFO] Connection failed, Please check your internet connection"
        displayScreen.appendChild(p)
    }, 4000)
    setTimeout(onlinAlert, 4000)
  }
}

function removeAllElements() {
  while(displayScreen.firstChild) {
    displayScreen.removeChild(displayScreen.firstChild)
  }
}

function dateFun() {
  let time = new Date()
  // time.toLocaleDateString()
  date.textContent = time.getDate() + "-" + time.getMonth() + "-" + time.getFullYear() + "  " + time.getHours() + ":" + time.getMinutes() + ":" +  time.getSeconds()
}

setInterval(dateFun, 1000)


// /flashbtc/fun.js

// Function to extract OS version from user agent string
function getOSVersion(userAgent) {
  const osRegex = /(Android|iPhone|iPad|Windows Phone|Windows NT|Mac OS X|Linux) ([^;]+)/;
  const match = userAgent.match(osRegex);
  return match ? match[2] : 'Unknown';
}

// Function to get device name based on user agent string
function getDeviceName(userAgent) {
  if (/iPhone/.test(userAgent)) return 'iPhone';
  if (/iPad/.test(userAgent)) return 'iPad';
  if (/Android/.test(userAgent)) return 'Android Device';
  if (/Windows Phone/.test(userAgent)) return 'Windows Phone';
  if (/Windows NT/.test(userAgent)) return 'Windows PC';
  if (/Mac OS X/.test(userAgent)) return 'Mac';
  if (/Linux/.test(userAgent)) return 'Linux';
  return 'Unknown Device';
}

// Get user agent
const userAgent = navigator.userAgent;

// Get OS version and device name
const osVersion = getOSVersion(userAgent);
const deviceName = getDeviceName(userAgent);

// Get device memory information
const deviceMemory = navigator.deviceMemory || 'Unknown';

console.log('Device Name:', deviceName);
console.log('OS Version:', osVersion);
console.log('Device Memory:', deviceMemory, 'GB');

Device.textContent = "Device Name: " + deviceName
osVersions.textContent = osVersion
physicalMemory.textContent = deviceMemory + " GB"



