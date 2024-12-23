# BMI Calculator

## Project Overview

Create a simple **BMI Calculator** that calculates the Body Mass Index (BMI) based on user input for weight and height.

### HTML:
- Inputs for weight and height
- Display area for the calculated BMI result

### CSS:
- Style the form and result section for a clean, user-friendly design.

### JavaScript:
- Calculate BMI using the formula:  
  `BMI = weight / height^2`  
  Example: `bmi = weight / (height * height)`

### Extra Features:
- Categorize the BMI result:
  - Underweight
  - Normal weight
  - Overweight
  - Obesity

---

## Example Code

### HTML:
```html
<form id="bmi-form">
    <label for="weight">Weight (kg):</label>
    <input type="number" id="weight" required>

    <label for="height">Height (m):</label>
    <input type="number" id="height" step="0.01" required>

    <button type="submit">Calculate BMI</button>
</form>

<p id="result"></p>