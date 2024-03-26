document.addEventListener("DOMContentLoaded", function() {
    fetch("data/members.json")
        .then(response => response.json())
        .then(data => {
            const memberGrid = document.getElementById("memberGrid");
            data.companies.forEach(company => {
                const card = createMemberCard(company);
                memberGrid.appendChild(card);

            });
        })
        .catch(error => console.error("Error fetching data:", error));

    function createMemberCard(company) {
        const section = document.createElement("section");

        // Add logo
        const logo = document.createElement("img");
        logo.src = company.image;
        section.appendChild(logo);

        // Add name
        const name = document.createElement("h4");
        name.textContent = company.name;
        section.appendChild(name);

        //add memebership type
        const membershipType = document.createElement("p");
        membershipType.innerHTML = "<strong>Membership Type:</strong> " + company.membership_level;
        section.appendChild(membershipType);

        // Add address
        const address = document.createElement("p");
        address.innerHTML = "<strong>Address:</strong> " + company.address;
        section.appendChild(address);

        // Add phone number
        const phone = document.createElement("p");
        phone.innerHTML = "<strong>Phone:</strong> " + company.phone;
        section.appendChild(phone);

        // Add website link
        const websiteLink = document.createElement("a");
        websiteLink.href = company.website;
        websiteLink.textContent = company.website;
        websiteLink.setAttribute("target", "_blank"); // Optional: Opens the link in a new tab

        // Create paragraph element
        const websiteParagraph = document.createElement("p");
        websiteParagraph.innerHTML = "<strong>Website: </strong>"; // Strong tag for the label
        websiteParagraph.appendChild(websiteLink); // Append the link to the paragraph

        // Append the paragraph to the section
        section.appendChild(websiteParagraph);


        const article = document.createElement("article");
        article.appendChild(section);

        return article;
    }
});