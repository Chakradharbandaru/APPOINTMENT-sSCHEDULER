// Function to get the current time and update the header
function updateCurrentTime() {
const now = new Date();
const currentTime = now.toLocaleTimeString();
document.getElementById('current-time').textContent = `Current Time:
${currentTime}`;
}
// Function to add a new appointment to the list
function addAppointmentToList(name, date, time) {
const appointmentsList = document.getElementById('appointments');
const appointmentItem = document.createElement('li');
appointmentItem.textContent = `Name: ${name}, Date: ${date}, Time:
${time}`;
appointmentsList.appendChild(appointmentItem);
}
// Event listener to schedule an appointment
document.getElementById('schedule-btn').addEventListener('click', function
() {
const nameInput = document.getElementById('appointment-name');
const dateInput = document.getElementById('appointment-date');
const timeInput = document.getElementById('appointment-time');
const name = nameInput.value;
const date = dateInput.value;
const time = timeInput.value;
if (name && date && time) {
addAppointmentToList(name, date, time);
nameInput.value = '';
dateInput.value = '';
timeInput.value = '';
}
});
// Update current time every second
setInterval(updateCurrentTime, 1000);
// Initial update of current time
updateCurrentTime();
