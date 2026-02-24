/**
 * クロスフェード
 * 対象: .js--crossfade .js--crossfade__image
 */
$(function () {
  const crossfades = document.querySelectorAll(".js--crossfade");
  crossfades.forEach(function (crossfade) {
    const images = crossfade.querySelectorAll(".js--crossfade__image");
    if (images.length > 1) {
      // 画像を重ねる
      crossfade.style.position = "relative";
      images.forEach(function (image, index) {
        if (index === 0) {
          image.style.position = "relative";
        } else {
          image.style.position = "absolute";
          image.style.top = 0;
          image.style.left = 0;
          image.style.width = "100%";
          image.style.height = "100%";
          image.style.objectFit = "cover";
        }
      });

      // 画像をフェードイン・アウト
      let index = 0;
      const changeImage = function () {
        images.forEach(function (image) {
          image.style.opacity = 0;
          image.style.transition = "opacity 0.4s ease-in-out";
        });
        images[index].style.opacity = 1;
        index++;
        if (index >= images.length) {
          index = 0;
        }
      };
      changeImage();
      setInterval(changeImage, 4000);
    } else if (images.length === 1) {
      images[0].style.opacity = 1;
    }
  });
});

/**
 * swiper free size
 *
 * ```html
 * <div class="swiper" data-breakpoints='{"0":{"slidesPerView":2.0,"spaceBetween":10},"620":{"slidesPerView":2.2,"spaceBetween":15},"768":{"slidesPerView":3.0,"spaceBetween":20},"980":{"slidesPerView":4.0,"spaceBetween":20},"1200":{"slidesPerView":5.0,"spaceBetween":20}}'>
 * ...
 * </div>
 * ```
 *
 * data-breakpoints に、breakpoints を設定することができる
 */
$(function () {
  // functions
  const isTouchDevice = () => {
    return (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0
    );
  };
  const resetSwiperIframe = (slides) => {
    if (isTouchDevice()) {
      //console.log("================resetSwiperIframe====================");
      for (var i = 0; i < slides.length; i++) {
        // iframe がある場合のみ 実行
        if (slides[i].querySelector("iframe")) {
          //console.log("================resetSwiperIframe: isTouchDevice====================");
          slides[i].style.pointerEvents = "none";
          slides[i].querySelector("iframe").style.pointerEvents = "none";
        }
      }
    }
  };

  // swiper setting
  const freeSizeSwipers = document.querySelectorAll(
    ".js--swiperFreeSize .swiper"
  );
  freeSizeSwipers.forEach(function (freeSizeSwiper) {
    // swiper setting
    const breakpoints = freeSizeSwiper.dataset.breakpoints
      ? JSON.parse(freeSizeSwiper.dataset.breakpoints)
      : {};
    if (Object.keys(breakpoints).length === 0) {
      // 先祖に .p-productlist__slide--useful-info がある場合は、breakpoints を設定
      if (freeSizeSwiper.closest(".p-productlist__slide--useful-info")) {
        breakpoints["0"] = {
          slidesPerView: 2.0,
          spaceBetween: 10,
        };
        breakpoints["620"] = {
          slidesPerView: 2.2,
          spaceBetween: 15,
        };
        breakpoints["768"] = {
          slidesPerView: 3.0,
          spaceBetween: 20,
        };
        breakpoints["980"] = {
          slidesPerView: 4.0,
          spaceBetween: 20,
        };
        breakpoints["1200"] = {
          slidesPerView: 5.0,
          spaceBetween: 20,
        };
      }
    }

    // swiper
    const swiper = new Swiper(freeSizeSwiper, {
      //loop: true,
      //centeredSlides: true,
      observer: true,
      observeParent: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
      },
      scrollbar: {
        el: ".swiper-scrollbar",
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: breakpoints,
      /**
       * swiperのスライド内のiframe広告対応
      on: {
        observerUpdate: function () {
          //console.log("================Swiper Update Dom.====================");
          window.dispatchEvent(new Event("resize"));
        },
        slideChange: function () {
          //console.log("================slideChange====================");
          resetSwiperIframe(this.slides);
        },
        touchStart: function (swiper, event) {
          if (isTouchDevice()) {
            //console.log("================touchStart====================");
            for (var i = 0; i < this.slides.length; i++) {
              if (this.slides[i].querySelector("iframe")) {
                this.slides[i].querySelector("iframe").style.pointerEvents =
                  "none";
              }
            }
          }
        },
        touchEnd: function (swiper, event) {
          if (isTouchDevice()) {
            for (var i = 0; i < this.slides.length; i++) {
              if (this.slides[i].querySelector("iframe")) {
                this.slides[i].querySelector("iframe").style.pointerEvents =
                  "auto";
              }
            }
            setTimeout(() => {
              for (var i = 0; i < this.slides.length; i++) {
                if (this.slides[i].querySelector("iframe")) {
                  this.slides[i].querySelector("iframe").style.pointerEvents =
                    "none";
                }
              }
              //console.log("================touchEnd====================");
            }, 1 * 1000);
          }
        },
        init: function () {
          //console.log("================init====================");
          // MutationObserverを使用してスライドの中身の変更を監視
          const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
              if (mutation.type === "childList") {
                // スライドの中身が変わったときに実行する処理
                resetSwiperIframe(
                  freeSizeSwiper.querySelectorAll(".swiper-slide")
                );
              }
            });
          });

          // スライドの中身を監視する設定
          const config = { childList: true, subtree: true };

          // 各スライドに対して監視を開始
          freeSizeSwiper.querySelectorAll(".swiper-slide").forEach((slide) => {
            observer.observe(slide, config);
          });

          window.dispatchEvent(new Event("resize"));
          resetSwiperIframe(freeSizeSwiper.querySelectorAll(".swiper-slide"));
        },
        resize: function () {
          //console.log("================resize====================");
          resetSwiperIframe(this.slides);
        },
      },
       */
    });
  });
});

