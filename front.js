/*
 * Custom code goes here.
 * A template should always ship with an empty custom.js
 */
$(document).ready(function () {
  // Function to check and update display property
  function updateBannerDisplay() {
    var productHidden = $(
      '.js-product.product.col-xs-6.col-sm-4.col-md-4.col-lg-4.col-xl-3.js-product2.long_product'
    ).is(function () {
      return $(this).css('display') === 'none';
    });

    if (productHidden) {
      $('.banner-wrapper').css('display', 'none');
    } else {
      $('.banner-wrapper').css('display', 'flex');
    }
  }

  // Initial check on document ready
  updateBannerDisplay();

  // Optional: Recheck when certain actions are performed, e.g., window resize, AJAX content load, etc.
  $(window).resize(updateBannerDisplay);

  // If your content is dynamically loaded you might need to check after AJAX completes
  $(document).ajaxComplete(updateBannerDisplay);
});

$(document).ready(function () {
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.attributeName === 'class') {
        var target = $(mutation.target);
        // Sprawdzanie czy klasa 'active' została dodana lub usunięta
        if (
          target.hasClass('clicktext_show_submenu') &&
          !target.hasClass('active')
        ) {
          $('.smt-wrapper').show();
        } else if (target.hasClass('clicktext_show_submenu active')) {
          $('.smt-wrapper').hide();
        }
      }
    });
  });

  // Opcje dla observera
  var config = { attributes: true, attributeFilter: ['class'] };

  // Nasłuchiwanie zmian na elemencie 'mm_menus_ul'
  var targetNode = document.querySelector(
    '.mm_menus_ul.clicktext_show_submenu'
  );
  if (targetNode) {
    observer.observe(targetNode, config);
  }
});

/*
 * linie 9-67 odpowiadają za zamianę hovera w menu na kliknięcia
 */
document.addEventListener('DOMContentLoaded', function () {
  const tabsLi = document.querySelectorAll('.mm_tabs_li');

  tabsLi.forEach((tab) => {
    tab.addEventListener('click', function (event) {
      event.stopPropagation();

      const contentsUl = this.querySelector('.mm_columns_contents_ul');

      if (contentsUl.style.visibility === 'visible') {
        contentsUl.style.opacity = 0;
        contentsUl.style.visibility = 'hidden';
      } else {
        document.querySelectorAll('.mm_columns_contents_ul').forEach((el) => {
          el.style.opacity = 0;
          el.style.visibility = 'hidden';
        });

        contentsUl.style.opacity = 1;
        contentsUl.style.visibility = 'visible';
      }
    });
  });

  $(document).ready(function () {
    console.log('DOM wczytany przez jQuery');

    var layoutItem1 = $('#layoutItem1');
    console.log('layoutItem1:', layoutItem1);

    if (layoutItem1.length) {
      layoutItem1.on('click', function () {
        console.log('layoutItem1 kliknięty');

        var bannerWrapper = $('.banner-wrapper');
        console.log('bannerWrapper:', bannerWrapper);

        if (bannerWrapper.length) {
          bannerWrapper.css('display', 'none');
          console.log('banner-wrapper ukryty');
        } else {
          console.log('banner-wrapper nie znaleziony');
        }
      });
    } else {
      console.log('layoutItem1 nie znaleziony');
    }
  });
  document.addEventListener('click', function () {
    document.querySelectorAll('.mm_columns_contents_ul').forEach((el) => {
      el.style.opacity = 0;
      el.style.visibility = 'hidden';
    });
  });
});

const liItems = document.querySelectorAll('.index-mega-menu-li-item');

liItems.forEach((item) => {
  item.addEventListener('click', function (event) {
    event.stopPropagation();

    const ulItem = this.querySelector('.index-mega-menu-ul-item');

    document.querySelectorAll('.index-mega-menu-ul-item').forEach((el) => {
      if (el !== ulItem) {
        el.style.display = 'none';
      }
    });

    if (ulItem.style.display === 'block') {
      ulItem.style.display = 'none';
    } else {
      ulItem.style.display = 'block';
    }
  });
});

document.addEventListener('click', function () {
  document.querySelectorAll('.index-mega-menu-ul-item').forEach((el) => {
    el.style.display = 'none';
  });
});

let bool_ready = false;

$(window).ready(function () {
  // index_menu();
  // if ($(window).width() <= 992) {
  //   magic_sidebar2();
  // } else {
  //   magic_sidebar();
  //   addLinkToArrow();
  // }
  addFooterHandlers();
  menu_sticky();
  setLayoutHandler();
  indexChangeMenuAndSliderHeight();
  handleTabClick();
  addFAQHandler();
  addHandleGoOnClick();
  addHandlesFaq();
  addHandlesContact();
  wrapFirstWordInSpan();
  addPhoneInHeader();
  setTimeout(() => {
    resizeWidthRightColumn();
  }, 100);
  // new TextTypingAnimation().startTyping();
});
$(window).resize(function () {
  indexChangeMenuAndSliderHeight();
  resizeWidthRightColumn();
});

$(window).on('scroll', function () {
  if ($('#product_column_right').length) {
    resizeProductRightColumn();
    checkRightProduct();
    resizeWidthRightColumn();
  }
});

const addFooterHandlers = () => {
  $('#footer .title.clearfix.hidden-md-up').each(function (index) {
    var $this = $(this);

    // Sprawdzenie, czy element posiada atrybuty data-toggle i data-target
    if (!$this.attr('data-toggle') && !$this.attr('data-target')) {
      // Dodanie atrybutów data-toggle i data-target
      var uniqueTarget = 'collapse-' + index; // Unikatowa wartość data-target
      $this.attr('data-toggle', 'collapse');
      $this.attr('data-target', '#' + uniqueTarget);

      // Znalezienie ul.collapse po elemencie title i przypisanie id
      var $ul = $this.next('ul.collapse');
      if ($ul.length) {
        $ul.attr('id', uniqueTarget);
      }
    }
  });
};

const addPhoneInHeader = () => {
  const phoneLink = $('<a>', {
    href: 'tel:+48 58 664 88 61',
    text: '',
  });

  const phoneIcon = $('<i>', {
    class: 'fas fa-phone',
  });

  phoneLink.prepend(phoneIcon);

  $('#menu_id_for_sm .hidden-md-up #_desktop_user_info').after(phoneLink);
};

