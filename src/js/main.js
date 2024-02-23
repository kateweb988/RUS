
window.addEventListener("DOMContentLoaded", function () {
  [].forEach.call(document.querySelectorAll('.tel'), function (input) {
    var keyCode;
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 (___) ___ ____",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        });
      i = new_value.indexOf("_");
      if (i != -1) {
        i < 5 && (i = 3);
        new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
        function (a) {
          return "\\d{1," + a.length + "}"
        }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

// document.addEventListener("DOMContentLoaded", () => {
//   var form = document.getElementById('form');
//   form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     var checkValid = validatInputs();
//     if (checkValid) {
//       // console.log('No Error');
//       form.submit();
//     } else {
//       // console.log('Error');
//     }
//   });
//   function validatInputs() {
//     var inputs = form.querySelectorAll('.form-control');
//     var valid = [];
//     var radioCheck = false;
//     var checkboxCheck = false;
//     inputs.forEach(function (i, j) {
//       if (i.getAttribute('type')) {
//         var checkAttr = i.getAttribute('type');
//       } else {
//         var checkAttr = i.tagName;
//       }

//       switch (checkAttr) {
//         case 'radio':
//           // console.log(i.checked);
//           if (!radioCheck) {
//             if (!i.checked) {
//               // i.parentNode.classList.add("error");
//               radioCheck = false;
//             } else {
//               // i.parentNode.classList.remove("error");
//               radioCheck = true;
//             }
//           }
//           break;
//         case 'checkbox':
//           if (!checkboxCheck) {
//             if (!i.checked) {
//               // i.parentNode.classList.add("error");
//               checkboxCheck = false;
//             } else {
//               // i.parentNode.classList.remove("error");
//               checkboxCheck = true;
//             }
//           }

//           break;
//         case 'text':
//           var _thisVal = i.value;
//           if (i.getAttribute('data-name') == 'name') {
//             if (!isNaN(i.value)) {
//               _thisVal = '';
//             }
//           }
//           if (_thisVal == '') {
//             i.parentNode.classList.add("error");
//             valid.push(i.getAttribute('name'));
//           } else {
//             i.parentNode.classList.remove("error");
//           }
//           break;
//         case 'tel':
//           if (i.value == '' || isNaN(i.value)) {
//             i.parentNode.classList.add("error");
//             valid.push(i.getAttribute('name'));
//           } else {
//             i.parentNode.classList.remove("error");
//           }
//           break;
//         case 'email':
//           var regEmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//           if (i.value == '' || !regEmail.test(i.value)) {
//             i.parentNode.classList.add("error");
//             valid.push(i.getAttribute('name'));
//           } else {
//             i.parentNode.classList.remove("error");
//           }
//           break;
//         case 'select':
//           if (i[select.selectedIndex].value == '') {
//             i.parentNode.classList.add("error");
//             valid.push(i.getAttribute('name'));
//           } else {
//             i.parentNode.classList.remove("error");
//           }
//           break;
//         default:
//           if (i.value == '') {
//             i.parentNode.classList.add("error");
//             valid.push(i.getAttribute('name'));
//           } else {
//             i.parentNode.classList.remove("error");
//           }
//           break;
//       }
//     });
//     if (!checkboxCheck) {
//       // console.log(document.getElementsByClassName('checkbox')[0].classList);
//       document.getElementsByClassName('checkbox')[0].classList.add("error");
//       valid.push('checkbox');
//     } else {
//       document.getElementsByClassName('checkbox')[0].classList.remove("error");
//     }
//     if (!radioCheck) {
//       // console.log(document.getElementsByClassName('radiocheck')[0].classList);
//       document.getElementsByClassName('radiocheck')[0].classList.add("error");
//       valid.push('radio');
//     } else {
//       document.getElementsByClassName('radiocheck')[0].classList.remove("error");
//     }

//     if (valid.length > 0) {
//       // console.log(valid.length);
//       return false;
//     } else {
//       return true;
//     }

//   }
// });

// document.addEventListener("DOMContentLoaded", () => {
//   var navigationSelect = document.querySelector('.select-wrapper');

//   function initSelect(elem) {
//     var selectHolder = elem.querySelector('.holder');
//     var selectOptions = elem.querySelectorAll('.dropdownOption li');
//     var dropHolder = elem.querySelector('.dropdown');
//     var selectedOption = selectOptions[0];

//     selectedOption.classList.add('current');

//     selectHolder.addEventListener('click', function () {
//       dropHolder.classList.toggle('active');
//     });

//     selectOptions.forEach(function (currentElement) {
//       currentElement.addEventListener('click', function () {
//         selectedOption.classList.remove('current');
//         selectedOption = currentElement;
//         currentElement.classList.add('current');
//         selectHolder.innerText = currentElement.textContent;
//         dropHolder.classList.toggle('active');
//       });
//     });
//   };

//   initSelect(navigationSelect);
// });
document.addEventListener('DOMContentLoaded', function () {
  $('.articmodal-close').click(function (e) {
    $.arcticmodal('close');

  });
});
document.addEventListener("DOMContentLoaded", () => {
  $(document).ready(function () {
    $('[data-submit]').on('click', function (e) {
      e.preventDefault();
      $(this).parents('form').submit();
    })
    $.validator.addMethod(
      "regex",
      function (value, element, regexp) {
        var re = new RegExp(regexp);
        return this.optional(element) || re.test(value);
      },
      "Please check your input."
    );
    function valEl(el) {

      el.validate({
        rules: {
          tel: {
            required: true,
            regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
          },
          name: {
            required: true
          }
        },
        messages: {
          tel: {
            required: 'Заполните поле',
            regex: 'Телефон может содержать символы + - ()'
          },
          name: {
            required: 'Заполните поле',
          },
          check: {
            required: 'Поставьте галочку',
          },
          mail: {
            required: 'Заполните поле',
            email: 'Неверный формат E-mail'
          }
        },
        submitHandler: function (form) {
          $('#loader').fadeIn();
          var $form = $(form);
          var $formId = $(form).attr('id');
          switch ($formId) {
            case 'popupResult':
              $.ajax({
                type: 'POST',
                url: $form.attr('action'),
                data: $form.serialize(),
              })
                .always(function (response) {
                  setTimeout(function () {
                    $('#loader').fadeOut();
                  }, 800);
                  setTimeout(function () {
                    $.arcticmodal('close');
                    $('#popup-thank').arcticmodal({});
                    $form.trigger('reset');
                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                  }, 1100);

                });
              break;
          }
          return false;
        }
      })
    }

    $('.js-form').each(function () {
      valEl($(this));
    });
    $('[data-scroll]').on('click', function () {
      $('html, body').animate({
        scrollTop: $($.attr(this, 'data-scroll')).offset().top
      }, 2000);
      event.preventDefault();
    })
  });

});
document.addEventListener("DOMContentLoaded", () => {
  (function ($) {
    var elActive = '';
    $.fn.selectCF = function (options) {

      // option
      var settings = $.extend({
        color: "#888888", // color
        backgroundColor: "#FFFFFF", // background
        change: function () { }, // event change
      }, options);

      return this.each(function () {

        var selectParent = $(this);
        list = [],
          html = '';

        //parameter CSS
        var width = $(selectParent).width();

        $(selectParent).hide();
        if ($(selectParent).children('option').length == 0) { return; }
        $(selectParent).children('option').each(function () {
          if ($(this).is(':selected')) { s = 1; title = $(this).text(); } else { s = 0; }
          list.push({
            value: $(this).attr('value'),
            text: $(this).text(),
            selected: s,
          })
        })

        // style
        var style = " background: " + settings.backgroundColor + "; color: " + settings.color + " ";

        html += "<ul class='selectCF'>";
        html += "<li>";
        html += "<span class='arrowCF ion-chevron-right' style='" + style + "'></span>";
        html += "<span class='titleCF' style='" + style + "; width:" + width + "px'>" + title + "</span>";
        html += "<span class='searchCF' style='" + style + "; width:" + width + "px'><input style='color:" + settings.color + "' /></span>";
        html += "<ul>";
        $.each(list, function (k, v) {
          s = (v.selected == 1) ? "selected" : "";
          html += "<li value=" + v.value + " class='" + s + "'>" + v.text + "</li>";
        })
        html += "</ul>";
        html += "</li>";
        html += "</ul>";
        $(selectParent).after(html);
        var customSelect = $(this).next('ul.selectCF'); // add Html
        var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
        var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
        var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');

        // handle active select
        $(customSelect).unbind('click').bind('click', function (e) {
          e.stopPropagation();
          if ($(this).hasClass('onCF')) {
            elActive = '';
            $(this).removeClass('onCF');
            $(this).removeClass('searchActive'); $(seachElInput).val('');
            $(seachElOption).show();
          } else {
            if (elActive != '') {
              $(elActive).removeClass('onCF');
              $(elActive).removeClass('searchActive'); $(seachElInput).val('');
              $(seachElOption).show();
            }
            elActive = $(this);
            $(this).addClass('onCF');
            $(seachEl).children('input').focus();
          }
        })

        // handle choose option
        var optionSelect = $(customSelect).children('li').children('ul').children('li');
        $(optionSelect).bind('click', function (e) {
          var value = $(this).attr('value');
          if ($(this).hasClass('selected')) {
            //
          } else {
            $(optionSelect).removeClass('selected');
            $(this).addClass('selected');
            $(customSelect).children('li').children('.titleCF').html($(this).html());
            $(selectParent).val(value);
            settings.change.call(selectParent); // call event change
          }
        })

        // handle search 
        $(seachEl).children('input').bind('keyup', function (e) {
          var value = $(this).val();
          if (value) {
            $(customSelect).addClass('searchActive');
            $(seachElOption).each(function () {
              if ($(this).text().search(new RegExp(value, "i")) < 0) {
                // not item
                $(this).fadeOut();
              } else {
                // have item
                $(this).fadeIn();
              }
            })
          } else {
            $(customSelect).removeClass('searchActive');
            $(seachElOption).fadeIn();
          }
        })

      });
    };
    $(document).click(function () {
      if (elActive != '') {
        $(elActive).removeClass('onCF');
        $(elActive).removeClass('searchActive');
      }
    })
  }(jQuery));

  $(function () {
    var event_change = $('#event-change');
    $(".select").selectCF({
      change: function () {
        var value = $(this).val();
        var text = $(this).children('option:selected').html();
        console.log(value + ' : ' + text);
        event_change.html(value + ' : ' + text);
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var lazyloadImages = document.querySelectorAll("img.lazy");
  var lazyloadThrottleTimeout;
  function lazyload() {
    if (lazyloadThrottleTimeout) {
      clearTimeout(lazyloadThrottleTimeout);
    }
    lazyloadThrottleTimeout = setTimeout(function () {
      var scrollTop = window.pageYOffset;
      lazyloadImages.forEach(function (img) {
        if (img.offsetTop < (window.innerHeight + scrollTop)) {
          img.src = img.dataset.src;
          img.classList.remove('lazy');
        }
      });
      if (lazyloadImages.length == 0) {
        document.removeEventListener("scroll", lazyload);
        window.removeEventListener("resize", lazyload);
        window.removeEventListener("orientationChange", lazyload);
      }
    }, 20);
  }
  document.addEventListener("scroll", lazyload);
  window.addEventListener("resize", lazyload);
  window.addEventListener("orientationChange", lazyload);
});

document.addEventListener("DOMContentLoaded", () => {
  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
  });
});

