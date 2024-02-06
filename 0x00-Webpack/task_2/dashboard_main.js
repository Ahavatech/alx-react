import $ from 'jquery';
import _ from 'lodash';

// Function to update the counter
function updateCounter() {
  let count = parseInt($('#count').text()) || 0;
  count++;
  $('#count').text(`${count} clicks on the button`);
}

// Document ready event
$(document).ready(function () {
  // Add paragraphs and button
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button id="startButton">Click here to get started</button>');
  $('body').append('<p id="count"></p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  // Bind the updateCounter function to the click event using Lodash debounce
  $('#startButton').on('click', _.debounce(updateCounter, 1000));
});

