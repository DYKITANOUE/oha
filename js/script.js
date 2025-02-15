// drawer
jQuery("#js-drawer-icon").on("click", function (e) {
  //   プラグが元々持っているツールを無効果する
  e.preventDefault();
  //   drawer--iconにis-checkedがチェック時に付与される
  jQuery("#js-drawer-icon").toggleClass("is-checked");
  //   drawer--contentにis-checkedがチェック時に付与される
  jQuery("#js-drawer-content").toggleClass("is-checked");
});

// accordion
jQuery(".js-accordion").on("click", function (e) {
  //   プラグが元々持っているツールを無効果する
  e.preventDefault();
  //  押した要素＝this,親要素＝parent
  if (jQuery(this).parent().hasClass("is-open")) {
    // is-openのクラスが外れる
    jQuery(this).parent().removeClass("is-open");
    // next=.qa_box-bodyの所
    jQuery(this).next().slideUp();
  } else {
    // is-openのクラスが付与
    jQuery(this).parent().addClass("is-open");
    jQuery(this).next().slideDown();
  }
});

// swiper
const swiper = new Swiper("#js-gallery-swiper", {
  // 隣あっているものにスペースを開ける
  spaceBetween: 70,
  // Optional parameters

  loop: true,

  // If we need pagination
  pagination: {
    el: "#js-gallery-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-gallery-next",
    prevEl: "#js-gallery-prev",
  },
});

// modal
jQuery(".js-modal-open").on("click", function (e) {
  //   プラグが元々持っているツールを無効果する
  e.preventDefault();
  //  about-modalの部分がクリックで表示される
  jQuery("#js-about-modal")[0].showModal();
});

jQuery(".js-modal-close").on("click", function (e) {
  //   プラグが元々持っているツールを無効果する
  e.preventDefault();
  //  js-modal-close部分をクリックでmodalが閉じる
  jQuery("#js-about-modal")[0].close();
});

//scroll
// スクロールされた際にドロワーが閉じる指定
jQuery(`#js-drawer-content a[href^="#"]`).on("click", function (e) {
  //   drawer--iconにis-checkedがチェック時に外れる
  jQuery("#js-drawer-icon").removeClass("is-checked");
  //   drawer--contentにis-checkedがチェック時に外れる
  jQuery("#js-drawer-content").removeClass("is-checked");
});

// スクロールの大まかな指定
jQuery(`a[href^="#"]`).on("click", function (e) {
  const speed = 300;
  const id = jQuery(this).attr("href");
  const target = jQuery("#" == id ? "html" : id);
  const position = jQuery(target).offset().top;
  jQuery("html, body").animate(
    {
      scrollTop: position,
    },
    speed,
    "swing"
    // swing or linearで指定できる
  );
});

// pagetopがスクロールで消える指定
jQuery(window).on("scroll", function () {
  if (100 < jQuery(window).scrollTop()) {
    jQuery("#js-pagetop").addClass("is-show");
  } else {
    jQuery("#js-pagetop").removeClass("is-show");
  }
});

// wow
const intersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    // entryの表示に入った場合
    if (entry.isIntersecting) {
      // classを付与する
      entry.target.classList.add("is-in-view");
    } else {
      // 外れたら、classが消える
      entry.target.classList.remove("is-in-view");
    }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function (inViewItem) {
  intersectionObserver.observe(inViewItem);
});
