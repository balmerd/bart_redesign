// $(document).ready(function() {
//
//   var wasFocused = false;
//
//   // show menu on hover in
//   $('.topic').hover(function() {
//     var this$ = $(this);
//     // var height = this$.height();
//     var height = this$.outerHeight();
//     var width = this$.outerWidth();
//     var position = this$.position();
//     var datasets = this$.data().datasets;
//     // var style = 'top:' + (position.top + height + 20) + 'px; left:' + position.left + 'px; width:' + (width - 2) + 'px;';
//     // var style = {
//     //   top: (position.top - 20) + 'px',
//     //   left: (position.left + width) + 'px',
//     //   width: 'auto',
//     //   minWidth: '400px',
//     //   height: (height + 40) + 'px'
//     // };
//
//     var style = {
//       top: position.top - 20,
//       left: position.left + width + 20,
//       width: 'auto',
//       minWidth: '10rem',
//       height: height + 40 - 2 // minus border
//     };
//
//     var menu_items = datasets.map(function(dataset) {
//       var url = '/dataset/' + dataset.name + '/resource/' + dataset.resource_id;
//       return '<li class="dataset-menu-item" data-url="' + url + '">' + dataset.title + '</li>';
//     });
//
//     // this$.append('<div class="dataset-menu" style="'+ style+ '">' + menu_items.join('') + '</div>');
//     $('<div class="dataset-menu"><div class="arrow" style="height:100%;">content</div>content</div>').css(style).appendTo(this$);
//
//     setTimeout(function() {
//       // show dataset preview page on link
//       $('.dataset-menu').hover(function() {
//         wasFocused = true;
//       }, function() {
//         wasFocused = false;
//         $('.dataset-menu').remove();
//       }).on('click', 'li', function() {
//         window.location.href = $(this).data().url;
//       });
//     }, 10);
//   }, function() {
//     if (!wasFocused) {
//       $('.dataset-menu').remove();
//     }
//   });
//
//   // show topic page on click
//   $('.topic img').click(function() {
//     window.location.href = $(this).data().url;
//   });
//
//   // hide Organizations filter
//   $('section.module').each(function() {
//     var text = $(this).text().trim();
//
//     if ((/Organizations/).test(text)) {
//       $(this).remove();
//     } else {
//       $(this).show();
//     }
//   });
// });
