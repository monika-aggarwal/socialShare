(function($) {
    var currentURL = window.location.href;
    var fbUrl="https://connect.facebook.net/en_US/sdk.js";
    var option = {
        facebook: {
            method: 'feed',
            appId:'',      
            name: '',
            link: currentURL,
            picture: '',
            caption: '',
            description: '',
            message: ''
        },
        googleplus: {
            url: currentURL
        },
        twitter: {
            url: currentURL,
            description: ''
        },
        mail: {
            title: '',
            description: currentURL
        },
        whatsapp: {
            url: currentURL,
            description: ''
        },
        sms: {
            description: currentURL
        }
    };
    var template = function() {
        return  "<div class='share-bundle'>"+
                "<span class='socialPluginButtons animation'>" +
                "<a class='fb_share' ><img src='./images/fb-icon.png' ></a>" +
                "<a class='m_share' ><img src='./images/mail+icon.png'></a>" +
                "<a class='w_share  mobile_display ' ><img src='./images/whatsapp.png'></a>" +
                "<a class='sms_share mobile_display' ><img src='./images/sms-icon.png'></a>" +
                "<a class='t_share' ><img src='./images/tweet.png'></a>" +
                "<a class='g_share'><img src='./images/gplus-icon.png'></a>" +
                "</span>"+
                "<button type='button' class='main_share_button share_button'>share</button>" +
                "</div>";
    };
    var addRemove = function(platform) {
        switch (platform) {
            case 'facebook':
                $('.fb_share').addClass('hide');
                break;
            case 'googleplus':
                $('.g_share').addClass('hide');
                break;
            case 'twitter':
                $('.t_share').addClass('hide');
                break;
            case 'mail':
                $('.m_share').addClass('hide');
                break;
            case 'whatsapp':
                $('.w_share').addClass('hide');
                break;
            case 'sms':
                $('.sms_share').addClass('hide');
                break;
            default:
                break;
        }
    };
    var extend = function(option, config) {
        for (var key in config) {
            if (Array.isArray(config[key]) !== true && typeof config[key] === "object") {
                for (var attribute in config[key]) {
                    if (attribute == 'enabled') {
                        if (config[key][attribute] === false) {
                            addRemove(key);
                            break;
                        }
                    } else {
                        option[key][attribute] = config[key][attribute];
                    }
                }
            }
        }
    };
    $('.sharebutton').append(template());
    $.fn.createshare = function(config) {
        extend(option, config);
        $('.main_share_button').on("click",function(){
            $('.socialPluginButtons').toggleClass('animation');
        });

        $(this).find('.g_share').click(function() {
            window.open("https://plus.google.com/share?url={" + option.googleplus.url + "}");
        });

        $(this).find('.fb_share').click(function() {
            FB.ui(option.facebook);
        });

        $(this).find('.t_share').click(function() {
            window.open("https://twitter.com/intent/tweet?text=" + option.twitter.description + "" + option.twitter.url + "");
        });

        $(this).find('.m_share').click(function() {
            window.location.href = 'mailto:?subject=' + option.mail.title + '&body=' + option.mail.description;
        });

        $(this).find('.sms_share').click(function() {
            window.location.href = 'sms:?body=' + option.sms.description;
        });

        if (isMobile.any()) {
            $('.w_share').removeClass('mobile_display');
            $('.sms_share').removeClass('mobile_display');
        }

        $(this).find('.w_share').click(function() {
            if (isMobile.any()) {
                var url = option.whatsapp.url;
                var text = option.whatsapp.description;
                var message = encodeURIComponent(text) + " - " + encodeURIComponent(url);
                var whatsapp_url = "whatsapp://send?text=" + message;
                window.location.href = whatsapp_url;
            } else {
                alert("Please share this article in mobile device");
            }
        });
    };
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    window.fbAsyncInit = function() {
        FB.init({
            appId: option.facebook.appId, 
            xfbml: true,
            version: 'v2.5'
        });
    };
    (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return; }
        js = d.createElement(s);
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}(jQuery));