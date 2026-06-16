/*//Task 1

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

 /*//task 8

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



//Friday Task 6

//Task 1.Employee Bonus Calculator

/*// Employee details
const employee = {
  name: "Abinesh",
  salary: 50000,
  experience: 6
};

let bonusPercentage;

// Calculate bonus based on experience
if (employee.experience >= 5) {
  bonusPercentage = 20;
} else if (employee.experience >= 2) {
  bonusPercentage = 10;
} else {
  bonusPercentage = 5;
}

// Calculate final salary
const bonusAmount = (employee.salary * bonusPercentage) / 100;
const finalSalary = employee.salary + bonusAmount;

// Display results
console.log("Employee Name:", employee.name);
console.log("Original Salary:", employee.salary);
console.log("Bonus Percentage:", bonusPercentage + "%");
console.log("Final Salary:", finalSalary);

//Task 2. College Amission System

let candidateNameName = "Ruthra";
let age = 18;
let percentage = 75;

if (age >= 17) {
    if (percentage >= 60) {
        console.log("Admission Approved");
    } else {
        console.log("Admission Rejected");
    }
} else {
    console.log("Admission Rejected");
}

let candidateName = "Ruthra";
let age = 16;
let percentage = 75;

if (age >= 17) {
    if (percentage >= 60) {
        console.log("Admission Approved");
    } else {
        console.log("Admission Rejected: Percentage is below 60");
    }
} else {
    console.log("Admission Rejected: Age is below 17");
}*/


//Task 3.Food Delivery Menu