const wrapFirstWordInSpan = () => {
  // Zbieranie wszystkich elementów klasy "head-title"
  const elements = document.querySelectorAll('.head-title');

  elements.forEach((element) => {
    // Pobieranie tekstu z elementu
    const text = element.textContent.trim();

    // Dzielenie tekstu na słowa
    const words = text.split(' ');

    if (words.length > 0) {
      // Pierwsze słowo
      const firstWord = words[0];

      // Reszta tekstu bez pierwszego słowa
      const restOfText = words.slice(1).join(' ');

      // Tworzenie nowego HTML z opakowanym pierwszym słowem w span
      const newHTML = `<span>${firstWord}</span> ${restOfText}`;

      // Ustawianie nowego HTML wewnątrz elementu
      element.innerHTML = newHTML;
    }
  });
};

const addHandlesContact = () => {
  $('.contactHandler').click((e) => {
    const target = e.target.id.slice(0, -4);
    $('.contactHandler').removeClass('active');
    $('.contactContent').removeClass('active');
    $(e.target).addClass('active');
    $(`#${target}`).addClass('active');
  });
};

const addHandlesFaq = () => {
  if ($('#handleFaq2').length && $('#handleFaq').length) {
    $('#handleFaq2').click((e) => {
      $('.faq-header-item').removeClass('active');
      $('#faq').removeClass('active');

      $(e.target).closest('.faq-header-item').addClass('active');
      $('#faq2').addClass('active');
    });

    $('#handleFaq').click((e) => {
      $('.faq-header-item').removeClass('active');
      $('#faq2').removeClass('active');

      $(e.target).closest('.faq-header-item').addClass('active');
      $('#faq').addClass('active');
    });
  }
};

const addHandleGoOnClick = () => {
  $('li.goOnClick').on('click', function () {
    const urlElement = $(this).find('.ets_mm_url');
    const hrefValue = urlElement.attr('href');
    window.location.href = hrefValue;
  });
};

const resizeWidthRightColumn = () => {
  if ($('#product_column_right').length) {
    const width = $('#product_column_right').width();
    $('.product-right-container').width(width + 'px');
  }

  if ($('#sticky-box-container').length) {
    const width = $('#sticky-box-container').width();
    $('#sticky-box').width(width + 'px');
  }
};

const addFAQHandler = () => {
  const className = 'hidden-container';
  if ($('#faq').length) {
    $('#faq h2').click(function () {
      $(this).parent().toggleClass(className);
    });
    $('#faq2 h2').click(function () {
      $(this).parent().toggleClass(className);
    });
  }
};

const handleCmsCategory = (event) => {
  const container = $(event.target).closest('.cms-menu-category');
  const className = 'hidden-container';
  // if (container.hasClass(className)) {
  container.toggleClass(className);
  // } else {
  //   container.addClass(className);
  // }
};

const handleTabClick = () => {
  setTimeout(() => {
    window.scrollBy(0, -1);
    window.scrollBy(0, 1);
  }, 200);
};

