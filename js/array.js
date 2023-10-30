// Removing values 
const popM = [1,2,3,4,5,6]
popM.pop();
console.log(popM)

const shiftM = [1,2,3,4,5,6]
shiftM.shift();
console.log(shiftM);

const removeM = [1,2,3,4,5,6]
removeM.splice(2,3)
console.log(removeM);

//Add values
const pushM = [1,2,3,4,5]
pushM.push(6)
console.log(pushM);

const unShift = [1,2,3,4,5]
unShift.unshift(0)
console.log(unShift);

const addSplice = [1,2,5,6]
addSplice.splice(2,0,3,4)
console.log(addSplice);