/*let choice = 1;

switch (choice) {
    case 1:
        console.log("Order Confirmed : Pizza");
        break;

    case 2:
        console.log("Order Confirmed : Burger");
        break;

    case 3:
        console.log("Order Confirmed : Shawarma");
        break;

    case 4:
        console.log("Order Confirmed : Fried Rice");
        break;

    default:
        console.log("Invalid Selection");
}

//Task 4.Attedance Tracker

let students = [
    "Anisha",
    "Priya",
    "Rahul",
    "Kavin",
    "Arun",
    "Divya",
    "Vijay",
    "Sneha",
    "Ajay",
    "Keerthi"
];

let count = 0;

for (let student of students) {
    console.log(student);
    count++;
}

console.log("Total Students: " + count);


//Task 5.E-Commerce Cart

let cart = [
  { product: "Mobile", price: 15000 },
  { product: "Headset", price: 2000 },
  { product: "Charger", price: 1000 }
];

// Print all products
console.log("Products in Cart:");
for (let item of cart) {
    console.log(item.product);
}

// Calculate total cart value
let total = 0;
for (let item of cart) {
    total += item.price;
}
console.log("Total Cart Value: " + total);

// Find most expensive product
let expensiveProduct = cart[0];

for (let item of cart) {
    if (item.price > expensiveProduct.price) {
        expensiveProduct = item;
    }
}

console.log("Most Expensive Product: " + expensiveProduct.product);
console.log("Price: " + expensiveProduct.price);

//Task 6.Bank Account Management

let balance = 10000;

function deposit(amount) {
    balance += amount;
    console.log("Deposited Amount: " + amount);
}

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log("Withdrawn Amount: " + amount);
    } else {
        console.log("Insufficient Balance");
    }
}

function checkBalance() {
    console.log("Current Balance: " + balance);
}

deposit(5000);
withdraw(3000);
checkBalance();

//Task 7.Movie ticket booking

let age = 25;
let ticketPrice;

if (age < 5) {
    ticketPrice = 0;
    console.log("Free Ticket");
} else if (age <= 18) {
    ticketPrice = 100;
    console.log("Ticket Price: ₹100");
} else if (age <= 60) {
    ticketPrice = 200;
    console.log("Ticket Price: ₹200");
} else {
    ticketPrice = 120;
    console.log("Ticket Price: ₹120");
}

//Task 8. Online Shopping Discount

let purchaseAmount = 6000;
let discount = 0;
let finalAmount;

if (purchaseAmount > 5000) {
    discount = purchaseAmount * 20 / 100;
} else if (purchaseAmount > 3000) {
    discount = purchaseAmount * 10 / 100;
} else if (purchaseAmount > 1000) {
    discount = purchaseAmount * 5 / 100;
}

finalAmount = purchaseAmount - discount;

console.log("Original Amount: ₹" + purchaseAmount);
console.log("Discount: ₹" + discount);
console.log("Final Amount: ₹" + finalAmount);

//Task 9.Food Inventory System

let inventory = ["Rice", "Oil", "Sugar", "Milk", "Egg"];


inventory.push("Bread");
inventory.push("Butter");
//remove first name
inventory.shift();

//remove last name
inventory.pop();

// Check whether Milk exists
if (inventory.includes("Milk")) {
    console.log("Milk is available");
} else {
    console.log("Milk is not available");
}

// Print final inventory
console.log("Final Inventory:", inventory);

//Task 10.Hospital Patient Management

let patient = {
    patientName: "Anisha",
    patientAge: 26,
    disease: "Fever",
    doctor: "Dr. Kumar"
};

// Display all details using for-in loop
for (let key in patient) {
    console.log(key + " : " + patient[key]);
}

// Destructuring
let { patientName, patientAgege, disease, doctor } = patient;

// Print separately
console.log("Patient Name:", patientName);
console.log("Patient Age:", age);
console.log("Disease:", disease);
console.log("Doctor:", doctor);

//Task 11.Amazon Order Tracker

function sendSMS() {
    console.log("SMS Sent To Customer");
}

function placeOrder(callback) {
    console.log("Order Placed Successfully");
    callback();
}

placeOrder(sendSMS);

//Task 12.Casback offer generator

function* cashbackOffers() {
    yield "10% Cashback";
    yield "20% Cashback";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offers = cashbackOffers();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

//Task 13.Employee database

let employees = [
    { id: 1, name: "Abinesh", salary: 25000 },
    { id: 2, name: "Kavin", salary: 30000 },
    { id: 3, name: "Praveen", salary: 40000 }
];

// Print all employee names
console.log("Employee Names:");
for (let emp of employees) {
    console.log(emp.name);
}

// Calculate total salary expense
let totalSalary = 0;
for (let emp of employees) {
    totalSalary += emp.salary;
}
console.log("Total Salary Expense: " + totalSalary);

// Find employee with highest salary
let highestSalaryEmployee = employees[0];

for (let emp of employees) {
    if (emp.salary > highestSalaryEmployee.salary) {
        highestSalaryEmployee = emp;
    }
}

console.log("Highest Salary Employee: " + highestSalaryEmployee.name);
console.log("Salary: " + highestSalaryEmployee.salary);

//Task 14.Railway reservation system

let availableSeats = 50;

function bookSeats(seats) {
    if (seats <= availableSeats) {
        availableSeats -= seats;
        console.log("Booking Confirmed for " + seats + " seats");
        console.log("Available Seats: " + availableSeats);
    } else {
        console.log("Booking Rejected: Seats Unavailable");
    }
}

// Booking seats
bookSeats(10);
bookSeats(20);
bookSeats(25);

//Task 15.Mobile store billing system

let products = {
    Mobile: 15000,
    Laptop: 50000,
    Headphone: 2000,
    Smartwatch: 3000
};

// Customer selected products
let selectedProducts = ["Mobile", "Headphone"];

let totalAmount = 0;

console.log("Selected Products:");

for (let product of selectedProducts) {
    console.log(product);
    totalAmount += products[product];
}

let gst = totalAmount * 18 / 100;
let finalBill = totalAmount + gst;

console.log("Total Amount: ₹" + totalAmount);
console.log("GST (18%): ₹" + gst);
console.log("Final Bill: ₹" + finalBill);*/

//Monday Task 7
//Task 1.Traffic signal management

