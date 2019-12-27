var utils = {

  showExplanation: function() {
    $('.showable').each(function() {
      if ($(this).parents('.phrase-active').length) {
        $(this).css('display', 'block');
      };
    });
    $('.explain').each(function() {
      if ($(this).parents('.phrase-active').length) {
        $(this).css('display', 'none');
      };
    });
  },
  
  testLog: function() {
    console.log('This is just a test.')
  },
  
  markCorrect: function() {
    let active = $('.phrase-active').first();
    let firstInactive = active.next('.phrase-inactive');
    active.removeClass('phrase-active');
    active.addClass('phrase-inactive');
    if (firstInactive.length) {
      firstInactive.removeClass('phrase-inactive');
      firstInactive.addClass('phrase-active');
    } else {
      let lastRow = $('.last-row').first();
      lastRow.css('display', 'block');
    };
  },

};

$(window).keydown(function(event) {
  // Get more information here: https://keycode.info/
  // 69: E
  if (event.which == 69) {
    utils.showExplanation();
  } else if (event.which == 82) {
    // TODO(): We should check the Explain button is not visibile, because
    // if it is then we shouldn't let this fire off.
    utils.markCorrect();
  } 
});
