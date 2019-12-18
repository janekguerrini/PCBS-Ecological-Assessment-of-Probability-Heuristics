// Instructions
var instructions_html = ["<h1>Welcome!</h1><p>In this experiment, you will read one or more sentences and then be asked some questions about them. For example:</p><p class=\"example\">Consider an individual drawn from a group of 100 butchers and fishmongers.</p><p class=\"example target\">Now you learn that this individual weigh products before selling them.</p><p> What is the probability that this individual is a nutcher? </p><p>Click <i>Next</i> for another example.</p>"];

instructions_html.push("<p>Here's another example of the kind of question we may ask you.</p><p class=\"example\"> Consider an individual drawn from a group of 100 firefighters and police officers.</p><p class=\"example target\"></p><p class=\"example target\"> Now you learn that this individual likes order and tidiness. </p><p> What is the probability that this individual is a police officer? You will be given a small textbox to type in your guess. <p><p> That's all the examples we have for you, click <i>Next</i> to begin the experiment.</p>");

var instructions = {
  type: 'instructions',
  show_clickable_nav: true,
  pages: instructions_html,
  data: { questionId: "instructions" }
};

// Demographic questionnaire
var demographics_original = {
  type: "survey-multi-choice",
  preamble: "<h1>Demographic questionnaire <br>(page 1 of 3)</h1><p>Please answer the following demographic questions.  Your payment will not be affected by your answers.</p>",
  questions: [
    { prompt: "What is your college-level background in philosophy, linguistics, and logic?",
      options: [ "----",
                 "None",
                 "1 undergraduate-level course",
                 "2 or more undergraduate-level courses",
                 "1 or more graduate-level courses" ],
      labels: [ "NA", "none", "1ug", "2+ug", "1+g" ] },
    { prompt: "What is your college-level background in mathematics and statistics?",
      options: [ "----",
                 "None",
                 "1 undergraduate-level course",
                 "2 or more undergraduate-level courses",
                 "1 or more graduate-level courses" ],
      labels: [ "NA", "none", "1ug", "2+ug", "1+g" ] },
    { prompt: "What is your gender?",
      options: ["----", "Male", "Female", "Other" ],
      labels: [ "NA", "male", "female", "other"] },
    { prompt: "How old are you?",
      options: [ "----",
                 "Less than 18",
                 "18 to 24",
                 "25 to 34",
                 "35 to 44",
                 "45 to 54",
                 "55 to 64",
                 "65 to 74",
                 "75 or older" ],
      labels: [ "NA", "-18", "18-24", "25-34", "35-44", "45-54", "55-64", "65-74", "75+" ]
    } ],
  data: { questionId: "demo" }
};

var demographics_page1 = {
      preamble: "<h1>Demographic questionnaire(page 2 of 3)</h1><p>Please answer the following demographic questions.  Your payment will not be affected by your answers.</p>",
      type: "survey-multi-select",
      questions: [
        { prompt: "<p>Which of the following categories, if any, are you a member of?</p>",
          options: [ "university student",
                     "university professor",
                     "voter",
                     "politician",
                     "nurse",
                     "doctor",
                     "elite soccer player",
                     "elite soccer coach",
                     "regular churchgoer",
                     "pastor",
                     "lawyer",
                     "engineer",
                     "flight attendant",
                     "commercial airline pilot"
                   ]
        },
        { prompt: "<p>This what a test about general knowledge of professional categories. It is important for us to know whether you have any technical knowledge or informed opinion about these categories. This could mean for example having a close friend/family member who works in the field or in a closely related field, or your regularly reading specific news articles concerning the field.</p>",
          options: [ "university student",
                     "university professor",
                     "voter",
                     "politician",
                     "nurse",
                     "doctor",
                     "elite soccer player",
                     "elite soccer coach",
                     "regular churchgoer",
                     "pastor",
                     "lawyer",
                     "engineer",
                     "flight attendant",
                     "commercial airline pilot"
                     ]
        },
        { prompt: "<p>From the answers you gave above, pick the one you feel most strongly about. How strongly do you feel about that?</p>",
          options: [ "weak/superficial",
                     "average",
                     "strong/specific",
                     "very strong/very specific"
                     ]
        }],
          data: { questionId: "demo1" }
    };

var demographics_page2 = {
  type: "survey-multi-select",
  preamble: "<h1>Demographic questionnaire<br>(page 3 of 3)</h1>",
  questions: [
    { prompt: "What is the highest degree or level of school you have completed?",
        options: [ "----",
                   "Less than a high school degree",
                   "High school degree or equivalent",
                   "Some college, no degree",
                   "Associate degree",
                   "Bachelor's degree",
                   "Master's degree",
                   "Professional degree",
                   "Doctorate"],
        labels: [ "NA", "notHS", "HS", "CnotD", "AD", "Bsc", "Msc", "PD", "PhD" ]},
        { prompt: "What is the highest degree or level of school your parents have completed?",
      options: [ "----",
                 "Less than a high school degree",
                 "High school degree or equivalent",
                 "Some college, no degree",
                 "Associate degree",
                 "Bachelor's degree",
                 "Master's degree",
                 "Professional degree",
                 "Doctorate"],
      labels: [ "NA", "notHS", "HS", "CnotD", "AD", "Bsc", "Msc", "PD", "PhD" ]}
            ],
  data: { questionId: "demo2" }
};
