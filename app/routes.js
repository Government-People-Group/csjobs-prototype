//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

const radioButtonRedirect = require('radio-button-redirect')
router.use(radioButtonRedirect)

// Add your routes here
// Routes for authentication

router.get('/get-security-code-answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('get-security-code.html', { showErrorSummary });
});

// Handle form submission
router.post('/get-security-code-answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['choose-security-codes'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "Authenticator app for smartphone, tablet or computer") {
            // Send user to set up auth app
            res.redirect('/_accounts/one-login/page-index/authentication/create-account/auth-app');
        } else {
            // Send user to enter phone number
            res.redirect('/_accounts/one-login/page-index/authentication/create-account/enter-phone-number');
        }
    } else {
        // If no radio button is selected, redirect to /get-security-code-answer with error
        res.redirect('get-security-code-answer?error=true');
    }
});


router.get('/choose-security-code-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/authentication/sign-in/change-security-codes/choose-security-code.html', { showErrorSummary });
});

// Handle form submission
router.post('/choose-security-code-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['choose-security-codes'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "Authenticator app for smartphone, tablet or computer") {
          // Send user to set up auth app
          res.redirect('/page-index/authentication/sign-in/change-security-codes/auth-app');
      } else {
          // Send user to enter phone number
          res.redirect('/page-index/authentication/sign-in/change-security-codes/enter-phone-number');
      }
  } else {
      // If no radio button is selected, redirect to /get-security-code-answer with error
      res.redirect('/choose-security-code-answer?error=true');
  }
});


//Routes for IPV Core

router.get('/id-screener/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/id-screener.html', { showErrorSummary });
});

// Handle form submission
router.post('/id-screener/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['have-photo-id'];

  if (selectedOption) {
      // Route user based on their selection
      if (selectedOption === "No") {
          // Send user to accepted ID types at Post Office
          res.redirect('/page-index/ipv-core/id-screener-2');
      } else {
          // Send user to using phone or desktop
          res.redirect('/page-index/app-cri/computer-or-tablet');
      }
  } else {
      // If no radio button is selected, redirect to /id-screener/answer with error
      res.redirect('/id-screener/answer?error=true');
  }
});

router.get('/id-screener-2/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/id-screener-2.html', { showErrorSummary });
});

// Handle form submission
router.post('/id-screener-2/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['post-office-id'];

  if (selectedOption) {
      // Route user based on their selection
      if (selectedOption === "No") {
          // Send user to find another way
          res.redirect('/page-index/ipv-core/f2f-another-way');
      } else {
          // Send user to claimed identity cri
          res.redirect('/page-index/claimed-identity-cri/name');
      }
  } else {
      // If no radio button is selected, redirect to /id-screener-2/answer with error
      res.redirect('/id-screener-2/answer?error=true');
  }
});


router.get('/no-photo-id-triage/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/no-photo-id-triage.html', { showErrorSummary });
});

// Handle form submission
router.post('/no-photo-id-triage/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['no-photo-id-triage'];

  if (selectedOption) {
      // Route user based on their selection
      if (selectedOption === "Yes") {
          // Send user to find another way
          res.redirect('/page-index/claimed-identity-cri/no-photo-id/name');
      } else {
          // Send user to no photo ID triage answer
          res.redirect('/page-index/ipv-core/no-photo-id-triage-exit');
      }
  } else {
      // If no radio button is selected, redirect to /no-photo-id-triage/answer with error
      res.redirect('/no-photo-id-triage/answer?error=true');
  }
});


router.get('/no-photo-id-triage-exit/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/no-photo-id-triage-exit.html', { showErrorSummary });
});

// Handle form submission
router.post('/no-photo-id-triage-exit/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['no-photo-id-triage-exit'];

  if (selectedOption) {
      // Route user based on their selection
      if (selectedOption === "Find another way") {
          // Send user to find another way
          res.redirect('/return-to-service');
      } else if (selectedOption === "Use photo ID") {
          // Example placeholder for the second option
          res.redirect('/page-index/ipv-core/id-screener');
      } else if (selectedOption === "Use bank details") {
          // Example placeholder for the third option
          res.redirect('/page-index/ipv-core/no-photo-id-triage');
      }
  } else {
      // If no radio button is selected, redirect to /no-photo-id-triage/answer with error
      res.redirect('/no-photo-id-triage-exit/answer?error=true');
  }
});

router.get('/bank-account-escape-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/bank-account-cri/escape.html', { showErrorSummary });
});

// Handle form submission
router.post('/bank-account-escape-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['escape'];

  if (selectedOption) {
      // Route user based on their selection
      if (selectedOption === "another way") {
          // Send user to find another way
          res.redirect('/page-index/ipv-core/no-photo-id-escape');
      } else {
          // Send user to claimed identity cri
          res.redirect('/page-index/bank-account-cri/before-you-continue');
      }
  } else {
      // If no radio button is selected, redirect to /id-screener-2/answer with error
      res.redirect('/bank-account-escape-answer?error=true');
  }
});



router.get('/no-photo-id-escape/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/no-photo-id-escape.html', { showErrorSummary });
});

// Handle form submission
router.post('/no-photo-id-escape/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['no-photo-id-escape'];

  if (selectedOption) {
      // Route user based on their selection
      if (selectedOption === "Find another way") {
          // Send user to find another way
          res.redirect('/return-to-service');
      } else {
          // Send user to no photo ID triage answer
          res.redirect('/page-index/ipv-core/id-screener');
      }
  } else {
      // If no radio button is selected, redirect to /no-photo-id-triage/answer with error
      res.redirect('/no-photo-id-escape/answer?error=true');
  }
});
 

router.get('/find-another-way-coi-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/continuity-of-identity/find-another-way.html', { showErrorSummary });
});

// Handle form submission
router.post('/find-another-way-coi-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['escape'];

  if (selectedOption) {
      // Route user based on their selection
      if (selectedOption === "contact") {
          // Send user to find another way
          res.redirect('/journey-transition/leaving-prototype');
      } else {
          // Send user to claimed identity cri
          res.redirect('/return-to-service');
      }
  } else {
      // If no radio button is selected, redirect to /id-screener-2/answer with error
      res.redirect('/find-another-way-coi-answer?error=true');
  }
});


















// GET route: display the form
router.get('/hmrc-kbv-another-way-answer', (req, res) => {
  const showErrorSummary = req.query.error === 'true';
  const previousPage = req.query.previousPage || '/page-index/kbv-cri/hmrc/kbv-start'; // This should be the correct fallback page

  // Render the page with the correct previous page parameter
  res.render('/page-index/ipv-core/hmrc-kbv-another-way.html', { 
    showErrorSummary, 
    previousPage 
  });
});


// POST route: handle form submission
router.post('/hmrc-kbv-another-way-answer', (req, res) => {
  const selectedOption = req.body['escape'];
  const previousPage = req.body.previousPage || '/page-index/kbv-cri/hmrc/kbv-start'; // Fallback if needed

  if (selectedOption) {
    if (selectedOption === "another way") {
      // Redirect to another way page
      res.redirect('/page-index/ipv-core/kbv-another-way');
    } else {
      // Redirect to the previous page if the user chooses to "try again"
      res.redirect(previousPage);
    }
  } else {
    // Redirect back to the form with error and preserve the previousPage
    res.redirect('/hmrc-kbv-another-way-answer?error=true&previousPage=' + encodeURIComponent(previousPage));
  }
});






//Routes for bank account CRI


router.get('/bank-account-escape-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/bank-account-cri/escape.html', { showErrorSummary });
});

