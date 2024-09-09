// Function to toggle visibility of sections and update button text
const toggleSection = (id: string, buttonId: string, showText: string, hideText: string) => {
    const section = document.getElementById(id);
    const button = document.getElementById(buttonId);
    if (section && button) {
        if (section.style.display === "none" || section.style.display === "") {
            section.style.display = "block"; // Show section
            button.textContent = hideText; // Update button text to "Close Skills"
        } else {
            section.style.display = "none";  // Hide section
            button.textContent = showText; // Update button text to "Show Skills"
        }
    }
};

// Attach event listeners to buttons with text updates
document.getElementById('toggleExperienceBtn')?.addEventListener('click', () => toggleSection('experienceSection', 'toggleExperienceBtn', 'Show Experience', 'Hide Experience'));
document.getElementById('toggleSkillsBtn')?.addEventListener('click', () => toggleSection('skillsSection', 'toggleSkillsBtn', 'Show Skills', 'Hide Skills'));
