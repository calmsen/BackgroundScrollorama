var BackgroundScrollorama = (function($){
	function BackgroundScrollorama() {
        this.init.apply(this, arguments);
    }
	var winEl = $(window);
	var uniqId = 0;
    $.extend(BackgroundScrollorama.prototype, {
        defaults: {
            duration: 300
			, delta: 300
			, _bgElements: [] 
			, _scrollorama: null
        }
        , init: function (options) {
			$.extend(true, this, this.defaults, options);
			// smooth scroll
			if ($('html').hasClass('desktop')) {
				$.srSmoothscroll({
					step: 100,
					speed: 500
				});
			}
			//
			this._scrollorama = $.scrollorama({
				blocks: '.scrollblock'
			});
		}
		, addBgElements: function(arr) {
			for (var i in arr) 
				this.addBgElement(arr[i]);
		}
		, addBgElement: function(o) {
			var cHeight = o.cHeight, 
				cBackgroundImageSrc = o.cBackgroundImageSrc
				scrollblockInnerSel = o.scrollblockInnerSel;
				
			var lastBgElement = this._bgElements.length > 0 
								? this._bgElements[this._bgElements.length - 1]
								: null;
			var bgElementId = uniqId++;
			var cTop = 0;
			if (lastBgElement != null) {
				cTop = lastBgElement.cTop + lastBgElement.cHeight;
			}
			//
			var bgFadeInEl = null;
			if (lastBgElement != null) {
				bgFadeInEl = $("<div/>", {
					id: "bg-" + bgElementId + "-fadein"
					, "class": "bg"
				})
				.css({"background-image": "url(" + cBackgroundImageSrc + ")"});
			}
			var bgFadeOutEl = $("<div/>", {
				id: "bg-" + bgElementId + "-fadeout"
				, "class": "bg"
			})
			.css({"background-image": "url(" + cBackgroundImageSrc + ")", display: (lastBgElement != null ? "none" : "block")});
			
			var bgElement = {
				Id: bgElementId
				, cTop: cTop
				, cHeight: cHeight
				, scrollblockInnerSel: scrollblockInnerSel
				, bgFadeInEl: bgFadeInEl
				, bgFadeOutEl: bgFadeOutEl
			};
			this._bgElements.push(bgElement);
			//
			if (bgFadeInEl != null)
				bgFadeInEl.appendTo(scrollblockInnerSel);
			bgFadeOutEl.appendTo(scrollblockInnerSel);
			if (bgFadeInEl != null) {
				winEl.on("scroll", function () {
					if (winEl.scrollTop() > cTop) {
						bgFadeInEl.css("display", "block");
						bgFadeOutEl.css("display", "none");
					}
					if (winEl.scrollTop() > (cTop + (cHeight / 4))) {
						bgFadeInEl.css("display", "none");
						bgFadeOutEl.css("display", "block");
					}
				});
				//
				
			}
			if (lastBgElement != null) {
				this._scrollorama.animate(lastBgElement.bgFadeOutEl, {
					delay: lastBgElement.cTop + (lastBgElement.cHeight - 2 * this.duration),
					duration: this.duration,
					property: 'opacity',
					start: 1,
					end: 0
				});
				this._scrollorama.animate(bgFadeInEl, {
					delay: lastBgElement.cTop + (lastBgElement.cHeight - this.duration) - this.delta,
					duration: this.duration + this.delta,
					property: 'opacity',
					start: 0,
					end: 1
				});
			}
			
		}
	});
	return BackgroundScrollorama;
}($));