// Handle form submission
router.post('/bank-account-escape-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['escape'];

  if (selectedOption) {
      // Route user based on their selection
      if (selectedOption === "another way") {
          // Send user to find another way
          res.redirect('/page-index/ipv-core/no-photo-id-escape');
      } else {
          // Send user to claimed identity cri
          res.redirect('/page-index/bank-account-cri/before-you-continue');
      }
  } else {
      // If no radio button is selected, redirect to /id-screener-2/answer with error
      res.redirect('/bank-account-escape-answer?error=true');
  }
});


router.get('/bank-account-1st-fail-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/bank-account-cri/1st-fail.html', { showErrorSummary });
});

// Handle form submission
router.post('/bank-account-1st-fail-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['1st-fail'];

  if (selectedOption) {
      // Route user based on their selection
      if (selectedOption === "another way") {
          // Send user to find another way
          res.redirect('/page-index/ipv-core/no-photo-id-escape');
      } else {
          // Send user to claimed identity cri
          res.redirect('/page-index/bank-account-cri/check-details');
      }
  } else {
      // If no radio button is selected, redirect to /id-screener-2/answer with error
      res.redirect('/bank-account-1st-fail-answer?error=true');
  }
});

//Routes for NINO CRI 

router.get('/nino-escape-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/nino-cri/escape.html', { showErrorSummary });
});

// Handle form submission
router.post('/nino-escape-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['escape'];

  if (selectedOption) {
      // Route user based on their selection
      if (selectedOption === "another way") {
          // Send user to find another way
          res.redirect('/page-index/kbv-cri/experian/kbv-start');
      } else {
          // Send user to claimed identity cri
          res.redirect('/page-index/nino-cri/enter-nino');
      }
  } else {
      // If no radio button is selected, redirect to /id-screener-2/answer with error
      res.redirect('/nino-escape-answer?error=true');
  }
});


router.get('/nino-1st-fail-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/nino-cri/1st-fail.html', { showErrorSummary });
});

// Handle form submission
router.post('/nino-1st-fail-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['1st-fail'];

  if (selectedOption) {
      // Route user based on their selection
      if (selectedOption === "another way") {
          // Send user to find another way
          res.redirect('/page-index/kbv-cri/experian/kbv-start');
      } else {
          // Send user to claimed identity cri
          res.redirect('/page-index/nino-cri/enter-nino');
      }
  } else {
      // If no radio button is selected, redirect to /id-screener-2/answer with error
      res.redirect('/nino-1st-fail-answer?error=true');
  }
});



//Routes for App CRI

  router.get('/computer-or-tablet/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/page-index/app-cri/computer-or-tablet.html', { showErrorSummary });
});

// Handle form submission
router.post('/computer-or-tablet/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['computer-or-tablet'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "No, I am on a smartphone") {
            // Send user to...
            res.redirect('/page-index/app-cri/on-a-smartphone');
        } else {
            // Send user to...
            res.redirect('/page-index/app-cri/have-a-smartphone');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/computer-or-tablet/answer?error=true');
    }
});




// Get route for have-a-smartphone
router.get('/have-a-smartphone/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/app-cri/have-a-smartphone.html', { showErrorSummary });
});

// Handle form submission
router.post('/have-a-smartphone/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['have-a-smartphone'];

  if (selectedOption) {
      // Check for chosen journey in session
      var chosenjourney = req.session.data['choose-journey'];

      // Check whether the chosen journey matches the specified conditions
      if (chosenjourney === "identity-reuse" || chosenjourney === "address-fraud-check") {
          // Custom routing logic based on chosen journey
          if (selectedOption === "I don't have either of these") {
              // Redirect to find another way
              res.redirect('/page-index/ipv-core/continuity-of-identity/find-another-way');
          } else {
              // Redirect to valid passport page
              res.redirect('/page-index/app-cri/valid-passport');
          }
      } else {
          // Proceed with the original logic for radio option selections
          if (selectedOption === "I don't have either of these") {
              // Send user to ineligible page
              res.redirect('/page-index/app-cri/ineligible');
          } else {
              // Send user to valid passport page
              res.redirect('/page-index/app-cri/valid-passport');
          }
      }
  } else {
      // If no radio button is selected, redirect to page with error
      res.redirect('/have-a-smartphone/answer?error=true');
  }
});



  router.get('/on-a-smartphone/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/page-index/app-cri/on-a-smartphone.html', { showErrorSummary });
});

// Handle form submission
router.post('/on-a-smartphone/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['smartphone'];

    if (selectedOption) {
      // Check for chosen journey in session
      var chosenjourney = req.session.data['choose-journey'];

      // Check whether the chosen journey matches the specified conditions
      if (chosenjourney === "identity-reuse" || chosenjourney === "address-fraud-check") {
          // Custom routing logic based on chosen journey
          if (selectedOption === "Neither of these phones") {
              // Redirect to find another way
              res.redirect('/page-index/ipv-core/continuity-of-identity/find-another-way');
          } else {
              // Redirect to valid passport page
              res.redirect('/page-index/app-cri/valid-passport');
          }
      } else {
          // Proceed with the original logic for radio option selections
          if (selectedOption === "Neither of these phones") {
              // Send user to ineligible page
              res.redirect('/page-index/app-cri/ineligible');
          } else {
              // Send user to valid passport page
              res.redirect('/page-index/app-cri/valid-passport');
          }
      }
  } else {
      // If no radio button is selected, redirect to page with error
      res.redirect('/on-a-smartphone/answer?error=true');
  }
});




  router.get('/valid-passport/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/page-index/app-cri/valid-passport.html', { showErrorSummary });
});

// Handle form submission
router.post('/valid-passport/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['valid-passport'];

    if (selectedOption) {
        // If radio option is selected:
        if (selectedOption === "Yes") {
      // Send user to...
            res.redirect('/page-index/app-cri/biometric-passport');
        } else {
       // Send user to...
            res.redirect('/page-index/app-cri/biometric-residence-permit');
        }
    } else {
        // If no radio button is selected, redirect to /computer-or-tablet/answer with error
        res.redirect('/valid-passport/answer?error=true');
    }
});




  router.get('/driving-licence/answer', (req, res) => {
    // Check if there was an error
    const showErrorSummary = req.query.error === 'true';

    // Render the template with the error condition
    res.render('/page-index/app-cri/driving-licence.html', { showErrorSummary });
});

// Handle form submission
router.post('/driving-licence/answer', (req, res) => {
    // Check if a radio button is selected
    const selectedOption = req.body['driving-licence'];

    if (selectedOption) {
      // Check for chosen journey in session
      var chosenjourney = req.session.data['choose-journey'];
  
      // Check whether the chosen journey matches the specified conditions
      if (chosenjourney === "identity-reuse" || chosenjourney === "address-fraud-check") {
          // Custom routing logic based on chosen journey
          if (selectedOption === "Yes") {
              // Redirect to find another way
              res.redirect('/page-index/app-cri/driving-licence/use-app-driving-licence');
          } else {
              // Redirect to valid passport page
              res.redirect('/page-index/ipv-core/continuity-of-identity/find-another-way');
          }
      } else {
          // Proceed with the original logic for radio option selections
          if (selectedOption === "Yes") {
              // Send user to ineligible page
              res.redirect('/page-index/app-cri/driving-licence/use-app-driving-licence');
          } else {
              // Send user to valid passport page
              res.redirect('/page-index/app-cri/ineligible');
          }
      }
  } else {
      // If no radio button is selected, redirect to page with error
      res.redirect('/driving-licence/answer?error=true');
  }
  });

router.get('/iphone-model/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/app-cri/iphone-model.html', { showErrorSummary });
});

