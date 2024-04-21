let titleCells = document.querySelectorAll(".ed-product-title");

titleCells.forEach(function (titleCell) {
  titleCell.addEventListener("click", function () {
    let parentRow = titleCell.closest(".ed-single-product").classList.toggle("collapse");
  });
});