/**
 * js--tableScroll
 */
$(function () {
  const containers = document.querySelectorAll(".js--tableScroll");
  containers.forEach(function (container) {
    /**
     * マウスのドラッグによるスクロール
     * <div class="js--tableScroll">
     *   <div class="js--tableScroll__content">
     *    <table>...</table>
     *   </div>
     *   <div class="js--tableScroll__scrollBar">
     *     <div class="js--tableScroll__scrollBarInner"></div>
     *   </div>
     * </div>
     */
    const content = container.querySelector(".js--tableScroll__content");
    if (content) {
      let isDown = false;
      let startX;
      let scrollLeft;

      // コンテンツスタイル調整
      function contentWidth() {
        const windowWidth = window.innerWidth;
        const contentWidth = content.offsetWidth;
        if (windowWidth > contentWidth) {
          const marginLR = (windowWidth - contentWidth) / 2;
          const paddingLR = (windowWidth - contentWidth) / 2;
          content.style.marginLeft = `-${marginLR}px`;
          content.style.marginRight = `-${marginLR}px`;
          content.style.paddingLeft = `${paddingLR}px`;
          content.style.paddingRight = `${paddingLR}px`;
          content.style.width = `auto`;
        }
      }
      window.addEventListener("resize", function () {
        setTimeout(() => {
          contentWidth();
        }, 10);
      });
      contentWidth();

      // スクロールバー
      const scrollBar = container.querySelector(".js--tableScroll__scrollBar");
      if (scrollBar) {
        const scrollBarInner = scrollBar.querySelector(
          ".js--tableScroll__scrollBarInner"
        );
        if (scrollBarInner) {
          function scrollBarInit() {
            const containerWidth = container.clientWidth;
            const tableWidth = content.querySelector("table").offsetWidth;
            const scrollBarInner = scrollBar.querySelector(
              ".js--tableScroll__scrollBarInner"
            );
            scrollBarInner.style.width = `${
              (containerWidth / tableWidth) * 100
            }%`;

            // スクロール量に合わせてスscrollBarInnerを移動
            content.addEventListener("scroll", function () {
              const scrollLeft = content.scrollLeft;
              const scrollWidth = tableWidth;
              const offsetWidth = containerWidth;
              const scrollBarInnerWidth = scrollBarInner.offsetWidth;
              const scrollBarInnerLeft =
                (scrollLeft / (scrollWidth - offsetWidth)) *
                (offsetWidth - scrollBarInnerWidth);
              scrollBarInner.style.left = `${scrollBarInnerLeft}px`;
            });
          }
          window.addEventListener("resize", function () {
            setTimeout(() => {
              scrollBarInit();
            }, 20);
          });
          scrollBarInit();
        }
      }

      // マウスダウン・アップ・ムーブ
      content.addEventListener("mousedown", function (e) {
        isDown = true;
        startX = e.pageX - content.offsetLeft;
        scrollLeft = content.scrollLeft;
      });
      content.addEventListener("mouseleave", function () {
        isDown = false;
      });
      content.addEventListener("mouseup", function () {
        isDown = false;
      });
      content.addEventListener("mousemove", function (e) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - content.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        content.scrollLeft = scrollLeft - walk;
      });
    }
  });
});

