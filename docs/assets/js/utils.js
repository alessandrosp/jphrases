var utils = {

  testLog: function() {
    console.log('This is just a test.')
  },

  showExplanation: function() {
    $('.showable').each(function() {
      $(this).css('display', 'block');
    });
  },

};

$(window).keydown(function(event) {
  // Get more information here: https://keycode.info/
  // 69: E
  if (event.which == 69) {
    utils.showExplanation();
  }
});
