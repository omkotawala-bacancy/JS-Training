const activities = [
  { userId: 1, type: "login", duration: 5 },
  { userId: 2, type: "browse", duration: 20 },
  { userId: 1, type: "browse", duration: 15 },
  { userId: 3, type: "login", duration: 3 },
  { userId: 2, type: "logout", duration: 2 },
  { userId: 1, type: "logout", duration: 1 },
  { userId: 1, type: "login", duration: 4 } // repeated action for same user
];

const result = activities.reduce((acc,val) => {
  const {type, duration, userId} = val
  if(acc[userId]){
    if(acc[userId][duration]){
      acc[userId][duration] += duration
    }
    if(acc[userId][type]){
      acc[userId][type]++
    }
    else{
      acc[userId][type] = 1
    }
    
  }
  else{
    acc[userId]["totalTime"] = duration
    acc[userId] = {}
    acc[userId][type] = 1;
  }

  return acc
},{})

console.log(result);
