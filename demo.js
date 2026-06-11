//Task 1

let age = prompt("Enter Age")

if (age >= 0 && age <= 12) {
    console.log("child");
}

else if(age >= 13 && age <= 19) {
    console.log("Teenager");
}

else if (age >= 20 && age <= 59) {
    console.log("Adult");

} else if (age >= 60){
    console.log("Senior Citizens");
}
else {
    console.log("Invalid Age");
}

//Task 2

let salary  = prompt("Enter Salary");

let newSalary;

if (salary < 20000) {
    newSalary = salary * 1.20;
}

else if (salary <=50000) {
    newSalary = salary * 1.10;
}

else {
    newSalary = salary * 1.05;
}

 console.log("Old Salary:", salary);
 console.log("New Salary:", newSalary);

//Task 3
 let units = prompt("Enter units consumed");
 let bill;

 if (units <= 100) {
    bill = units * 5;
 }
 else if (units <= 200){
      bill = units * 7;
 }
 else {
    bill = units*10;
 }

 console.log("Units Consumed:",units);
 console.log("Total Bill: Rs.",bill);

 //task 4

 let balance = 10000;
 let withdrawal = prompt("Enter withdrawal amount:");

 if (withdrawal <= balance) {
    balance = balance - withdrawal;
    console.log("Withdrawal Sucessful");
    console.log("Remaining Balance: Rs.",balance);
 }

 else {
    console.log("Insufficient Funds");
 }


 //Task 5

 let username = prompt("Enter Username:");
 let password = prompt("Enter Password:");

 if (username === "admin" && password === "12345"){
    console.log("Login Successful");
 } else {
    console.log("Invalid Username or password");
 }

 //task 6

 let recharge = prompt("Enter Recharge Amount:");

 if(recharge >= 499) {
    console.log("Netflix Offer");
 }
 else if (recharge >= 299) {
    console.log("2GB Extra Data");
 } else {
    console.log("No Offer");
 }

 //task 7

 /*let color = prompt("Enter Signal Color:");

 switch (color.toLowerCase()) {
    case "red":
      console.log("Stop");
      break;

    case "yellow":
        console.log("Ready");
        break;

    case "green":
        console.log("Go");
        break;

     default:
        console.log("Invalid Color");
 }*/

 //task 8

 let workingDays = prompt("Enter Working Days:");
 let presentDays = prompt("Enter Present Days");

 let attendance = (presentDays / workingDays) * 100;

 console.log("Attendance Percentage:",attendance + "%");

 if (attendance >= 75) {
    console.log("Eligible");
 } else {
    console.log("Not Eligible");
 }

 //task 9

 let ticketPrice = 500;
 let tickets = prompt("Enter Number of Tickets:");

 let totalAmount = ticketPrice * tickets;
 let gst = totalAmount * 0.05;
 let finalAmount = totalAmount + gst;

 console.log("Total Amount: Rs.", totalAmount);
 console.log("GST (5%): Rs.", gst)
 console.log("Final Amount: Rs.", finalAmount);

 //task 10
 let foodCost = prompt("Enter Food Cost:");
 let finalBill;

 if (foodCost > 2000) {
    let discount = foodCost * 0.10;
    finalBill = foodCost - discount;
 } else {
    finalBill = foodCost
 }
 console.log("Final Bill: Rs.", finalBill); 

 //task 11
  let canditateAge = prompt("Enter Age:");
  let height = prompt("Enter Height:");
  let Weight = prompt("Enter Weight:");

  if (canditateAge >= 18) {
    if (height >= 160) {
        if (weight >= 56) {
            console.log("Selected for Police Recruitment");
        } else {
            console.log("Rejected: Weight should be least 56kg");
        }
    } else {
        console.log("Rejected: Height should be at least 160 cm");
    }
  } else {
    console.log("Rejected: Age should be at least 18 years");
  }

  //task 12
  let sub1 = prompt("Enter Subject 1 Marks:");
  let sub2 = prompt("Enter Subject 2 Marks:");
  let sub3 = prompt("Enter Subject 3 Marks:");
  let sub4 = prompt("Enter Subject 4 Marks:");
  let sub5 = prompt("Enter Subject 5 Marks:");

  let total = sub1 + sub2 + sub3 + sub4 + sub5;
  let percentage = total / 5;

  console.log("Total Marks:", total);
  console.log("Percentage:", percentage + "%");

  if (percentage >= 90) {
    console.log("Grade: A+");
  } else if (percentage >= 80) {
    console.log("Grade: A");
  } else if (percentage >= 70) {
    console.log("Grade: B");
  } else if (percentage >= 60) {
    console.log("Grade: c");
  } else {
    console.log("Grade: Fail");
  }

  //task 13

  let time = prompt("Enter Time:");

  if (time >= 6 && time < 14) {
    console.log("Morning Shift");
  } else if (time >= 14 && time < 22) {
    console.log("Afternoon Shift");
  } else if ((time >= 22 && time <= 23) || 
   (time >= 0 && time < 6)) {
         console.log("Night Shift");
   } else {
    console.log("Invalid Time");
   }

   //task 14
   let applicantAge = prompt("Enter Age:");
   let monthlyIncome = prompt("Enter Salary:");
   let experience = prompt("Enter Experience:");

   if (applicantAge >= 21 && monthlyIncome >= 25000 && experience >= 2) {
    console.log("Eligible for Loan");
   } else {
    console.log("Not Eligible for Loan");
   }

   //task 15

   let distance = prompt("Enter Distance:");
   let fare;

   if (distance <= 5) {
    fare = distance * 20
   } else {
    fare = (5 * 20) + ((distance - 5) * 15);
   }

   console.log("Total Fare: Rs.",fare);

   //task 16

   let number = ("Enter a Number:");

   for (let i = 1; i <= 10; i++) {
       console.log(number + "x" + i + "=" + (number * i));
   }

   //task 17

   let passwordLength = prompt("Enter Password Length:");

   if (passwordLength < 6) {
    console.log("Weak Password");
   } else if (passwordLength <= 10){
    console.log("Medium Password");
   } else {
    console.log("Strong Password");
   }

   //task 18

   let employeePay= prompt("Enter Salary:");
   let workYears = prompt("Enter Experience:");

   let bonus;

   if (workYears >= 0 && workYears <= 2) {
      bonus = employeePay * 0.05;
   } else if (workYears >= 3 && workYears <= 5) 
    {
      bonus = employeePay * 0.10;   
   } else {
        bonus = employeePay * 0.20;
   }

   console.log("Bonus Amount: Rs.", bonus);
   console.log("Total Salary: Rs.",employeePay + bonus);

   //task 19
    let count = 10;

    while (count >= 1) {
        console.log(count);
        count--;
    }

    console.log("Happy New Year");

    //task 20

    let degreeCompleted = prompt("Degree Completed? (yes/no)");
    let communication = prompt("Communication Skill (good/poor)");
    let technicalScore = prompt("Enter Technical Score:");

    if (degreeCompleted.toLowerCase() === "yes")
    {
        if (communication.toLowerCase() === "good") {
            if (technicalScore >= 70) {
                console.log("Conguratulations!You are Selected.");
            } else {
                console.log("Rejected: Technical Score is below 70.");
            }
        } else {
            console.log("Rejected: Communication Skill is not good.");
        }
    } else {
        console.log("Rejected: Degree not Completed.");
    }

