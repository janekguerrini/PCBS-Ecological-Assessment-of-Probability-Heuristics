PCBS Project: Replication of Tversky and Kahneman's "Lawyers and Engineer"s
============================================================================================

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->
**Table of Contents**

  - [Introduction](#Introduction)
  - [Hypothesis](#Hypothesis)
  - [Description of the stimuli](#description-of-the-stimuli)
  - [Setting up the materials](#setting-up-the-materials)
  - [Instructions](#instructions)
  - [Experiment](#experiment)
  - [Demographics](#demographics)
  - [Experience and Class Review](#experience-and-class-review)
  - [Reference](#reference)

<!-- markdown-toc end -->


## Introduction ##
Kahneman & Tversky (1973) provided some important insight into how people deal with probability tasks in which they have to integrate prior probabilities with specific evidence. One of the most famous experiments of that study, "Lawyers and Engineers" (henceforth L&E) was constructed as follows. People were given a description corresponding to an invidivual which was randomly chosen from a sample of 100 people. There were two experimental conditions:
+ One group of subjects was told that the sample consisted of 70 engineers and 30 lawyers.
+ The other group of subjects was told that the sample consisted of 30 engineers and 70 lawyers.
The description were like the following:
> «Jack is a 45-year-old man. He is married and has four children. He is generally conservative, careful, and ambitious. He shows no interest in political and social issues and spends most of his free time on his many hobbies which include home carpentry, sailing, and mathematical puzzles.»
Then, subjects were asked to write down the probability that the subject was one of the 30 (or 70, respectively) engineers. 

The results was that subjects produced essentially the same probability judgments. From this, Tversky and Kahneman concluded that subjects evaluated the likelihood that a specific description belonged to an engineer rather than to a lawyer by the degree to which this description was representative of the two stereotypes, with little or no regard for the prior probabilities of the categories. 

There is extensive evidence that the result is partly determined by the triggering of pragmatic interpretive processes.Schwarz, Strack, Hilton & Naderer (1991), for instance, showed that the so-called representativeness effect is smaller when participants are told that the description is generated and randomly picked by a computer. 

We hypothesise that along the human origin of the description, also the long, full-fledged psychological description triggers interpretive processes. People pragmatically interpret the description as being a hint by the experimenter. To get rid of this confound, we replicate the study with one-line descriptions that are not said to be psychologically determined.

The experiment will be run on Mechanical Turk and programmed in JavaScript language.

## Description of the stimuli ##

The stimuli are constructed as follows: we have six pairs of real-world professions and a description associated with each pair.


| Name of the scenario  | hypothesis 1 | hypothesis 2 | description/evidence |
| ------------- | ------------- | ------------- | ------------- |
| `airplane`  | flight attendant | commercial airline pilot | is over 35 years old |
| `medicine`  | nurse  | doctor  |  has taken advanced biology courses |
| `soccer`  | elite soccer player  | elite soccer coach  | spends a lot of time studying soccer tactics  |
|  `university` | student  | professor  | 	spends a lot of time at the university  |
| `church`  | congregant  | pastor | spends one afternoon a week reading the bible  |
| `politics`  | voter  | politician | is well informed about topical issues and policy making  |
| `lawyers&engineers`  | lawyer  | engineer | 	loves solving Rubik’s cubes  |

Participants see sentences of the form:
> Consider an individual drawn from a group of `first prior` `hypothesis 1` and `second prior` `hypothesis 2`.
Now you learn that this individual `evidence`.
What is the probability that he is a `hypothesis 1`?

We have six conditions, corresponding to different priors feeded to the participants:

| | `first prior`| no given prior | 10 | 30 | 50 | 70 | 90 | 
|---|---|---|---|---|---|---|---|
|`second prior`| |||||||
|no given prior||Group 1||||||
|90|||Group 2|||||
|70||||Group 3||||
|50|||||Group 4|||
|30||||||Group 5||
|10|||||||Group 6|

Summing up, every participant sees:
+ all the profession pairs with the corresponding evidence.
+ only one combination of priors corresponding to her/his group. 

## Setting up the materials ##

We set up the battery of materials that we will feed the script.   

```
//Add materials to this array. The materials here are
//inflected in all the ways we need them to inflect in 
//order to piece together the questions in the script.

var materials = [
  { h1_plural: "students",
    h1_predicate: "a student",
    h2_plural: "professors",
    h2_predicate: "a professor",
    e1: "spends a lot of time at the university",
    id: "university"
  },
  {h1_plural: "voters",
    h1_predicate: "a voter",
    h2_plural: "politicians",
    h2_predicate: "a politician",
    e: "is well-informed about topical issues and policy-making",
   
    id: "politics"
  },
  {h1_plural: "nurses",
    h1_predicate: "a nurse",
    h2_plural: "doctors",
    h2_predicate: "a doctor",
    e: "has taken advanced biology courses",

    id: "medicine"
  },
  {h1_plural: "elite soccer players",
 h1_predicate: "an elite soccer player",
 h2_plural: "elite soccer coaches",
 h2_predicate: "an elite soccer coach",
 e: "spends a lot of time studying soccer tactics",
 
 id: "soccer"
},
 {h1_plural: "congregants",
   h1_predicate: "a congregant",
   h2_plural: "pastors",
   h2_predicate: "a pastor",
   e: "spends one afternoon a week reading the bible",
  
   id: "church"
 },
 {h1_plural: "lawyers",
   h1_predicate: "a lawyer",
   h2_plural: "engineers",
   h2_predicate: "an engineer",
   e: "loves solving Rubik's cubes",
  
   id: "T&K"
 },
 {h1_plural: "flight attendants",
   h1_predicate: "a flight attendant",
   h2_plural: "commercial airline pilots",
   h2_predicate: "a commercial airline pilot",
   e: "is over 35 years old",
  
   id: "airplane"
 }

];
```

## Instructions ##


```
// Consent form: this is recovered from the resources folder.
var consent = {
  type: "consent-dec"
};

// Instructions
var instructions_html = ["<h1>Welcome!</h1><p>In this experiment, you will read one or more sentences and then be asked some questions about them. For example:</p><p class=\"example\">Consider an individual drawn from a group of 100 butchers and fishmongers.</p><p class=\"example target\">Now you learn that this individual weigh products before selling them.</p><p> What is the probability that this individual is a nutcher? </p><p>Click <i>Next</i> for another example.</p>"];

instructions_html.push("<p>Here's another example of the kind of question we may ask you.</p><p class=\"example\"> Consider an individual drawn from a group of 100 firefighters and police officers.</p><p class=\"example target\">?</p><p class=\"example target\"> Now you learn that this individual likes order and tidiness. </p><p> What is the probability that this individual is a police officer? You will be given a small textbox to type in your guess. <p><p> That's all the examples we have for you, click <i>Next</i> to begin the experiment.</p>");

var instructions = {
  type: 'instructions',
  show_clickable_nav: true,
  pages: instructions_html,
  data: { questionId: "instructions" }
};
```

## Experiment ##

## Demographics ##
```
// Demographic questionnaire
var demographics_original = {
  type: "survey-dropdown",
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
  type: "survey-dropdown",
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
```
## Experience and Class Review ##

## Reference ##

