$(function() {
  $('[data-toggle="popover"]').popover();
});

(function(i, s, o, g, r, a, m) {
  i["GoogleAnalyticsObject"] = r;
  (i[r] =
    i[r] ||
    function() {
      (i[r].q = i[r].q || []).push(arguments);
    }),
    (i[r].l = 1 * new Date());
  (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
  a.async = 1;
  a.src = g;
  m.parentNode.insertBefore(a, m);
})(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");

ga("create", "UA-59745757-1", "auto");
ga("require", "linkid");
ga("send", "pageview");

/*track id clicks*/
$(".gtrack").on("click", function(event) {
  event.preventDefault(); // prevents link to be redirected
  var time = 250; // time for slideup effect
  var url = $(this).attr("href"); // pick url for redirecting via javascript

  var id = $(this).attr("id");
  ga("send", "event", "button", "click", id);

  window.setTimeout(function() {
    document.location.href = url;
  }, time); // timeout and waiting until effect is complete
  return -1;
});


$(function() { $("img.lazy").lazyload();});