// task 1 student management system

// Array of 5 student objects
const students = [
    { id: 1, name: "Abinesh", department: "CSE", mark: 95 },
    { id: 2, name: "Priya", department: "ECE", mark: 82 },
    { id: 3, name: "Karthik", department: "IT", mark: 68 },
    { id: 4, name: "Anisha", department: "EEE", mark: 45 },
    { id: 5, name: "Vijay", department: "CSE", mark: 77 }
];

// Function to get grade
function getGrade(mark) {
    if (mark >= 90) return "A";
    else if (mark >= 75) return "B";
    else if (mark >= 50) return "C";
    else return "Fail";
}

// Function to print student details
function printStudentDetails(student) {
    console.log(
        `ID: ${student.id}, Name: ${student.name}, Department: ${student.department}, Mark: ${student.mark}, Grade: ${getGrade(student.mark)}`
    );
}

// 1. Display all student names
console.log("Student Names:");
students.forEach(student => console.log(student.name));

// 2. Calculate total marks
const totalMarks = students.reduce((sum, student) => sum + student.mark, 0);
console.log("\nTotal Marks:", totalMarks);

// 3. Find students who scored above 80
const topStudents = students.filter(student => student.mark > 80);
console.log("\nStudents Scored Above 80:");
topStudents.forEach(student => console.log(student.name));