const addToCartHandler = () => {
  setTimeout(() => {
    const value =
      parseFloat($('#free-delivery').val()) -
      prestashop.cart.subtotals.products.amount;
    const formattedValue = value.toLocaleString('pl-PL', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    if (value <= 0) {
      $('.product-delivery-container .to-free-delivery').addClass('hidden');
    } else {
      $('.product-delivery-container .to-free-delivery span').html(
        formattedValue
      );
    }
  }, 500);
};
const goTo = (event, element) => {
  document.getElementById(element).scrollIntoView({ behavior: 'smooth' });
};
const checkRightProduct = () => {
  const heightTopSum =
    $('.product-right-container').height() + $(window).scrollTop();
  const containerHeight = $('#product_column_right').height();
  if (heightTopSum > containerHeight) {
    $('.product-right-container').addClass('fixedEnd');
  } else {
    $('.product-right-container').removeClass('fixedEnd');
  }
};

const resizeProductRightColumn = () => {
  setTimeout(() => {
    if ($('#product_column_left').length) {
      const height =
        window.innerWidth > 991
          ? $('.tabs').outerHeight(true) +
            $('.product-left-container').height() +
            30
          : 'auto';
      $('#product_column_right').height(height);
    }
  }, 500);
  setTimeout(() => {
    if ($('#product_column_left').length) {
      const height =
        window.innerWidth > 991
          ? $('.tabs').outerHeight(true) +
            $('.product-left-container').height() +
            30
          : 'auto';
      $('#product_column_right').height(height);
    }
  }, 1000);
};

const indexChangeMenuAndSliderHeight = () => {
  setTimeout(() => {
    const indexMenu = document.getElementById('index-menu');
    if (indexMenu) {
      const carousel = document.getElementById('carousel').parentNode;

      const maxHeight = carousel.clientHeight;
      indexMenu.style.height = maxHeight + 'px';
    }
  }, 100);
};

const handleCheckboxNewsletter = (e) => {
  $('#newsletter-main-container input[type="submit"]').each((i, item) => {
    $(item).attr('disabled', !e.target.checked);
  });
};

const addLinkToArrow = () => {
  $('#magic_sidebar i.fa-chevron-right').click(function () {
    var link = $(this).parent().find('.dropdown-item').attr('href');
    window.location = link;
  });
};

const setLayoutHandler = () => {
  if ($('#layoutContainer').length) {
    $('#layoutContainer div').each(function () {
      addClickLayout($(this));
    });
  }
};

const addClickLayout = (el) => {
  el.click(async function (event) {
    if (!$(event.target).hasClass('active')) {
      const type = el.attr('attr-type');

      await $('#js-product-list').fadeTo('slow', 0, function () {
        $('#content-wrapper').removeClass('short_products');
        $('#content-wrapper').removeClass('long_products');

        $.ajax({
          type: 'GET',
          url: '/pl/',
          cache: false,
          data: {
            typeLayout: type,
          },
          success: function () {},
        });
        const className = type == 1 ? 'short_products' : 'long_products';
        $('#content-wrapper').addClass(className);
      });
      await $('#js-product-list').fadeTo('slow', 1, function () {});
    }
  });
};

const handleCartBtn = (event, add) => {
  const input = $(event.target).parent().find('input');
  const value = parseInt($(input).val());
  const newValue = value + (add ? 1 : -1);
  if (newValue > 0) $(input).val(newValue);
};

function menu_sticky() {
  if (
    $('header#header .header-top').length &&
    $('header#header #header_info').length
  ) {
    check();
    $(window).on('scroll', function () {
      check();
    });

    function check() {
      $(window).scrollTop() >= $('header#header .header-top').offset().top
        ? setFixed()
        : false;
      $(window).scrollTop() <= $('header#header #header_info')[0].clientHeight
        ? unsetFixed()
        : false;
    }

    function setFixed() {
      $('header#header .header-top').css({
        position: 'fixed',
        top: '0',
        width: '100%',
        'z-index': '999',
        'box-shadow': 'rgba(0, 0, 0, 0.22) 0px 0px 5px 0px',
      });
      $('#header_info').css(
        'margin-bottom',
        $('header#header .header-top')[0].clientHeight + 'px'
      );
      $('header#header').addClass('setFixed');
    }

    function unsetFixed() {
      $('header#header .header-top').css({
        position: '',
        top: '',
        width: '',
        'z-index': '',
        background: '',
        'box-shadow': '',
      });
      $('#header_info').css('margin-bottom', '');
      $('header#header').removeClass('setFixed');
    }
  }
}

async function index_menu() {
  if ($('#index-menu').length) {
    const categories_array = getCategories();

    if (categories_array) {
      for (let i = 0; i < categories_array.length; i++) {
        $('#index-menu ul').append(categories_array[i]);
      }
    }

    // addHandles();

    // function addHandles() {
    //   $(document).ready(function () {
    //     $('#index-menu > ul > li').hover(function () {
    //       closeAll();
    //       $(this).addClass('active');
    //     });
    //   });
    //   $('#index-menu, #index-menu .active .collapse').on(
    //     'mouseleave',
    //     function () {
    //       closeAll();
    //     }
    //   );
    // }

    // function closeAll() {
    //   $('#index-menu > ul > li').removeClass('active');
    // }

    function getCategories() {
      if (
        $('.display_tabs_in_full_width .mm_columns_ul.mm_columns_ul_tab').length
      ) {
        let array = [];

        $(
          '.display_tabs_in_full_width .mm_columns_ul.mm_columns_ul_tab li'
        ).each(function () {
          array.push($(this).html());
        });
        return array;
      }
    }
  }
}

function magic_sidebar() {
  if ($('#magic_sidebar_icon').length && $('.trigger_magic_sidebar').length) {
    const css =
      '#magic_sidebar{background: #fff;width:350px;overflow:visible;position:fixed;z-index:999;bottom:0;transition:left .35s;-webkit-transition:left .35s;-moz-transition:left .35s;-o-transition:left .35s;} #magic_sidebar.showed_siderbar{left:0;} #magic_sidebar.hidden_siderbar{left:-350px;} #magic_sidebar .cont{overflow-y:auto;overflow-x:hidden;height:100%;padding:30px 40px;position:relative;z-index:9;background:#fff;width:100%;left:0;}#magic_sidebar .cont > .content{height:auto;padding-top:10px;}#magic_sidebar .cont > .header{position:relative;padding:10px 0; font-weight:700;text-transform:uppercase;font-size:14px;border-bottom:1px solid #e3e3e3;}#magic_sidebar .cont > .content a{padding:5px 0;}#magic_sidebar .cont > .content li {font-size:14px;font-weight:600;position:relative}#magic_sidebar .cont > .content li i {position:absolute;left:0;top:50%;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);right:-9px;text-align:right;padding:8px 0px;cursor:pointer;color:#a3a3a3;}#magic_sidebar .cont > .content li:hover i,#magic_sidebar .cont > .content li:hover a{color:#196ea5 !important}#magic_sidebar .cont > .content li i,#magic_sidebar .cont > .content li a,#magic_sidebar .cont > .header > i{transition: .15s;-webkit-transition: .15s;-moz-transition: .15s;-o-transition: .15s;} #magic_sidebar .submenu .cont{background:#f5f5f5;-webkit-box-shadow: inset 24px 0px 9px -24px #00000014;box-shadow: inset 24px 0px 9px -24px #00000014;} #magic_sidebar .submenu{position:absolute;top:0;bottom:0;left:0%;width:100%;background:#f5f5f5;z-index:1;;transition:left .35s;-webkit-transition:left .35s;-moz-transition:left .35s;-o-transition:left .35s;} #magic_sidebar .cont > .content li.active, #magic_sidebar .cont > .content li.active > i { color:#196ea5} #magic_sidebar .cont > .header > a{padding:0} #magic_sidebar .cont > .header > i{position:absolute;top:50%;left:100%;-webkit-transform:translate(50%,-50%);-ms-transform:translate(50%,-50%);transform:translate(50%,-50%);font-size:18px} #magic_sidebar .cont > .header > i:hover{color:#196ea5;cursor:pointer;}';

    $('body').prepend(
      '<style>' +
        css +
        '</style><div id="magic_sidebar" class="hidden_siderbar"><div class="cont"><div class="header"></div><div class="content"></div></div></div>'
    );
    $('body').prepend(
      '<div id="sidebar_bg" class="trigger_magic_sidebar" style="background:#000;opacity:.5;position:fixed;width:100vw;height:100vh;top:0;left:0;z-index:999;display:none;" ></div'
    );

    topPositioning();

    $('#magic_sidebar .header').html('<a href="/2-kategorie"></a>');
    $('#magic_sidebar .header a').append(getHeader());
    $('#magic_sidebar .content').append(
      '<ul id="sidebar_categories_list" ></ul>'
    );
    const categories_array = getCategories();
    if (categories_array) {
      for (let i = 0; i < categories_array.length; i++) {
        $('#magic_sidebar .content > ul').append(categories_array[i]);
      }
    }

    $('#sidebar_categories_list li > div').each(function () {
      $(this).parent().append('<i class="fas fa-chevron-right"></i>');
    });

    subsidebarEvents('#magic_sidebar');

    $('#magic_sidebar_icon').mouseenter(function () {
      if ($('#magic_sidebar').hasClass('hidden_siderbar')) {
        openSideBar();
      }
    });

    $('.category > .trigger_magic_sidebar').mouseenter(function () {
      if ($('#magic_sidebar').hasClass('hidden_siderbar')) {
        openSideBar();
      }
    });

    $('.trigger_magic_sidebar').click(function () {
      if ($('#magic_sidebar').hasClass('showed_siderbar')) {
        close_submenu('#sub_sidebar-1');
        close_submenu('#magic_sidebar');
        closeSideBar();
      }
    });

    $('#sidebar_bg').mouseenter(function () {
      // closeSideBar();
    });
    $('#header_info').mouseenter(function () {
      closeSideBar();
    });
    $('#top-menu > li:not(.category)').mouseenter(function () {
      closeSideBar();
    });

    function closeSideBar() {
      if (!$('#magic_sidebar').hasClass('showed_siderbar')) {
        return;
      }
      close_submenu('*');

      $('#magic_sidebar > .cont').find('li.active > i').click();
      $('#sidebar_bg').css('display', 'none');
      $('body').css('overflow', '');
      $('#magic_sidebar').removeClass('showed_siderbar');
      $('#magic_sidebar').addClass('hidden_siderbar');
      $('#magic_sidebar_icon').addClass('fa-bars');
      $('#magic_sidebar_icon').removeClass('fa-times');
      $('.trigger_magic_sidebar > i.fa-caret-up').addClass('fa-caret-down');
      $('.trigger_magic_sidebar > i.fa-caret-down').removeClass('fa-caret-up');
      $('.trigger_magic_sidebar').removeClass('active');
    }
    function openSideBar() {
      if (!$('#magic_sidebar').hasClass('hidden_siderbar')) {
        return;
      }

      $('#sidebar_bg').css('display', 'block');
      $('#magic_sidebar').removeClass('hidden_siderbar');
      $('#magic_sidebar').addClass('showed_siderbar');
      $('#magic_sidebar_icon').removeClass('fa-bars');
      $('#magic_sidebar_icon').addClass('fa-times');
      $('.trigger_magic_sidebar > i.fa-caret-down').addClass('fa-caret-up');
      $('.trigger_magic_sidebar > i.fa-caret-up').removeClass('fa-caret-down');
      $('.trigger_magic_sidebar').addClass('active');
    }
    function getTopDistance() {
      let distance;

      distance =
        $('header#header .header-top').offset().top -
        $(window).scrollTop() +
        $('header#header .header-top')[0].clientHeight;

      return distance;
    }
    function topPositioning() {
      setTimeout(function () {
        $('#magic_sidebar').css('top', getTopDistance() + 'px');
        $('#sidebar_bg').css('top', getTopDistance() + 'px');
      }, 500);
      $(window).on('scroll', function () {
        $('#magic_sidebar').css('top', getTopDistance() + 'px');
        $('#sidebar_bg').css('top', getTopDistance() + 'px');
      });
    }
    function getCategories() {
      if ($('#top-menu > li.category li.category').length) {
        let array = [];
        let categories = '';
        let tmp = 0;

        $('#top-menu > li.category').each(function () {
          array.push($(this).find('ul.top-menu').html());
          $(this).children().eq(1).remove();
          tmp += 1;
          tmp != 1 ? $(this).remove() : false;
        });
        return array;
      }
    }
    function getHeader() {
      if ($('#top-menu > li.category > a').length) {
        let tmp = 0;
        $('#top-menu > li.category').eq(0).find('a > span').remove();
        const header = $('#top-menu > li.category')
          .eq(0)
          .children()
          .eq(0)
          .text();
        $('#top-menu > li.category').eq(0).children().eq(0).removeAttr('href');
        $('#top-menu > li.category')
          .eq(0)
          .children()
          .eq(0)
          .addClass('trigger_magic_sidebar');
        $('#top-menu > li.category')
          .eq(0)
          .children()
          .eq(0)
          .css('cursor', 'pointer');
        $('#top-menu > li.category')
          .eq(0)
          .children()
          .eq(0)
          .append('<i class="fas fa-caret-down" style="margin-left:3px;"></i>');
        return header;
      }
    }
    function close_submenu(item, fnct) {
      const Item = item;
      const delay = 120;

      if (item === '*') {
        $('#magic_sidebar')
          .find('.submenu.opened[data-depth="1"]')
          .each(function (element) {
            close($(element).attr('id'));
          });
      }

      close(Item);

      function close(id) {
        const ID = id;
        const subs = $(ID).find('.submenu.opened');
        const subs_Q = $(ID).find('.submenu.opened').length - 1;
        let Q = subs_Q;

        subs.eq(Q).css('left', '0%');
        subs.eq(Q).removeClass('opened');
        if (subs_Q > 0) {
          let loop = setInterval(function () {
            Q -= 1;
            subs.eq(Q).css('left', '0%');
            subs.eq(Q).removeClass('opened');
            if (Q == 0) {
              clearInterval(loop);
            }
          }, delay);
        }
      }
    }
    function open_submenu(item) {
      addLinkToArrow();
      if (item) {
        item = item.parent();
        const depth = item.children().eq(0).attr('data-depth');
        const content = item.children().eq(1).children().html();
        const header = item.children().eq(0)[0].outerHTML;
        create_sub_sidebar(header, content, depth);
      }
    }
    function subsidebarEvents(id) {
      $(".sub[data-parent='#sub_sidebar-1'] .category").each(function () {
        $(this).hover(function () {
          if ($(this).children().eq(2).html() == undefined) {
            close_submenu('#sub_sidebar-1');
          } else {
            //open_submenu($(this).find('i.fa-chevron-right'));
          }
        });
      });
      $(
        '#magic_sidebar > .cont > .content > #sidebar_categories_list > .category'
      ).each(function () {
        $(this).hover(function () {
          if ($(this).children().eq(2).html() == undefined) {
            close_submenu('#sub_sidebar-2');
            close_submenu('#sub_sidebar-1');
            close_submenu('#magic_sidebar');
          } else {
            //open_submenu($(this).find('i.fa-chevron-right'));
          }
        });
      });
      // $( id+' .dropdown-item').each( function () {
      // 	if($(this).parent().find('i.fas')){
      // 		$(this).hover( function () {
      // 			const THIS = $(this);
      // 			if ( !$(this).parent().hasClass('active') ) {
      // 				if($(this).parent().parent().find('li.active').length > 0){
      // 					let attr = $(this).parent().parent().attr('data-parent') == undefined ? '#magic_sidebar' : $(this).parent().parent().attr('data-parent');
      // 					const Q = $(attr).find('.submenu.opened').length+1;
      // 					const time = 120 * Q;
      // 					$(this).parent().parent().find('li.active > i').hover();
      // 					setTimeout( function () {
      // 						THIS.hover();
      // 					}, time );
      // 					close_submenu("#sub_sidebar-1");
      // 				}else {
      // 				$(this).parent().addClass('active')
      // 				open_submenu( $(this) )
      // 				}
      // 			} else if ($(this).parent().hasClass('active')) {
      // 				let attr = $(this).parent().parent().attr('data-parent') == undefined ? '#magic_sidebar' : $(this).parent().parent().attr('data-parent');
      // 				$(this).parent().removeClass('active')
      // 				//close_submenu( attr );
      // 			}
      // 		} );
      // 	}

      // } );
      $('.dropdown-item').hover(function () {
        $(this)
          .parent()
          .parent()
          .find('.category_active_background')
          .removeClass('category_active_background');
      });
      $(id + ' i.fa-chevron-right').each(function () {
        $(this).hover(function () {
          if ($(this).parent().find('a').attr('data-depth') == '1') {
            $('#sub_sidebar-2').attr('style', 'left: 0%;');
          }
          const THIS = $(this);
          if (!$(this).parent().hasClass('active')) {
            if ($(this).parent().parent().find('li.active').length > 0) {
              let attr =
                $(this).parent().parent().attr('data-parent') == undefined
                  ? '#magic_sidebar'
                  : $(this).parent().parent().attr('data-parent');
              const Q = $(attr).find('.submenu.opened').length + 1;
              const time = 120 * Q;
              $(this).parent().parent().find('li.active > i').hover();
              setTimeout(function () {
                THIS.hover();
              }, time);
              close_submenu('#sub_sidebar-1');
            } else {
              $(this).parent().addClass('active');
              $(this)
                .parent()
                .parent()
                .find('.category')
                .removeClass('category_active_background');
              $(this).parent().addClass('category_active_background');
              open_submenu($(this));
            }
          } else if ($(this).parent().hasClass('active')) {
            let attr =
              $(this).parent().parent().attr('data-parent') == undefined
                ? '#magic_sidebar'
                : $(this).parent().parent().attr('data-parent');
            $(this).parent().removeClass('active');
            //close_submenu( attr );
          }
        });
      });

      $(id + ' .header i.fa-times').each(function () {
        $(this).click(function () {
          let attr =
            $(this).attr('data-parent') == undefined
              ? '#magic_sidebar'
              : $(this).attr('data-parent');
          $(attr).find('li.category.active').removeClass('active');
          close_submenu(attr);
        });
      });
    }
    function test() {
      $('#sidebar_categories_list')
        .prepend(`<li class="category" id="category-test1">
                          <a class="dropdown-item dropdown-submenu" href="http://cp.exis24.pl/53-klucze-udarowe-1" data-depth="1">                                      
                              Klucze udarowe 1
                    </a>
                          <div class="collapse" id="top_sub_menu_test1">
                    <ul class="top-menu" data-depth="2">
                          <li class="category" id="category-test2">
                                <a class="dropdown-item" href="http://cp.exis24.pl/54-2" data-depth="2">
                                    2"
                          </a>
                          <div class="collapse" id="top_sub_menu_test2">
                          <ul class="top-menu" data-depth="3">
                                <li class="category" id="category-test3">
                                      <a class="dropdown-item" href="http://cp.exis24.pl/54-2" data-depth="3">
                                          2"
                                </a>
                                <div class="collapse" id="top_sub_menu_test3">
                                <ul class="top-menu" data-depth="4">
                                      <li class="category" id="category-test4">
                                            <a class="dropdown-item" href="http://cp.exis24.pl/54-2" data-depth="4">
                                                2"
                                      </a>
                                      
                                          </li>

                                  </ul>
                                </div>
                                <i class="fas fa-chevron-right"></i>
                                    </li>

                            </ul>
                          </div>
                          <i class="fas fa-chevron-right"></i>
                              </li>

                      </ul>
                    </div>
                        <i class="fas fa-chevron-right"></i></li>`);
    }
    function create_sub_sidebar(header, content, depth) {
      const id = '#sub_sidebar-' + depth;
      const parent_depth = depth - 1;
      const parent_id =
        depth == 1 ? '#magic_sidebar' : '#sub_sidebar-' + parent_depth;
      const array_content = [];
      array_content[0] = header;
      array_content[1] = content;

      check(id, depth, array_content);

      function check(id, depth, array_content) {
        if (!$('#magic_sidebar ' + id).length) {
          create(depth, array_content);
        } else if ($('#magic_sidebar ' + id).length) {
          construct(array_content, depth, parent_id);
        }
      }

      function create(depth, array_content) {
        if (parent_depth == 0 || $('#magic_sidebar ' + parent_id).length) {
          //perent exist
          construct(array_content, depth, parent_id);
        } else if (
          parent_depth > 0 &&
          !$('#magic_sidebar ' + parent_id).length
        ) {
          //parent didn't exist
          create(parent_depth);
        }
      }

      function construct(array_content, depth, parent_id) {
        const content = array_content;
        const id = 'sub_sidebar-' + depth;
        const times_id =
          depth > 1 ? 'sub_sidebar-' + (depth - 1) : 'magic_sidebar';
        const attr =
          'id="' + id + '" class="submenu opened" data-depth="' + depth + '"';

        if (!$('#' + id).length) {
          $(parent_id).append(
            '<div ' +
              attr +
              ' ><div class="cont"> <div class="header">' +
              content[0] +
              '<i class="fas fa-times" data-parent="#' +
              times_id +
              '"></i></div> <div class="content"><ul id="sidebar_categories_list" class="sub" data-parent="#' +
              id +
              '">' +
              content[1] +
              '</ul></div> </div> </div>'
          );
        } else if (
          $('#' + id + ' > .cont > .header').length &&
          $('#' + id + ' > .cont > .content > .sub').length
        ) {
          $('#' + id).addClass('opened');
          $('#' + id + ' > .cont > .header').html(
            content[0] +
              '<i class="fas fa-times" data-parent="#' +
              times_id +
              '"></i>'
          );
          $('#' + id + ' > .cont > .content > .sub').html(content[1]);
        }

        setTimeout(function () {
          $('#' + id).css('left', '100%');
        }, 10);
        subsidebarEvents('#' + id);
      }
    }
  }
}

function magic_sidebar2() {
  if ($('#magic_sidebar_icon').length && $('.trigger_magic_sidebar').length) {
    const css =
      '#magic_sidebar{background:#fff;width:400px;overflow:visible;position:fixed;z-index:999;bottom:0;transition:left .35s;-webkit-transition:left .35s;-moz-transition:left .35s;-o-transition:left .35s;} #magic_sidebar.showed_siderbar{left:0;} #magic_sidebar.hidden_siderbar{left:-400px;} #magic_sidebar .cont{overflow-y:auto;overflow-x:hidden;height:100%;padding:30px 40px;position:relative;z-index:9;background:#fff;width:100%;left:0;}#magic_sidebar .cont > .content{height:auto;padding-top:10px;}#magic_sidebar .cont > .header{position:relative;padding:10px 0; font-weight:700;text-transform:uppercase;font-size:14px;border-bottom:1px solid #e3e3e3;}#magic_sidebar .cont > .content a{padding:5px 0;}#magic_sidebar .cont > .content li {font-size:14px;font-weight:600;position:relative}#magic_sidebar .cont > .content li i {position:absolute;left:0%;top:50%;-webkit-transform:translate(0,-50%);-ms-transform:translate(0,-50%);transform:translate(0,-50%);right:-9px;text-align:right;padding:8px 0px;cursor:pointer;color:#a3a3a3;}#magic_sidebar .cont > .content li:hover i,#magic_sidebar .cont > .content li:hover a{color:#ed192d !important}#magic_sidebar .cont > .content li i,#magic_sidebar .cont > .content li a,#magic_sidebar .cont > .header > i{transition: .15s;-webkit-transition: .15s;-moz-transition: .15s;-o-transition: .15s;} #magic_sidebar .submenu .cont{-webkit-box-shadow: inset 24px 0px 9px -24px #00000014;box-shadow: inset 24px 0px 9px -24px #00000014;} #magic_sidebar .submenu{position:absolute;top:0;bottom:0;left:0%;width:100%;background:#f5f5f5;z-index:1;;transition:left .35s;-webkit-transition:left .35s;-moz-transition:left .35s;-o-transition:left .35s;} #magic_sidebar .cont > .content li.active, #magic_sidebar .cont > .content li.active > i { color:#ed192d} #magic_sidebar .cont > .header > a{padding:0;white-space:normal;} #magic_sidebar .cont > .header > i{position:absolute;top:50%;left:100%;-webkit-transform:translate(-100%,-50%);-ms-transform:translate(-100%,-50%);transform:translate(-100%,-50%);font-size:18px} #magic_sidebar > .cont > .header{pointer-events: none;} #magic_sidebar .cont > .header > i:hover{color:#ed192d;cursor:pointer;} @media (max-width: 767px) {#magic_sidebar{width:280px;}#magic_sidebar.hidden_siderbar{left:-280px;}}';

    $('body').prepend(
      '<style data_info="custom.js">' +
        css +
        '</style><div id="magic_sidebar" class="hidden_siderbar"><div class="cont"><div class="header"></div><div class="content"></div></div></div>'
    );
    $('body').prepend(
      '<div id="sidebar_bg" class="trigger_magic_sidebar" style="background:#000;opacity:.5;position:fixed;width:100vw;height:100vh;top:0;left:0;z-index:999;display:none;" ></div'
    );

    topPositioning();

    $('#magic_sidebar .header').html('<a href="/2-kategorie"></a>');
    $('#magic_sidebar .header a').append(getHeader());
    $('#magic_sidebar .content').append(
      '<ul id="sidebar_categories_list" ></ul>'
    );
    const categories_array = getCategories();
    if (categories_array) {
      for (let i = 0; i < categories_array.length; i++) {
        $('#magic_sidebar .content > ul').append(categories_array[i]);
      }
    }

    $('#sidebar_categories_list li > div').each(function () {
      $(this).parent().append('<i class="fas fa-chevron-right"></i>');
    });

    // test()

    subsidebarEvents('#magic_sidebar');

    addRestItems();

    // trriger
    // setTimeout( () => {
    // 	$('#magic_sidebar_icon').click();
    // 	$('#category-test1 > i').click();
    // },300 );
    // trriger

    $('.trigger_magic_sidebar').click(function () {
      if ($('#magic_sidebar').hasClass('hidden_siderbar')) {
        openSideBar();
      } else if ($('#magic_sidebar').hasClass('showed_siderbar')) {
        closeSideBar();
      }
    });

    var last_window_w = $(window).width();
    $(window).resize(function () {
      topPositioning();

      var window_w = $(window).width(),
        menu_tab_w = $('#magic_sidebar').width(),
        subsidebars = $('#magic_sidebar div.submenu');
      subsidebars_q = subsidebars.length;

      if (window_w < last_window_w) {
        for (var i = subsidebars_q - 1; i >= 0; i--) {
          var menu_w = menu_tab_w + (i + 1) * menu_tab_w,
            subsidebar = subsidebars.eq(i);

          if (menu_w > window_w) {
            if (
              parseInt(subsidebar.css('left')) > 0 &&
              subsidebar.hasClass('opened')
            ) {
              subsidebar.css('left', '0%');
              subsidebar.css('z-index', '9');
            } else if (
              parseInt(subsidebar.css('left')) == 0 &&
              !subsidebar.hasClass('opened')
            ) {
              subsidebar.css('left', '-100%');
              setTimeout(function () {
                subsidebar.css('z-index', '9');
              }, 240);
            }
          }
        }
      } else if (window_w > last_window_w) {
        for (var i = 0; i < subsidebars_q; i++) {
          var menu_w = menu_tab_w + (i + 1) * menu_tab_w,
            subsidebar = subsidebars.eq(i);

          if (menu_w < window_w) {
            if (
              parseInt(subsidebar.css('left')) == 0 &&
              subsidebar.hasClass('opened')
            ) {
              subsidebar.css('left', '100%');
              setTimeout(function () {
                subsidebar.css('z-index', '');
              }, 240);
            } else if (
              parseInt(subsidebar.css('left')) < 0 &&
              !subsidebar.hasClass('opened')
            ) {
              subsidebar.css('left', '0%');
              subsidebar.css('z-index', '');
            }
          }
        }
      }

      last_window_w = window_w;
    });

    function closeSideBar() {
      $('#magic_sidebar > .cont').find('li.active > i').click();
      $('#sidebar_bg').css('display', 'none');
      $('body').css('overflow', '');
      $('#magic_sidebar').removeClass('showed_siderbar');
      $('#magic_sidebar').addClass('hidden_siderbar');
      $('#magic_sidebar_icon').addClass('fa-bars');
      $('#magic_sidebar_icon').removeClass('fa-times');
      $('.trigger_magic_sidebar > i.fa-caret-up').addClass('fa-caret-down');
      $('.trigger_magic_sidebar > i.fa-caret-down').removeClass('fa-caret-up');
      $('.trigger_magic_sidebar').removeClass('active');
    }
    function openSideBar() {
      $('#sidebar_bg').css('display', 'block');
      $('#magic_sidebar').removeClass('hidden_siderbar');
      $('#magic_sidebar').addClass('showed_siderbar');
      $('#magic_sidebar_icon').removeClass('fa-bars');
      $('#magic_sidebar_icon').addClass('fa-times');
      $('.trigger_magic_sidebar > i.fa-caret-down').addClass('fa-caret-up');
      $('.trigger_magic_sidebar > i.fa-caret-up').removeClass('fa-caret-down');
      $('.trigger_magic_sidebar').addClass('active');
    }
    function getTopDistance() {
      let distance;

      distance =
        $('header#header .header-top').offset().top -
        $(window).scrollTop() +
        $('header#header .header-top')[0].clientHeight;

      return distance;
    }
    function topPositioning() {
      setTimeout(function () {
        $('#magic_sidebar').css('top', getTopDistance() + 'px');
        $('#sidebar_bg').css('top', getTopDistance() + 'px');
      }, 500);
      $(window).on('scroll', function () {
        $('#magic_sidebar').css('top', getTopDistance() + 'px');
        $('#sidebar_bg').css('top', getTopDistance() + 'px');
      });
    }
    function getCategories() {
      if ($('#top-menu > li.category li.category').length) {
        let array = [];
        let categories = '';
        let tmp = 0;
        $('#top-menu > li.category').each(function () {
          array.push($(this).find('ul.top-menu').html());
          $(this).children().eq(1).remove();
          tmp += 1;
          tmp != 1 ? $(this).remove() : false;
        });
        // categories = '<ul id="sidebar_categories_list" >'+categories+'</ul>';
        return array;
      }
    }
    function getHeader() {
      if ($('#top-menu > li.category > a').length) {
        let tmp = 0;
        $('#top-menu > li.category').eq(0).find('a > span').remove();
        const header = $('#top-menu > li.category')
          .eq(0)
          .children()
          .eq(0)
          .text();
        $('#top-menu > li.category').eq(0).children().eq(0).removeAttr('href');
        $('#top-menu > li.category')
          .eq(0)
          .children()
          .eq(0)
          .addClass('trigger_magic_sidebar');
        $('#top-menu > li.category')
          .eq(0)
          .children()
          .eq(0)
          .css('cursor', 'pointer');
        $('#top-menu > li.category')
          .eq(0)
          .children()
          .eq(0)
          .append('<i class="fas fa-caret-down" style="margin-left:3px;"></i>');
        return header;
      }
    }
    function subsidebarEvents(id) {
      $(id + ' i.fa-chevron-right').each(function () {
        $(this).click(function () {
          const THIS = $(this);
          if (!$(this).parent().hasClass('active')) {
            if ($(this).parent().parent().find('li.active').length > 0) {
              let attr =
                $(this).parent().parent().attr('data-parent') == undefined
                  ? '#magic_sidebar'
                  : $(this).parent().parent().attr('data-parent');
              const Q = $(attr).find('.submenu.opened').length + 1;
              const time = 120 * Q;
              $(this).parent().parent().find('li.active > i').click();
              setTimeout(function () {
                THIS.click();
              }, time);
            } else {
              $(this).parent().addClass('active');
              open_submenu($(this));
            }
          } else if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
            let attr =
              $(this).parent().parent().attr('data-parent') == undefined
                ? '#magic_sidebar'
                : $(this).parent().parent().attr('data-parent');
            close_submenu(attr);
          }
        });
      });

      $(id + ' .header i.fa-times').each(function () {
        $(this).click(function () {
          let attr =
            $(this).attr('data-parent') == undefined
              ? '#magic_sidebar'
              : $(this).attr('data-parent');
          $(attr).find('li.category.active').removeClass('active');
          close_submenu(attr);
        });
      });
    }
    function test() {
      $('#sidebar_categories_list')
        .prepend(`<li class="category" id="category-test1">
                          	<a class="dropdown-item dropdown-submenu" href="http://cp.com.pl/53-klucze-udarowe-1" data-depth="1">                                      
                                Klucze udarowe 1
              				</a>
                            <div class="collapse" id="top_sub_menu_test1">
			          			<ul class="top-menu" data-depth="2">
				                    <li class="category" id="category-test2">
			                          	<a class="dropdown-item" href="http://cp.com.pl/54-2" data-depth="2">
			                                2"
				             	 		</a>
				             	 		<div class="collapse" id="top_sub_menu_test2">
						          			<ul class="top-menu" data-depth="3">
							                    <li class="category" id="category-test3">
						                          	<a class="dropdown-item" href="http://cp.com.pl/54-2" data-depth="3">
						                                2"
							             	 		</a>
							             	 		<div class="collapse" id="top_sub_menu_test3">
									          			<ul class="top-menu" data-depth="4">
										                    <li class="category" id="category-test4">
									                          	<a class="dropdown-item" href="http://cp.com.pl/54-2" data-depth="4">
									                                2"
										             	 		</a>
										             	 		
								                          	</li>

										              	</ul>
									              	</div>
									              	<i class="fas fa-chevron-right"></i>
					                          	</li>

							              	</ul>
						              	</div>
						              	<i class="fas fa-chevron-right"></i>
		                          	</li>

				              	</ul>
			              	</div>
                          <i class="fas fa-chevron-right"></i></li>`);
    }
    function open_submenu(item) {
      if (item) {
        item = item.parent();
        const depth = item.children().eq(0).attr('data-depth');
        const content = item.children().eq(1).children().html();
        const header = item.children().eq(0)[0].outerHTML;
        create_sub_sidebar(header, content, depth);
      }
    }
    function create_sub_sidebar(header, content, depth) {
      const id = '#sub_sidebar-' + depth;
      const parent_depth = depth - 1;
      const parent_id =
        depth == 1 ? '#magic_sidebar' : '#sub_sidebar-' + parent_depth;
      const array_content = [];
      array_content[0] = header;
      array_content[1] = content;

      check(id, depth, array_content);

      function check(id, depth, array_content) {
        if (!$('#magic_sidebar ' + id).length) {
          create(depth, array_content);
        } else if ($('#magic_sidebar ' + id).length) {
          construct(array_content, depth, parent_id);
        }
      }

      function create(depth, array_content) {
        if (parent_depth == 0 || $('#magic_sidebar ' + parent_id).length) {
          //perent exist
          construct(array_content, depth, parent_id);
        } else if (
          parent_depth > 0 &&
          !$('#magic_sidebar ' + parent_id).length
        ) {
          //parent didn't exist
          create(parent_depth);
        }
      }

      function construct(array_content, depth, parent_id) {
        const content = array_content;
        const id = 'sub_sidebar-' + depth;
        const times_id =
          depth > 1 ? 'sub_sidebar-' + (depth - 1) : 'magic_sidebar';
        const attr =
          'id="' + id + '" class="submenu opened" data-depth="' + depth + '"';

        var window_w = $(window).width(),
          menu_tab_w = $('#magic_sidebar').width(),
          menu_w = menu_tab_w + depth * menu_tab_w;

        if (!$('#' + id).length) {
          $(parent_id).append(
            '<div ' +
              attr +
              ' ><div class="cont"> <div class="header">' +
              content[0] +
              '<i class="fas fa-times" data-parent="#' +
              times_id +
              '"></i></div> <div class="content"><ul id="sidebar_categories_list" class="sub" data-parent="#' +
              id +
              '">' +
              content[1] +
              '</ul></div> </div> </div>'
          );
          if (menu_w > window_w) {
            $('#' + id).css('left', '-100%');
          }
        } else if (
          $('#' + id + ' > .cont > .header').length &&
          $('#' + id + ' > .cont > .content > .sub').length
        ) {
          $('#' + id).addClass('opened');
          $('#' + id + ' > .cont > .header').html(
            content[0] +
              '<i class="fas fa-times" data-parent="#' +
              times_id +
              '"></i>'
          );
          $('#' + id + ' > .cont > .content > .sub').html(content[1]);
        }

        setTimeout(function () {
          if (menu_w > window_w) {
            $('#' + id).css('z-index', '9');
            $('#' + id).css('left', '0%');
          } else {
            $('#' + id).css('z-index', '');
            $('#' + id).css('left', '100%');
          }
        }, 10);
        subsidebarEvents('#' + id);
      }
    }
    function close_submenu(item, fnct) {
      const Item = item;
      const delay = 120;

      close(Item);

      function close(id) {
        const ID = id;
        const subs = $(ID).find('.submenu.opened');
        const subs_Q = $(ID).find('.submenu.opened').length - 1;
        let Q = subs_Q;

        if ($('#sub_sidebar-1').css('left') != '0px') {
          subs.eq(Q).css('left', '0%');
          subs.eq(Q).removeClass('opened');
          if (subs_Q > 0) {
            let loop = setInterval(function () {
              Q -= 1;
              subs.eq(Q).css('left', '0%');
              subs.eq(Q).removeClass('opened');
              if (Q == 0) {
                clearInterval(loop);
              }
            }, delay);
          }
        } else {
          subs.eq(Q).css('left', '-100%');
          subs.eq(Q).removeClass('opened');
          if (subs_Q > 0) {
            let loop = setInterval(function () {
              Q -= 1;
              subs.eq(Q).css('left', '-100%');
              subs.eq(Q).removeClass('opened');
              if (Q == 0) {
                clearInterval(loop);
              }
            }, delay);
          }
        }
      }
    }
  }
  function addRestItems() {
    const dataListContainer = document.getElementById('_desktop_top_menu');
    const dataListChilds = Array.from(
      dataListContainer.querySelectorAll('li:not(#category-2)')
    ).reverse();
    const sidebarContainer = document.getElementById('sidebar_categories_list');
    dataListChilds.forEach(function (li) {
      const liClon = li.cloneNode(li);
      liClon.classList.add('sidebar-from-menu');
      sidebarContainer.prepend(liClon);
    });
  }
}

