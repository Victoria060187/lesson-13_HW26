class SuperMath {
    constructor() {}

    performCalculation(x, y, operator) {
        switch (operator) {
            case "+":
                return x + y;
            case "-":
                return x - y;
            case "*":
                return x * y;
            case "/":
                return x / y;
            case "%":
                return x % y;
            default:
                throw new Error("Unsupported operator");
        }
    }

    check(obj) {
        const { X, Y, znak } = obj;

        if (["+", "-", "*", "/", "%"].includes(znak)) {
            const confirmMessage = `Do you want to perform the operation ${X} ${znak} ${Y}? (yes/no)`;
            const userConfirmation = prompt(confirmMessage);

            if (userConfirmation !== null) {
                const lowerConfirmation = userConfirmation.trim().toLowerCase();

                if (lowerConfirmation === "yes") {
                    const result = this.performCalculation(X, Y, znak);
                    alert(`Result: ${result}`);
                } else if (lowerConfirmation === "no") {
                    const newX = parseFloat(prompt("Enter a new value for X:"));
                    if (isNaN(newX)) {
                        alert("Invalid value for X. It must be a number!");
                        return;
                    }

                    const newY = parseFloat(prompt("Enter a new value for Y:"));
                    if (isNaN(newY)) {
                        alert("Invalid value for Y. It must be a number!");
                        return;
                    }

                    const newZnak = prompt("Enter an operator (+, -, *, /, %):");
                    if (!["+", "-", "*", "/", "%"].includes(newZnak)) {
                        alert("Invalid operator. Please enter one of: +, -, *, /, %");
                        return;
                    }

                    const newResult = this.performCalculation(newX, newY, newZnak);
                    alert(`Result: ${newResult}`);
                } else {
                    alert("Invalid input. Please enter 'yes' or 'no'.");
                }
            }
        } else {
            alert("Invalid operator");
        }
    }
}

const p = new SuperMath();
const obj = { X: 12, Y: 3, znak: "/" };
p.check(obj);