document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Month view like the image you showed
        events: [
            {
                title: 'Consultancy Seminar',
                start: '2024-09-02T18:00:00'  // Example date
            },
            {
                title: 'Business Enterprise Meeting',
                start: '2024-09-03T18:00:00'  // Example date
            },
            {
                title: 'Conference - Event01',
                start: '2024-09-12'  // All-day event
            },
            {
                title: 'Risk Assessment - Event06',
                start: '2024-09-17T10:00:00'  // Example date and time
            }
        ]
    });

    calendar.render();
});

