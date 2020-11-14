$(function () {
    $('.header__btn-mobile').click(function (event) {
        $(this).toggleClass('_active');
        $('.header__menu-list').toggleClass('_active');
        $('.header__menu').toggleClass('_active');
        if ($(this).hasClass('_active')) {
            $('body').data('scroll', $(window).scrollTop());
        }
        $('body').toggleClass('_lock');
        if (!$(this).hasClass('_active')) {
            $('body,html').scrollTop(parseInt($('body').data('scroll')));
        }
    });

    $('.header__link, .header__menu').click(function (event) {
        $(this).toggleClass('_active');
        $('.header__btn-mobile').removeClass('_active');
        $('.header__menu-list').removeClass('_active');
        $('.header__menu').removeClass('_active');
        if ($(this).hasClass('_active')) {
            $('body').data('scroll', $(window).scrollTop());
        }
        $('body').removeClass('_lock');
        if (!$(this).hasClass('_active')) {
            $('body,html').scrollTop(parseInt($('body').data('scroll')));
        }
    });


    $(".activity__select").change(function () {
        var selectedEventType = this.options[this.selectedIndex].value;
        if (selectedEventType == "all") {
            $('.activity-form__btn-show').on('click', function () {
                $('.activity__body .activity__item').removeClass('hidden');
            });
        } else {
            $('.activity-form__btn-show').on('click', function () {
                $('.activity__body .activity__item').addClass('hidden');
                $('.activity__body .activity__item[data-eventtype="' + selectedEventType + '"]').removeClass('hidden');
            });

            $('.activity-form__btn-reset').on('click', function () {
                $('.activity__body .activity__item').removeClass('hidden');
            });
        }
    });

    $('select').styler();

    $('.title-materials').on('click', function () {
        $(this).next().slideToggle();
        $(this).toggleClass('_active');
    });

    $('.activity-item__link').click(function () {
        $(this).toggleClass('_active');
        if ($(this).hasClass('_active')) {
            $(this).parent().css('display', 'none');
            $(this).parent().next().css('display', 'block');
            $(this).removeClass('_active');
        }
    });

    $('.activity-item__link-hidden').click(function () {
        $(this).toggleClass('_active');
        if ($(this).hasClass('_active')) {
            $(this).parent().css('display', 'none');
            $(this).parent().prev().css('display', 'block');
            $(this).removeClass('_active');
        }
    });


    $('.library__link').click(function () {
        $(this).each(function () {
            $(this).next().slideToggle();
            $(this).toggleClass('_active');
        });
    });


    $(document).on('click', '.library-list__link', function () {
        $(this).toggleClass('_active');
        if ($(this).hasClass('_active')) {
            $(this).parent().css('display', 'none');
            $(this).parent().next().css('display', 'block');
            $(this).removeClass('_active');
        }
    });
    
    $(document).on('click', '.library-list__link-hidden', function () {
        $(this).toggleClass('_active');
        if ($(this).hasClass('_active')) {
            $(this).parent().css('display', 'none');
            $(this).parent().prev().css('display', 'block');
            $(this).removeClass('_active');
        }
    });
});