// 4. Display grade for each student
console.log("\nStudent Grades:");
students.forEach(student => {
    console.log(`${student.name}: ${getGrade(student.mark)}`);
});

// 5. Print complete student details
console.log("\nStudent Details:");
students.forEach(printStudentDetails);

//employee payroll system

// Array of employee objects
const employees = [
    { id: 101, name: "Abinesh", salary: 25000, department: "HR" },
    { id: 102, name: "Anushiya", salary: 45000, department: "IT" },
    { id: 103, name: "Sarva", salary: 32000, department: "Finance" },
    { id: 104, name: "Prathisha", salary: 28000, department: "Marketing" },
    { id: 105, name: "Vijay", salary: 55000, department: "IT" }
];

// Function to get department description using switch
function getDepartmentDescription(department) {
    switch (department) {
        case "HR":
            return "Human Resources Department";
        case "IT":
            return "Information Technology Department";
        case "Finance":
            return "Finance and Accounts Department";
        case "Marketing":
            return "Marketing Department";
        default:
            return "Unknown Department";
    }
}

// Callback function for payroll report
function generatePayrollReport(employee) {
    console.log(`
ID: ${employee.id}
Name: ${employee.name}
Salary: ₹${employee.salary}
Department: ${employee.department}
Description: ${getDepartmentDescription(employee.department)}
`);
}

// 1. Print all employee names
console.log("Employee Names:");
employees.forEach(employee => console.log(employee.name));

// 2. Calculate total company salary expense
const totalSalaryExpense = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);
console.log("\nTotal Company Salary Expense: ₹" + totalSalaryExpense);

// 3. Display employees earning above ₹30,000
const highEarners = employees.filter(employee => employee.salary > 30000);

console.log("\nEmployees Earning Above ₹30,000:");
highEarners.forEach(employee => {
    console.log(`${employee.name} - ₹${employee.salary}`);
});

// 4. Display department descriptions
console.log("\nDepartment Descriptions:");
employees.forEach(employee => {
    console.log(
        `${employee.name}: ${getDepartmentDescription(employee.department)}`
    );
});

// 5. Generate payroll reports using callback function
console.log("\nPayroll Reports:");
employees.forEach(generatePayrollReport);


// task 3 Online food item order

// Food items array
const foodItems = [
  { id: 1, foodName: "Grill Chicken", price: 350, category: "fastfood" },
  { id: 2, foodName: "Burger", price: 180, category: "fastfood" },
  { id: 3, foodName: "Biryani", price: 250, category: "maincourse" },
  { id: 4, foodName: "Ice Cream", price: 120, category: "dessert" },
  { id: 5, foodName: "Pasta", price: 220, category: "italian" }
];

// 1. Display all food names
console.log("Food Names:");
foodItems.forEach(item => console.log(item.foodName));

// 2. Calculate total menu value
const totalMenuValue = foodItems.reduce(
  (total, item) => total + item.price,
  0
);
console.log("\nTotal Menu Value: ₹" + totalMenuValue);

// 3. Show foods above ₹200
const expensiveFoods = foodItems.filter(item => item.price > 200);

