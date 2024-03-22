const yourTrackingNumber = '999';

const date = "Friday 8 March 2024"
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

export { yourTrackingNumber, date, bannerText, trackingStates };