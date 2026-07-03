function func1() {
    var element = document.body;
    element.classList.toggle("darkMode");

    var buttonText = document.getElementById("darkModeButton");

    if (buttonText.innerHTML === "Dark Mode")
    {
        buttonText.innerHTML = "Light Mode";

    }

    else 
    {
        buttonText.innerHTML = "Dark Mode";
    }
}