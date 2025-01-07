const user = {
    name: 'Вася грузин',
    age: 32,
    hobby: 'васька грузин зі стажом шиномонтажника в 32 роки',
    premium: true
  }
user.mood = 'happy'
user.hobby = 'skydiving'
user.premium = false
const userKeysArray = Object.keys(user)
  for (const key of userKeysArray){
  console.log(`${key} : ${user[key]}`)
}
//
//
//
//
function countProps(obj){
  let propertiesAmount = 0
  for(const properties of Object.keys(obj)){
    if(properties !== undefined){
      propertiesAmount += 1
    }
  }
  return propertiesAmount
}
console.log(countProps(user))
//
//
//
//
function findBestEmployee(employeesObj){
  let mostTasksEmployee = ''
  let mostTasksValue = 0
  const namesOfEmployees = Object.keys(employeesObj)
  for (let i = 0; i < namesOfEmployees.length; i++) {
    const key = namesOfEmployees[i]
    const value = employeesObj[key]
    if (value > mostTasksValue) {
      mostTasksEmployee = key
        mostTasksValue = value
        
    }
}
return mostTasksEmployee
}
const employees = {
  employeeTaras: 26,
  employeeDina: 25,
  employeeDima: 17,
  employeeMarkian: 30,
  employeeDenys: 20
}
console.log(findBestEmployee(employees))
//
//
//
//
function countTotalSalary(employees) {
  let totalSalary = 0
  const employeesSalariesArray = Object.values(employees)
  for (let i = 0; i < employeesSalariesArray.length;i++) {
    totalSalary += employeesSalariesArray[i]
  }
  return totalSalary;
}
const salaries = {
  employeeTaras: 2600,
  employeeDina: 2500,
  employeeDima: 1700,
  employeeMarkian: 3000,
  employeeDenys: 2000
}
console.log(countTotalSalary(salaries))
//
//
//
//
function getAllPropValues(arr, prop) {
  const result = []
  for (const key in obj) {
    if (key === prop) {
        result.push(obj[key]);
        break
    }
}
return result
}

const products = [
  { name: 'яблуко', price: 1500, quantity: 4 },
  { name: 'апильсинка😎', price: 800, quantity: 10 },
  { name: 'інфляція', price: -600, quantity: 5 }
]
console.log(getAllPropValues(products, 'name'))
//
//
//
//
function calculateTotalPrice(allProducts, productName) {
  for (const product of allProducts) {
      if (product.name === productName) {
          return product.price * product.quantity;
      }
  }
  return 0
}
console.log(calculateTotalPrice(products, 'яблуко'))
console.log(calculateTotalPrice(products, 'апильсинка😎'))
console.log(calculateTotalPrice(products, 'інфляція'))
console.log(calculateTotalPrice(products, 'TOILEr SVEFTOZ'))
