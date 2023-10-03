function convertTemperature() {
    const temperatureInput = document.getElementById("temperature").value;
    const unit = document.getElementById("unit").value;
    const resultDisplay = document.getElementById("result");

    let convertedTemperature;

    if (temperatureInput === "") {
        resultDisplay.textContent = "Please enter a valid number";
    } else if (unit === "Celsius") {
        convertedTemperature = (parseFloat(temperatureInput) * 9/5) + 32;
        resultDisplay.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)}°F`;
    } else {
        convertedTemperature = (parseFloat(temperatureInput) - 32) * 5/9;
        resultDisplay.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)}°C`;
    }
}