// Handle form submission
router.post('/iphone-model/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['iphone-model'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "iPhone 7 or newer") {
     // Send user to...
          res.redirect('/page-index/app-cri/passport/use-app-passport');
      } else {
   // Send user to...
          res.redirect('/page-index/app-cri/driving-licence');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/iphone-model/answer?error=true');
  }
});


router.get('/brp/iphone-model/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/app-cri/brp/iphone-model.html', { showErrorSummary });
});

// Handle form submission
router.post('/brp/iphone-model/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['iphone-model'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "iPhone 7 or newer") {
         // Send user to...
          res.redirect('/page-index/app-cri/brp/use-app-brp');
      } else {
        // Send user to...
          res.redirect('/page-index/app-cri/driving-licence');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/brp/iphone-model/answer?error=true');
  }
});


router.get('/passport/working-camera/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/app-cri/passport/working-camera.html', { showErrorSummary });
});

// Handle form submission
router.post('/passport/working-camera/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['working-camera'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "Yes") {
         // Send user to...
          res.redirect('/page-index/app-cri/passport/flashing-colours');
      } else {
// Send user to...
          res.redirect('/page-index/app-cri/ineligible');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/passport/working-camera/answer?error=true');
  }
});


router.get('/driving-licence/working-camera/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/app-cri/driving-licence/working-camera.html', { showErrorSummary });
});

// Handle form submission
router.post('/driving-licence/working-camera/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['working-camera'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "Yes") {
      // Send user to...
          res.redirect('/page-index/app-cri/driving-licence/flashing-colours');
      } else {
         // Send user to...
          res.redirect('/page-index/app-cri/ineligible');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/driving-licence/working-camera/answer?error=true');
  }
});


router.get('/brp/working-camera/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/app-cri/brp/working-camera.html', { showErrorSummary });
});

// Handle form submission
router.post('/brp/working-camera/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['working-camera'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "Yes") {
       // Send user to...
          res.redirect('/page-index/app-cri/brp/flashing-colours');
      } else {
        // Send user to...
          res.redirect('/page-index/app-cri/ineligible');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/brp/working-camera/answer?error=true');
  }
});


router.get('/passport/flashing-colours/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/app-cri/passport/flashing-colours.html', { showErrorSummary });
});

// Handle form submission
router.post('/passport/flashing-colours/answer', (req, res) => {
  // Check if a radio button is selected for the first question
  const selectedOption = req.body['flashing-colours'];

  if (selectedOption === "Yes") {
    // Check the answer to the second question
    var secondQuestionAnswer = req.session.data['computer-or-tablet'];

    if (secondQuestionAnswer == "No, I am on a smartphone") {
// Send user to...
      res.redirect('/page-index/app-cri/passport/download-app-mobile');
    } else {
     // Send user to...
      res.redirect('/page-index/app-cri/passport/download-app-desktop');
    }
  } else if (!selectedOption) {
    // If no radio button is selected for the first question, redirect to /passport/flashing-colours/answer with error
    res.redirect('/passport/flashing-colours/answer?error=true');
  } else {
    // Handle cases where the answer to the first question is not 'Yes'
    // In this example, redirect to an 'ineligible' route
    res.redirect('/page-index/app-cri/ineligible');
  }
});


router.get('/brp/flashing-colours/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/app-cri/brp/flashing-colours.html', { showErrorSummary });
});

// Handle form submission
router.post('/brp/flashing-colours/answer', (req, res) => {
  // Check if a radio button is selected for the first question
  const selectedOption = req.body['flashing-colours'];

  if (selectedOption === "Yes") {
    // Check the answer to the second question
    var secondQuestionAnswer = req.session.data['computer-or-tablet'];

    if (secondQuestionAnswer == "No, I am on a smartphone") {
     // Send user to...
      res.redirect('/page-index/app-cri/brp/download-app-mobile');
    } else {
      // Handle other cases if needed
      res.redirect('/page-index/app-cri/brp/download-app-desktop');
    }
  } else if (!selectedOption) {
    // If no radio button is selected for the first question, redirect to /brp/flashing-colours/answer with error
    res.redirect('/brp/flashing-colours/answer?error=true');
  } else {
    // Handle cases where the answer to the first question is not 'Yes'
    // In this example, redirect to an 'ineligible' route
    res.redirect('/page-index/app-cri/ineligible');
  }
});


router.get('/driving-licence/flashing-colours/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/app-cri/driving-licence/flashing-colours.html', { showErrorSummary });
});

// Handle form submission
router.post('/driving-licence/flashing-colours/answer', (req, res) => {
  // Check if a radio button is selected for the first question
  const selectedOption = req.body['flashing-colours'];

  if (selectedOption === "Yes") {
    // Check the answer to the second question
    var secondQuestionAnswer = req.session.data['computer-or-tablet'];

    if (secondQuestionAnswer == "No, I am on a smartphone") {
      // Send the user to a specific route based on the answer to the second question
      res.redirect('/page-index/app-cri/driving-licence/download-app-mobile');
    } else {
      // Handle other cases if needed
      res.redirect('/page-index/app-cri/driving-licence/download-app-desktop');
    }
  } else if (!selectedOption) {
    // If no radio button is selected for the first question, redirect to /brp/flashing-colours/answer with error
    res.redirect('/driving-licence/flashing-colours/answer?error=true');
  } else {
    // Handle cases where the answer to the first question is not 'Yes'
    // In this example, redirect to an 'ineligible' route
    res.redirect('/page-index/app-cri/ineligible');
  }
});

router.get('/ineligible-next-steps/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/app-cri/ineligible.html', { showErrorSummary });
});

// Handle form submission
router.post('/ineligible-next-steps/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['ineligible-next-steps'];

  if (selectedOption) {
    // If radio option is selected:
    if (selectedOption === "security-questions-driving-licence") {
  // Send user to...
      res.redirect('/page-index/driving-licence-cri/who-issued-licence');
    } else if (selectedOption === "security-questions-passport") {
      // Send user to enter passport details
      res.redirect('/page-index/passport-cri/enter-passport-details');
    } else if (selectedOption === "another-way") {
      // Send user to prove identity at the post office
      res.redirect('/page-index/ipv-core/prove-identity-at-post-office');
    }
  } else {
    // If no radio button is selected, redirect to /ineligible-next-steps/answer with error
    res.redirect('/ineligible-next-steps/answer?error=true');
  }
});




router.get('/biometric-residence-permit/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/app-cri/biometric-residence-permit.html', { showErrorSummary });
});

// Handle form submission
router.post('/biometric-residence-permit/answer', function (req, res) {
  // Check if a radio button is selected for the first question
  const selectedOption = req.body['valid-brp'];

  if (!selectedOption) {
    // If no radio button is selected for the first question, redirect to /biometric-residence-permit/answer with error
    res.redirect('/biometric-residence-permit/answer?error=true');
  } else {
    // Make variables and give them the values from the questions
    var validBRP = selectedOption;
    var computerOrTablet = req.session.data['computer-or-tablet'];
    var secondQuestionAnswer = req.session.data['smartphone'];
    var thirdQuestionAnswer = req.session.data['have-a-smartphone'];

    // Check the answer to the first question
    if (validBRP == "BRP" || validBRP == "BRC" || validBRP == "FWP") {
      // Check the answer to the 'computer-or-tablet' question
      if (computerOrTablet == "No, I am on a smartphone") {
        // Check the answer to the 'smartphone' question
        if (secondQuestionAnswer == "Android") {
          // Send user to a specific route based on the answer to the 'smartphone' question
          res.redirect('/page-index/app-cri/brp/use-app-brp');
        } else if (secondQuestionAnswer == "iPhone") {
          // Send user to phone model
          res.redirect('/page-index/app-cri/brp/iphone-model');
        }
      } else if (computerOrTablet == "Yes, I am on a computer or tablet") {
        // Check the answer to the 'have-a-smartphone' question
        if (thirdQuestionAnswer == "android") {
          // Handle cases where the answer to the 'have-a-smartphone' question is as expected
          res.redirect('/page-index/app-cri/brp/use-app-brp');
        } else if (thirdQuestionAnswer == "iPhone") {
          // Send user to phone model
          res.redirect('/page-index/app-cri/brp/iphone-model');
        }
      } else if (computerOrTablet === "" || computerOrTablet === null || computerOrTablet === undefined) {
        // Redirect when 'computer-or-tablet' is blank or not provided
        res.redirect('/page-index/app-cri/brp/iphone-model');
      }
    } else if (validBRP == "other-id") {
      res.redirect('/page-index/app-cri/driving-licence');
    } else {
      // If an invalid option is selected for the first question, handle it as needed
      // You can add specific error handling here if necessary
    }
  }
});


