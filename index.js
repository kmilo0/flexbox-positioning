"use strict";

var flexbox = document.querySelector(".container");

const selectJustifyContent = document.getElementById("select-justify-content");
const selectAlignItems = document.getElementById("select-align-items");
const inputFlexWrap = document.getElementById("flex-wrap");
const selectAlignContent = document.getElementById("select-align-content");

selectJustifyContent.addEventListener("change", function () {
  flexbox.style.justifyContent = this.value;
});

selectAlignItems.addEventListener("change", function () {
  flexbox.style.alignItems = this.value;
});

inputFlexWrap.addEventListener("change", function () {
  flexbox.style.flexWrap = this.checked ? "wrap" : "";
  flexbox.style.width = this.checked ? "170px" : "";
});

selectAlignContent.addEventListener("change", function () {
  if (this.value !== "stretch" && !inputFlexWrap.checked) {
    inputFlexWrap.checked = true;
    inputFlexWrap.dispatchEvent(new Event("change"));
  }

  flexbox.style.alignContent = this.value;
});
