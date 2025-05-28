// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lynn L
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function reverseString() {
  let reversed = ''; // Initialize an empty string to store the reversed result

  // Get the value from the input field
  let originalString = document.getElementById("inputString").value;

  // Use a for loop to reverse the string
  for (let counter = originalString.length - 1; counter >= 0; counter--) {
      reversed = reversed + originalString[counter]; // Add each character to the reversed string
  }

  // Display the reversed string in the HTML element with id "reversedOutput"
  document.getElementById("reversedOutput").innerHTML =
      "<p>The reversed string is " + reversed + ".</p>";
}