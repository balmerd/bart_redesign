$(document).ready(function() {

  var wasFocused = false;

  $('.topic2').on('mouseover', '.dataset-menu-item', function() { // fade other menu items
    // $(this).siblings().addClass('unfocused'); // all but "this"
    $('.dataset-menu-item').addClass('unfocused');
    $(this).removeClass('unfocused');
  }).on('mouseout', '.dataset-menu-item', function() { // restore other menu items
    $('.dataset-menu-item').removeClass('unfocused');
  });

  // show menu on hover in
  $('.topic2').hover(function() {
    var menu = [];
    var this$ = $(this);
    var height = this$.outerHeight();
    var width = this$.outerWidth();
    var position = this$.position();
    var datasets = this$.data().datasets;

    var style = {
      left: width + 20, // 20 is arrow width
      top: - 20 - 2 // - 2 to fix arrow position
    };

    var menu_items = [];

    _.forEach(datasets, function(dataset, index) {
      var url = '/dataset/' + dataset.name + '/resource/' + dataset.resource_id;

      if (index > 4) { // split onto another <ul>
        menu.push('<ul>' + menu_items.join('') +'</ul>');
        menu_items = [];
      }

      menu_items.push('<li class="dataset-menu-item" data-url="' + url + '">' + dataset.title + '</li>')
    });

    if (datasets.length > 4) {
      menu.push('<ul>' + menu_items.join('') +'</ul>');
    }

    this$.addClass('active').siblings().addClass('behind-other-topics'); // all but "this"

    $('<div class="dataset-menu"><div class="arrow">' + menu.join('') +'</div></div>').css(style).appendTo(this$);

    setTimeout(function() {
      // show dataset preview page on link
      $('.dataset-menu').hover(function() {
        wasFocused = true;
      }, function() {
        wasFocused = false;
        this$.removeClass('active');
        $('.dataset-menu').remove();
        $('.topic2').removeClass('behind-other-topics');
      }).on('click', 'li', function() {
        window.location.href = $(this).data().url;
      });
    }, 10);
  }, function() {
    if (!wasFocused) {
      $('.dataset-menu').remove();
      $('.topic2').removeClass('active behind-other-topics');
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
