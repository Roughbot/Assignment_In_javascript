export function initializeDatepicker(selectedDates) {

    

    $(function() {
        $("#excluded-date").multiDatesPicker({
            dateFormat: 'yy-mm-dd',
            onSelect: function(dateText) {
                const date = new Date(dateText);
                selectedDates.push(date);
            }
        });
    });
    
    $("#add-new").on('click', function(){
        selectedDates.length = 0;   
        $("#excluded-date").multiDatesPicker('resetDates');
      });
}

