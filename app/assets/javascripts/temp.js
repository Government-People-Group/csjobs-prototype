var strengthsList = [
  "Adaptable",
  "Analytical",
  "Authentic",
  "Catalyst",
  "Challenger",
  "Change Agent",
  "Confident",
  "Courageous",
  "Decisive",
  "Disciplined",
  "Efficient",
  "Emotionally Intelligent",
  "Enabler",
  "Explainer",
  "Focussed",
  "Inclusive",
  "Influencer",
  "Improver",
  "Learner",
  "Mediator",
  "Mission",
  "Motivator",
  "Negotiator",
  "Networker",
  "Organiser",
  "Precise",
  "Preventer",
  "Problem Solver",
  "Relationship Builder",
  "Resilient",
  "Responsible",
  "Service Focussed",
  "Strategic",
  "Team Leader",
  "Team Player",
  "Visionary"
      ]
      var element = document.querySelector('#strengthsList')
      var id = 'autocomplete-default'
      accessibleAutocomplete({element: element, id: id, source: strengthsList})