// Render the template with the error condition
router.get('/page-index/app-cri/biometric-passport/answer', (req, res) => {
  const showErrorSummary = req.query.error === 'true';
  res.render('/page-index/app-cri/biometric-passport.html', { showErrorSummary });
});

// Handle form submission
router.post('/page-index/app-cri/biometric-passport/answer', (req, res) => {
  // Check if a radio button is selected for the first question
  const selectedOption = req.body['biometric-passport-symbol'];

  if (!selectedOption) {
    // If no radio button is selected for the first question, redirect to /biometric-passport/answer with error
    res.redirect('/page-index/app-cri/biometric-passport/answer?error=true');
  } else {
    // Make variables and give them the values from the questions
    var biometricpassport = selectedOption;
    var computerOrTablet = req.session.data['computer-or-tablet'];
    var secondQuestionAnswer = req.session.data['smartphone'];
    var thirdQuestionAnswer = req.session.data['have-a-smartphone'];

    // Check the answer to the first question
    if (biometricpassport === "Yes") {
      // Check the answer to the 'computer-or-tablet' question
      if (computerOrTablet === "No, I am on a smartphone") {
        // Check the answer to the 'smartphone' question
        if (secondQuestionAnswer === "Android") {
          // Send user to a specific route based on the answer to the 'smartphone' question
          res.redirect('/page-index/app-cri/passport/use-app-passport');
        } else if (secondQuestionAnswer === "iPhone") {
          // Send user to phone model
          res.redirect('/page-index/app-cri/iphone-model');
        }
      } else if (computerOrTablet === "Yes, I am on a computer or tablet") {
        // Check the answer to the 'have-a-smartphone' question
        if (thirdQuestionAnswer === "android") {
          // Handle cases where the answer to the 'have-a-smartphone' question is as expected
          res.redirect('/page-index/app-cri/passport/use-app-passport');
        } else if (thirdQuestionAnswer === "iPhone") {
          // Send user to phone model
          res.redirect('/page-index/app-cri/iphone-model');
        }
      } else if (computerOrTablet === "" || computerOrTablet === null || computerOrTablet === undefined) {
        // Redirect when 'computer-or-tablet' is blank or not provided
        res.redirect('/page-index/app-cri/iphone-model');
      }
    } else if (biometricpassport === "No") {
      // Handle cases where the answer to the first question is 'No'
      // You can redirect to an 'ineligible' route or another appropriate route
      res.redirect('/page-index/app-cri/biometric-residence-permit');
    } else {
      // If an invalid option is selected for the first question, handle it as needed
      // You can add specific error handling here if necessary
    }
  }
});


//Use app (interruption panel) page routes

// Handle form submission
router.post('/passport/use-app-passport/answer', (req, res) => {
  // Retrieve the answer to the previous question
  const secondQuestionAnswer = req.session.data['computer-or-tablet'];

  // Route based on the answer
  if (secondQuestionAnswer == "No, I am on a smartphone") {
    // Send user to the mobile download page
    res.redirect('/page-index/app-cri/passport/download-app-mobile');
  } else {
    // Send user to the desktop download page
    res.redirect('/page-index/app-cri/passport/download-app-desktop');
  }
});

// Handle form submission
router.post('/driving-licence/use-app-driving-licence/answer', (req, res) => {
  // Retrieve the answer to the previous question
  const secondQuestionAnswer = req.session.data['computer-or-tablet'];

  // Route based on the answer
  if (secondQuestionAnswer == "No, I am on a smartphone") {
    // Send user to the mobile download page
    res.redirect('/page-index/app-cri/driving-licence/download-app-mobile');
  } else {
    // Send user to the desktop download page
    res.redirect('/page-index/app-cri/driving-licence/download-app-desktop');
  }
});


// Handle form submission
router.post('/brp/use-app-brp/answer', (req, res) => {
  // Retrieve the answer to the previous question
  const secondQuestionAnswer = req.session.data['computer-or-tablet'];

  // Route based on the answer
  if (secondQuestionAnswer == "No, I am on a smartphone") {
    // Send user to the mobile download page
    res.redirect('/page-index/app-cri/brp/download-app-mobile');
  } else {
    // Send user to the desktop download page
    res.redirect('/page-index/app-cri/brp/download-app-desktop');
  }
});


//find another way links 

// General route for handling "find another way" logic
router.get('/find-another-way-answer', (req, res) => {
  // Check for chosen journey in session
  var chosenjourney = req.session.data['choose-journey'];

  // Route based on the chosen journey value
  if (chosenjourney === "identity-reuse" || chosenjourney === "address-fraud-check") {
      // Redirect to continuity of identity page
      res.redirect('/page-index/ipv-core/continuity-of-identity/find-another-way');
  } else {
      // Redirect to ineligible page
      res.redirect('/page-index/app-cri/ineligible');
  }
});


















// Routes for IPV Core

router.get('/prove-identity-at-post-office-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/prove-identity-at-post-office.html', { showErrorSummary });
});

// Handle form submission
router.post('/prove-identity-at-post-office-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['at-post-office'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "Yes") {
          // Send user to set up auth app
          res.redirect('/page-index/claimed-identity-cri/name');
      } else {
          // Send user to enter phone number
          res.redirect('/page-index/ipv-core/find-another-way');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/prove-identity-at-post-office-answer?error=true');
  }
});



router.get('/find-another-way-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/find-another-way.html', { showErrorSummary });
});

// Handle form submission
router.post('/find-another-way-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['another-way'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "another way") {
          // Send user to set up auth app
          res.redirect('/return-to-service');
      } else {
          // Send user to enter phone number
          res.redirect('/page-index/ipv-core/id-screener');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/find-another-way-answer?error=true');
  }
});




router.get('/kbv-abandon-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/kbv-abandon.html', { showErrorSummary });
});

// Handle form submission
router.post('/kbv-abandon-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['kbv-abandon'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "another way") {
          // Send user to set up auth app
          res.redirect('/page-index/ipv-core/kbv-another-way');
      } else {
          // Send user to enter phone number
          res.redirect('/page-index/kbv-cri/experian/mortgage-balance');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/kbv-abandon-answer?error=true');
  }
});


router.get('/cannot-answer-exit/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/kbv-cri/no-photo-id/cannot-answer-exit.html', { showErrorSummary });
});

// Handle form submission
router.post('/cannot-answer-exit/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['cannot-answer-exit'];

  if (selectedOption) {
      // Route user based on their selection
      if (selectedOption === "Find another way") {
          // Send user to find another way
          res.redirect('/return-to-service');
      } else if (selectedOption === "Use app") {
          // Example placeholder for the second option
          res.redirect('/page-index/app-cri/computer-or-tablet');
      } else if (selectedOption === "Post office") {
          // Example placeholder for the third option
          res.redirect('/page-index/f2f-cri/intro-page');
      }
  } else {
      // If no radio button is selected, redirect to /no-photo-id-triage/answer with error
      res.redirect('/cannot-answer-exit/answer?error=true');
  }
});


