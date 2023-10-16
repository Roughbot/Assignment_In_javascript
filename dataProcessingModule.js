let entryId = 1;

export function saveData(selectedDates) {

    
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    const numberOfLeads = document.getElementById("number-of-leads").value;
    const excludedDatesArray = parseExcludedDates(selectedDates);


    const id = entryId;
    entryId++;

    // Obtaining the month and year of the delivery
    const monthYear = getMonthYear(startDate);

    // Calculate number of days between start and end date excluding excluded dates
    const days = getNumberOfDays(startDate, endDate, excludedDatesArray);

    // Calculate expected lead count
    const expectedLeadCount = numberOfLeads / days;

    const ExcludedDates = excludedDatesArray.join(',');

    let currentDate = new Date();
    let formattedDateTime = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')} ${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}:${currentDate.getSeconds().toString().padStart(2, '0')}`;

    // Display details in the table
    const table = document.getElementById("details-table").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow(1);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    const cell9 = newRow.insertCell(8);
    const cell10 = newRow.insertCell(9);

    cell2.textContent = id;
    cell3.textContent = startDate;
    cell4.textContent = endDate;
    cell5.textContent = monthYear;
    cell6.textContent = ExcludedDates;
    cell7.textContent = days;
    cell8.textContent = numberOfLeads;
    cell9.textContent = ~~expectedLeadCount;
    cell10.textContent = formattedDateTime;

    
}

export function parseExcludedDates(selectedDates) {
    // Logic to parse selectedDates array...
    const excludedDatesArray = [];
    selectedDates.forEach(date => {
        // Convert the Date object to a string in the desired format
        const dateString = date.toISOString().split('T')[0];
        excludedDatesArray.push(dateString);
    });
    return excludedDatesArray;
}

export function getNumberOfDays(startDate, endDate, excludedDates) {
    // Logic to calculate number of days excluding excluded dates...

    const start = new Date(startDate);
    const end = new Date(endDate);
    let count = 0;
    for (let currentDate = start; currentDate <= end; currentDate.setDate(currentDate.getDate() + 1)) {
        const dateString = currentDate.toISOString().split('T')[0];

        if (!excludedDates.includes(dateString)) {
            count++;
        }
    }
    return count;
}

export function getMonthYear(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${month}, ${year}`;
}