// CONTACT FORMS class and attribute handling
jQuery(document).ready(function() { 
    jQuery( '.cycle-slideshow' ).on( 'cycle-after', function( event, opts ) {
    	var src_path = jQuery( '.cycle-slide-active .imgover img' ).attr('src');
    	jQuery( '.cycle-slide-active .imgover img' ).attr('src', src_path);
	});
	var s = jQuery("#block-block-16");
	var windowposmax = jQuery(window).scrollTop();
	if(s.length > 0) {
		var pos = s.position();
	    jQuery(window).scroll(function() {
	        var windowpos = jQuery(window).scrollTop();
	        var navbarHeight = jQuery('#navbar').height();
	        var posttop = pos.top - navbarHeight;
	        if(windowpos > windowposmax) {
		        windowposmax = windowpos;
	        }
	        if(windowpos >= posttop) {
		        if(jQuery(s).hasClass('stick-hide')) {
			        if(windowpos < windowposmax) {
				        s.fadeIn();
			        }
		        } else {
			      if(jQuery('.sumome-scrollbox-popup').length > 0) {
				  	s.addClass('stick-hide');
				  	s.fadeOut();
			      }
		        }
		        if(location.pathname == "/blog") {
			      var sFromTop = 0;
			      var blogfromTop = jQuery('.blog-content .view-content').position();
				  var blogHeight = jQuery('.blog-content .view-content').height();
		        } else {
			      var sFromTop = 200;
			      var blogfromTop = jQuery('.blog-content .single-post-content').position();
			      var blogHeight = jQuery('.blog-content .single-post-content').height();
		        }
			    var sHeight = s.height();
			    var spause = blogfromTop.top + blogHeight - sHeight;
		       if(windowpos > spause) {
			       s.removeClass('stick');
			       s.addClass("stick-fixed");
			       s.css('top', spause + navbarHeight);
		        } else {
			        s.removeClass("stick-fixed");
			        s.addClass("stick");
			        s.css('top',pos.top);
		        }
	        } else {
		        s.removeClass("stick");
		        s.css('top','0');
	        }
	    });
	}

	jQuery('.contact-form .form-item textarea').removeClass('text');
	jQuery('.contact-form .form-item textarea').removeAttr('cols');
	jQuery('.contact-form .form-item textarea').removeAttr('rows');
	
	jQuery('.contact-form .form-textarea-wrapper .grippie').remove(); // remove Drupal resize handle
	
	jQuery('.contact-form-block .form-actions input').removeClass('form-submit');
	jQuery('.contact-form-block .form-actions input').addClass('main-btn');

	// JOBS PAGE expander
	jQuery(".job-expander").css('cursor', 'pointer');
	jQuery(".job-expander").click(function() {     
		jQuery(this).parent().find('.job-content').slideToggle('2000', "easeInOutExpo", function () {
			// Animation complete.
		});
		jQuery(this).toggleClass('expanded');
	});

	// CONTACT FORM select option fix
	jQuery('.select-option').click(function(){
		var current_selected_option = jQuery('.val').text();
		var new_selected_option = jQuery(this).text();
		jQuery('#edit-submitted-number-of-employees [value="' + current_selected_option + '"]').removeAttr("selected");
		jQuery('#edit-submitted-number-of-employees [value="' + new_selected_option + '"]').attr("selected", "selected");
	});
	
	// CONTACT FORM hashtag links
	var hash = window.location.hash.substring(1);
	jQuery('.bz-tabs-nav li:nth-child(1)').attr('id', 'sales');
	jQuery('.bz-tabs-nav li:nth-child(2)').attr('id', 'support');
	jQuery('.bz-tabs-nav li:nth-child(3)').attr('id', 'press');
	if(hash == 'sales'){
		jQuery('#tab-1').show();
		jQuery('#tab-2').hide();
		jQuery('#tab-3').hide();
		jQuery('#sales').addClass("active");
		jQuery('#support').removeClass("active");
		jQuery('#press').removeClass("active");
	}
	if(hash == 'support'){
		jQuery('#tab-1').hide();
		jQuery('#tab-2').show();
		jQuery('#tab-3').hide();
		jQuery('#support').addClass("active");
		jQuery('#press').removeClass("active");
		jQuery('#sales').removeClass("active");
	}
	if(hash == 'press'){
		jQuery('#tab-1').hide();
		jQuery('#tab-2').hide();
		jQuery('#tab-3').show();
		jQuery('#press').addClass("active");
		jQuery('#sales').removeClass("active");
		jQuery('#support').removeClass("active");
	}
	 setTimeout(function(){
		window.scrollTo(0,0);
	 }, 100);
	 jQuery('.testnow-cta').click(function(){
         jQuery('#signup-popup').fadeIn();
         jQuery('div.fade').css({
                 'display': 'block',
                 'opacity': 1
         });
	 });
	 
	 jQuery(window).on('load',function (e) {
		 var pathname = window.location.href;
		 var intro_substr = window.location.href.indexOf("#");
		 var pathname_parameter = pathname.substring(intro_substr);
		 var destination = jQuery(pathname_parameter).offset().top;
		 if(jQuery.browser.webkit){
			 jQuery('body').animate({ scrollTop: destination-100 }, 1100);
		 }else if(jQuery.browser.mozilla){
			 jQuery('html').stop().animate({ scrollTop: destination }, 1100);
		 }else{
			 jQuery('html').stop().animate({ scrollTop: destination-100 }, 1100);
		 }

		 jQuery('html, body').stop().animate({ scrollTop: destination-100 }, 1100);


		 e.preventDefault();
		 //if(hash == 'features-performance' || hash == 'features-continuous' || hash == 'features-mobile'){
			// var target = '#' + hash;
			// var $target = jQuery(target);
			// if(jQuery.browser.webkit){
			//	 jQuery('body').animate({
			//		 'scrollTop': $target.offset().top
			//	 }, 900, 'easeInOutExpo');
         //
			// }else{
			//	 jQuery('html').animate({
			//		 'scrollTop': $target.offset().top
			//	 }, 900, 'easeInOutExpo');
			// }
         //
		 //}
		});

	 jQuery('.features-header').hcSticky({
		 	noContainer: true,
		 	innerSticker: '#features-performance'
		 		});

	 var lastId,
	     topMenu = jQuery(".features-groups"),
	     topMenuHeight = topMenu.outerHeight(),
	     // All list items
	     menuItems = topMenu.find("a"),
	     // Anchors corresponding to menu items
	     scrollItems = menuItems.map(function(){
	       var item = jQuery(jQuery(this).attr("href"));
	       if (item.length) { return item; }
	     });

	 // Bind click handler to menu items
	 // so we can get a fancy scroll animation
	 menuItems.click(function(e){
	   var href = jQuery(this).attr("href"),
	       offsetTop = href === "#" ? 0 : jQuery(href).offset().top-topMenuHeight;
		 if(jQuery.browser.webkit){
			 jQuery('body').animate({
				 scrollTop: offsetTop-50
			 }, 700);
		 }else if(jQuery.browser.mozilla){
			 jQuery('html').animate({
				 scrollTop: offsetTop
			 }, 700);
		 }else{
			 jQuery('html').animate({
				 scrollTop: offsetTop-50
			 }, 700);
		 }

	   e.preventDefault();
	 });

	var bottomMenu = jQuery("#footer #use_cases");
	var bottomMenuItems = bottomMenu.find("a");
	jQuery(bottomMenuItems).on('click', function(){
		var bottomLink = jQuery(this).attr("href");
		bottomLink = bottomLink.replace("/usecases", "");
		var destination = jQuery(bottomLink).offset().top;
		if(jQuery.browser.webkit){
			jQuery('body').animate({ scrollTop: destination-100 }, 1100);
		}else if(jQuery.browser.mozilla){
			jQuery('html').animate({ scrollTop: destination-100 }, 1100);
		}else if(jQuery.browser.msie){
			jQuery('body').animate({ scrollTop: destination-100 }, 1100);
		}else{
			jQuery('html').animate({ scrollTop: destination-100 }, 1100);
		}

	});

	 // Bind to scroll
	 jQuery(window).scroll(function(){
	    // Get container scroll position
	    var fromTop = jQuery(this).scrollTop()+topMenuHeight+150;
	    
	    // Get id of current scroll item
	    var cur = scrollItems.map(function(){
	      if (jQuery(this).offset().top < fromTop)
	        return this;
	    });
	    // Get the id of the current element
	    cur = cur[cur.length-1];
	    var id = cur && cur.length ? cur[0].id : "";
	    
	    if (lastId !== id) {
	        lastId = id;
	        menuItems
	         .parent().removeClass("active")
	         .end().filter("[href=#"+id+"]").parent().addClass("active");
	    }                   
	 });


});
// Smooth Scrolling Internal Anchor Links - Pricing page
jQuery(document).ready(function($) {
	var $root = $('html, body');
	$(".compare").click(function(event){		
		event.preventDefault();
		$root.animate({scrollTop:$(this.hash).offset().top}, 750);
	});
});
