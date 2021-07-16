$(function () {
  //スクロールに応じてヘッダーに影をつける
  $(window).scroll(() => {
    const scrollTop = $(this).scrollTop()
    // console.log(scrollTop);

    if (scrollTop > 0) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }

    let menuList = $('.menu__list');

    //Home
    if (scrollTop >= 0 && scrollTop < 709) {
      $(menuList[0]).addClass('active');
    } else {
      $(menuList[0]).removeClass('active');
    }

    //About
    if (scrollTop > 710 && scrollTop < 1800) {
      $(menuList[1]).addClass('active');
    } else {
      $(menuList[1]).removeClass('active');
    }

    //Skill
    if (scrollTop > 1801 && scrollTop < 2700) {
      $(menuList[2]).addClass('active');
    } else {
      $(menuList[2]).removeClass('active');
    }

    //Work
    if (scrollTop > 2701 && scrollTop < 3295) {
      $(menuList[3]).addClass('active');
    } else {
      $(menuList[3]).removeClass('active');
    }

    if (scrollTop > 3295) {
      $(menuList[4]).addClass('active');
    } else {
      $(menuList[4]).removeClass('active');
    }

  });



  $('.slider').slick({
    infinite: true,
    autoplay: true,
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  //menu　スクロール
  $('a[href^="#"]').click(function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top-50;
　　 var speed = 500;
    $("html, body").animate({
      scrollTop: position
    }, speed, "swing");

    const scrollTop = $(this).scrollTop()

    let menuList = $('.menu__list');

    //Home
    if (scrollTop >= 0 && scrollTop < 709) {
      $(menuList[0]).addClass('active');
    } else {
      $(menuList[0]).removeClass('active');
    }

    //About
    if (scrollTop > 710 && scrollTop < 1800) {
      $(menuList[1]).addClass('active');
    } else {
      $(menuList[1]).removeClass('active');
    }

    //Skill
    if (scrollTop > 1801 && scrollTop < 2700) {
      $(menuList[2]).addClass('active');
    } else {
      $(menuList[2]).removeClass('active');
    }

    //Work
    if (scrollTop > 2701 && scrollTop < 3295) {
      $(menuList[3]).addClass('active');
    } else {
      $(menuList[3]).removeClass('active');
    }

    if (scrollTop > 3290) {
      $(menuList[4]).addClass('active');
    } else {
      $(menuList[4]).removeClass('active');
    }

    return false;
  });


  //humbergar menu
  $('#wrapper').on('click', () => {
    $('.icon').toggleClass('close');

    $('#menuModal').toggleClass('open')
  });

  $('a[href^="#"]').click(function () {
    $('.icon').toggleClass('close');
    $('.menuModal').removeClass('open');
  })
})

for (let i = 0; i < 6; i++) {
  let btn = document.getElementById(`item${i}`);
  let modal = document.getElementById(`modal${i}`);
  let closeBtn = document.getElementById(`closeBtn${i}`);
  
  btn.addEventListener('click', () => {
    modal.classList.add('active');
  });
  
  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}


//scroll animation
const aboutTxt = document.querySelectorAll('.about-content__txt');
const aboutImg = document.querySelectorAll('.about-content__img');
const listItem = document.querySelectorAll('.hover-parent');

document.addEventListener('scroll', () => {
  for (let i = 0; i < aboutTxt.length; i++) {
    const aboutTxtDistance = aboutTxt[i].getBoundingClientRect().top + aboutTxt[i].clientHeight * .4
    if (window.innerHeight > aboutTxtDistance) {
      aboutTxt[i].classList.add('show')
    }
  }

  for (let i = 0; i < aboutImg.length; i++) {
    const aboutImgDistance = aboutImg[i].getBoundingClientRect().top + aboutImg[i].clientHeight * .4
    if (window.innerHeight > aboutImgDistance) {
      aboutImg[i].classList.add('show')
    }
  }

  for (let i = 0; i < listItem.length; i++) {
    const listItemDistance = listItem[i].getBoundingClientRect().top + listItem[i].clientHeight * .4
    if (window.innerHeight > listItemDistance) {
      listItem[i].classList.add('show')
    }
  }
})

//loading
const loaded = () => {
  document.getElementById('loading').classList.remove('active');
}

window.addEventListener("load", () => {
  setTimeout(loaded)
  
})