router.get('/no-photo-id-kbv-abandon-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/kbv-cri/no-photo-id/kbv-abandon.html', { showErrorSummary });
});

// Handle form submission
router.post('/no-photo-id-kbv-abandon-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['kbv-abandon'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "another way") {
          // Send user to set up auth app
          res.redirect('/page-index/kbv-cri/no-photo-id/cannot-answer-exit');
      } else {
          // Send user to enter phone number
          res.redirect('/page-index/kbv-cri/no-photo-id/mortgage-balance');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/no-photo-id-kbv-abandon-answer?error=true');
  }
});



router.get('/kbv-exit-fail-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/kbv-cri/no-photo-id/kbv-exit-fail.html', { showErrorSummary });
});

// Handle form submission
router.post('/kbv-exit-fail-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['kbv-exit-fail'];

  if (selectedOption) {
      // Route user based on their selection
      if (selectedOption === "Find another way") {
          // Send user to find another way
          res.redirect('/return-to-service');
      } else if (selectedOption === "Use app") {
          // Example placeholder for the second option
          res.redirect('/page-index/app-cri/computer-or-tablet');
      } else if (selectedOption === "Post office") {
          // Example placeholder for the third option
          res.redirect('/page-index/f2f-cri/intro-page');
      }
  } else {
      // If no radio button is selected, redirect to /no-photo-id-triage/answer with error
      res.redirect('/kbv-exit-fail-answer?error=true');
  }
});


router.get('/kbv-another-way-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/kbv-another-way.html', { showErrorSummary });
});

// Handle form submission
router.post('/kbv-another-way-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['kbv-another-way'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "id check app") {
          // Send user to set up auth app
          res.redirect('/page-index/app-cri/computer-or-tablet');
      } else {
          // Send user to enter phone number
          res.redirect('/page-index/f2f-cri/intro-page');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/kbv-another-way-answer?error=true');
  }
});



// Routes for ID check app
    
    // Run this code when a form is submitted to '/computer-or-tablet/answer'
    router.post('/starting-device/ios/answer', function (req, res) {

      // Make a variable and give it the value from 'choose-security-codes'
      var startingdevice = req.session.data['computer-or-tablet']
    
      // Check whether the variable matches a condition
      if (startingdevice == "No, I am on a smartphone"){
        // Send user to set up auth app
        res.redirect('/page-index/document-checking-app/ios/send-and-exit/exit-app-mobile')
      } else {
        // Send user to enter phone number
        res.redirect('/page-index/document-checking-app/ios/send-and-exit/exit-app-desktop')
      }
    
    })
    
    // Run this code when a form is submitted to '/computer-or-tablet/answer'
    router.post('/starting-device/android/answer', function (req, res) {

      // Make a variable and give it the value from 'choose-security-codes'
      var startingdevice = req.session.data['computer-or-tablet']
    
      // Check whether the variable matches a condition
      if (startingdevice == "No, I am on a smartphone"){
        // Send user to set up auth app
        res.redirect('/page-index/document-checking-app/android/send-and-exit/exit-app-mobile')
      } else {
        // Send user to enter phone number
        res.redirect('/page-index/document-checking-app/android/send-and-exit/exit-app-desktop')
      }
    
    })


//Entering app routes

// Run this code when a form is submitted to '/passport-app-journey/answer'
router.post('/passport-app-journey/answer', function (req, res) {

  // Make a variable and give it the value from 'computer-or-tablet'
  var selectedOption = req.session.data['computer-or-tablet']

  // Check whether the variable matches a condition
  if (selectedOption === "No, I am on a smartphone") {
    // Check the answer to the second question
    var selectedSmartphone = req.session.data['smartphone'];

    if (selectedSmartphone) {
      if (selectedSmartphone === "Android") {
        // Send Android users to android journey
        res.redirect('/page-index/document-checking-app/android/passport/open-app');
      } else if (selectedSmartphone === "iPhone") {
        // Send iPhone users to iPhone-specific page
        res.redirect('/page-index/document-checking-app/ios/passport/open-app');
      }
    }
  } else if (selectedOption === "Yes, I am on a computer or tablet") {
    // Check the answer to the third question
    var haveSmartphoneOption = req.session.data['have-a-smartphone'];

    if (haveSmartphoneOption) {
      if (haveSmartphoneOption === "android") {
        // Send Android users to some page
        res.redirect('/page-index/document-checking-app/android/passport/open-app');
      } else if (haveSmartphoneOption === "iPhone") {
        // Send iPhone users to some page
        res.redirect('/page-index/document-checking-app/ios/passport/open-app');
      }
    } else {
      // Redirect to a page if the third question isn't answered
      res.redirect('/page-index/document-checking-app/ios/passport/open-app');
    }
  } else {
    // Redirect to a page if the original question isn't answered
    res.redirect('/page-index/document-checking-app/ios/passport/open-app');
  }

})



// Run this code when a form is submitted to '/brp-app-journey/answer'
router.post('/brp-app-journey/answer', function (req, res) {

  // Make a variable and give it the value from 'computer-or-tablet'
  var selectedOption = req.session.data['computer-or-tablet']

  // Check whether the variable matches a condition
  if (selectedOption === "No, I am on a smartphone") {
    // Check the answer to the second question
    var selectedSmartphone = req.session.data['smartphone'];

    if (selectedSmartphone) {
      if (selectedSmartphone === "Android") {
        // Send Android users to android journey
        res.redirect('/page-index/document-checking-app/android/brp/open-app');
      } else if (selectedSmartphone === "iPhone") {
        // Send iPhone users to iPhone-specific page
        res.redirect('/page-index/document-checking-app/ios/brp/open-app');
      }
    }
  } else if (selectedOption === "Yes, I am on a computer or tablet") {
    // Check the answer to the third question
    var haveSmartphoneOption = req.session.data['have-a-smartphone'];

    if (haveSmartphoneOption) {
      if (haveSmartphoneOption === "android") {
        // Send Android users to some page
        res.redirect('/page-index/document-checking-app/android/brp/open-app');
      } else if (haveSmartphoneOption === "iPhone") {
        // Send iPhone users to some page
        res.redirect('/page-index/document-checking-app/ios/brp/open-app');
      }
    } else {
      // Redirect to a page if the third question isn't answered
      res.redirect('/page-index/document-checking-app/ios/brp/open-app');
    }
  } else {
    // Redirect to a page if the original question isn't answered
    res.redirect('/page-index/document-checking-app/ios/brp/open-app');
  }

})




// Run this code when a form is submitted to '/driving-licence-app-journey/answer'
router.post('/driving-licence-app-journey/answer', function (req, res) {

  // Make a variable and give it the value from 'computer-or-tablet'
  var selectedOption = req.session.data['computer-or-tablet']

  // Check whether the variable matches a condition
  if (selectedOption === "No, I am on a smartphone") {
    // Check the answer to the second question
    var selectedSmartphone = req.session.data['smartphone'];

    if (selectedSmartphone) {
      if (selectedSmartphone === "Android") {
        // Send Android users to android journey
        res.redirect('/page-index/document-checking-app/android/driving-licence/open-app');
      } else if (selectedSmartphone === "iPhone") {
        // Send iPhone users to iPhone-specific page
        res.redirect('/page-index/document-checking-app/ios/driving-licence/open-app');
      }
    }
  } else if (selectedOption === "Yes, I am on a computer or tablet") {
    // Check the answer to the third question
    var haveSmartphoneOption = req.session.data['have-a-smartphone'];

    if (haveSmartphoneOption) {
      if (haveSmartphoneOption === "android") {
        // Send Android users to some page
        res.redirect('/page-index/document-checking-app/android/driving-licence/open-app');
      } else if (haveSmartphoneOption === "iPhone") {
        // Send iPhone users to some page
        res.redirect('/page-index/document-checking-app/ios/driving-licence/open-app');
      }
    } else {
      // Redirect to a page if the third question isn't answered
      res.redirect('/page-index/document-checking-app/ios/driving-licence/open-app');
    }
  } else {
    // Redirect to a page if the original question isn't answered
    res.redirect('/page-index/document-checking-app/ios/driving-licence/open-app');
  }

})


