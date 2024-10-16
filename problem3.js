function combiningNestedArrays(array1, array2){
    const combineArrays = [...array1, ...array2];
    return combineArrays;
}

const array1 = [
    [1, 2],
    [3, 4],
    [5, 6],
  ];
  const array2 = [
    [7, 8],
    [9, 10],
    [11, 12],
  ];
  console.log(combiningNestedArrays(array1, array2)); 