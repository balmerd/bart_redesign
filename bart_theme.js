$(document).ready(function() {
  // show topic page on click
  $('.topic img').click(function() {
    window.location.href = $(this).data().url;
  });

  // fade other menu items on hover
  $('.topic').on('mouseover', '.dataset-menu-item', function() {
    $('.dataset-menu-item').addClass('unfocused');
    $(this).removeClass('unfocused');
  }).on('mouseout', '.dataset-menu-item', function() {
    $('.dataset-menu-item').removeClass('unfocused');
  });

  // show menu on hover in
  $('.topic').hover(function() {
    var style;
    var menu = [];
    var menu_items = [];
    var this$ = $(this);
    var height = this$.outerHeight();
    var width = this$.outerWidth();
    var position = this$.position();
    var datasets = this$.data().datasets;

    var isLastTopicInRow = true;
    $.each(this$.siblings(), function(key, otherTopic) {
      if ($(otherTopic).position().left > position.left) {
        isLastTopicInRow = false;
      }
    });

    console.log('isLastTopicInRow: ' + isLastTopicInRow);

    if (isLastTopicInRow) {
      style = {
        right: width + 20, // 20 is arrow width (left puts it on )
        top: -22 // - width + 2 to fix arrow position
      };
    } else {
      style = {
        left: width + 20, // 20 is arrow width (left puts it on )
        top: -22 // - width + 2 to fix arrow position
      };
    }

    // for right narrow
    // left: 135px

    // for left arrow
    // left: -367px

    _.forEach(datasets, function(dataset) { // create resource menu
      var url = '/dataset/' + dataset.name + '/resource/' + dataset.resource_id;
      menu_items.push('<li class="dataset-menu-item" data-url="' + url + '">' + dataset.title + '</li>')
    });

// TODO: need to identify last topic in a row, to get left menu instead of right

    _.forEach(_.chunk(menu_items, 5), function(links, index) {
      menu.push('<div class="pull-left"><ul>' + links.join('') +'</ul></div>');
    });

    this$.addClass('active').siblings().addClass('behind-other-topics'); // all but "this"

    if (this$.hasClass('last-one')) {
      $('<div class="dataset-menu left-menu"><div class="dataset-menu-container">' + menu.join('') +'</div></div>').css(style).appendTo(this$);
    } else {
      $('<div class="dataset-menu"><div class="dataset-menu-container">' + menu.join('') +'</div></div>').css(style).appendTo(this$);
    }

    $('.dataset-menu .dataset-menu-container').css('width', (11 * menu.length) + 'rem'); // base size is 11 rem

  }, function() {
    $('.dataset-menu').remove();
    $('.topic').removeClass('active behind-other-topics');
  });
});
