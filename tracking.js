const date = "Friday 8 March 2024"
const yourTrackingNumber = '999';

const bannerText = "Your item is out for delivery on March 7, 2024 at 6:10 am in PALM DESERT, CA 92260"

const trackingStates = {
    "USPS in possession of item": {
        "status": "Completed",
        "date": "Friday 8 March 2024, 12:00 AM",
        "address": "Test Address 1"
    },
    "Departed Post Office": {
        "status": "Completed",
        "date": "Friday 8 March 2024, 12:00 AM",
        "address": "Test Address 2"
    },
    "Arrived at USPS Regional Origin Facility": {
        "status": "Completed",
        "date": "Friday 8 March 2024, 12:00 AM",
        "address": "Test Address 3"
    },
    "Departed USPS Regional Facility": {
        "status": "Completed",
        "date": "Friday 8 March 2024, 12:00 AM",
        "address": "Test Address 4"
    },
    "In Transit to Next Facility": {
        "status": "Completed",
        "date": "Friday 8 March 2024, 2:00 AM",
        "address": ""
    },
    "Arrived at USPS Regional Destination Facility": {
        "status": "Completed",
        "date": "Friday 8 March 2024, 12:00 AM",
        "address": "Test Address 5"
    },
    "Departed USPS Regional Facility": {
        "status": "Completed",
        "date": "Friday 8 March 2024, 12:00 AM",
        "address": "Test Address 6"

    },
    "Arrived at USPS Facility": {
        "status": "Completed",
        "date": "Friday 8 March 2024, 12:00 AM",
        "address": "Test Address 7"

    },
    "Departed USPS Facility": {
        "status": "Completed",
        "date": "Friday 8 March 2024, 12:00 AM",
        "address": "Test Address 8"
    },
    "Arrived at next USPS Facility": {
        "status": "Withheld",
        "date": "Friday 8 March 2024, 12:00 AM",
        "address": "Test Address 9"
    },
    "Arrived at Post Office": {
        "status": "Pending",
        "date": "Friday 8 March 2024, 12:00 AM",
        "address": "Test Address 10"
    },
    "Out for Delivery, Expected Delivery Between ": {
        "status": "Pending",
        "date": "Friday 8 March 2024, 12:00 AM",
        "address": "Test Address 11"
    }
}


function handleTrackingConfirm(e) {
    var form = document.forms['TrackConfirmAction']; // or use document.getElementById('trackPackage');

    // Assuming you have an input field with name 'trackingNumber'f
    trackingNumber = form.elements['tracking-input'].value;
    document.getElementById('tracking-value').value = trackingNumber;

    if (trackingNumber == yourTrackingNumber) {
        // Navigate to tracking page with the tracking number as a query parameter
        form.action = './tracking.html';

    } else {
        // Redirect to an error page if the tracking number does not match
        console.log("Tracking number does not match");
        form.action = './error.html';
    }

}

//Status either Pending or Completed
document.addEventListener('DOMContentLoaded', () => {




    console.log(trackingStates["Arrived at USPS Regional Destination Facility"])


    if (window.location.href.indexOf('tracking-value') == -1) {
        window.location.href = './index.html';
    }
    else {
        var url = new URL(window.location.href);
        var trackingNumber = url.searchParams.get('tracking-value');
        document.querySelector('span.tracking-number').innerText = trackingNumber;
    }

    const day = date.split(' ')[0];
    const dateNumber = date.split(' ')[1];
    const month = date.split(' ')[2];
    const year = date.split(' ')[3];

    document.querySelector("p.banner-content").innerText = bannerText;

    const daySelector = document.querySelector('em.day');
    const dateSelector = document.querySelector('strong.date');
    const monthSelector = document.querySelector('span.month_year > span:first-child');
    const yearSelector = document.querySelector('span.month_year > span:last-child');
    daySelector.innerText = day;
    dateSelector.innerText = dateNumber;
    monthSelector.innerText = month;
    yearSelector.innerText = year;


    // Convert the object into an array of objects for easier manipulation
    const eventsArray = Object.entries(trackingStates).map(([key, value]) => ({
        name: key,
        ...value,
    }));

    // Assuming the events are already in the correct order, so no need to sort

    // Determine visibility based on your rules
    // This is a simplified approach; you might need to adjust it based on your exact needs
    const visibleCount = eventsArray.reduce((count, event, index) => {
        if (event.status === "Completed" && index < eventsArray.length - 3) {
            return count + 1;
        }
        return count;
    }, 0);

    let completedShown = 0;

    // Select the container
    const container = document.querySelector('.tracking-progress-bar-status-container');

    eventsArray.forEach((event, index) => {
        let div;
        if (event.status === "Completed" || event.status === "Withheld") {
            div = document.createElement('div');
            div.className = "tb-step";
            if (index < eventsArray.length - 3 && completedShown >= 2) {
                completedShown
                div.classList.add("collapsed");
            } else {
                completedShown += 1;
            }
            div.innerHTML = `
        ${event.status === "Withheld" ? `
        <p class="tb-status-whithheld">Withheld
        <img src="./USPS.com® - USPS Tracking® Results_files/holdmail-red.svg" alt="Holdmail Icon">
        </p>
        ` : ''}
        <p class="tb-status-detail">${event.name}</p>
        <p class="tb-location">${event.address}</p>
        <p class="tb-date">${event.date}</p>
      `;
        } else { // Pending status
            div = document.createElement('div');
            div.className = "upcoming-step";
            div.innerHTML = `
        <p class="upcoming-status">${event.name}</p>
      `;
        }

        // Insert the new element at the top of the container
        container.insertBefore(div, container.firstChild);
    });
});




// const container = document.querySelector('.tracking-progress-bar-status-container');

// // Convert object to array and reverse it to start appending from the first event
// const entries = Object.entries(trackingData).reverse();

// entries.forEach(([key, { status, date, address }], index) => {
//   let element;
//   if (status === "Completed") {
//     element = document.createElement('div');
//     element.className = `tb-step ${entries.length - index > 3 ? 'collapsed' : ''}`;
//     element.innerHTML = `
//       <p class="tb-status-detail">${key}</p>
//       <p class="tb-location">${address}</p>
//       <p class="tb-date">${date}</p>
//     `;
//   } else { // Pending status
//     element = document.createElement('div');
//     element.className = 'upcoming-step';
//     element.innerHTML = `
//       <p class="upcoming-status">${key}</p>
//     `;
//   }
//   // Prepend the new element to the top of the container
//   container.insertBefore(element, container.firstChild);
// });