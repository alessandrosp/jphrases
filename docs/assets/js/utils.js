var utils = {
  
  /**
   * Toggle the explanation table, the results buttons and the explain button.
   * @param {Boolean} showExplanation - Whether to show or hide the explanation table.
   */
  toggleExplanation: function(showExplanation) {
    // Iterate through all the showable elements (but only for
    // the active phrase) and show/hide them according to showExplanation.
    $('.showable').each(function() {
      if ($(this).parents('.phrase-active').length) {
        if (showExplanation) {
          $(this).css('display', 'block');
        } else {
          $(this).css('display', 'none');
        }
      };
    });
    // Hide or show the explain button.
    $('.explain').each(function() {
      if ($(this).parents('.phrase-active').length) {
        if (showExplanation) {
          $(this).css('display', 'none');
        } else {
          $(this).css('display', 'block');   
        }
      };
    });
  },
  
  /**
   * Test whether the utils module has been loaded correctly.
   */
  testLog: function() {
    console.log('This is just a test.')
  },
  
  /**
   * Hide the current phrase and show the next.
   *
   * If guessWasRight is True, then the active phrase is also
   * marked as having being remembered and thus skipped in the future.
   * @param {Boolean} guessWasRight - Whether the guess was right or not.
   */
  submitResponse: function(guessWasRight) {
    let active = $('.phrase-active').first();
    let nextInactive = active.next('.phrase-inactive.not-remembered');
    utils.toggleExplanation(showExplanation=false);
    active.removeClass('phrase-active');
    active.addClass('phrase-inactive');
    if (guessWasRight) {
      active.removeClass('not-remembered');
      active.addClass('remembered');
    }
    if (nextInactive.length) {
      nextInactive.removeClass('phrase-inactive');
      nextInactive.addClass('phrase-active');
    } else {
      let firstInactive = $('.phrase-inactive.not-remembered').first();
      if (firstInactive.length) {
        firstInactive.removeClass('phrase-inactive');
        firstInactive.addClass('phrase-active');
      } else {
        let lastRow = $('.last-row').first();
        lastRow.css('display', 'block');
      }
    };
  },

};

$(window).keydown(function(event) {
  // Get more information here: https://keycode.info/
  // 69: E
  if (event.which == 69) {
    utils.toggleExplanation(showExplanation=true);
  } else if (event.which == 82) {
    // TODO(): We should check the Explain button is not visibile, because
    // if it is then we shouldn't let this fire off.
    utils.submitResponse(true);
  } else if (event.which == 87) {
    // TODO(): We should check the Explain button is not visibile, because
    // if it is then we shouldn't let this fire off.
    utils.submitResponse(false);
  }
});
