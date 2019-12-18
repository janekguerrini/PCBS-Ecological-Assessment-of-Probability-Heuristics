<?php
// Get a global counter from server and update counter
$counter_file = "/tmp/dispatch-counter-eco-1";
$counter_val = file_get_contents($counter_file);
file_put_contents($counter_file, $counter_val + 1);

// Possible redirections
$redirects = array("?first_prior=90&second_prior=10"
                   "?first_prior=70&second_prior=30"
                   "?first_prior=50&second_prior=50"
                   "?first_prior=30&second_prior=70"
                   "?first_prior=10&second_prior=90";
                   
// Redirect user to the next link
header("Location: " . $redirects[$counter_val % count($redirects)]);
?>
