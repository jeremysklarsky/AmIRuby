$(document).ready (data) ->
 $("#search_form").bind "ajax:success", (evt, data, status, xhr) ->
   $("#loader").hide()
   $("#display_result").html xhr.responseText
 $("#search_form").bind "ajax:error", (xhr, status, error) ->
   $("#loader").hide()
   #Give an alert message
 $("#search_form").bind "ajax:before", (evt, data, status, xhr) ->
   $("#loader").show()