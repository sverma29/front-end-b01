let userRole = "admin";
let accessLevel;

let isLoggedIn = true;
let userMessage;

let userType = "subscriber";
let userCategory;

let isAuthenticated = true;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message:", userMessage);

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User Category:", userCategory);

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

// Practice Task
let userTypeProgram = "enrolled_member";
let servicesAvailable;

switch (userTypeProgram) {
    case 'employee':
        servicesAvailable = "Dietary Services";
        break;
    case 'enrolled_member':
        servicesAvailable = "Dietary Services and one-on-one interaction with a dietician";
        break;
    case 'subscriber':
        servicesAvailable = "Partial access to Dietary Services";
        break;
    case 'non_subscriber':
        servicesAvailable = "Need to enroll or atleast subscribe to avail this facility";
        break;
}

console.log("User is authorized to access", servicesAvailable);
