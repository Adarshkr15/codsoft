document.addEventListener("DOMContentLoaded", () => {
    let display = document.getElementById("display");
    let currentInput = "";
    let operatorUsed = false;

    // Button event listeners
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', (e) => {
            let value = e.target.textContent;

            // Clear button logic
            if (value === 'C') {
                currentInput = "";
                display.value = currentInput;
                return;
            }

            // Equals button logic
            if (value === '=') {
                try {
                    currentInput = eval(currentInput).toString(); // Perform calculation
                    display.value = currentInput;
                    operatorUsed = false;
                } catch (error) {
                    display.value = "Error";
                    currentInput = "";
                }
                return;
            }

            // Add digits and operators to current input
            if (operatorUsed && !isNaN(value)) {
                currentInput = value;
                operatorUsed = false;
            } else {
                currentInput += value;
            }

            // Update display
            display.value = currentInput;
        });
    });
});
