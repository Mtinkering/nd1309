# Coffee Supply Chain

## Rational
Tracking the authenticity of coffee has been always a challege. Through many phases of its life cycle, from the garden of the farmer, to the hand of the consumer, tracking is usually lost.
This lowers the confidence of the consumers as they are not sure the origin of the coffee. Good farmers don't have the creditabilities they deserve.
To build a robust system for this at scale, traditional approach is expensive and challenging to build

## Motivation
This project aims to leverage Ethereum blockchain to create a DApp, allowing all parties from farmers, to distributors, to retailers and consumers to participate in the whole coffee life cycle.
This allows coffee supply is tracked and not manipulated. Farmers always know where their products are served, while consumers and also parties have confidence in the origin of the coffee.
Logistics is also enabled as we know exactly which stage the coffee supply is at at that moment.

## Summary
We build a Smart Contract SupplyChain that has all methods to support life cycle of coffee supply. Farmers and other parties can alter the item state as needed, via a user interface. Items are tracked by unique number (Univeral Product Code). 8 states are defined for life cycle of a coffee item. From that, we can easily see which state it is at, who is holding it, who is the distributor, who is the retailer and so on. All metadata are tracked and transparent thanks to blockchain technology

## Details
- Coffee State: All states are designed in the state
- Activity & sequence diagrams describe how each party can use methods to manipulate coffee state. Checks in the form of solidity modifiers are also added to make sure no state can be skipped, but in a sequential order
- Class diagram (mostly only Supply Chain) is the main contract to interact with. Here all methods are implemented to support the flow
- DApp (in html and jquery): a simple user interface to interact with the smart contract. The contract is deployed on rinkeby network. Users can perform all functionalities exposed by supplychain contract to take the coffee from harvest to process to pack to list for sell to buy to ship to recieve and finally to purchase. Users can also fetch all data about certain items with fetchItemBufferOne and fetchItemBufferTwo methods.

## Implementation
- Smart contract: Write all functions to support the functionalities discussed and the states
- Unit test the smart contract
- Deploy to rinkeby. Secret is shared. Set up infura for accessing the network
- Implement front end with html and jquery

## Use front end
- The front end is straight forward. Clicking the methods will trigger contract interaction. From here, we can pass in details about farmer, distributor, retailer and consumer

## Conclusion
- The project shows how easy it is to set up a supply chain for coffee. This can be applied to any product that needs a seamless tracking flow, while also provides transparency and scalability.
## References

#### Transaction ID
https://rinkeby.etherscan.io/tx/0x0affaf0d8a951987c28962fa87d2a779d263510363215f5ce3563999924a1748
### The contract address
0x8ecd369db88c5841bb5e9f8bc5b790089c06acd9

### Program version numbers (This information will help your reviewer troubleshoot your project if any issues arise):
- node version number: 16
- Truffle version number: 4.x
- web3 version number: 1.x
