const quarterOf = (month) => {
  // Your code here
  
  // for loop used to make the computer check the month against each possible outcome
  // includes statement to check if month value is in the array of the quarter
  // Return statements to notify of quarter
  
  //1. create arrays presenting month records .....2. use loop to compare month against each array 3. Return value
  
  
  let firstQuarter = [1,2,3]
  let secondQuarter = [4,5,6]
  let thirdQuarter = [7,8,9]
  let fourthQuarter = [10,11,12]
  
  let i = 0 
  
  
  for (i in firstQuarter){
  
  if (firstQuarter.includes(month)){
  
  
  return 1
  
  } else if (secondQuarter.includes(month)){
  
  return 2
  
  } else if (thirdQuarter.includes(month)){
  
  return 3
  
  } else if (fourthQuarter.includes(month)){
  
  
  return 4

  
  }
  
  
  
  }
  
  
}
