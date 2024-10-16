function customSplice(arr, start, count, ...newItems) {
    const deleted = arr.slice(start, start + count);
    const newArr = [...arr.slice(0, start), ...newItems, ...arr.slice(start + count)];
    return { newArr, deleted };
}

function customSlice(arr, start, end) {
    return arr.slice(start, end);
}

function customIncludes(arr, value) {
    for (const item of arr) {
        if (item === value) {
            return true;
        }
    }
    return false;
}

function customToLowerCase(str) {
    let lowerStr = '';
    for (const char of str) {
        lowerStr += String.fromCharCode(char.charCodeAt(0) + 32);
    }
    return lowerStr;
}

function customToUpperCase(str) {
    let upperStr = '';
    for (const char of str) {
        upperStr += String.fromCharCode(char.charCodeAt(0) - 32);
    }
    return upperStr;
}

function customPush(arr, ...items) {
    for (const item of items) {
        arr[arr.length] = item;
    }
    return arr.length;
}

function customPop(arr) {
    if (arr.length === 0) return undefined;
    const last = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return last;
}

const myArray = [1, 2, 3, 4, 5];
console.log(customSplice(myArray, 1, 2, 6, 7)); 
console.log(customSlice(myArray, 1, 4)); 
console.log(customIncludes(myArray, 3)); 
console.log(customToLowerCase("HELLO")); 
console.log(customToUpperCase("hello")); 

const myArray2 = [1, 2, 3];
console.log(customPush(myArray2, 4, 5)); 
console.log(myArray2); 
console.log(customPop(myArray2)); 
console.log(myArray2);