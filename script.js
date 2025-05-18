// JavaScript Assignment Solution

// 1A. Variables, Functions, Conditions, and Loops
const calculateBMI = (weight, height) => {
    let bmi = weight / (height * height);
    return bmi.toFixed(2);
};

const convertTemperature = (celsius) => {
    return (celsius * 9/5) + 32;
};

// 1B. Pop-up Boxes
function showAlert() {
    alert("Form submitted successfully!");
}

function confirmDelete() {
    return confirm("Are you sure you want to delete this item?");
}

function askUserInput() {
    let name = prompt("Enter your name:");
    document.getElementById("userName").innerText = name;
}

// 1C. Event Handling & DOM Manipulation
function changeText() {
    document.getElementById("text").innerText = "Text Changed!";
}

function addListItem() {
    let item = document.getElementById("newItem").value;
    if (item) {
        let li = document.createElement("li");
        li.textContent = item;
        document.getElementById("list").appendChild(li);
    }
}

// 1D. Form Validation
function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    
    if (!emailRegex.test(email)) {
        alert("Invalid email format");
        return false;
    }
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
        return false;
    }
    return true;
}

// 1E. JavaScript Objects & AJAX
function displayDateTime() {
    document.getElementById("datetime").innerText = new Date().toLocaleString();
}

function fetchWeather() {
    fetch("https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY")
    .then(response => response.json())
    .then(data => {
        document.getElementById("weather").innerText = `Temperature: ${data.main.temp}K`;
    })
    .catch(error => console.error("Error fetching weather data:", error));
}

// Advanced Feature: To-Do List
function addTask() {
    let task = document.getElementById("task").value;
    if (task) {
        let li = document.createElement("li");
        li.textContent = task;
        let btn = document.createElement("button");
        btn.innerText = "Delete";
        btn.onclick = () => li.remove();
        li.appendChild(btn);
        document.getElementById("todoList").appendChild(li);
    }
}

// Advanced Feature: Simple Chatbot
function chatBot() {
    let userMessage = document.getElementById("userInput").value.toLowerCase();
    let botReply = "I don't understand.";
    if (userMessage.includes("hello")) botReply = "Hello! How can I help you?";
    else if (userMessage.includes("weather")) botReply = "You can check the weather using the weather button!";
    document.getElementById("chatbotResponse").innerText = botReply;
}
