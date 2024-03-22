const yourTrackingNumber = '999';

//Check if the tracking-value is in the url params if not navigate back to enter.html
if (window.location.href.indexOf('tracking-value') == -1) {
    window.location.href = './index.html';
}
else{
    var url = new URL(window.location.href);
    var trackingNumber = url.searchParams.get('tracking-value');
    document.querySelector('span.tracking-number').innerText = trackingNumber;

}

function handleTrackingConfirm(e) {
    var form = document.forms['TrackConfirmAction']; // or use document.getElementById('trackPackage');

    // Assuming you have an input field with name 'trackingNumber'f
    trackingNumber = form.elements['tracking-input'].value;
    document.getElementById('tracking-value').value = trackingNumber;

    if (trackingNumber == yourTrackingNumber) {
        // Navigate to tracking page with the tracking number as a query parameter
        form.action = './tracking.html' ;
    
    } else {
        // Redirect to an error page if the tracking number does not match
        console.log("Tracking number does not match");
        form.action = './error.html';
    }

}
