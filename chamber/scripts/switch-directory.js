document.addEventListener("DOMContentLoaded", switchDir);

function switchDir() {
    const gridButton = document.getElementById("grid");
    const listButton = document.getElementById("list");
    const memberGrid = document.getElementById("memberGrid");
    const memberList = document.getElementById("memberList");

    gridButton.addEventListener("click", function() {
        gridButton.classList.add("active");
        listButton.classList.remove("active");
        memberGrid.style.display = "grid";
        memberList.style.display = "none";
    });

    listButton.addEventListener("click", function() {
        listButton.classList.add("active");
        gridButton.classList.remove("active");
        memberList.style.display = "block";
        memberGrid.style.display = "none";
    });
}