var _a, _b;
// Function to toggle visibility of sections and update button text
var toggleSection = function (id, buttonId, showText, hideText) {
    var section = document.getElementById(id);
    var button = document.getElementById(buttonId);
    if (section && button) {
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block"; // Show section
            button.textContent = hideText; // Update button text to "Close Skills"
        }
        else {
            section.style.display = "none"; // Hide section
            button.textContent = showText; // Update button text to "Show Skills"
        }
    }
};
// Attach event listeners to buttons with text updates
(_a = document.getElementById('toggleExperienceBtn')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () { return toggleSection('experienceSection', 'toggleExperienceBtn', 'Show Experience', 'Hide Experience'); });
(_b = document.getElementById('toggleSkillsBtn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () { return toggleSection('skillsSection', 'toggleSkillsBtn', 'Show Skills', 'Hide Skills'); });
