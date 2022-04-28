//Using APPEND method
let newTag = document.createElement("li")
let myOwnList = document.getElementById("mylist")
newTag.textContent = "Cashew";
myOwnList.append(newTag)

//Using prepend METHOD
let newTag2 = document.createElement("li")
let myOwnList2 = document.getElementById("mylist")
newTag2.textContent = "WaterMelon";
myOwnList2.prepend(newTag2)

//USING insertBefore METHOD
let newTag3 = document.createElement("li")
let myOwnList3 = document.getElementById("mylist")
console.log(myOwnList3)
newTag3.textContent = "Banana";
console.log(newTag3);
// let my = myOwnList3.getElementsByTagName('li')[0]
myOwnList3.insertBefore(newTag3, myOwnList3.getElementsByTagName ("li")[1])

