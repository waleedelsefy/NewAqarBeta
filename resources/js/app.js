import * as Popper from "@popperjs/core"

!function(f, m, v, b) {
        b.chatbox_show = function() {
            this.chatbox || (this.chatbox = !0,
                this.showed_at = Date.now(),
                this.$div.addClass("aqarchat--chatbox"),
            this.settings.message_badge && this.$(".aqarchat__badge").hasClass("aqarchat__badge--in") && this.$(".aqarchat__badge").toggleClass("aqarchat__badge--in aqarchat__badge--out"),
                f(v).trigger("aqarchat:show"))
        }
        ,
        b.chatbox_hide = function() {
            this.chatbox && (this.chatbox = !1,
                this.$div.removeClass("aqarchat--chatbox aqarchat--tooltip"),
            this.settings.message_badge && this.$(".aqarchat__badge").removeClass("aqarchat__badge--out"),
                f(v).trigger("aqarchat:hide"))
        }
        ,
        b.optin = function() {
            return !this.$div.hasClass("aqarchat--optout")
        }
    ;
    function e() {
        n && n.apply(this, arguments),
            n = null
    }
    var n;
    ;
    f(e),
        f(m).on("load", e),
        v.addEventListener("DOMContentLoaded", e)
}(jQuery, window, document, window.aqarchat_obj || {});

