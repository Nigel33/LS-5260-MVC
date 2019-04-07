$(function() {
  $("nav").on("click", 'a', function(e) {
    e.preventDefault();

    let $e = $(e.target);
    let idx = $e.attr("href");

    switchPage(idx);
    history.pushState({ idx:  idx}, $e.text(), location.pathname + idx);

    console.log(location.hash);
  })

  function switchPage(idx) {
    $(".active").removeClass("active");
    $(`nav a[href=${idx}]`).addClass("active");
    $("article").hide().filter(idx).show();
  }

  if (location.hash) {
    switchPage(location.hash);
  }

  $(window).on("popstate", function(e) {
    let state = e.originalEvent.state;

    console.log(e);

    switchPage(state === null ? "#page_1" : state.idx);
  });
});
