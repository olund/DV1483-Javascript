/**
 * jQuery Lazyload-images
 * A very lightweight jQuery plugin to lazy load images
 *
 */

(function($) {

    $.fn.lazyLoadImages = function(threshold, callback) {

        var attrib = "data-src",
            images = this,
            loaded;

        // If threshold is not set, use 0.
        threshold = threshold || 0,

        this.one("lazyLoadImages", function() {
            var source = this.getAttribute(attrib);
            if (source) {
                // Set the src attribute to the real source.
                this.setAttribute("src", source);

                // If its a function, do a callback.
                if (typeof callback === "function") {
                    callback.call(this);
                }
            }
        });


        function lazyLoadImages() {
            var inview = images.filter(function() {
                var scrollTopPos = $(window).scrollTop(),
                    wb = scrollTopPos + $(window).height(),
                    et = $(this).offset().top,
                    eb = et + $(this).height();


                // THE CALCULATION
                if (eb >= (scrollTopPos - threshold) && et <= (wb + threshold)) {
                    return true;
                }

                return false;
            });

            loaded = inview.trigger("lazyLoadImages");
            images = images.not(loaded);
        }

        /* Run lazyload on scroll, resize and lookup */
        $(window).on("scroll.lazyLoadImages resize.lazyLoadImages lookup.lazyLoadImages", lazyLoadImages);

        lazyLoadImages();

        return this;
    };

})(jQuery);