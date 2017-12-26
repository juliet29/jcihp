
function showDropdown(){
  document.getElementById('dropdownContent').classList.toggle("show");

}
window.onclick = function(event) {
  if (!event.target.matches('.ju-dropdown_button')) {

    var dropdowns = document.getElementsByClassName("ju-dropdown_content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
