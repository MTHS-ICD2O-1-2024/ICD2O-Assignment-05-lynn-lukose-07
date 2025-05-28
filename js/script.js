// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lynn L
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function reverseString() {
  let reversed = ''; // Initialize an empty string to store the reversed result

  // Get the string input from the HTML element
  let originalString = document.getElementById("inputString").value;

  // Use a for loop in a similar structure to the calculate() function
  for (let counter = 1; counter <= originalString.length; counter++) {
      // Get character from the end of the original string
      let index = originalString.length - counter;
      reversed = reversed + originalString[index];
  }

  // Display the reversed string
  document.getElementById("reversedOutput").innerHTML =
      "<p>The reversed string is " + reversed + ".</p>";
}
