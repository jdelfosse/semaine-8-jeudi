// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .
//= require jquery3
//= require popper
//= require bootstrap-sprockets

$(document).ready(function() {
$( "#categories").find("ul").hide();
  i = 0;
  $('.tablinks').eq(0).click(function () {
    if (i === 0) {
      $( "#categories" ).find("ul").eq(0).show();
      i = 1;
    }
    else if(i === 1) {
      $( "#categories" ).find("ul").eq(0).hide();
      i = 0;
    }
  });

  j = 0;
  $('.tablinks').eq(1).click(function () {
    if (j === 0) {
      $( "#categories" ).find( "ul" ).eq(1).show();
    j = 1;
    }
    else if(j === 1) {
      $( "#categories" ).find( "ul" ).eq(1).hide();
    j = 0;
    }
  });

  x = 0;
  $('.tablinks').eq(2).click(function () {
    if (x === 0) {
      $( "#categories" ).find( "ul" ).eq(2).show();
      x = 1;
    }
    else if(x === 1) {
      $( "#categories" ).find( "ul" ).eq(2).hide();
      x = 0;
    }
  });

  $("#myDropdown").hide();
  y = 0;
  $('.rounded-circle').click(function () {
    if (y === 0) {
      $("#myDropdown").show();
      y = 1;
    }
    else if(y === 1) {
      $("#myDropdown").hide();
      y = 0;
    }
  });
});
