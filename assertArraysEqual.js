const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Yay, these are the same arrays!`) 
  } else {
    console.log(`🛑🛑🛑 Aww, these are NOT the same arrays.`)
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => PASS

