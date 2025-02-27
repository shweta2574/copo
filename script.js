let coList = [];

function addCO() {
    const courseNo = document.getElementById("courseNo").value;
    const coText = document.getElementById("coText").value;

    if (courseNo && coText) {
        coList.push({ courseNo, coText });
        
        // Clear input fields
        document.getElementById("courseNo").value = "";
        document.getElementById("coText").value = "";

        // Update CO dropdown
        updateCODropdown();

        alert("CO added successfully!");
    } else {
        alert("Please fill both Course No and Text fields.");
    }
}

function updateCODropdown() {
    const coSelect = document.getElementById("coSelect");
    coSelect.innerHTML = ""; // Clear previous options

    coList.forEach((co, index) => {
        const option = document.createElement("option");
        option.value = index;
        option.text = `${co.courseNo}: ${co.coText}`;
        coSelect.appendChild(option);
    });
}

function mapCOPo() {
    const coIndex = document.getElementById("coSelect").value;
    const po = document.getElementById("poSelect").value;
    const level = document.getElementById("levelSelect").value;

    if (coIndex !== "") {
        const co = coList[coIndex];
        const mapping = `${co.courseNo} - ${co.coText} mapped to ${po} with ${level} level`;

        const mappedDataList = document.getElementById("mappedDataList");
        const mappingDiv = document.createElement("div");
        mappingDiv.textContent = mapping;
        mappedDataList.appendChild(mappingDiv);

        alert("CO-PO mapping added successfully!");
    } else {
        alert("Please select a CO to map.");
    }
}
document.querySelectorAll('.card select').forEach(select => {
    select.addEventListener('change', (event) => {
        alert(`Selected Course: ${event.target.value}`);
    });
});


function showFeedbackForm() {
    // Display the feedback form table when 'Search' is clicked
    document.getElementById("feedbackForm").style.display = "block";
}

function navigateToPage(dropdown) {
    const selectedValue = dropdown.value;
    if (selectedValue) {
        window.location.href = selectedValue; // Redirect to the selected page
    }
}
