function mergeSortedArrays(arr1, arr2) {
  const result = [];
  let i,
    j = 0;

  while (i < arr1.length && j < arr2.length) {
    arr1[i] <= arr2[j] ? result.push(arr1[i++]) : result.push(arr2[j++]);
  }

  return [...result, ...arr1.slice(i), ...arr2.slice(j)];
}

const mas1 = [1, 2, 4, 6];
const mas2 = [3, 5, 6];

const res = mergeSortedArrays(mas1, mas2);

console.log(res);
