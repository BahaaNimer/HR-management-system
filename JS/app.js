'use strcit'

function Employee(id, name, department, level, image) {
  this.employeeId = id,
    this.fullName = name,
    this.department = department,
    this.level = level,
    this.imageUrl = image
  // this.salary = salary
}

Employee.prototype.salary = function () {
  let net = 0;
  if (`${this.level}` === 'Senior') {
    min = 1500;
    max = 2000;
    net = (Math.floor(Math.random() * (max - min + 1)) + min);
  } else if (`${this.level}` === 'Mid-Senior') {
    min = 1000;
    max = 1500;
    net = (Math.floor(Math.random() * (max - min + 1)) + min);
  } else {
    min = 500;
    max = 1000;
    net = (Math.floor(Math.random() * (max - min + 1)) + min);
  } return `${net - (net * (7.5 / 100))}`;
};

Employee.prototype.render = function () {
  // return document.getElementById('container').innerHTML = `Employee name is: ${this.fullName} and the salary is: ${this.salary()}`;
  // document.write.getElementById('container')(`Employee name is: ${this.fullName} and the salary is: ${this.salary()}<br>`)
  return `Employee name is: ${this.fullName} and the salary is: ${this.salary()}<br>`
};

let employee_1 = new Employee('1000', 'Ghazi Samer', 'Administration', 'Senior');
let employee_2 = new Employee('1001', 'Lana Ali', 'Finance', 'Senior');
let employee_3 = new Employee('1002', 'Tamara Ayoub', 'Marketing', 'Senior');
let employee_4 = new Employee('1003', 'Safi Walid', 'Administration', 'Mid-Senior');
let employee_5 = new Employee('1004', 'Omar Zaid', 'Development', 'Senior');
let employee_6 = new Employee('1005', 'Rana Saleh', 'Development', 'Junior');
let employee_7 = new Employee('1006', 'Hadi Ahmad', 'Finance', 'Mid-Senior');


document.getElementById('container1').innerHTML = `${employee_1.render()}`;
document.getElementById('container2').innerHTML = `${employee_2.render()}`;
document.getElementById('container3').innerHTML = `${employee_3.render()}`;
document.getElementById('container4').innerHTML = `${employee_4.render()}`;
document.getElementById('container5').innerHTML = `${employee_5.render()}`;
document.getElementById('container6').innerHTML = `${employee_6.render()}`;
document.getElementById('container7').innerHTML = `${employee_7.render()}`;