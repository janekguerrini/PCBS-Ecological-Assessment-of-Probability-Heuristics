// Instructions
var instructions_html = ["<h1>Welcome!</h1><p>In this experiment, you will read one or more sentences and then be asked some questions about them. For example:</p><p class=\"example\">Consider an individual drawn from a group of 100 butchers and fishmongers.</p><p class=\"example target\">Now you learn that this individual weigh products before selling them.</p><p> What is the probability that this individual is a nutcher? </p><p>Click <i>Next</i> for another example.</p>"];

instructions_html.push("<p>Here's another example of the kind of question we may ask you.</p><p class=\"example\"> Consider an individual drawn from a group of 100 firefighters and police officers.</p><p class=\"example target\">?</p><p class=\"example target\"> Now you learn that this individual likes order and tidiness. </p><p> What is the probability that this individual is a police officer? You will be given a small textbox to type in your guess. <p><p> That's all the examples we have for you, click <i>Next</i> to begin the experiment.</p>");

var instructions = {
  type: 'instructions',
  show_clickable_nav: true,
  pages: instructions_html,
  data: { questionId: "instructions" }
};
