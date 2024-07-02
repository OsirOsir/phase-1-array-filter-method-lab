// Code your solution here

function findMatching(collection, name) {
  return collection.filter(driver => driver.toLowerCase() === name.toLowerCase())
}

function fuzzyMatch(collection, name) {
  return collection.filter(driver => driver.charAt(0, 2) === name.charAt(0, 2))
}

function matchName(collection, name) {
  return collection.filter(driver => driver.name === name)
}