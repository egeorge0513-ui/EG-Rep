// Emma George Weddings — shared site behavior

var SITE_GATE_PASSWORD = "lily";
var SITE_GATE_STORAGE_KEY = "egw-unlocked";

document.addEventListener("DOMContentLoaded", function () {
  // Site password gate
  var gateForm = document.querySelector("#gate-form");
  if (gateForm) {
    var gateInput = document.querySelector("#gate-password");
    var gateError = document.querySelector("#gate-error");
    gateForm.addEventListener("submit", function (e) {
      e.preventDefault();
      if (gateInput.value.trim().toLowerCase() === SITE_GATE_PASSWORD) {
        try {
          localStorage.setItem(SITE_GATE_STORAGE_KEY, "1");
        } catch (err) {
          /* storage unavailable — still unlock for this page view */
        }
        document.documentElement.classList.add("gate-unlocked");
      } else {
        gateError.style.display = "block";
        gateInput.value = "";
        gateInput.focus();
      }
    });
  }

  // Footer year
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // FAQ accordion
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var question = item.querySelector(".faq-question");
    if (!question) return;
    question.addEventListener("click", function () {
      var wasOpen = item.classList.contains("is-open");
      item
        .closest(".faq-list")
        .querySelectorAll(".faq-item")
        .forEach(function (i) {
          i.classList.remove("is-open");
        });
      if (!wasOpen) item.classList.add("is-open");
    });
  });

  // Wedding date picker (Flatpickr)
  var dateField = document.querySelector("#wedding-date");
  if (dateField && window.flatpickr) {
    window.flatpickr(dateField, {
      minDate: "today",
      dateFormat: "F j, Y",
      disableMobile: true,
    });
  }

  // Booking form submission (Formspree via fetch, no page reload)
  var form = document.querySelector(".booking-form");
  if (form) {
    var statusEl = form.querySelector(".form-status");
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      if (statusEl) {
        statusEl.className = "form-status is-visible";
        statusEl.textContent = "Sending your inquiry...";
      }

      var data = new FormData(form);

      fetch(form.action, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            if (statusEl) {
              statusEl.className = "form-status is-visible success";
              statusEl.textContent =
                "Thank you! Your inquiry has been sent — I'll be in touch within 1–2 business days.";
            }
          } else {
            throw new Error("Form submission failed");
          }
        })
        .catch(function () {
          if (statusEl) {
            statusEl.className = "form-status is-visible error";
            statusEl.textContent =
              "Something went wrong sending your inquiry. Please email admin@egweds.com directly.";
          }
        });
    });
  }
});
