//=include magnific-popup/dist/jquery.magnific-popup.js

function initModal($, context) {
  var defaults = {
    type: 'inline'
  };

  $(context).find('[data-modal]').each(function() {
    var $this = $(this);
    var options = $.extend(defaults, $this.data('modal'));

    $this.magnificPopup(options);
  });
}
