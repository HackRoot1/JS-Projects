// Function to calculate age
function calculateAge() {
    var dob = document.getElementById('age-cal-form').value;
    var dobDate = new Date(dob);

    var today = new Date();

    var ageYear = today.getFullYear() - dobDate.getFullYear();
    var ageMonth = today.getMonth() - dobDate.getMonth();
    var ageDate = today.getDate() - dobDate.getDate();

    // Adjusting for negative months or days
    if (ageMonth < 0 || (ageMonth === 0 && today.getDate() < dobDate.getDate())) {
        ageYear--;
        ageMonth += 12; // Adding 12 months to handle negative months
    }

    if (ageDate < 0) {
        ageMonth--; // Decrementing months
        // Getting the last day of the previous month
        var lastDayPrevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
        ageDate += lastDayPrevMonth; // Adding days of the previous month
    }

    // alert("Your age is: " + ageYear + " years, " + ageMonth + " months, and " + ageDate + " days.");
    document.getElementById("result").innerHTML = "Your age is: " + ageYear + " years, " + ageMonth + " months, and " + ageDate + " days.";
}

// Event listener for form submission
document.getElementById('age-cal-form').addEventListener('change', calculateAge);