/**
 * .js--p-brandDetailHowToUse__button
 *
 * .js--p-brandDetailHowToUse__button a をクリックすると
 * 先祖 .p-brandDetailHowToUse を探して、.p-brandDetailHowToUse__content + .p-brandDetailHowToUse__content を slideDown する
 * また、.js--p-brandDetailHowToUse__button は 非表示にする
 */
$(function () {
  const buttons = document.querySelectorAll(
    ".js--p-brandDetailHowToUse__button span"
  );
  buttons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      // .p-brandDetailHowToUse
      const brandDetailHowToUse = button.closest(".p-brandDetailHowToUse");
      // .p-brandDetailHowToUse の 子要素 .p-brandDetailHowToUse__content + .p-brandDetailHowToUse__content
      const contents = brandDetailHowToUse.querySelectorAll(
        ".p-brandDetailHowToUse__content + .p-brandDetailHowToUse__content"
      );
      // .p-brandDetailHowToUse__button
      const buttons = brandDetailHowToUse.querySelectorAll(
        ".js--p-brandDetailHowToUse__button"
      );
      // .p-brandDetailHowToUse__content + .p-brandDetailHowToUse__content を slideDown
      contents.forEach(function (content) {
        $(content).slideDown(200);
      });
      // .js--p-brandDetailHowToUse__button を非表示
      buttons.forEach(function (button) {
        button.style.display = "none";
      });
      // return
      return false;
    });
  });
});

/**
 * ヘッダーの検索の虫眼鏡ボタンの活性・非活性対応
 *
 * 概要:
 * - .p-header__navi_search .p-productsearch__box_category select を監視
 * - .p-header__navi_search .p-productsearch__box_freeword input[name="search_keyword"] を監視
 * - .p-header__navi_search .p-productsearch__box_freeword input[type="submit"] を活性・非活性
 *   - 活性: opacity:1; pointer-events: auto;
 *   - 非活性: opacity: 0.1; pointer-events: none;
 *
 * 検証:
 * - [x] デフォルトは非活性
 * - [x] キーワードが入力された時は活性
 * - [x] キーワードが入力されていない時は非活性
 * - [x] カテゴリーが選択された時は活性
 * - [x] カテゴリーが選択されていない時は非活性
 */
$(function () {
  const searchCategory = document.querySelector(
    ".p-header__navi_search .p-productsearch__box_category select"
  );
  const searchKeyword = document.querySelector(
    ".p-header__navi_search .p-productsearch__box_freeword input[type='text']"
  );
  const searchSubmit = document.querySelector(
    ".p-header__navi_search .p-productsearch__box_freeword input[type='submit']"
  );
  if (searchKeyword && searchCategory && searchSubmit) {
    // submitボタンの活性・非活性
    function submitDisabled() {
      if (
        (searchKeyword && searchKeyword.value !== "") ||
        (searchCategory &&
          searchCategory.options.length > 1 &&
          searchCategory.value !== "")
      ) {
        searchSubmit.style.opacity = 1;
        searchSubmit.style.pointerEvents = "auto";
        $("#MCACP0050B0000_x_button").show();
      } else {
        searchSubmit.style.opacity = 0.1;
        searchSubmit.style.pointerEvents = "none";
        $("#MCACP0050B0000_x_button").hide();
      }
    }
    // keyword
    searchKeyword.addEventListener("keyup", function () {
      submitDisabled();
    });
    // category
    searchCategory.addEventListener("change", function () {
      submitDisabled();
    });
    // init
    submitDisabled();
  }
});

$(function () {
  const helpMenu = $(
    ".p-hamburgermenu .p-menu-list__box.is_layout-column01.is_type-bnr + .p-menu-list__box.is_layout-column02"
  );
  //console.log(helpMenu)
});
