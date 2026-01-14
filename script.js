// Skills Tabs Logic
const tabs = document.querySelectorAll(".skills-tabs .tab");
const grids = document.querySelectorAll(".skills-grid");

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {

        // Remove active states
        tabs.forEach(t => t.classList.remove("active"));
        grids.forEach(g => g.classList.remove("active"));

        // Activate clicked tab + corresponding grid
        tab.classList.add("active");
        grids[index].classList.add("active");
    });
});
