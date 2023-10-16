export function sendDataToServer(formData) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: "POST",
            url: "endpoint-url",//Location of the server where the data is to be stored.
            data: JSON.stringify(formData),
            contentType: "application/json",
            success: function(response) {
                resolve(response);
            },
            error: function(error) {
                reject(error);
            }
        });
    });
}