console.log("\nFoods Above ₹200:");
expensiveFoods.forEach(item =>
  console.log(`${item.foodName} - ₹${item.price}`)
);

// 4. Category descriptions using switch statement
function getCategoryDescription(category) {
  switch (category) {
    case "fastfood":
      return "Quick and tasty snacks.";
    case "maincourse":
      return "Filling meal items.";
    case "dessert":
      return "Sweet treats and desserts.";
    case "italian":
      return "Italian specialty dishes.";
    default:
      return "Category not available.";
  }
}

console.log("\nCategory Descriptions:");
foodItems.forEach(item => {
  console.log(
    `${item.foodName}: ${getCategoryDescription(item.category)}`
  );
});

// 5. Order confirmation callback function
function placeOrder(foodItem, callback) {
  console.log(`\nOrder placed for ${foodItem.foodName}`);
  callback(foodItem);
}

function orderConfirmation(item) {
  console.log(
    `Order Confirmed! ${item.foodName} will be delivered soon.`
  );
}

// Example order
placeOrder(foodItems[0], orderConfirmation);


//task 4 Movie ticket booking system

// Movie array
const movies = [
  {
    movieName: "Karuppan",
    ticketPrice: 200,
    availableSeats: 50,
    language: "Tamil"
  },
  {
    movieName: "Jawan",
    ticketPrice: 250,
    availableSeats: 30,
    language: "Hindi"
  },
  {
    movieName: "Arya 2",
    ticketPrice: 300,
    availableSeats: 20,
    language: "Telugu"
  },
  {
    movieName: "KGF 2",
    ticketPrice: 220,
    availableSeats: 0,
    language: "Kannada"
  }
];

// 1. Display all movie names
console.log("Movie Names:");
movies.forEach(movie => console.log(movie.movieName));

// 2. Calculate total available seats
const totalSeats = movies.reduce(
  (total, movie) => total + movie.availableSeats,
  0
);

console.log("\nTotal Available Seats:", totalSeats);

// 3. Check whether booking is possible
function checkBooking(movie, seatsRequired) {
  if (movie.availableSeats >= seatsRequired) {
    console.log(
      `Booking possible for ${seatsRequired} seat(s) in ${movie.movieName}`
    );
    return true;
  } else {
    console.log(
      `Booking not possible for ${movie.movieName}. Insufficient seats.`
    );
    return false;
  }
}

// 4. Movie language description using switch statement
function getLanguageDescription(language) {
  switch (language) {
    case "Tamil":
      return "Tamil-language movie";
    case "Hindi":
      return "Hindi-language movie";
    case "Telugu":
      return "Telugu-language movie";
    case "Kannada":
      return "Kannada-language movie";
    default:
      return "Unknown language";
  }
}

console.log("\nMovie Languages:");
movies.forEach(movie => {
  console.log(
    `${movie.movieName}: ${getLanguageDescription(movie.language)}`
  );
});

// 5. Booking confirmation callback
function bookTicket(movie, seatsRequired, callback) {
  if (checkBooking(movie, seatsRequired)) {
    movie.availableSeats -= seatsRequired;
    callback(movie, seatsRequired);
  }
}

function bookingConfirmation(movie, seatsBooked) {
  console.log(
    `Booking Confirmed! ${seatsBooked} ticket(s) booked for ${movie.movieName}.`
  );
}

// Example booking
bookTicket(movies[0], 3, bookingConfirmation);



//5.Hospital patient record


// Array of patient objects
const patients = [
    {
        patientId: 101,
        patientName: "Abinesh",
        age: 45,
        disease: "Cardiology"
    },
    {
        patientId: 102,
        patientName: "Meena Sharma",
        age: 68,
        disease: "Neurology"
    },
    {
        patientId: 103,
        patientName: "Arun Singh",
        age: 72,
        disease: "Orthopedics"
    },
    {
        patientId: 104,
        patientName: "Anisha",
        age: 30,
        disease: "Cardiology"
    }
];

