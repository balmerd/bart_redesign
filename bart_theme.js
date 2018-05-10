$(document).ready(function() {

  var wasFocused = false;

  // show menu on hover in
  $('.topic2').hover(function() {
    var this$ = $(this);
    var height = this$.outerHeight();
    var width = this$.outerWidth();
    var position = this$.position();
    var datasets = this$.data().datasets;

    var style = {
      top: - 20 - 2, // - 2 to fix arrow
      left: width + 20,
      width: 'auto',
      minWidth: '10rem',
      minHeight: height + 40 + 2 // including border
    };

    var menu_items = datasets.map(function(dataset) {
      var url = '/dataset/' + dataset.name + '/resource/' + dataset.resource_id;
      return '<li class="dataset-menu-item" data-url="' + url + '">' + dataset.title + '</li>';
    });

    $('.topic2').addClass('behind-other-topics');

    $('<div class="dataset-menu"><div class="arrow"><ul>' + menu_items.join('') +'<ul></div></div>').css(style).appendTo(this$);

    this$.removeClass('behind-other-topics');

    setTimeout(function() {
      // show dataset preview page on link
      $('.dataset-menu').hover(function() {
        wasFocused = true;
      }, function() {
        wasFocused = false;
        $('.dataset-menu').remove();
        $('.topic2').removeClass('behind-other-topics');
      }).on('click', 'li', function() {
        window.location.href = $(this).data().url;
      });
    }, 10);
  }, function() {
    if (!wasFocused) {
      $('.dataset-menu').remove();
      $('.topic2').removeClass('behind-other-topics');
    }
  });

  // show topic page on click
  $('.topic2 img').click(function() {
    window.location.href = $(this).data().url;
  });

  // hide Organizations filter
  $('section.module').each(function() {
    var text = $(this).text().trim();

    if ((/Organizations/).test(text)) {
      $(this).remove();
    } else {
      $(this).show();
    }
  });
});
