document.getElementById("calculateBtn").addEventListener("click", function() {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;

    if (name1 === "" || name2 === "") {
        document.getElementById("result").innerText = "Please enter both names!";
    } else {
        document.getElementById("result").innerText = `${name1} ❤️ ${name2}: 100% Love!`;
    }
});