///exiting app routes 


// Run this code when a form is submitted to '/next-step'
router.post('/exit-app-journey/answer', function (req, res) {
  // Retrieve the selected options from the session
  var selectedOptions = req.session.data['update-details'] || [];
  var selectedFraudCheckOptions = req.session.data['update-details-fraud-check'] || [];

  // Check the selected options and redirect accordingly
  if (selectedOptions.includes("Address") || selectedFraudCheckOptions.includes("Address")) {
    // Redirect to the new address update page if Address was selected
    res.redirect('/page-index/ipv-core/continuity-of-identity/name-address-success');
  } else if (selectedOptions.includes("Given names") || selectedOptions.includes("Last name") || selectedFraudCheckOptions.includes("Given names") || selectedFraudCheckOptions.includes("Last name")) {
    // Redirect to the new name update page if Given names or Last name was selected
    res.redirect('/page-index/ipv-core/continuity-of-identity/name-success'); 
  } else {
    // Redirect to match successful page if none of the above conditions are met
    res.redirect('/page-index/ipv-core/match-successful');
  }
});



// Routes for Driving licence CRI

router.get('/who-issued-licence/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/driving-licence-cri/who-issued-licence.html', { showErrorSummary });
});

// Handle form submission
router.post('/who-issued-licence/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['issuerName'];

  if (selectedOption) {
    // If radio option is selected:
    if (selectedOption === "dvla") {
      // Send user to set up auth app
      res.redirect('/page-index/driving-licence-cri/enter-dvla-driving-licence-details');
    } else if (selectedOption === "dva") {
      // Send user to enter passport details
      res.redirect('/page-index/driving-licence-cri/enter-dva-driving-licence-details');
    } else if (selectedOption === "no-uk-licence") {
      // Send user to prove identity at the post office
      res.redirect('/page-index/app-cri/ineligible');
    }
  } else {
    // If no radio button is selected, redirect to /ineligible-next-steps/answer with error
    res.redirect('/who-issued-licence/answer?error=true');
  }
});


// Routes for Face to Face CRI

router.get('/f2f-cri/choose-id/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/f2f-cri/choose-id.html', { showErrorSummary });
});

// Handle form submission
router.post('/f2f-cri/choose-id/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['in-person-choose-id'];

  if (selectedOption) {
    // If radio option is selected:
    if (selectedOption === "UK passport") {
      // Send user to set up auth app
      res.redirect('/page-index/f2f-cri/expiry-date');
    } else if (selectedOption === "Non-UK passport") {
      // Send user to enter passport details
      res.redirect('/page-index/f2f-cri/non-uk-passport-have-expiry-date');
    } else if (selectedOption === "UK photocard driving licence") {
      // Send user to prove identity at the post office
      res.redirect('/page-index/f2f-cri/uk-driving-licence-expiry-date');
    } else if (selectedOption === "Biometric residence permit (BRP)") {
      // Send user to enter passport details
      res.redirect('/page-index/f2f-cri/biometric-residence-permit-expiry-date');
    } else if (selectedOption === "European Union (EU) photocard driving licence") {
      // Send user to enter passport details
      res.redirect('/page-index/f2f-cri/eu-driving-licence-have-expiry-date');
    } else if (selectedOption === "National identity card from a European Economic Area (EEA) country") {
      // Send user to enter passport details
      res.redirect('/page-index/f2f-cri/national-identity-card-have-expiry-date');
    } else if (selectedOption === "I do not have any of these documents") {
      // Send user to enter passport details
      res.redirect('/page-index/ipv-core/f2f-another-way');
    }
  } else {
    // If no radio button is selected, redirect to /ineligible-next-steps/answer with error
    res.redirect('/f2f-cri/choose-id/answer?error=true');
  }
});


router.get('/page-index/f2f-cri/non-uk-passport-have-expiry-date/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/f2f-cri/non-uk-passport-have-expiry-date.html', { showErrorSummary });
});

// Handle form submission
router.post('/page-index/f2f-cri/non-uk-passport-have-expiry-date/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['has-expiry'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "No") {
          // Send user to set up auth app
          res.redirect('/page-index/f2f-cri/non-uk-passport-issuer');
      } else {
          // Send user to enter phone number
          res.redirect('/page-index/f2f-cri/non-uk-passport-expiry');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/page-index/f2f-cri/non-uk-passport-have-expiry-date/answer?error=true');
  }
});



router.get('/page-index/f2f-cri/uk-driving-licence-current-address/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/f2f-cri/uk-driving-licence-current-address.html', { showErrorSummary });
});

// Handle form submission
router.post('/page-index/f2f-cri/uk-driving-licence-current-address/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['driving-licence-address'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "Yes, it has my current address on it") {
          // Send user to set up auth app
          res.redirect('/page-index/f2f-cri/find-post-office');
      } else {
          // Send user to enter phone number
          res.redirect('/page-index/f2f-cri/choose-id');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/page-index/f2f-cri/uk-driving-licence-current-address/answer?error=true');
  }
});



router.get('/page-index/f2f-cri/eu-driving-licence-have-expiry-date/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/f2f-cri/eu-driving-licence-have-expiry-date.html', { showErrorSummary });
});

// Handle form submission
router.post('/page-index/f2f-cri/eu-driving-licence-have-expiry-date/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['has-expiry'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "No") {
          // Send user to set up auth app
          res.redirect('/page-index/f2f-cri/eu-driving-licence-current-address');
      } else {
          // Send user to enter phone number
          res.redirect('/page-index/f2f-cri/eu-driving-licence-expiry-date');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/page-index/f2f-cri/eu-driving-licence-have-expiry-date/answer?error=true');
  }
});


router.get('/page-index/f2f-cri/eu-driving-licence-current-address/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/f2f-cri/eu-driving-licence-current-address.html', { showErrorSummary });
});

// Handle form submission
router.post('/page-index/f2f-cri/eu-driving-licence-current-address/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['eu-driving-licence-address'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "No, it has my previous address on it") {
          // Send user to set up auth app
          res.redirect('/page-index/f2f-cri/choose-id');
      } else {
          // Send user to enter phone number
          res.redirect('/page-index/f2f-cri/eu-driving-licence-issuer');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/page-index/f2f-cri/eu-driving-licence-current-address/answer?error=true');
  }
});


router.get('/page-index/f2f-cri/national-identity-card-have-expiry-date/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/f2f-cri/national-identity-card-have-expiry-date.html', { showErrorSummary });
});

// Handle form submission
router.post('/page-index/f2f-cri/national-identity-card-have-expiry-date/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['has-expiry'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "No") {
          // Send user to set up auth app
          res.redirect('/page-index/f2f-cri/national-identity-current-address');
      } else {
          // Send user to enter phone number
          res.redirect('/page-index/f2f-cri/national-identity-card-expiry-date');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/page-index/f2f-cri/national-identity-card-have-expiry-date/answer?error=true');
  }
});


router.get('/page-index/f2f-cri/national-identity-current-address/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/f2f-cri/national-identity-current-address.html', { showErrorSummary });
});