// 1. Display all patient names
console.log("Patient Names:");
patients.forEach(patient => {
    console.log(patient.patientName);
});

// 2. Count total patients
console.log("\nTotal Patients:", patients.length);

// 3. Print patients above age 60
console.log("\nPatients Above Age 60:");
patients.forEach(patient => {
    if (patient.age > 60) {
        console.log(`${patient.patientName} (${patient.age} years)`);
    }
});

// 4. Use switch statement for disease departments
console.log("\nDisease Departments:");
patients.forEach(patient => {
    let department;

    switch (patient.disease) {
        case "Cardiology":
            department = "Heart Department";
            break;
        case "Neurology":
            department = "Brain & Nervous System Department";
            break;
        case "Orthopedics":
            department = "Bone Department";
            break;
        default:
            department = "General Department";
    }

    console.log(`${patient.patientName} -> ${department}`);
});

// 5. Callback function for appointment confirmation
function confirmAppointment(patient, callback) {
    console.log(`\nAppointment booked for ${patient.patientName}`);
    callback(patient);
}

function appointmentMessage(patient) {
    console.log(`Appointment confirmed for ${patient.patientName} (ID: ${patient.patientId})`);
}

// Example usage
confirmAppointment(patients[0], appointmentMessage);


// 6.library management system

// Array of book objects
const books = [
    {
        bookId: 1,
        bookName: "JavaScript Basics",
        author: "John Smith",
        price: 450,
        category: "Programming"
    },
    {
        bookId: 2,
        bookName: "Data Structures",
        author: "Robert Brown",
        price: 650,
        category: "Education"
    },
    {
        bookId: 3,
        bookName: "The Alchemist",
        author: "Paulo Coelho",
        price: 550,
        category: "Fiction"
    },
    {
        bookId: 4,
        bookName: "Python for Beginners",
        author: "David Miller",
        price: 700,
        category: "Programming"
    }
];

// 1. Display all book names
console.log("Book Names:");
books.forEach(book => {
    console.log(book.bookName);
});

// 2. Calculate total book value
let totalValue = 0;
books.forEach(book => {
    totalValue += book.price;
});
console.log("\nTotal Book Value: ₹" + totalValue);

// 3. Display books above ₹500
console.log("\nBooks Above ₹500:");
books.forEach(book => {
    if (book.price > 500) {
        console.log(`${book.bookName} - ₹${book.price}`);
    }
});

// 4. Use switch statement for book categories
console.log("\nBook Categories:");
books.forEach(book => {
    let section;

    switch (book.category) {
        case "Programming":
            section = "Computer Science Section";
            break;
        case "Education":
            section = "Academic Section";
            break;
        case "Fiction":
            section = "Literature Section";
            break;
        default:
            section = "General Section";
    }

    console.log(`${book.bookName} -> ${section}`);
});

// 5. Function to issue a book
function issueBook(bookId) {
    const book = books.find(b => b.bookId === bookId);

    if (book) {
        console.log(`\nBook Issued Successfully: ${book.bookName}`);
    } else {
        console.log("\nBook not found.");
    }
}

// Example usage
issueBook(3);


//7.E-Commerce Product Dashboard

// Array of product objects
const products = [
    {
        productId: 101,
        productName: "Laptop",
        price: 50000,
        stock: 15
    },
    {
        productId: 102,
        productName: "Smartphone",
        price: 25000,
        stock: 8
    },
    {
        productId: 103,
        productName: "Headphones",
        price: 3000,
        stock: 20
    },
    {
        productId: 104,
        productName: "Keyboard",
        price: 1500,
        stock: 5
    }
];

// 1. Display all products
console.log("Product List:");
products.forEach(product => {
    console.log(product.productName);
});

// 2. Calculate inventory value
let inventoryValue = 0;

products.forEach(product => {
    inventoryValue += product.price * product.stock;
});

console.log("\nTotal Inventory Value: ₹" + inventoryValue);

// 3. Find products with stock less than 10
console.log("\nProducts with Stock Less Than 10:");

