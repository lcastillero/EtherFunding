if (typeof web3 !== "undefined") {
    console.log(web3.currentProvider);
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
}

Promise.promisifyAll(web3.eth, {suffix: "Promise"});
Promise.promisifyAll(web3.version, {suffix: "Promise"});

var EtherFunding = TruffleContract(EtherFundingJson);
EtherFunding.setProvider(web3.currentProvider);

function update() {
    let currentBalance;
    let goal;
    web3.eth.getBalancePromise("0xfb6266ebecf35f0ef593bb8ae2e2a2d9dc7ed4e1")
        .then(balance => {currentBalance = balance.toNumber();
        console.log("currentBalance:" + currentBalance );
        $("#current").html(currentBalance);        
    });
    
    EtherFunding.deployed()
        .then(instance => instance.etherGoal()
            .then(_goal => {goal = _goal;
            console.log("goal:" + goal );
            $("#goal").html(goal.toNumber());
            $("#goalPercentage").html((currentBalance*100/goal) + '%');
            return instance.deadline();
        })
        .then(deadline => {
            setContractTime(deadline.toNumber()*1000)
        }))
    
}

function donate() {
        
        let amount = parseInt($("#idAmount").val(), 10);

        return web3.eth.getAccountsPromise()
        .then(accounts => {
            if(accounts.length == 0) {
                alert("No account, cannot split");
                throw new Error("No account, cannot split");
            }
            console.log(accounts);
        console.log(amount);
        console.log("entrando a donate");            
            return EtherFunding.deployed()
                .then(instance => instance.donate(
                    {from: accounts[0], value: amount}));
        })
        .then(txtObject => {
            console.log(txtObject);
            $("#status").html("done");
            update();
        });
        
}

function setContractTime(countDownDate) {
    // Set the date we're counting down to
//var countDownDate = now;

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  //console.log(countDownDate);
  //console.log(now);
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("deadline").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("deadline").innerHTML = "EXPIRED";
  }
}, 1000);
}