/*let signalColor = "Red";

switch (signalColor) {
    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Get Ready");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}

//Task 2. 

for (let employee = 1; employee <= 30; employee++) {
    console.log("Employee " + employee + " Present");
}

//Task 4.College admission eligibility

let age = 19;
let percentage = 75;
let entranceExamPassed = true;

if (age >= 18) {
    if (percentage >= 70) {
        if (entranceExamPassed) {
            console.log("Admission Approved");
        } else {
            console.log("Rejected: Entrance Exam Not Passed");
        }
    } else {
        console.log("Rejected: Percentage Below 70");
    }
} else {
    console.log("Rejected: Age Below 18");
}

//tASK 3.ATM cash withdrawal

let balance = 10000;

while (balance > 0) {
    balance = balance - 500;
    console.log("Remaining Balance: ₹" + balance);
}

//Task 5.Food delivery status

function foodDeliveryStatus(customerName, foodItem, deliveryAddress) {
    console.log(
        "Hello " + customerName +
        ", your order for " + foodItem +
        " will be delivered to " + deliveryAddress +
        ". Thank you for ordering!"
    );
}

foodDeliveryStatus(
    "Anisha",
    "Pizza",
    "Chennai"
);

//Task 6.Salary processing system

function calculateSalary(basicSalary, allowance) {
    return basicSalary + allowance;
}

function calculateBonus(salary) {
    return salary + (salary * 10 / 100);
}

let salary = calculateSalary(30000, 5000);
let finalSalary = calculateBonus(salary);

console.log("Salary:", salary);
console.log("Final Salary with Bonus:", finalSalary);

//Task 7.E-Commerce discount engine

function applyDiscount(amount, callback) {
    let discountedAmount = amount - (amount * 10 / 100);
    callback(discountedAmount);
}

function generateInvoice(finalAmount) {
    console.log("Invoice Generated");
    console.log("Final Amount: ₹" + finalAmount);
}

applyDiscount(5000, generateInvoice);

//Task 8.Promitional offers

function* generateOffers() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Buy 1 Get 1";
}

let offers = generateOffers();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);

//Task 9.Student database merge

// Science Students
const scienceStudents = [
    "Anisha",
    "Rahul",
    "Priya"
];

// Commerce Students
const commerceStudents = [
    "Kiran",
    "Arun",
    "Divya"
];

// Merge using Spread Operator
const studentDatabase = [...scienceStudents, ...commerceStudents];

console.log("Student Database:");
console.log(studentDatabase);

//Task 10.Online exam system

function calculateTotalMarks(studentName, ...marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    console.log("Student Name:", studentName);
    console.log("Total Marks:", total);
}

// Function Call
calculateTotalMarks("Anisha", 85, 90, 78, 88, 95);

//Task 11.Employee profile

// Employee Object
const employee = {
    name: "Anisha",
    department: "MERN Stack",
    salary: 30000,
    experience: 2
};

// Object Destructuring
const { name, department, salary, experience } = employee;

// Display separately
console.log("Name:", name);
console.log("Department:", department);
console.log("Salary:", salary);
console.log("Experience:", experience);

//Task 12.Product inventory filter

// Product Inventory
const products = [
    { name: "Laptop", price: 55000, category: "Electronics" },
    { name: "Mouse", price: 800, category: "Electronics" },
    { name: "Mobile", price: 15000, category: "Electronics" },
    { name: "Shoes", price: 3000, category: "Fashion" },
    { name: "Smart Watch", price: 7000, category: "Electronics" }
];

// Filter products above ₹5000
const filteredProducts = products.filter(product => product.price > 5000);

// Display result
console.log("Products above ₹5000:");
console.log(filteredProducts);

//Task 13.Finf first premium customer

// Customers data
const customers = [
    { name: "Anisha", purchase: 12000 },
    { name: "Rahul", purchase: 55000 },
    { name: "Kiran", purchase: 45000 },
    { name: "Divya", purchase: 80000 }
];

// Find first premium customer (purchase > 50000)
const premiumCustomer = customers.find(customer => customer.purchase > 50000);

// Display result
console.log("First Premium Customer:");
console.log(premiumCustomer);

//Task 14.Company expense tracker

// Expense Array
const expenses = [12000, 5500, 7800, 15000, 4300];

// Calculate total expenses using reduce()
const totalExpenses = expenses.reduce((total, expense) => {
    return total + expense;
}, 0);

// Display result
console.log("Total Company Expenses:", totalExpenses);

//Task 15.Gaming tournament verification

// Players data
const players = [
    { name: "Anisha", age: 20 },
    { name: "Rahul", age: 22 },
    { name: "Kiran", age: 19 },
    { name: "Divya", age: 17 }
];

// Check if all players are above 18
const allEligible = players.every(player => player.age > 18);

// Display result
console.log("All players above 18:", allEligible);

//Task 16.Job portal search

// Candidates data
const candidates = [
    { name: "Anisha", skills: ["HTML", "CSS"] },
    { name: "Rahul", skills: ["Java", "Spring"] },
    { name: "Kiran", skills: ["React", "Node.js"] },
    { name: "Divya", skills: ["Python", "Django"] }
];

// Check if at least one candidate knows React
const hasReactDeveloper = candidates.some(candidate =>
    candidate.skills.includes("React")
);

// Display result
console.log("At least one React developer available:", hasReactDeveloper);

//Task 17.Mobile number validator

// Mobile number validator function
function validateMobileNumber(number) {
    const numStr = number.toString();

    const isValidLength = numStr.length === 10;
    const isValidStart = 
        numStr.startsWith("6") ||
        numStr.startsWith("7") ||
        numStr.startsWith("8") ||
        numStr.startsWith("9");

    if (isValidLength && isValidStart) {
        console.log("Valid Mobile Number");
    } else {
        console.log("Invalid Mobile Number");
    }
}

// Test cases
validateMobileNumber("9876543210");
validateMobileNumber("1234567890");

//Task 18.URL slug genertor

// Input string
const title = "Learn JavaScript Complete Course";

// Convert to URL slug
const slug = title
    .toLowerCase()
    .split(" ")
    .join("-");

// Output result
console.log(slug);

//Task 19.Employee sorting dashboard

// Employee data
const employees = [
    { name: "Anisha", salary: 30000 },
    { name: "Rahul", salary: 55000 },
    { name: "Kiran", salary: 25000 },
    { name: "Divya", salary: 45000 }
];

// Highest → Lowest
const highToLow = [...employees].sort((a, b) => b.salary - a.salary);

// Lowest → Highest
const lowToHigh = [...employees].sort((a, b) => a.salary - b.salary);

// Output
console.log("High to Low Salary:");
console.log(highToLow);

console.log("Low to High Salary:");
console.log(lowToHigh);

//Task 20.Movie booking system

// Movie list
const movies = [
    "Leo",
    "Jawan",
    "Interstellar",
    "Avengers"
];

// Create booking IDs using map()
const bookingIDs = movies.map((movie, index) => {
    return {
        movieName: movie,
        bookingId: "MOV" + (index + 1)
    };
});

// Output result
console.log("Movie Booking IDs:");
console.log(bookingIDs);*/

