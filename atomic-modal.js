//=include magnific-popup/dist/jquery.magnific-popup.js

function initModal($, context) {
  var defaults = {
    type: 'inline',
    callbacks: {
      open: function() {
        $('body').addClass('open-modal');
      },
      close: function() {
        $('body').removeClass('open-modal');
      }
    }
  };

  $(context).find('[data-modal]').each(function() {
    var $this = $(this);
    var options = $.extend(defaults, $this.data('modal'));

    $this.magnificPopup(options);
  });
}
