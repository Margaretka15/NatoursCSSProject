//this script is to hide the menu when clicked on the link in the navigation.
///it was not included in the course project

const navigationList = document.querySelector(".navigation__list");

navigationList.addEventListener("click", () =>
{
    const checkbox = document.getElementById("navi-toggle");
    checkbox.checked = false;
});
