window.onload = function () {
    let table = document.getElementById("table");
    let checkboxes = table.querySelectorAll("input[type='checkbox']");

    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener("change", update);
    });
}

function update() {
    let totalValue = 0;
    let myBar = document.getElementById("myBar");

    let table = document.getElementById("table");
    let boxes = table.querySelectorAll("input[type='checkbox']:checked");

    boxes.forEach(function (box) {
        totalValue += parseFloat(box.getAttribute("data-value"));
    });

    myBar.style.width = totalValue + "%";
    return true;
}
