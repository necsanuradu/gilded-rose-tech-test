# Testing logic
Since the client's code is working as intended the new function updateQuality () will be tested against the previous version of updateQuality () for a set of items excluding the new featured item (Conjured type) for a long sequence in the days(50) and then tested in both valid, expired environments just for the newly featured item.

# Easy to change
To achieve this we have added a file ItemMatcher.js where the properties of each item can be changed or set as follows:
* matcher: represents the key word or expression from the beginning of the string that uniquely identifies the item
* expiredMultiplier: offers the means to change the value of any item to 0 once the item has expired
* expireQualityPase: sets up the degradation phase when the item has expired
* dayToDayQualityPase: is an array of day limits and coordinates having a different phase for each solution that matches the day when the product's quality is updated

Setting up these parameters or creating a new item with a new set of parameters will allow the introduction of new products easily and in a visible logical manner.