class TextTypingAnimation {
  constructor() {
    this.textsToType = [
      'Profil LED',
      'Akcesoria LED',
      'Przysłony LED',
      'Sterowniki LED',
      'Zasilacze LED',
      'Taśmy LED',
      'Moduły LED',
      'Części do lamp',
      'Zawiesia linkowe',
      'Oprawy',
      'Stelaże',
      'Komponenty elektroniczne',
    ];
    this.inputElement = $('#animationSearch');
    this.currentTextIndex = 0;
    this.currentCharIndex = 0;
    this.typingInterval = null;
    this.deleteInterval = null;

    this.addEventHandlers();
  }

  addEventHandlers() {
    this.inputElement.on('focus', () => this.handleFocus());
    this.inputElement.on('blur', () => this.handleBlur());
  }
  typeText() {
    const currentText = this.textsToType[this.currentTextIndex];

    this.inputElement.val(currentText.substring(0, this.currentCharIndex));

    if (this.currentCharIndex < currentText.length) {
      this.currentCharIndex++;
    } else {
      clearInterval(this.typingInterval);
      setTimeout(() => {
        this.deleteText();
      }, 2000);
    }
  }

  deleteText() {
    const currentText = this.textsToType[this.currentTextIndex];
    this.deleteInterval = setInterval(() => {
      this.currentCharIndex--;
      this.inputElement.val(currentText.substring(0, this.currentCharIndex));

      if (this.currentCharIndex <= 0) {
        clearInterval(this.deleteInterval);
        if (this.currentTextIndex >= this.textsToType.length - 1) {
          this.currentTextIndex = 0;
        } else {
          this.currentTextIndex++;
        }
        this.startTyping();
      }
    }, 50);
  }

  startTyping() {
    this.typingInterval = setInterval(() => this.typeText(), 100);
  }

  stopTyping() {
    clearInterval(this.typingInterval);
    clearInterval(this.deleteInterval);
  }

  handleFocus() {
    this.stopTyping();
    this.inputElement.val('');
  }

  handleBlur() {
    this.startTyping();
  }
}
