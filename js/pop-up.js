

var link = document.querySelector(".search");
var searchForm = document.querySelector(".model-content-form");
var dateEntry = searchForm.querySelector("#enter-date");
var form = document.querySelector("form");
var dateDeparture = searchForm.querySelector("#exit-date");
var children = searchForm.querySelector("#children");
var adults = searchForm.querySelector("#adult");

link.addEventListener("click", function(event){
  event.preventDefault();
  if (searchForm.classList.contains("search-form-visible")) {
    searchForm.classList.add("model-content-form-invisible");
    searchForm.classList.remove("model-content-form-visible");
    searchForm.classList.remove("model-content-form-error");
  } else {
    searchForm.classList.add("model-content-form-visible");
    searchForm.classList.remove("model-content-form-invisible");
  };
  dateEntry.focus();
});

form.addEventListener("submit", function(event) {
  if (!exitdate.value || !enterdate.value || !children.value || !adult.value) {
    event.preventDefault();
    searchForm.classList.remove("model-content-form-error");
    searchForm.offsetWidth = searchForm.offsetWidth;
    searchForm.classList.add("model-content-form-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (searchForm.classList.contains("model-content-form-visible")) {
      searchForm.classList.remove("model-content-form-visible");
      searchForm.classList.add("model-content-form-invisible");
      searchForm.classList.remove("model-content-form-error");
    }
  }
});