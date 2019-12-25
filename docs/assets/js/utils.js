var utils = {

  testLog: function() {
    console.log('This is just a test.')
  },

  showExplanation: function() {
    $(".showable").each(function() {
      this.css("visibility", "visible");
    });
  },
};
