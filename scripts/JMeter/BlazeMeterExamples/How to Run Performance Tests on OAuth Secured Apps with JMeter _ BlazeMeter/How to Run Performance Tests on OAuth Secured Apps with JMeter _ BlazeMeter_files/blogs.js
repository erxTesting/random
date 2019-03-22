jQuery(document).ready(function (){



    var screen_width = jQuery(window).width();
    var document_width = jQuery(document).width();

    var links = jQuery(".post-title a");
    jQuery.each( links, function( i, val ) {
        var protocol = window.location.protocol;
        var hostname = window.location.hostname;
        var site_address = protocol + "//" + hostname;
        var name_lenght = site_address.length;
        var link =  jQuery(val).attr("href");
        var protocol = location.protocol;
        var host  = location.host;
        var address = protocol + "//" + host + link;
        var final_address = "https://graph.facebook.com/?id="+ address;
        jQuery.get(final_address, function( data ) {
            var url = data.id.substr(name_lenght);
            if(data.shares != undefined) {
                //jQuery("<p class='facebook_share_count'>"+data.shares+"</p>").insertAfter(jQuery("a[href$='"+url+"']").first().parent().parent().next().find(".a2a_button_facebook"));
                jQuery("<p class='facebook_share_count'>"+data.shares+"</p>").insertAfter(jQuery("a[href$='"+url+"']").last().parent().parent().next().find(".a2a_button_facebook"));
            }
            else  {
                //jQuery("<p class='facebook_share_count'>0</p>").insertAfter(jQuery("a[href$='"+url+"']").first().parent().parent().next().find(".a2a_button_facebook"));
                jQuery("<p class='facebook_share_count'>0</p>").insertAfter(jQuery("a[href$='"+url+"']").last().parent().parent().next().find(".a2a_button_facebook"));
            }
        }, "json" );

        var linked_adress = "https://www.linkedin.com/countserv/count/share?url=";
        final_address = linked_adress + address;
        jQuery.get(final_address, function( data ) {
            var url = data.url.substr(name_lenght);
            if(data.count != "0") {
                //jQuery("<p class='ln_share_count'>"+data.count+"</p>").insertAfter(jQuery("a[href$='"+url+"']").first().parent().parent().next().find(".a2a_button_linkedin"));
                jQuery("<p class='ln_share_count'>"+data.count+"</p>").insertAfter(jQuery("a[href$='"+url+"']").last().parent().parent().next().find(".a2a_button_linkedin"));
            }
            else  {
                //jQuery("<p class='ln_share_count'>0</p>").insertAfter(jQuery("a[href$='"+url+"']").first().parent().parent().next().find(".a2a_button_linkedin"));
                jQuery("<p class='ln_share_count'>0</p>").insertAfter(jQuery("a[href$='"+url+"']").last().parent().parent().next().find(".a2a_button_linkedin"));
            }
        }, "jsonp" );
    });




    var center_get_started_block = jQuery(".page-blog #block-block-17, .page-taxonomy-term #block-block-17, .page-blogs-on-author #block-block-17").html();
    jQuery(".page-blog #block-block-17, .page-taxonomy-term #block-block-17, .page-blogs-on-author #block-block-17").css('display', 'none');
    var posts = jQuery(".page-blog .view-content .blog-post, .page-taxonomy-term .view-content .blog-post, .page-blogs-on-author .view-content .blog-post");
        posts.first().next().next().next().after("<div id='center_get_started_block'>"+center_get_started_block+"</div>");

    var posts_on_author = jQuery(".page-blogs-on-author .view-content .views-field-nothing:eq(3)  .blog-post").after("<div id='center_get_started_block'>"+center_get_started_block+"</div>");

    var link_all = jQuery(".field-content").find("a:contains('All')").attr({
        "href": "/blog",
        "target": "_self"
    });

    var link_jmeter = jQuery(".view-blogs-category .field-content").find("a:contains('JMeter')").attr("href", "/jmeter");
    var link_devops = jQuery(".view-blogs-category .field-content").find("a:contains('DevOps')").attr("href", "/devops-0");
    var link_devops = jQuery(".view-blogs-category .field-content").find("a:contains('Continuous Integration')").attr("href", "/continuous-integration");
    var link_performance_testing = jQuery(".view-blogs-category .field-content").find("a:contains('Performance Testing')").attr("href", "/performance");
    var link_community = jQuery(".view-blogs-category .field-content").find("a:contains('Jenkins')").attr("href", "/jenkins");
    var link_blazemeter_news = jQuery(".view-blogs-category .field-content").find("a:contains('BlazeMeter News')").attr("href", "/news-and-category");
    var link_test_hacks = jQuery(".view-blogs-category .field-content").find("a:contains('Testing Hacks')").attr("href", "/perfomance-short-cuts");
    //var continuous_integration = jQuery(".view-blogs-category .field-content").find("a:contains('Continuous Integration')").attr("href", "/continuous-integration");


    var link_header_blog = jQuery(".nav-links-list").find("a:contains('Blog')");


    jQuery(link_header_blog).css({
        'display': 'inline-block',
        'padding': '9px',
        'text-decoration': 'none',
        'font-size': '13px',
        'letter-spacing': '0.02em',
        'margin': '0',
        'font-family': 'Lato Heavy',
        'color': '#dd4343',
        'background': 'none'
    });


    var lnk = document.links;
    var hashes = String(window.location.href.slice(window.location.href.indexOf('?') + 1).split('&'));
    var count_get_chars = hashes.length;
    var loc = window.location.href;
    var count_url_chars = loc.length;
    var clear_loc = loc.substring(0, (count_url_chars) - (count_get_chars + 1));



    var new_blog_post_category = jQuery(".new_blog_blog_post_category a").text();
    var new_blog_nav_category = jQuery(".node-type-blog .item-list").find("a:contains("+new_blog_post_category+")").text();
    if(new_blog_post_category == new_blog_nav_category){
        jQuery("span.field-content a:contains('"+new_blog_post_category+"')").attr('id', 'new_blog_blog_post_nav_active');
    }





    var down = false;
    var lastScrollTop = 0;
    jQuery(window).scroll(function() {

        var st = jQuery(this).scrollTop();
        if(st > lastScrollTop){
            down = true;
        } else {
            down = false;
        }
        lastScrollTop = st;

        if (jQuery(window).scrollTop() >= 150) {
            jQuery('.node-type-blog aside.sidebars.blog-sidebar').css({
                'position': 'fixed',
                'top': '0',
                'right': '-20px'

            });
            jQuery(".node-type-blog header#main_header").css({
                '-webkit-box-shadow': '0px 7px 30px -15px rgba(74,74,98, .5)',
                '-moz-box-shadow': '0px 7px 30px -15px rgba(74,74,98, .5)',
                'box-shadow': '0px 7px 30px -15px rgba(74,74,98, .5)'
            });
        } else if (jQuery(window).scrollTop() >= 100) {
            if(screen_width <= 1230){
                jQuery('.node-type-blog aside.sidebars.blog-sidebar').css({
                    'position': 'fixed',
                    'top': '0',
                    'right': '-20px'

                });
            }else{
                jQuery(".node-type-blog header#main_header").css({
                    '-webkit-box-shadow': '0px 0 0 0 rgba(74,74,98, .5)',
                    '-moz-box-shadow': '0px 0 0 0 rgba(74,74,98, .5)',
                    'box-shadow': '0px 0 0 0 rgba(74,74,98, .5)'
                });

                jQuery('.node-type-blog aside.sidebars.blog-sidebar').css({
                    'position': 'fixed',
                    'top': '100px',
                    'right': '-20px'

                });
            }

        } else {
            if(screen_width <=1230){
                jQuery('.node-type-blog aside.sidebars.blog-sidebar').css({
                    'position': 'fixed',
                    'top': '100px'

                });
            }else{
                jQuery('.node-type-blog aside.sidebars.blog-sidebar').css({
                    'position': 'fixed',
                    'top': '210px'

                });
            }
        }

        var window_height = jQuery(window).scrollTop() + jQuery(window).height();
        var footer_position_top = jQuery('#footer').offset().top;
        var popup_position_top = jQuery(".new_blog_aside").offset().top;
        var bottom_line_popup = popup_position_top + 500;
        if (window_height > footer_position_top && bottom_line_popup > footer_position_top){
            var counter = bottom_line_popup - footer_position_top;
            if (down == true) {
                jQuery(".node-type-blog aside.sidebars.blog-sidebar").css({
                    'top': -counter
                });
            } else {
                jQuery(".node-type-blog aside.sidebars.blog-sidebar").css({
                    'top': -counter
                });
            }
        }
    });



    //function blogs_search_form(){
    //    if(document_width <= 1920){
    //        jQuery(document).on('click', '#desctop_search_form #blog_search_form input[type="submit"]', function(){
    //            jQuery("#desctop_search_form #blog_search_form input[type='text']").removeClass('new_blog_desctop_non_active_search_form').focus();
    //            jQuery("#desctop_search_form #blog_search_form input[type='text']").addClass('new_blog_desctop_active_search_form');
    //            jQuery("#desctop_search_form #blog_search_form input[type='submit']").addClass('new_blog_desctop_active_submit');
    //
    //        });
    //
    //
    //        jQuery(document).on('click', 'html', function(){
    //            var blog_search_form_value = jQuery("#desctop_search_form #blog_search_form input[type='text'].new_blog_desctop_active_search_form").val();
    //            if(blog_search_form_value.length > 0){
    //                return false;
    //            }
    //            jQuery("#desctop_search_form #blog_search_form input[type='text']").removeClass('new_blog_desctop_active_search_form');
    //            jQuery("#desctop_search_form #blog_search_form input[type='text']").addClass('new_blog_desctop_non_active_search_form');
    //            jQuery("#desctop_search_form #blog_search_form input[type='submit']").removeClass('new_blog_desctop_active_submit');
    //        });
    //
    //        jQuery("#desctop_search_form #blog_search_form input[type='text']").click(function(event){
    //            event.stopPropagation();
    //        });
    //    }
    //}

    //blogs_search_form();

    jQuery(window).resize(function(){
        screen_width = jQuery(window).width();
        document_width = jQuery(document).width();
        var position_top = jQuery('.node-type-blog aside.sidebars.blog-sidebar').css("top");
        if(screen_width <= 1230 && screen_width > 900){
            if(position_top == '210px'){
                jQuery('.node-type-blog aside.sidebars.blog-sidebar').css({
                    'top': '100px'
                })
            }
        }else{
            if(position_top == '100px'){
                jQuery('.node-type-blog aside.sidebars.blog-sidebar').css({
                    'top': '210px'
                })
            }
        }

        //blogs_search_form();

        screen_width = jQuery(window).width();
        if(screen_width > 1230){
            jQuery(".new_blog_menu").show();
        }

    });



    if(screen_width <= 800){
        jQuery(".single-post-content iframe").attr("width", "405");
    }

    for (j = 0; j < lnk.length; j++){

        if (lnk [j].href == document.URL || lnk [j].href == clear_loc) {

            if(screen_width < 1230){
                jQuery(lnk [j]).css({
                    'padding': '4px 10px',
                    'font-size': '18px',
                    'color': '#ffffff',
                    'background': 'none'
                });
                jQuery(lnk [j]).parent().parent().parent(".view-blogs-category .item-list ul li").css({
                    "background": '#4378b7'
                });
            }else{
                jQuery(lnk [j]).css({
                    'padding': '4px 10px',
                    'font-size': '18px',
                    'color': '#ffffff',
                    'background-color': '#5c92d1',
                    'border-color': '#5c92d1'
                }).addClass("blog_category_active");
            }
        }

    }



    jQuery(".page-taxonomy-term #new_blog_bottom_block").hide();
    var new_blog_bottom_block = jQuery("<div class='new_blog_bottom_block'>Interested in writing for our Blog? <span><a href='https://blazemeter.com/contact-us#press'> Send us a pitch!</a></span></div>");
    new_blog_bottom_block.appendTo(jQuery(".page-blog .content-wrapper, .page-taxonomy-term .content-wrapper "));
    new_blog_bottom_block.insertBefore(jQuery(".page-blogs-on-author #footer "));


    jQuery(".node-type-blog .new_blog_bottom_block").hide();
    new_blog_bottom_block.insertAfter(jQuery(".node-type-blog .blog-tags"));


    jQuery(document).on("focus", "li#mobile_search_form", function(){
        jQuery(".new_blog_menu").show();
    });



    jQuery(document).on('click', '.new_blog_hamburger', function(){
        jQuery(".new_blog_menu").slideToggle("fast");
        jQuery(".new_blog_hamburger img").toggleClass("new_blog_hamburger_rotate_trangle")
    });


    if(screen_width < 321){
        jQuery(".node-type-blog p iframe").removeAttr("width");
    }


    //++++++++++++++++++++++++++++++++++++++++




    if (screen_width < 668) {
        jQuery(".node-type-blog .blog-sidebar").appendTo(jQuery(".node-type-blog .field-name-field-author-photo .field-item"));
    }





    //++++++++++++++++ SEARCH +++++++++++++++++++

    function createCookie(name,value,days) {
        if (days) {
            var date = new Date();
            date.setTime(date.getTime()+(days*24*60*60*1000));
            var expires = "; expires="+date.toGMTString();
        }
        else var expires = "";
        document.cookie = name+"="+value+expires+"; path=/";
    }

    jQuery(document).on("click", "#search_blog_button", function(){
        if(jQuery("#desctop_search_form").is(":visible")){
            var search_val = jQuery("#desctop_search_form #blog_search_form input[type='text']").val();
        }else{
            var search_val = jQuery("#mobile_search_form #blog_search_form input[type='text']").val();
        }

        if(search_val.length == 0){
            return false;
        }
        createCookie("new_search_text_cookie", search_val);
        location.href = "/search/node/"+search_val+"%20type%3Ablog";
        return false;
    });


    jQuery('html').keydown(function(eventObject){
        if (eventObject.keyCode == 13 && jQuery("#blog_search_form input[type='text']").is(":focus")) {
            jQuery("#search_blog_button").click();
            return false;
        }else{
            return true;
        }
    });

    // ++++++++++++++++++++++++++++++++++++++++++++++++


    var blog_author_single_linked_in = jQuery(".page-blogs-on-author .field.field-name-field-blog-author-twiter.field-type-link-field.field-label-above");
    if(blog_author_single_linked_in.length == 0){
        jQuery(".page-blogs-on-author .field.field-name-field-linked-in.field-type-link-field.field-label-above").addClass('blog_author_linked_in_single');
    }

    jQuery(".page-blogs-on-author .blog_author_block a").removeAttr("style");
    jQuery(".page-blogs-on-author .txt-holder.post-content-holder span").removeAttr("style");

});