//Tuesday task 10
//Task 1.Employee salary management

const employees = [
    { id: 1, name: "Rahul", salary: 25000 },
    { id: 2, name: "Kavin", salary: 50000 },
    { id: 3, name: "John", salary: 75000 }
];

// 1. Find employees whose salary is above ₹40,000
const highSalaryEmployees = employees.filter(emp => emp.salary > 40000);

console.log("Employees with salary above ₹40,000:");
console.log(highSalaryEmployees);

// 2. Find the first employee whose salary is above ₹60,000
const firstEmployee = employees.find(emp => emp.salary > 60000);

console.log("First employee with salary above ₹60,000:");
console.log(firstEmployee);

// 3. Calculate total company salary expense
const totalSalary = employees.reduce((total, emp) => total + emp.salary, 0);

console.log("Total Company Salary Expense: ₹" + totalSalary);

// 4. Create a new array containing only employee names
const employeeNames = employees.map(emp => emp.name);

console.log("Employee Names:");
console.log(employeeNames);

//Task 2.College admissionform

function checkAdmission(name, age, percentage) {

    const student = {
        name,
        age,
        percentage
    };

    if (student.age >= 18 && student.percentage >= 60) {
        return `${student.name} is Eligible for Admission`;
    } else {
        return `${student.name} is Not Eligible for Admission`;
    }
}