// Handle form submission
router.post('/page-index/f2f-cri/national-identity-current-address/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['national-identity-address'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "No, it has my previous address on it") {
          // Send user to set up auth app
          res.redirect('/page-index/f2f-cri/choose-id');
      } else {
          // Send user to enter phone number
          res.redirect('/page-index/f2f-cri/national-identity-issuer');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/page-index/f2f-cri/national-identity-current-address/answer?error=true');
  }
});
  

///Routes for Start by choosing a journey 

router.get('/choose-journey/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('choose-journey.html', { showErrorSummary });
});

// Handle form submission
router.post('/choose-journey/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['choose-journey'];

  if (selectedOption) {
    // If radio option is selected:
    if (selectedOption === "auth-only") {
      // Send user to 
      res.redirect('/page-index/authentication/create-account');
    } else if (selectedOption === "prove-identity") {
      // Send user to 
      res.redirect('/page-index/pre-auth/identity-welcome');
    } else if (selectedOption === "identity-reuse") {
      // Send user to 
      res.redirect('/page-index/pre-auth/identity-welcome');
    } else if (selectedOption === "address-fraud-check") {
      // Send user to 
      res.redirect('/page-index/pre-auth/identity-welcome');
    } else if (selectedOption === "one-login-home") {
      // Send user to 
      res.redirect('/page-index/home/account-home');
    }
  } else {
    // If no radio button is selected, redirect to /choose-journey/answer with error
    res.redirect('/choose-journey/answer?error=true');
  }
});


///routes for end of auth routing
    
    // Run this code when a form is submitted to '/onward-sign-in-journey/answer'
    router.post('/onward-journey/answer', function (req, res) {

      // Make a variable and give it the value from '/choose-journey/answer'
      var chosenjourney = req.session.data['choose-journey']
    
      // Check whether the variable matches a condition
      if (chosenjourney == "auth-only"){
        // Send user to auth only service
        res.redirect('/_accounts/one-login/return-to-service')
      } else if (chosenjourney === "prove-identity") {
        // Send user to prove their identity
        res.redirect('/page-index/ipv-core/id-screener');
      } else if (chosenjourney === "identity-reuse") {
        // Send user to identity already proven screen
        res.redirect('/page-index/ipv-core/already-proved-identity');
      } else if (chosenjourney === "address-fraud-check") {
        // Send user to 6 month fraud check
        res.redirect('/page-index/ipv-core/repeat-fraud-check/confirm-your-details');
      } else if (chosenjourney === "" || chosenjourney === null || chosenjourney === undefined) {
        // Send user to prove their identity (full journey)
        res.redirect('/page-index/ipv-core/id-screener');
      }
    });


//create account email route

// Run this code when a form is submitted to '/onward-creation-journey/answer'
router.post('/returning-user/answer', function (req, res) {

  // Make a variable and give it the value from '/choose-journey/answer'
  var chosenjourney = req.session.data['choose-journey']

  // Check whether the variable matches a condition
  if (chosenjourney == "identity-reuse"){
    // Send user to auth only service
    res.redirect('/page-index/authentication/sign-in/existing-account')
  } else if (chosenjourney === "address-fraud-check") {
    // Send user to 6 month fraud check
    res.redirect('/page-index/authentication/sign-in/existing-account');
  } else {
    // Send user to enter phone number
    res.redirect('/page-index/authentication/create-account/check-email');
}
});


//repeat address fraud check

router.get('/confirm-name-and-dob-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/confirm-name-and-dob.html', { showErrorSummary });
});

// Handle form submission
router.post('/confirm-name-and-dob-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['confirm-name'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "Yes") {
          // Send user to set up auth app
          res.redirect('/page-index/ipv-core/confirm-address');
      } else {
          // Send user to enter phone number
          res.redirect('/page-index/ipv-core/update-name-or-dob');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/confirm-name-and-dob-answer?error=true');
  }
});



router.get('/confirm-address-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/confirm-address.html', { showErrorSummary });
});

// Handle form submission
router.post('/confirm-address-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['confirm-address'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "Yes") {
          // Send user to set up auth app
          res.redirect('/page-index/fraud-cri/repeat-fraud-check/fraud-check');
      } else {
          // Send user to enter phone number
          res.redirect('/page-index/address-cri/repeat-fraud-check/find-current-address');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/confirm-address-answer?error=true');
  }
});



router.get('/update-name-or-dob-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/update-name-or-dob.html', { showErrorSummary });
});

// Handle form submission
router.post('/update-name-or-dob-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['update-name-or-dob'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "Contact us") {
          // Send user to set up auth app
          res.redirect('/journey-transition/leaving-prototype');
      } else {
          // Send user to enter phone number
          res.redirect('/page-index/ipv-core/confirm-name-and-dob');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/update-name-or-dob-answer?error=true');
  }
});



//continuity of identity journey 


router.get('/continuity-of-identity/update-name-or-dob-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/continuity-of-identity/update-name-date-birth.html', { showErrorSummary });
});

// Handle form submission
router.post('/continuity-of-identity/update-name-or-dob-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['update-name-or-dob'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "Contact us") {
          // Send user to contact triage page
          res.redirect('/journey-transition/leaving-prototype');
      } else {
          // Send user to check details
          res.redirect('/page-index/ipv-core/continuity-of-identity/update-your-details');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/continuity-of-identity/update-name-or-dob-answer?error=true');
  }
});



router.get('/continuity-of-identity/update-name-app/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/continuity-of-identity/update-name-app.html', { showErrorSummary });
});

// Handle form submission
router.post('/continuity-of-identity/update-name-app/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['update-name-app'];

  if (selectedOption) {
      // Route user based on their selection
      if (selectedOption === "Use app") {
          // Send user to find another way
          res.redirect('/page-index/app-cri/computer-or-tablet');
      } else if (selectedOption === "find another way") {
          // Example placeholder for the second option
          res.redirect('/return-to-service');
      } else if (selectedOption === "go back") {
          // Example placeholder for the third option
          res.redirect('/page-index/ipv-core/continuity-of-identity/update-your-details');
      }
  } else {
      // If no radio button is selected, redirect to /no-photo-id-triage/answer with error
      res.redirect('/continuity-of-identity/update-name-app/answer?error=true');
  }
});



router.get('/continuity-of-identity/update-your-details/answer', (req, res) => {
  const showErrorSummary = req.query.error === 'true';
  res.render('page-index/ipv-core/continuity-of-identity/update-your-details', { showErrorSummary });
});