products.forEach(product => {
    if (product.stock < 10) {
        console.log(`${product.productName} - Stock: ${product.stock}`);
    }
});

// 4. Display stock status
console.log("\nStock Status:");

products.forEach(product => {
    let status;

    if (product.stock === 0) {
        status = "Out of Stock";
    } else if (product.stock < 10) {
        status = "Low Stock";
    } else {
        status = "In Stock";
    }

    console.log(`${product.productName}: ${status}`);
});

// 5. Callback function for product report
function generateReport(products, callback) {
    console.log("\nGenerating Product Report...");
    callback(products);
}

function productReport(products) {
    console.log("Product Report:");
    
    products.forEach(product => {
        console.log(
            `ID: ${product.productId}, Name: ${product.productName}, Price: ₹${product.price}, Stock: ${product.stock}`
        );
    });
}

// Example usage
generateReport(products, productReport);

//8.College Admission System

// Array of applicant objects
const applicants = [
    {
        name: "Abinesh",
        age: 19,
        percentage: 85,
        department: "CSE"
    },
    {
        name: "Priya",
        age: 17,
        percentage: 75,
        department: "ECE"
    },
    {
        name: "Praveen",
        age: 20,
        percentage: 58,
        department: "MECH"
    },
    {
        name: "Kaviya",
        age: 18,
        percentage: 92,
        department: "CSE"
    }
];

// 1. Display applicant names
console.log("Applicant Names:");
applicants.forEach(applicant => {
    console.log(applicant.name);
});

// 2. Check eligibility and count eligible students
let eligibleCount = 0;

console.log("\nEligibility Status:");

applicants.forEach(applicant => {
    if (applicant.age >= 18 && applicant.percentage >= 60) {
        console.log(`${applicant.name} - Eligible`);
        eligibleCount++;
    } else {
        console.log(`${applicant.name} - Not Eligible`);
    }
});

// 3. Count eligible students
console.log("\nTotal Eligible Students:", eligibleCount);

// 4. Use switch statement for department names
console.log("\nDepartment Details:");

applicants.forEach(applicant => {
    let departmentName;

    switch (applicant.department) {
        case "CSE":
            departmentName = "Computer Science Engineering";
            break;
        case "ECE":
            departmentName = "Electronics and Communication Engineering";
            break;
        case "MECH":
            departmentName = "Mechanical Engineering";
            break;
        case "CIVIL":
            departmentName = "Civil Engineering";
            break;
        default:
            departmentName = "General Department";
    }

    console.log(`${applicant.name} -> ${departmentName}`);
});

// 5. Callback function for admission result
function generateAdmissionResult(applicant, callback) {
    callback(applicant);
}

function admissionResult(applicant) {
    if (applicant.age >= 18 && applicant.percentage >= 60) {
        console.log(`Admission Approved for ${applicant.name}`);
    } else {
        console.log(`Admission Rejected for ${applicant.name}`);
    }
}

// Example usage
console.log("\nAdmission Results:");
applicants.forEach(applicant => {
    generateAdmissionResult(applicant, admissionResult);
});

//9.Bus Reservation Ticket

// Array of passengers
const passengers = [
    {
        passengerId: 1,
        name: "Ravi Kumar",
        seatNumber: "A1",
        ticketPrice: 500,
        busType: "AC"
    },
    {
        passengerId: 2,
        name: "Priya",
        seatNumber: "A2",
        ticketPrice: 500,
        busType: "AC"
    },
    {
        passengerId: 3,
        name: "Arun",
        seatNumber: "B1",
        ticketPrice: 350,
        busType: "Non-AC"
    },
    {
        passengerId: 4,
        name: "Sneha",
        seatNumber: "B2",
        ticketPrice: 350,
        busType: "Sleeper"
    }
];

// 1. Display passenger names (FOR LOOP)
console.log("Passenger Names:");
for (let i = 0; i < passengers.length; i++) {
    console.log(passengers[i].name);
}

