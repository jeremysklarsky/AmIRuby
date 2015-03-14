// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree ../../../vendor/assets/javascripts/.
//= require_tree .
// $(document).ready (data) ->
//  $("#search_form").bind "ajax:success", (evt, data, status, xhr) ->
//    $("#loader").hide()
//    $("#display_result").html xhr.responseText
//  $("#search_form").bind "ajax:error", (xhr, status, error) ->
//    $("#loader").hide()
//    #Give an alert message
//  $("#search_form").bind "ajax:before", (evt, data, status, xhr) ->
//    $("#loader").show()