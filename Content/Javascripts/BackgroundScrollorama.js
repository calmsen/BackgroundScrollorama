function initScrollorama(
    c1Height, c2Height, c3Height, c4Height, c5Height, 
    bg1PartSel, bg2PartSel, bg3PartSel, bg4PartSel, bg5PartSel,
    duration
    ) {
    var delta = duration;
    var c1Top = 0;
    var c2Top = c1Top + c1Height;
    var c3Top = c2Top + c2Height;
    var c4Top = c3Top + c3Height;
    var c5Top = c4Top + c4Height;
    var bg1FadeOutEl = $(bg1PartSel + "-fadeout");
    var bg2FadeInEl = $(bg2PartSel + "-fadein");
    var bg2FadeOutEl = $(bg2PartSel + "-fadeout");
    var bg3FadeInEl = $(bg3PartSel + "-fadein");
    var bg3FadeOutEl = $(bg3PartSel + "-fadeout");
    var bg4FadeInEl = $(bg4PartSel + "-fadein");
    var bg4FadeOutEl = $(bg4PartSel + "-fadeout");
    var bg5FadeInEl = $(bg5PartSel + "-fadein");
    var bg5FadeOutEl = $(bg5PartSel + "-fadeout");

    winEl.on("scroll", function () {
        if (winEl.scrollTop() > c2Top) {
            bg2FadeInEl.css("display", "block");
            bg2FadeOutEl.css("display", "none");
        }
        if (winEl.scrollTop() > (c2Top + (c2Height / 4))) {
            bg2FadeInEl.css("display", "none");
            bg2FadeOutEl.css("display", "block");
        }
        //
        if (winEl.scrollTop() > c3Top) {
            bg3FadeInEl.css("display", "block");
            bg3FadeOutEl.css("display", "none");
        }
        if (winEl.scrollTop() > (c3Top + (c3Height / 4))) {
            bg3FadeInEl.css("display", "none");
            bg3FadeOutEl.css("display", "block");
        }
        //
        if (winEl.scrollTop() > c4Top) {
            bg4FadeInEl.css("display", "block");
            bg4FadeOutEl.css("display", "none");
        }
        if (winEl.scrollTop() > (c4Top + (c4Height / 4))) {
            bg4FadeInEl.css("display", "none");
            bg4FadeOutEl.css("display", "block");
        }
    });

    

    scrollorama.animate(bg1FadeOutEl, {
        delay: c1Top + (c1Height - 2 * duration),
        duration: duration,
        property: 'opacity',
        start: 1,
        end: 0
    });
    scrollorama.animate(bg2FadeInEl, {
        delay: c1Top + (c1Height - duration) - delta,
        duration: duration + delta,
        property: 'opacity',
        start: 0,
        end: 1
    });
    scrollorama.animate(bg2FadeOutEl, {
        delay: c2Top + (c2Height - 2 * duration),
        duration: duration,
        property: 'opacity',
        start: 1,
        end: 0
    });
    scrollorama.animate(bg3FadeInEl, {
        delay: c2Top + (c2Height - duration) - delta,
        duration: duration + delta,
        property: 'opacity',
        start: 0,
        end: 1
    });
    scrollorama.animate(bg3FadeOutEl, {
        delay: c3Top + (c3Height - 2 * duration),
        duration: duration,
        property: 'opacity',
        start: 1,
        end: 0
    });
    scrollorama.animate(bg4FadeInEl, {
        delay: c3Top + (c3Height - duration) - delta,
        duration: duration + delta,
        property: 'opacity',
        start: 0,
        end: 1
    });
    scrollorama.animate(bg4FadeOutEl, {
        delay: c4Top + (c4Height - 2 * duration),
        duration: duration,
        property: 'opacity',
        start: 1,
        end: 0
    });
    scrollorama.animate(bg5FadeInEl, {
        delay: c4Top + (c4Height - duration) - delta,
        duration: duration + delta,
        property: 'opacity',
        start: 0,
        end: 1
    });
}