import * as DatepickerModule from './datepickerModule.js';
import * as DataProcessingModule from './dataProcessingModule.js';

$(document).ready(function() {
    let selectedDates = [];
    
   
    // Initialize datepicker
    DatepickerModule.initializeDatepicker(selectedDates);

    // Event listener for save button click
    $("#save-button").on('click', function() {
        DataProcessingModule.saveData(selectedDates);
    });
    
});
