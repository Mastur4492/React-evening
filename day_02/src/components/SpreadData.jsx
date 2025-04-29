import React from "react";

export const SpreadData = () => {
  let arr1 = [1, 2, 3, 4];
  let arr2 = [5, 6, 7, 8, 9];
  let arr = arr1.concat(arr2);
  //   console.log(arr);
  //   const mergeArray = [...arr1, ...arr2];
  //   console.log(mergeArray);
  return (
    <div>
      <ul>
        {arr.map((arr, index) => (
          <li key={index}>{arr}</li>
        ))}
      </ul>
    </div>
  );
};
