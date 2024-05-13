function addMessage() {
    //We were not able to get this part of the code to run. It was supposed to save the form data into the json file, but I don't think it can work in the environment we are using. We have example form data that can be seen from the contact us page where it would be saved if the function worked.

    const fs = require('fs');

    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    //https://www.educative.io/answers/how-to-save-user-input-to-json-object-in-html

    const user = {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        message: message.value,
    };

    const data = JSON.stringify(user);

    fs.writeFile("data.json", data, (error) => {
        if (error) {
            console.error(error);
            throw error;
        }

    });
}


//https://stackoverflow.com/questions/70407169/saving-user-input-in-json-file
//https://blog.openreplay.com/how-to-read-and-write-json-in-javascript/

function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const value = Object.fromEntries(data.entries());


    console.log({ value });

    const results = document.querySelector('.results pre');
    results.innerText = JSON.stringify(value, null, 2);

}


const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

//https://www.learnwithjason.dev/blog/get-form-values-as-json/




function loadData() {
    var fileName = document.getElementById("fileSelect");
    fileName = fileName.value

    if (fileName != "default") {
        fetch(fileName)
            .then(response => response.json())
            .then(data => {
                var selectedValue = document.getElementById("filterSelect");
                var selectedValue = selectedValue.value
                const tableBody = document.querySelector('#data-table tbody');
                tableBody.innerHTML = ""
                if (selectedValue != "default") {
                    data.forEach(item => {
                        const row = document.createElement('tr');
                        row.innerHTML = '<td>' + item[selectedValue] + '</td>';
                        tableBody.appendChild(row);
                    });
                }
            })
    }
}



