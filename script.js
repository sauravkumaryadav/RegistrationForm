function validateForm() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const isPasswordValid = password.length >= 8;
    const doPasswordsMatch = password === confirmPassword;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmailValid = emailRegex.test(email);
    const isPhoneValid = /^\d{10}$/.test(phone);

    document.getElementById('firstNameError').textContent = firstName ? '' : 'First name is required';
    document.getElementById('lastNameError').textContent = lastName ? '' : 'Last name is required';
    document.getElementById('passwordError').textContent = isPasswordValid ? '' : 'Password must be at least 8 characters';
    document.getElementById('confirmPasswordError').textContent = doPasswordsMatch ? '' : 'Passwords do not match';
    document.getElementById('emailError').textContent = isEmailValid ? '' : 'Invalid email address';
    document.getElementById('phoneError').textContent = isPhoneValid ? '' : 'Invalid phone number';

    if (firstName && lastName && password && confirmPassword && email && phone) {
        // Submit the form (you can add AJAX request here)
        alert('Form submitted successfully!');
        // document.getElementById('registrationForm').submit();
    }
}


// function validateForm() {
//     console.log("validatra");
//     var name = document.getElementById('name').value;
//     var phone = document.getElementById('phone').value;
//     var email = document.getElementById('email').value;
//     var password = document.getElementById('password').value;
//     // Add your validation logic here


//             // Simple email validation
//             const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
//             const isEmailValid = emailRegex.test(email);

//             // Simple phone number validation (10 digits)
//             const isPhoneValid = /^\d{10}$/.test(phone);

//             // Simple password validation (at least 8 characters)
//             const isPasswordValid = password.length >= 8;

//             // Display validation errors or submit the form
//             if (!isEmailValid) {
//                 document.getElementById('emailError').textContent = 'Invalid email address';
//             } else {
//                 document.getElementById('emailError').textContent = '';
//             }

//             if (!isPhoneValid) {
//                 document.getElementById('phoneError').textContent = 'Invalid phone number';
//             } else {
//                 document.getElementById('phoneError').textContent = '';
//             }

//             if (!isPasswordValid) {
//                 document.getElementById('passwordError').textContent = 'Password must be at least 8 characters';
//             } else {
//                 document.getElementById('passwordError').textContent = '';
//             }

//             if (isEmailValid && isPhoneValid && isPasswordValid) {
//                 // Submit the form (you can add AJAX request here)
//                 alert('Form submitted successfully!');
//                 // document.getElementById('contactForm').submit();
//             }



//     // if (name && phone && email && password) {
//     //     submitForm(name, phone, email, password);
//     // } 
//     // else {
//     //     alert('Please fill in all fields.');
//     // }
// }

function submitForm(name, phone, email, password) {
    console.log("submit cluck");
    fetch('http://your-node-server-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, phone, email, password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success response from the server
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error
    });
}