console.log(checkAdmission("Rahul", 19, 75));
console.log(checkAdmission("Kavin", 17, 80));
console.log(checkAdmission("John", 20, 55));

//Task 3.E-Commerce cart

const cart = [
    { product: "Shoes", price: 2000, qty: 2 },
    { product: "Watch", price: 1500, qty: 1 },
    { product: "Bag", price: 1000, qty: 3 }
];

// 1. Calculate Total Bill
const totalBill = cart.reduce((total, item) => {
    return total + (item.price * item.qty);
}, 0);

console.log("Total Bill: ₹" + totalBill);

// 2. Find Most Expensive Product
const expensiveProduct = cart.reduce((max, item) => {
    return item.price > max.price ? item : max;
});

console.log("Most Expensive Product:");
console.log(expensiveProduct);

// 3. Display All Product Names
const productNames = cart.map(item => item.product);

console.log("Product Names:");
console.log(productNames);

//Task 4.Traffic fine system

function trafficFine(signal, violation = false) {

    switch (signal.toLowerCase()) {

        case "red":
            console.log("Action: STOP");
            if (violation) {
                console.log("Fine Amount: ₹1000");
            }
            break;

        case "yellow":
            console.log("Action: READY / SLOW DOWN");
            if (violation) {
                console.log("Fine Amount: ₹500");
            }
            break;

        case "green":
            console.log("Action: GO");
            if (violation) {
                console.log("Fine Amount: ₹0");
            }
            break;

        default:
            console.log("Invalid Traffic Signal");
    }
}

// Test Cases
trafficFine("red", true);
trafficFine("yellow", true);
trafficFine("green", false);

//Task 5.Student Result Processing

const students = [
    { name: "A", mark: 95 },
    { name: "B", mark: 45 },
    { name: "C", mark: 80 },
    { name: "D", mark: 30 }
];

// 1. Find Passed Students (Mark >= 50)
const passedStudents = students.filter(student => student.mark >= 50);

console.log("Passed Students:");
console.log(passedStudents);

// 2. Find Failed Students (Mark < 50)
const failedStudents = students.filter(student => student.mark < 50);

console.log("Failed Students:");
console.log(failedStudents);

// 3. Create Grade List
const gradeList = students.map(student => {
    let grade;

    if (student.mark >= 90) {
        grade = "A+";
    } else if (student.mark >= 75) {
        grade = "A";
    } else if (student.mark >= 50) {
        grade = "B";
    } else {
        grade = "F";
    }

    return {
        name: student.name,
        mark: student.mark,
        grade: grade
    };
});

console.log("Grade List:");
console.log(gradeList);

//Task 6.Online food delivery

function placeOrder(customerName, ...items) {
    console.log("Customer Name:", customerName);
    console.log("Ordered Items:", items);
    console.log("Total Items:", items.length);
}

placeOrder(
    "Anisha",
    "Pizza",
    "Burger",
    "French Fries",
    "Cold Coffee"
);

//Task 7.Bank account system

let balance = 5000;

function deposit(amount) {
    balance += amount;
    return balance;
}

function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        return balance;
    } else {
        return "Insufficient Balance";
    }
}

function checkBalance() {
    return balance;
}

// Transactions
console.log("Current Balance:", checkBalance());

console.log("After Deposit:", deposit(2000));

console.log("After Withdrawal:", withdraw(1500));

console.log("Available Balance:", checkBalance());

//Task 8.Movie ticket booking

let bookedSeats = ["A1", "A2", "B3"];

function bookSeat(seatNumber) {
    let isBooked = false;

    for (let seat of bookedSeats) {
        if (seat === seatNumber) {
            isBooked = true;
            break;
        }
    }

    if (isBooked) {
        console.log(seatNumber + " is already booked.");
    } else {
        bookedSeats.push(seatNumber);
        console.log(seatNumber + " booked successfully.");
    }
}

function showBookedSeats() {
    console.log("Booked Seats:");
    
    for (let seat of bookedSeats) {
        console.log(seat);
    }
}

// Booking seats
bookSeat("A3");
bookSeat("A1");

// Display all booked seats
showBookedSeats();

//Task 9.User login validation