router.post('/continuity-of-identity/update-your-details/answer', (req, res) => {
  // Capture the selected options from the form submission
  let selectedOptions = req.body['update-details'];

  // Filter out the '_unchecked' values from the selected options
  if (Array.isArray(selectedOptions)) {
    selectedOptions = selectedOptions.filter(option => option !== '_unchecked');
  } else if (selectedOptions === '_unchecked') {
    selectedOptions = [];
  }

  // Check if there are valid selections after filtering
  if (selectedOptions && selectedOptions.length > 0) {
    if (Array.isArray(selectedOptions)) {
      // Handle cases where multiple checkboxes are selected
      if (selectedOptions.includes("none")) {
        res.redirect('/page-index/ipv-core/already-proved-identity');
      } else if (selectedOptions.includes("Given names") && selectedOptions.includes("Last name")) {
        res.redirect('/page-index/ipv-core/continuity-of-identity/update-name-date-birth');
      } else if (selectedOptions.includes("dob")) {
        res.redirect('/page-index/ipv-core/continuity-of-identity/update-name-date-birth');
      } else if (selectedOptions.includes("Address") && selectedOptions.length === 1) {
        res.redirect('/page-index/address-cri/repeat-fraud-check/find-current-address');
      } else if (selectedOptions.includes("Given names") && !selectedOptions.includes("Last name") && !selectedOptions.includes("dob")) {
        res.redirect('/page-index/ipv-core/continuity-of-identity/update-name-app');
      } else if (selectedOptions.includes("Last name") && !selectedOptions.includes("Given names") && !selectedOptions.includes("dob")) {
        res.redirect('/page-index/ipv-core/continuity-of-identity/update-name-app');
      } else {
        res.redirect('/continuity-of-identity/update-your-details/answer?error=true');
      }
    } else {
      // Handle cases where only a single checkbox is selected
      switch (selectedOptions) {
        case "none":
          res.redirect('/page-index/ipv-core/already-proved-identity');
          break;
        case "Given names":
          res.redirect('/page-index/ipv-core/continuity-of-identity/update-name-app');
          break;
        case "Last name":
          res.redirect('/page-index/ipv-core/continuity-of-identity/update-name-app');
          break;
        case "Address":
          res.redirect('/page-index/address-cri/repeat-fraud-check/find-current-address');
          break;
        case "dob":
          res.redirect('/page-index/ipv-core/continuity-of-identity/update-name-date-birth');
          break;
        default:
          res.redirect('/continuity-of-identity/update-your-details/answer?error=true');
      }
    }
  } else {
    // If no valid checkbox is selected, redirect with an error
    res.redirect('/continuity-of-identity/update-your-details/answer?error=true');
  }
});



//6 month fraud check 

router.get('/repeat-fraud-check/confirm-your-details/answer', (req, res) => {
  // Check if there was an error
const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/repeat-fraud-check/confirm-your-details.html', { showErrorSummary });
});

// Handle form submission
router.post('/repeat-fraud-check/confirm-your-details/answer', (req, res) => {
// Check if a radio button is selected
const selectedOption = req.body['confirm-name'];

if (selectedOption) {
  if (selectedOption === "Yes") {
    // Send user to confirm address
    res.redirect('/page-index/fraud-cri/repeat-fraud-check/fraud-check');
  } else if (selectedOption === "No") {
    // Capture the selected options from the nested checkboxes
    let selectedOptions = req.body['update-details-fraud-check'];

    // Check if selectedOptions is an array or a single value
    if (!Array.isArray(selectedOptions)) {
      selectedOptions = [selectedOptions];
    }

    // Filter out the '_unchecked' values from the selected options
    selectedOptions = selectedOptions.filter(option => option && option !== '_unchecked');

    // Debugging: Log the selected options
    console.log('Selected options:', selectedOptions);

    // Check if there are valid selections after filtering
    if (selectedOptions.length > 0) {
      // Handle cases where multiple checkboxes are selected
      if (selectedOptions.includes("Given names") && selectedOptions.includes("Last name")) {
        res.redirect('/page-index/ipv-core/repeat-fraud-check/update-name-date-birth');
      } else if (selectedOptions.includes("dob")) {
        res.redirect('/page-index/ipv-core/repeat-fraud-check/update-name-date-birth');
      } else if (selectedOptions.includes("Address") && selectedOptions.length === 1) {
        res.redirect('/page-index/address-cri/repeat-fraud-check/find-current-address');
      } else if (selectedOptions.includes("Given names") && !selectedOptions.includes("Last name") && !selectedOptions.includes("dob")) {
        res.redirect('/page-index/ipv-core/repeat-fraud-check/update-name-app');
      } else if (selectedOptions.includes("Last name") && !selectedOptions.includes("Given names") && !selectedOptions.includes("dob")) {
        res.redirect('/page-index/ipv-core/repeat-fraud-check/update-name-app');
      } else {
        res.redirect('/test-answer?error=true');
      }
    } else {
      // If no valid checkbox is selected, redirect with an error
      res.redirect('/page-index/ipv-core/repeat-fraud-check/confirm-your-details-error');
    }
  }
} else {
  // If no radio button is selected, redirect with an error
  res.redirect('/repeat-fraud-check/confirm-your-details/answer?error=true');
}
});



router.get('/repeat-fraud-check/update-name-or-dob-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/continuity-of-identity/update-name-date-birth.html', { showErrorSummary });
});

// Handle form submission
router.post('/repeat-fraud-check/update-name-or-dob-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['update-name-or-dob'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "Contact us") {
          // Send user to contact triage page
          res.redirect('/journey-transition/leaving-prototype');
      } else {
          // Send user to check details
          res.redirect('/page-index/ipv-core/repeat-fraud-check/confirm-your-details');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/repeat-fraud-check/update-name-or-dob-answer?error=true');
  }
});



router.get('/repeat-fraud-check/update-name-app/answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/repeat-fraud-check/update-name-app.html', { showErrorSummary });
});

// Handle form submission
router.post('/repeat-fraud-check/update-name-app/answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['update-name-app'];

  if (selectedOption) {
      // Route user based on their selection
      if (selectedOption === "Use app") {
          // Send user to find another way
          res.redirect('/page-index/app-cri/computer-or-tablet');
      } else if (selectedOption === "find another way") {
          // Example placeholder for the second option
          res.redirect('/return-to-service');
      } else if (selectedOption === "go back") {
          // Example placeholder for the third option
          res.redirect('/page-index/ipv-core/confirm-name-and-dob');
      }
  } else {
      // If no radio button is selected, redirect to /no-photo-id-triage/answer with error
      res.redirect('/repeat-fraud-check/update-name-app/answer?error=true');
  }
});



// find another way page for COI and Repeat Fraud checks

router.get('/repeat-fraud-check/find-another-way-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/repeat-fraud-check/find-another-way.html', { showErrorSummary });
});

// Handle form submission
router.post('/repeat-fraud-check/find-another-way-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['find-another-way'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "Contact us") {
          // Send user to contact triage page
          res.redirect('/journey-transition/leaving-prototype');
      } else {
          // Send user to check details
          res.redirect('/return-to-service');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/repeat-fraud-check/find-another-way-answer?error=true');
  }
});



// find another way app exit link route
router.post('/find-another-way-journey-answer', function (req, res) {
  // Read the 'choose-journey' value from session data
  var chooseJourney = req.session.data['choose-journey'];

  // Check whether the variable matches a condition
  if (chooseJourney === "identity-reuse") {
    // Redirect to a specific URL
    res.redirect('/page-index/ipv-core/continuity-of-identity/find-another-way');
  } else if (chooseJourney === "address-fraud-check") {
    // Redirect to another specific URL
    res.redirect('/page-index/ipv-core/continuity-of-identity/find-another-way');
  } else {
    // Redirect to a different URL
    res.redirect('/page-index/app-cri/ineligible');
  }
});



// Fraud check fail

router.get('/repeat-fraud-check/fraud-check-fail-answer', (req, res) => {
  // Check if there was an error
  const showErrorSummary = req.query.error === 'true';

  // Render the template with the error condition
  res.render('/page-index/ipv-core/repeat-fraud-check-fail.html', { showErrorSummary });
});

// Handle form submission
router.post('/repeat-fraud-check/fraud-check-fail-answer', (req, res) => {
  // Check if a radio button is selected
  const selectedOption = req.body['fraud-check-fail'];

  if (selectedOption) {
      // If radio option is selected:
      if (selectedOption === "Contact us") {
          // Send user to contact triage page
          res.redirect('/journey-transition/leaving-prototype');
      } else {
          // Send user to check details
          res.redirect('/return-to-service');
      }
  } else {
      // If no radio button is selected, redirect to /computer-or-tablet/answer with error
      res.redirect('/repeat-fraud-check/fraud-check-fail-answer?error=true');
  }
});