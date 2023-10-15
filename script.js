
let entryId = 1



function saveData() {
  const startDate = document.getElementById("start-date").value;
  const endDate = document.getElementById("end-date").value;
  const numberOfLeads = document.getElementById("number-of-leads").value;
  const excludedDates = document.getElementById("exclude-date");
  const excludedDatesArray = parseExcludedDates(excludedDates.value);

  $(document).ready(function() {
    $("#exclude-date").datepicker({
        dateFormat: 'yy-mm-dd', // Set the date format
        onSelect: function(dateText) {
            // This function will be triggered whenever a date is selected
            const selectedDates = $(this).val().split(',').map(date => date.trim());
            // Do something with the selectedDates array
        }
    });
  });
  
  

  const id = entryId;
  
  entryId++;
  //obtaining the month and year of the delivery
  const monthYear = getMonthYear(startDate);

  // Calculate number of days between start and end date excluding excluded dates
  const days = getNumberOfDays(startDate, endDate, excludedDatesArray);
  
  // Calculate expected lead count
  const expectedLeadCount = numberOfLeads / days;
  
  const ExcludedDates = excludedDatesArray.join(',');

  let currentDate = new Date();
  let year = currentDate.getFullYear();
  let month = String(currentDate.getMonth() + 1).padStart(2, '0');
  let day = String(currentDate.getDate()).padStart(2, '0');
  let hours = String(currentDate.getHours()).padStart(2, '0');
  let minutes = String(currentDate.getMinutes()).padStart(2, '0');
  let seconds = String(currentDate.getSeconds()).padStart(2, '0');
  let formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

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


function parseExcludedDates(excludedDatesString) {
  const excludedDatesArray = [];
  const dateRanges = excludedDatesString.split(',');
  dateRanges.forEach(range => {
    const [start, end] = range.split(':');
    const startDate = new Date(start);
    const endDate = new Date(end);
    for (let currentDate = startDate; currentDate <= endDate; currentDate.setDate(currentDate.getDate() + 1)) {
      const dateString = currentDate.toISOString().split('T')[0];
      excludedDatesArray.push(dateString);
    }
  });
  return excludedDatesArray;
}


function getNumberOfDays(startDate, endDate, excludedDates) {
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



function getMonthYear(dateString) {
  const date = new Date(dateString);
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return `${month}, ${year}`;
}