// 2. Calculate total collection
function calculateTotalCollection(passengers) {
    let total = 0;

    for (let i = 0; i < passengers.length; i++) {
        total += passengers[i].ticketPrice;
    }

    return total;
}

let totalCollection = calculateTotalCollection(passengers);
console.log("\nTotal Collection: ₹" + totalCollection);

// 3. Check occupied seats
console.log("\nOccupied Seats:");
for (let i = 0; i < passengers.length; i++) {
    console.log("Seat " + passengers[i].seatNumber + " is occupied by " + passengers[i].name);
}

// 4. Use switch statement for bus types
console.log("\nBus Type Details:");

for (let i = 0; i < passengers.length; i++) {
    let typeDescription;

    switch (passengers[i].busType) {
        case "AC":
            typeDescription = "Air Conditioned Bus";
            break;

        case "Non-AC":
            typeDescription = "Regular Bus";
            break;

        case "Sleeper":
            typeDescription = "Sleeper Coach";
            break;

        default:
            typeDescription = "Unknown Bus Type";
    }

    console.log(passengers[i].name + " -> " + typeDescription);
}

// 5. Callback function for ticket confirmation
function generateTicket(passenger, callback) {
    callback(passenger);
}

function ticketConfirmation(passenger) {
    console.log(
        "Ticket Confirmed: " +
        passenger.name +
        ", Seat: " +
        passenger.seatNumber +
        ", Price: ₹" +
        passenger.ticketPrice
    );
}

// Generate confirmations
console.log("\nTicket Confirmations:");

for (let i = 0; i < passengers.length; i++) {
    generateTicket(passengers[i], ticketConfirmation);
}

/*10.Mobile Store System

// Array of mobile objects
const mobiles = [
    {
        brand: "Apple",
        model: "iPhone 14",
        price: 70000,
        stock: 5
    },
    {
        brand: "Samsung",
        model: "Galaxy S22",
        price: 55000,
        stock: 8
    },
    {
        brand: "OnePlus",
        model: "OnePlus 11",
        price: 45000,
        stock: 12
    },
    {
        brand: "Redmi",
        model: "Note 12",
        price: 18000,
        stock: 20
    }
];

// 1. Display all mobile names
console.log("Mobile List:");
for (let i = 0; i < mobiles.length; i++) {
    console.log(mobiles[i].brand + " " + mobiles[i].model);
}

// 2. Calculate total stock value
function calculateStockValue(items) {
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].stock;
    }

    return total;
}

let totalValue = calculateStockValue(mobiles);
console.log("\nTotal Stock Value: ₹" + totalValue);

// 3. Show mobiles above ₹20,000
console.log("\nMobiles Above ₹20,000:");
for (let i = 0; i < mobiles.length; i++) {
    if (mobiles[i].price > 20000) {
        console.log(mobiles[i].brand + " " + mobiles[i].model + " - ₹" + mobiles[i].price);
    }
}

// 4. Use switch statement for brand category
console.log("\nBrand Category:");

for (let i = 0; i < mobiles.length; i++) {
    let category;

    switch (mobiles[i].brand) {
        case "Apple":
            category = "Premium Brand";
            break;

        case "Samsung":
            category = "High-End Android Brand";
            break;

        case "OnePlus":
            category = "Mid Premium Brand";
            break;

        case "Redmi":
            category = "Budget Brand";
            break;

        default:
            category = "Unknown Brand";
    }

    console.log(mobiles[i].brand + " -> " + category);
}

// 5. Callback function for sales report
function generateSalesReport(items, callback) {
    console.log("\nGenerating Sales Report...");
    callback(items);
}

function salesReport(items) {
    console.log("Sales Report:");

    for (let i = 0; i < items.length; i++) {
        console.log(
            "Model: " +
            items[i].model +
            ", Brand: " +
            items[i].brand +
            ", Price: ₹" +
            items[i].price +
            ", Stock: " +
            items[i].stock
        );
    }
}

// Run callback
generateSalesReport(mobiles, salesReport);*/

