var EtherFundingJson = {
  "contract_name": "EtherFunding",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "etherGoal",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "deadline",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "donor",
          "type": "address"
        }
      ],
      "name": "withdraw",
      "outputs": [
        {
          "name": "successful",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "donorBalances",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "projectName",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "donate",
      "outputs": [],
      "payable": true,
      "type": "function"
    },
    {
      "inputs": [
        {
          "name": "name",
          "type": "bytes32"
        },
        {
          "name": "duration",
          "type": "uint256"
        },
        {
          "name": "goal",
          "type": "uint256"
        }
      ],
      "payable": true,
      "type": "constructor"
    }
  ],
  "unlinked_binary": "0x60606040526040516060806102df8339810160409081528151602083015191909201515b60038054600160a060020a03191633600160a060020a03161790556000838155428301600155600282905534111561007157600160a060020a03331660009081526004602052604090203490555b5b5050505b61025a806100856000396000f300606060405236156100675763ffffffff60e060020a6000350416630643c516811461006c57806329dcb0cf1461008b57806351cff8d9146100aa5780637b8c8de1146100d55780638da5cb5b146101005780639a33e30014610129578063ed88c68e14610148575b610000565b3461000057610079610152565b60408051918252519081900360200190f35b3461000057610079610158565b60408051918252519081900360200190f35b3461000057610079600160a060020a036004351661015e565b60408051918252519081900360200190f35b3461000057610079600160a060020a03600435166101dc565b60408051918252519081900360200190f35b346100005761010d6101ee565b60408051600160a060020a039092168252519081900360200190f35b34610000576100796101fd565b60408051918252519081900360200190f35b610150610203565b005b60025481565b60015481565b6000600154421015610172575060016101d7565b600160a060020a0382166000908152600460205260409020541515610199575060026101d7565b600160a060020a038216600081815260046020526040808220829055516108fc919081818181818888f1935050505015156101d357610000565b5060005b919050565b60046020526000908152604090205481565b600354600160a060020a031681565b60005481565b600034111561022b57600160a060020a03331660009081526004602052604090208054340190555b5b5600a165627a7a72305820f2b7d4bbd22507fbb10e3d809f85a4d48f7c35e470c547ecc61dfa5ae7a21c2c0029",
  "networks": {
    "1494009249790": {
      "events": {},
      "links": {},
      "address": "0x14afecc96248459b9af1a08fdd9e1c1946d9f212",
      "updated_at": 1494009774983
    },
    "1494012365392": {
      "events": {},
      "links": {},
      "address": "0xfb6266ebecf35f0ef593bb8ae2e2a2d9dc7ed4e1",
      "updated_at": 1494012428812
    }
  },
  "schema_version": "0.0.5",
  "updated_at": 1494012428812
}