document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.querySelector(".x-swiper-wrapper");
  const slides = document.querySelectorAll(".x-slide");
  const prevBtn = document.querySelector(".x-swiper-nav-btn.prev");
  const nextBtn = document.querySelector(".x-swiper-nav-btn.next");
  const pagination = document.querySelector(".x-pagination-bar-active");

  let currentIndex = 0;
  const totalSlides = slides.length;

  // Hàm cập nhật vị trí Slide
  function updateSlider() {
    // Di chuyển slide
    const offset = -currentIndex * 100;
    wrapper.style.transform = `translateX(${offset}%)`;
    wrapper.style.transition = "transform 0.5s ease-in-out";

    // Cập nhật thanh phân trang (nếu có)
    if (pagination) {
      const progress = ((currentIndex + 1) / totalSlides) * 100;
      pagination.style.width = `${progress}%`;
    }
  }

  // Sự kiện nút Next
  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Quay lại slide đầu
    }
    updateSlider();
  });

  // Sự kiện nút Prev
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1; // Nhảy tới slide cuối
    }
    updateSlider();
  });

  // Tự động chạy (Auto-play) - Mỗi 3 giây chuyển 1 lần
  let autoPlay = setInterval(() => {
    nextBtn.click();
  }, 3000);

  // Dừng tự động chạy khi người dùng di chuột vào slider
  const swiperContainer = document.getElementById("SWIPER-zrolib52");
  swiperContainer.addEventListener("mouseenter", () => clearInterval(autoPlay));
  swiperContainer.addEventListener("mouseleave", () => {
    autoPlay = setInterval(() => {
      nextBtn.click();
    }, 3000);
  });
});