function validateLogin(username, email, password) {

    if (username.includes(" ")) {
        console.log("Username should not contain spaces");
    } 
    else if (!email.includes("@")) {
        console.log("Invalid Email");
    } 
    else if (password.length < 8) {
        console.log("Password must contain at least 8 characters");
    } 
    else {
        console.log("Login Validation Successful");
    }
}

// Test
validateLogin("Anisha", "anisha@gmail.com", "mern1234");

//Task 10.Product API Dashboard

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(products => {

    console.log("Product Titles:");
    
    products.forEach(product => {
      console.log(product.title);
    });

    const expensiveProducts = products.filter(product => {
      return product.price > 1000;
    });

    console.log("\nProducts Above ₹1000:");
    expensiveProducts.forEach(product => {
      console.log(product.title);
    });

    console.log("\nTotal Products:", products.length);

  })
  .catch(error => {
    console.log("Error Fetching Data:", error);
  });

  //Task 11.Birthday day finder

  function birthdayFinder(dob) {
    const birthDate = new Date(dob);

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    console.log("Day:", birthDate.getDate());
    console.log("Month:", birthDate.getMonth() + 1);
    console.log("Year:", birthDate.getFullYear());
    console.log("Weekday Name:", days[birthDate.getDay()]);
}

// Example
birthdayFinder("2002-08-15");

//Task 12.Netflix subscription system

function showPlanBenefits(plan) {

    const benefits =
        plan === "Mobile" ? "Watch on 1 mobile device." :
        plan === "Basic" ? "Watch on 1 device in HD quality." :
        plan === "Standard" ? "Watch on 2 devices in Full HD." :
        plan === "Premium" ? "Watch on 4 devices in Ultra HD (4K)." :
        "Invalid Plan";

    console.log("Selected Plan:", plan);
    console.log("Benefits:", benefits);
}

// Example
showPlanBenefits("Premium");

//Task 13.Hospital patient management

const patients = [
  { id: 1, name: "Ravi", age: 45, condition: "Critical" },
  { id: 2, name: "Priya", age: 30, condition: "Stable" },
  { id: 3, name: "Arun", age: 60, condition: "Critical" },
  { id: 4, name: "Divya", age: 25, condition: "Stable" }
];

// Find Critical Patients
const criticalPatients = patients.filter(patient =>
  patient.condition === "Critical"
);

console.log("Critical Patients:");
console.log(criticalPatients);

// Find Patient by ID
const patient = patients.find(patient =>
  patient.id === 3
);

console.log("\nPatient Details:");
console.log(patient);

// Count Total Patients
console.log("\nTotal Patients:", patients.length);

//Task 14.Inventory management system

const inventory1 = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 }
];

const inventory2 = [
  { id: 3, name: "Headphone", price: 2000 },
  { id: 4, name: "Smartwatch", price: 5000 }
];

// Merge two inventory arrays
const mergedInventory = [...inventory1, ...inventory2];

console.log("Merged Inventory:");
console.log(mergedInventory);

// Extract product details using destructuring
const { id, name, price } = mergedInventory[0];

console.log("\nProduct Details:");
console.log("ID:", id);
console.log("Name:", name);
console.log("Price:", price);

// Add new product using spread operator
const updatedInventory = [
  ...mergedInventory,
  { id: 5, name: "Tablet", price: 15000 }
];

console.log("\nUpdated Inventory:");
console.log(updatedInventory);

//Task 15.Whatsapp group management

let groupMembers = ["Anisha", "Rahul", "Priya"];

// Add members
groupMembers.push("Arun");
groupMembers.push("Divya");

console.log("After Adding Members:");
console.log(groupMembers);

// Remove last member
groupMembers.pop();

console.log("\nAfter pop():");
console.log(groupMembers);

// Remove first member
groupMembers.shift();

console.log("\nAfter shift():");
console.log(groupMembers);

// Add member at beginning
groupMembers.unshift("Karthik");

console.log("\nAfter unshift():");
console.log(groupMembers);

// Insert member at specific position
groupMembers.splice(2, 0, "Sneha");

console.log("\nFinal Group List:");
console.log(groupMembers);


