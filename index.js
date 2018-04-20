// Code your solution here:

function driversWithRevenueOver(drivers, revenue) {
  const newArr = drivers.filter(function(driver) {
    return driver['revenue'] > revenue;
  })
  return newArr;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const names = driversWithRevenueOver(drivers, revenue).map(function(driver) {
    return driver['name'];
  })
  
  return names;
}

function exactMatch(drivers, obj) {
  const newArr = drivers.filter(function(driver) {
    return driver[obj.keys[0]] === obj[obj.keys[0]];
  })
  
  return newArr;
}