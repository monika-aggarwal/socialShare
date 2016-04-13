
# An Introduction
Simple, light, flexible, and good-looking share button. 
## Why Should You Use This?
All major social networks have their own share widgets you can put on your page, but this isn't ideal for a variety of reasons:

1. They tend to be slow-loading.
2. They inject extra javascript and DOM elements into your page making it slower.
3. They generally aren't customizable enough to fit the design of your site.
4. Managing each provider's code snippets etc is repetitive and needless. Additionally, they can make your front-end code quite messy.
5. The buttons themselves take up a lot of space (especially the Facebook share button).

Let's take a quick look at the alternative, using this little plugin:

1. It injects the minimal javascript making the overall load time much faster.
2. It looks simple and clean by default, and can be customized.
3. All you have to do to use it is include the script and call `createshare` on an element. 
4. It's tiny and compact, expanding only when the user actually wants to share something.

# Getting Started
1. Download the latest script and images and include it on your page.
2. Make a `sharebutton`element on your page.
3. In your javascript, call `$(‘sharebutton’).createshare()’.
4. Pass options to the share call if you want (details below).

```html
    <div class="sharebutton"></div>
```

```js
    $('.sharebutton').createshare();
```

# Customization
## Configuration Options
The share button is extremely flexible. As such we provide the ability to pass an array of options for additional configuration. All configuration options are available here:
```js
var config = {
        facebook:{
            appId:'' , //Your registered facebook appId must be passed in it.
            name: '' , //The name of the article that you want to share.
            link: ‘’ , //the url you'd like to share to Facebook
            picture: '' , //image to be shared to Facebook 
            caption: ‘’ , //caption to be shared alongside your link to Facebook 
            description: '' , //text to be shared alongside your link to Facebook
            message: '' , //message to appear when an item is shared
            enabled: // Is true by default
        },
        googleplus:{
            url:  ‘’ , //the url you'd like to share to googleplus
            enabled: // Is true by default
        },
        twitter:{
            url:  ‘’ ,// the url you'd like to share to twitter
            description : '', //the text to be shared on twitter
            enabled: // Is true by default
        },  
        mail:{
            title: ’’ , //the subject of the email
            description:  ‘’ , //the body of the email  
            enabled: // Is true by default     
        },
        whatsapp:{
            url:  ‘’ , //the url to be shared on whatsapp
            description: ’’ , //the text to be shared on whatsapp
            enabled: // Is true by default
        },
        sms:{
            description: ‘’ , //the text to be shared on sms
            enabled: // Is true by default
        }

    };
    $('sharebutton').createshare(config);
```
##Styles
Additionally, you're able to customize the look and feel of the button and animations though CSS. 
