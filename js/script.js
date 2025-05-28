// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lynn L
// Created on: May 2025
// This file contains the JS functions for index.html

"use strict"

function reverseString() {
  let reversed = "" // Initialize an empty string to store the reversed result

  // Input
let originalString = document.getElementById("inputString").value

  // Use a for loop to reverse the string
for (let counter = originalString.length - 1; counter >= 0; counter--) {
    const char = originalString.charAt(counter)
    const reversed = reversed + char // Add each character to the reversed string
}

  // output"
document.getElementById("result").innerHTML =
    "<p>The reversed string is " + reversed + ".</p>"
}
