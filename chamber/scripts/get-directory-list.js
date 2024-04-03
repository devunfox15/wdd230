document.addEventListener("DOMContentLoaded", function() {
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            const memberList = document.getElementById("memberList");
            data.companies.forEach(company => {
                const listItem = createMemberListItem(company);
                memberList.appendChild(listItem);
            });
        })
        .catch(error => console.error("Error fetching data:", error));

    function createMemberListItem(company) {
        const listItem = document.createElement("li");
        listItem.classList.add("member-item"); // Add a class for styling

        // Add name
        const name = document.createElement("h3");
        name.textContent = company.name;
        listItem.appendChild(name);

        // Add address
        const address = document.createElement("p");
        address.textContent = "Address: " + company.address;
        listItem.appendChild(address);

        // Add phone number
        const phone = document.createElement("p");
        phone.textContent = "Phone: " + company.phone;
        listItem.appendChild(phone);

        // Add website
        const website = document.createElement("p");
        website.textContent = "Website: " + company.website;
        listItem.appendChild(website);

        return listItem;
    }
});