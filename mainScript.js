    const validateBtn = document.getElementById('check-btn');
    const clearBtn = document.getElementById('clear-btn');
    const inputElement = document.getElementById('user-input');
    const resultDiv = document.getElementById('results-div');

    validateBtn.addEventListener('click', () => {
        inputCheck(inputElement.value);
    });

    inputElement.addEventListener("keydown", (event) => {
        if(event.key === "Enter"){
        inputCheck(inputElement.value);
        }
    });

    clearBtn.addEventListener('click', () => {
        resultDiv.innerHTML = "";
    });

    const inputCheck = (inputValue) => {
        const countryCode = '^\\+?1?\\s?-?';
        const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
        const phoneNumber = '[0-9]{3}\\s?-?[0-9]{4}$';
        const spaceHyphen = '[\\s\\-]?';
        const invalidInputNumber = "Invalid Us Number: " + inputValue;
        const validInputNumber = "Valid Us Number: " + inputValue;
        const usNumberRegex = new RegExp(`${countryCode}${areaCode}${spaceHyphen}${phoneNumber}`);

        if (inputValue === ""){
            alert("Please provide a phone number");
        } else {
            if (usNumberRegex.test(inputValue)) {
                resultDiv.innerHTML += `<p>${validInputNumber}</p>`;
            } else {
                resultDiv.innerHTML += `<p>${invalidInputNumber}</p>`;
            }
        };

        };
