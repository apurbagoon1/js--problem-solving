/**
 * Task-1:
Write a function to convert temperature from Celsius to Fahrenheit.

 */

const celsiusToFahrenheit = function(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
};

const temperatureInFahrenheit = celsiusToFahrenheit(30);
console.log('Temperature in Fahrenheit:', temperatureInFahrenheit); 
