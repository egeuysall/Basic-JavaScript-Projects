function getFormData() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    return { weight, height };
}

function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return weight / (heightInMeters * heightInMeters);
}

function displayResults(weight, height, bmi) {
    let classification = '';

    if (bmi < 18.5) {
        classification = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        classification = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        classification = 'Overweight';
    } else {
        classification = 'Obese';
    }

    document.getElementById('bmiResult').textContent = `Your BMI is ${bmi.toFixed(2)} (${classification})`;
}

function resetForm() {
    document.getElementById('userForm').reset();
}

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const { weight, height } = getFormData();
    const bmi = calculateBMI(weight, height);
    displayResults(weight, height, bmi);
    resetForm();
});