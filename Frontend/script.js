document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('employeeForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const employeeID = document.getElementById('employeeID').value;
    const gender = document.getElementById('gender').value;

    const employees = JSON.parse(localStorage.getItem('employees')) || [];

    employees.push({ name, phoneNumber, employeeID, gender });

    localStorage.setItem('employees', JSON.stringify(employees));

    console.log('Saved employees:', JSON.parse(localStorage.getItem('employees')));

    window.location.href = 'display.html';
  });
});
