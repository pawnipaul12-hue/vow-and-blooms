
"use strict";

/* ========================================
   1. CATALOGUE DATA
======================================== */

const catalogues = {
    "weddings.html": [
        {
            title: "Haldi Ceremony",
            price: "₹15,000 onwards",
            description: "Yellow drapes, marigold flowers and cheerful traditional decor.",
            image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Mehendi Celebration",
            price: "₹20,000 onwards",
            description: "Colourful seating, floral details and festive mehendi decor.",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Wedding Mandap",
            price: "₹75,000 onwards",
            description: "A beautiful ceremony stage with elegant flowers and draping.",
            image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Royal Wedding",
            price: "₹1,50,000 onwards",
            description: "Grand decor, statement florals and luxurious styling.",
            image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Engagement",
            price: "₹35,000 onwards",
            description: "An elegant backdrop for your ring ceremony and photographs.",
            image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Wedding Reception",
            price: "₹60,000 onwards",
            description: "A stylish stage, ambient lighting and a memorable evening setup.",
            image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80"
        }
    ],

    "birthdays.html": [
        {
            title: "First Birthday",
            price: "₹12,000 onwards",
            description: "A sweet cake table, soft colours and a memorable first milestone.",
            image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Kids' Theme Party",
            price: "₹15,000 onwards",
            description: "Fun themed decorations, balloons and playful party styling.",
            image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Surprise Birthday",
            price: "₹8,000 onwards",
            description: "A lovely surprise setup with balloons, lights and flowers.",
            image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Luxury Birthday",
            price: "₹30,000 onwards",
            description: "Statement backdrops, elegant tables and coordinated decor.",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Floral Birthday",
            price: "₹18,000 onwards",
            description: "Pastel colours, flowers and a dreamy celebration corner.",
            image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Milestone Birthday",
            price: "₹25,000 onwards",
            description: "A personalised setup for a special age or life milestone.",
            image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=800&q=80"
        }
    ],

    "parties.html": [
        {
            title: "Anniversary Celebration",
            price: "₹20,000 onwards",
            description: "Romantic flowers, candlelight styling and a beautiful backdrop.",
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Cocktail Party",
            price: "₹35,000 onwards",
            description: "Modern decor, mood lighting and a stylish social setting.",
            image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Engagement Party",
            price: "₹30,000 onwards",
            description: "Beautiful floral styling for an evening with family and friends.",
            image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Festive Celebration",
            price: "₹15,000 onwards",
            description: "Festive colours, flowers and decor inspired by Indian traditions.",
            image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Private Garden Party",
            price: "₹25,000 onwards",
            description: "An intimate outdoor gathering with greenery and warm lights.",
            image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "Family Celebration",
            price: "₹18,000 onwards",
            description: "Welcoming decor for reunions and special family occasions.",
            image: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&w=800&q=80"
        }
    ]
};


/* ========================================
   2. DISPLAY THE CORRECT CATALOGUE
======================================== */

const currentPage = window.location.pathname
    .split("/")
    .pop()
    .toLowerCase();

const catalogueGrid = document.getElementById("catalogue-grid");
const selectedCatalogue = catalogues[currentPage];

if (catalogueGrid && selectedCatalogue) {
    selectedCatalogue.forEach(function (item) {
        // Create the catalogue card
        const card = document.createElement("article");
        card.className = "catalogue-card";

        // Add the package image
        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.title;
        image.loading = "lazy";

        image.onerror = function () {
            image.style.display = "none";
        };

        // Add the package details
        const content = document.createElement("div");
        content.className = "catalogue-card-content";

        const title = document.createElement("h3");
        title.textContent = item.title;

        const description = document.createElement("p");
        description.textContent = item.description;

        const price = document.createElement("p");
        price.className = "package-price";
        price.textContent = item.price;

        // Add the enquiry link
        const enquiryLink = document.createElement("a");
        enquiryLink.className = "primary-button";

        enquiryLink.href =
            "index.html?event=" +
            encodeURIComponent(getEventType(currentPage)) +
            "&package=" +
            encodeURIComponent(item.title) +
            "#contact";

        enquiryLink.textContent = "Enquire About This ↗";

        // Put everything together
        content.append(title, description, price, enquiryLink);
        card.append(image, content);
        catalogueGrid.appendChild(card);
    });
}


/* ========================================
   3. IDENTIFY THE EVENT TYPE
======================================== */

function getEventType(page) {
    if (page === "weddings.html") {
        return "Wedding";
    }

    if (page === "birthdays.html") {
        return "Birthday";
    }

    if (page === "parties.html") {
        return "Party";
    }

    return "";
}


/* ========================================
   4. BOOKING FORM
======================================== */

const bookingForm = document.getElementById("booking-form");
const formMessage = document.getElementById("form-message");

if (bookingForm && formMessage) {
    const eventTypeInput = document.getElementById("event-type");
    const customerMessage = document.getElementById("customer-message");
    const eventDateInput = document.getElementById("event-date");

    // Prevent selecting a date in the past
    if (eventDateInput) {
        const today = new Date();

        const localToday = [
            today.getFullYear(),
            String(today.getMonth() + 1).padStart(2, "0"),
            String(today.getDate()).padStart(2, "0")
        ].join("-");

        eventDateInput.min = localToday;
    }

    // Read event details from the URL
    const urlParameters = new URLSearchParams(window.location.search);

    const requestedEvent = urlParameters.get("event");
    const requestedPackage = urlParameters.get("package");

    // Automatically select the event type
    if (eventTypeInput && requestedEvent) {
        const validTypes = ["Wedding", "Birthday", "Party"];

        if (validTypes.includes(requestedEvent)) {
            eventTypeInput.value = requestedEvent;
        }
    }

    // Automatically fill in the selected package
    if (customerMessage && requestedPackage) {
        customerMessage.value =
            "I am interested in the " + requestedPackage + " package.";
    }

    // Handle booking form submission
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("customer-name");
        const guestCountInput = document.getElementById("guest-count");

        const booking = {
            name: nameInput ? nameInput.value.trim() : "",
            eventType: eventTypeInput ? eventTypeInput.value : "",
            date: eventDateInput ? eventDateInput.value : "",
            guests: guestCountInput ? guestCountInput.value : "",
            message: customerMessage
                ? customerMessage.value.trim()
                : "",
            submittedAt: new Date().toISOString()
        };

        // Validate required fields
        if (
            !booking.name ||
            !booking.eventType ||
            !booking.date ||
            !booking.guests
        ) {
            formMessage.textContent =
                "Please complete all required fields.";
            return;
        }

        if (Number(booking.guests) < 1) {
            formMessage.textContent =
                "Please enter at least one guest.";
            return;
        }

        // Save the enquiry in this browser
        try {
            const savedBookings = JSON.parse(
                localStorage.getItem("vowBloomBookings") || "[]"
            );

            savedBookings.push(booking);

            localStorage.setItem(
                "vowBloomBookings",
                JSON.stringify(savedBookings)
            );

            formMessage.textContent =
                "Thank you, " + booking.name +
                "! Your sample enquiry has been saved in this browser. " +
                "No event planner has been contacted.";

            bookingForm.reset();

        } catch (error) {
            formMessage.textContent =
                "Your browser could not save the enquiry. " +
                "Please check your browser storage settings.";
        }
    });
}
