//Check if the tracking-value is in the url params if not navigate back to enter.html
if (window.location.href.indexOf('tracking-value') == -1) {
    window.location.href = './enter.html';
}
else{
    var url = new URL(window.location.href);
    var trackingNumber = url.searchParams.get('tracking-value');
    document.querySelector('span.tracking-number').innerText = trackingNumber;

}