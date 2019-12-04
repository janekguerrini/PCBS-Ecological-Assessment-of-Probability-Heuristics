PCBS Project: Ecological assessment of probability heuristics
============================================================================================
## Introduction 
Kahneman&Tversky (1973) provided some important insight into how people deal with probability tasks in which they have to integrate prior probabilities with specific evidence. One of the most famous experiments of that study, "Lawyers and Engineers" (henceforth L&E) was constructed as follows. People were given a description corresponding to an invidivual which was randomly chosen from a sample of 100 people. There were two experimental conditions:
+ One group of subjects was told that the sample consisted of 70 engineers and 30 lawyers.
+ The other group of subjects was told that the sample consisted of 30 engineers and 70 lawyers.
The description were like the following:
> «Jack is a 45-year-old man. He is married and has four children. He is generally conservative, careful, and ambitious. He shows no interest in political and social issues and spends most of his free time on his many hobbies which include home carpentry, sailing, and mathematical puzzles.»
Then, subjects were asked to write down the probability that the subject was one of the 30 (or 70, respectively) engineers. 

The results was that subjects produced essentially the same probability judgments. From this, Tversky and Kahneman concluded that subjects evaluated the likelihood that a specific description belonged to an engineer rather than to a lawyer by the degree to which this description was representative of the two stereotypes, with little or no regard for the prior probabilities of the categories. 

But how do we know that for people the description isn't _so strongly_ in favor of the engineer-hypothesis that this pressure _rationally_ bumps the priors in the bayesian computation? To wit, if for instance we are asked to whom the description "has antennas" corresponds in a set of 99 earthlings and 1 alien, answering "the alien" would not mean disregarding the priors. We simply do not know what calculation is being performed by the subjects if we do not ask them at least about the independent probability of the evidence and the hypotheses. To assess this, we are replicating the experiment by trying to model the data through the independent naive probabilities collected in an already performed norming study. 

To clarify, given Bayes' theorem, $P(h|e) = [P(e|h) * P(h)] / P(e)$ we call:
+ $P(h)$ the prior on the hypothesis.
+ $P(e|h)$ the likelihood.
+ $P(h|e)$ the posterior probability.
In the norming study,  we collected information on the naive priors on the hypotheses as well as on the likelihood and the posterior probability. 
+ *The naive priors on the hypotheses*: In a group of 100 lawyers and engineers, how many of them are engineers? 
+ *The naive likelihood*: Given a group of 100 engineers, how many of them are into mathematical puzzles?
+ *The naive posteriors*: Consider a group of 100 lawyers and engineers. It turns out that all of these people are into mathematical puzzles. How many of them are engineers?

In this experiment, we will ask participants a question of the type of the original Tversky and Kahneman L&E, to see what computation combining the components collected in the norming study, if any, best predicts their responses.  

## Hypothesis ##
Kahneman and Tversky concluded from their experiment that people's heuristics has nothing to do with computing probabilities. Rather, it is about typicality. Our hypothesis is that it _is_ in fact about probabilities, it is just not about the posteriors. To wit, we submit that people are engaging in confirmatory reasoning. There are many measures of confirmation, all of which can be mathematically fully determined by some combination of emasures collected in our norming study. Our hypothesis is that people's responses to this experiment will be fully formalizable in terms of operations on those probabilities. 


<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->
**Table of Contents**

- [Experimental conditions] (#experimental-conditions) 
 - [Creating the materials](#creating-the-materials)
- [Instructions] (#instructions)
- [Creating the scripts for the different conditions] (#scripts)
- [Demographics] (#demographics)
  

<!-- markdown-toc end -->
## Experimental conditions
## Creating the materials
## Instructions
## Creating the scripts for the different conditions
## Demographics
