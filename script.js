var theSubject = jsPsych.randomization.randomID(10);
jsPsych.data.addProperties({ subjectId: theSubject,
                             condition: 1 });

// Read materials and shuffle them
materials = jsPsych.randomization.shuffle(materials);

// Set up variables we'll need for loops, and empty blocks to be filled
// in with questions
var i;
var first_prior;
var second_prior;
var question_probability = new Array;

// the pairs of priors of the different conditions are taken from the different
// URLs of the dispatcher. The getURLVariable returns the value of a variable
// passed in through the query string.
var first_prior = jsPsych.data.getURLVariable('first_prior')
var second_prior = jsPsych.data.getURLVariable('second_prior')

// Stimulus sentence: gets the priors from the URL of the main html file and them
// pairs of prefessions and the description from the materials battery
for (i = 0; i < materials.length; i++) {
  question_probability.push(
    { type: "survey-text",
      preamble: "<p class=\"preamble\">Consider an individual randomly drawn from a group of "+ first_prior +" " + materials[i].h1_plural + " and "+ second_prior +" " + materials[i].h2_plural + ".</p>" + "Now you learn that this individual " + materials[i].e + ".</p>",
      questions: [
        { prompt: "<p class=\"question\">What's the probability that this person is a " + materials[i].h1_singular + "?</p>",
          columns: 5,
          rows: 1,
          value: ""}],
        data: { questionId: "question_probability" + materials[i].id }
  });
};


var theTimeline = new Array;
theTimeline.push(instructions);
theTimeline = theTimeline.concat(question_probability);
theTimeline.push(demographics_original);
theTimeline.push(demographics_page1);
theTimeline.push(demographics_page2);

//For the purposes of this project, data is only displayed on finish.
jsPsych.init({
  timeline: theTimeline,
  show_progress_bar: true,
  on_finish: function(data){  jsPsych.data.displayData('csv');

  }
});
