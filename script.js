const reviews = document.querySelectorAll(".reviews .profile img")

reviews.forEach(review => {
  if (review.src == "") {
    review.parentElement.innerHTML = `<span>${review.getAttribute("alt").charAt(0).toUpperCase()}</span>`;
  }
})