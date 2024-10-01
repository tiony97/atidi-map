// INTERACTIVE MAP FUNCTIONALITY
$(document).ready(function () {
	var isHovered = false;

	// Array of country data
	var countryData = {
		"South Sudan": {
			details: {
				Description: "Sudan Project Details",
			},
		},
		Kenya: {
			details: {
				Description: "Kenya Project Details",
			},
		},
		Uganda: {
			details: {
				Description: "Uganda Project Details",
			},
		},
		Tanzania: {
			details: {
				Description: "Tanzania Project Details",
			},
		},
		Rwanda: {
			details: {
				Description: "Rwanda Project Details",
			},
		},
		Malawi: {
			details: {
				Description: "Malawi Project Details",
			},
		},
		"Sierra Leone": {
			details: {
				Description: "Sierra Leone Project Details",
			},
		},
		Gambia: {
			details: {
				Description: "Gambia Project Details",
			},
		},

		// Add data for other countries similarly
		Zambia: {
			details: {
				Description: "Zambia Project Details",
			},
		},
		Madagascar: {
			details: {
				Description: "Madagascar Project Details",
			},
		},
		Congo: {
			details: {
				Description: "Congo Project Details",
			},
		},
		Ethiopia: {
			details: {
				Description: "Ethiopia Project Details",
			},
		},
	};

	// Show popup on country hover
	$("path.member").hover(
		function (event) {
			isHovered = true;
			var countryID = $(this).attr("id");
			var countryName = $(this).data("name");
			var countryInfo = countryData[countryName].details;

			// Set the title dynamically
			$("#country-title").text(`${countryName}, ${countryID}`);

			// Set the descriptiom dynamically
			$("#project-description").text(`${countryInfo.Description}`);

			// Position the popup just next to the mouse icon
			var mouseX = event.pageX;
			var mouseY = event.pageY;
			positionPopup(mouseX, mouseY);
		},
		function () {
			isHovered = false;
			// Clear popup data
			$("#country-title").empty();
			$("#project-description").empty();

			$("#popup").css("display", "none");
		}
	);

	// Event listener for hover on elements with class "marker"
	$("path.marker").hover(
		function (event) {
			isHovered = true;
			var countryID = $(this).closest("a").find("path.member").attr("id");
			var countryName = $(this).closest("a").find("path.member").data("name");
			var countryInfo = countryData[countryName].details;

			// Set the title dynamically
			$("#country-title").text(`${countryName}, ${countryID}`);

			// Set the descriptiom dynamically
			$("#project-description").text(`${countryInfo.Description}`);

			// Position the popup just next to the mouse icon
			var mouseX = event.pageX;
			var mouseY = event.pageY;
			positionPopup(mouseX, mouseY);
		},
		function () {
			isHovered = false;
			// Clear popup data
			$("#country-title").empty();
			$("#project-description").empty();

			$("#popup").css("display", "none");
		}
	);

	// Move popup with mouse movement within the selected country
	$(".map-container").mousemove(function (event) {
		if (isHovered) {
			var mouseX = event.pageX;
			var mouseY = event.pageY;
			positionPopup(mouseX, mouseY);
		}
	});

	// Function to position the popup
	function positionPopup(mouseX, mouseY) {
		var popupWidth = $("#popup").outerWidth();
		var popupHeight = $("#popup").outerHeight();
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();
		var posX = mouseX + 10; // Add some offset from mouse
		var posY = mouseY - popupHeight - 10; // Adjust position to be above the mouse

		// Check if popup overflows on the right
		if (posX + popupWidth > windowWidth) {
			posX = mouseX - popupWidth - 10; // Adjust to fit within window width
		}

		// Check if popup overflows at the bottom
		if (posY + popupHeight > windowHeight) {
			posY = mouseY - popupHeight - 10; // Adjust to fit within window height
		}

		// Check if popup overflows at the top
		if (posY < 0) {
			posY = mouseY + 1; // Show below the mouse if it overflows at the top
		}

		// Set popup position
		$("#popup").css({
			top: posY,
			left: posX,
		});

		// Show popup
		$("#popup").css("display", "block");
	}

	// Hide popup when mouse leaves map container
	$(".map-container").mouseleave(function () {
		isHovered = false;
		// Clear popup data
		$("#country-title").empty();
		$("#project-description").empty();

		$("#popup").css("display", "none");
	});
});
