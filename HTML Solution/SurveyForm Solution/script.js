document.getElementById('survey-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('close-popup');
    const popupResults = document.getElementById('popup-results');

    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const dob = document.getElementById('dob').value;
    const country = document.getElementById('country').value;
    const genderCheckboxes = document.querySelectorAll('input[name="gender"]:checked');
    const profession = document.getElementById('profession').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    
    if (!isNameValid(firstName) || !isNameValid(lastName) || !isDateValid(dob) || !isCountryValid(country) ||
        genderCheckboxes.length === 0 || !isProfessionValid(profession) || !isEmailValid(email) || !isMobileValid(mobile)) {
        alert("Please fill out all required fields correctly.");
        return;
    }

    popup.style.display = 'block';

    closePopup.addEventListener('click', function () {
        popup.style.display = 'none';
        document.getElementById('survey-form').reset();
    });

    const gender = Array.from(genderCheckboxes).map(cb => cb.value).join(', ');

    popupResults.innerHTML = `
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
    `;
});

document.getElementById('reset-button').addEventListener('click', function () {
    document.getElementById('survey-form').reset();
});


function isNameValid(name) {
    return /^[A-Za-z\s]+$/.test(name);
}

function isDateValid(date) {
    return /\d{4}-\d{2}-\d{2}/.test(date);
}

function isCountryValid(country) {
    return country !== "";
}

function isProfessionValid(profession) {
    return /^[A-Za-z\s]+$/.test(profession);
}

function isEmailValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isMobileValid(mobile) {
    return /^\d{10}$/.test(mobile);
}
