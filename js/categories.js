export const categories = () => {
  const categoriesBlock = document.querySelector('.categories__wrapper')
  const data = [
    { img: '../assets/img/categories/scooter1.png', text: 'KS E22' },
    { img: '../assets/img/categories/scooter2.png', text: 'KS ES1l' },
    { img: '../assets/img/categories/scooter1.png', text: 'KS Air t15' },
    { img: '../assets/img/categories/scooter2.png', text: 'KS F30' },
    { img: '../assets/img/categories/scooter1.png', text: 'KS E45' },
    { img: '../assets/img/categories/scooter2.png', text: 'KS MAX' },
    { img: '../assets/img/categories/scooter2.png', text: 'KS MAX' },
    { img: '../assets/img/categories/scooter1.png', text: 'KS ES2' },
    { img: '../assets/img/categories/scooter2.png', text: 'KS ES 3' },
    { img: '../assets/img/categories/scooter1.png', text: 'EKS ZING E8' },
    { img: '../assets/img/categories/scooter2.png', text: 'EKS ZING E10' },
    { img: '../assets/img/categories/scooter1.png', text: 'EKS ZING E12' },
    { img: '../assets/img/categories/scooter2.png', text: 'KS ES 4' },
    { img: '../assets/img/categories/scooter1.png', text: 'Accessories' },
  ]

  data.forEach((el) => {
    categoriesBlock.insertAdjacentHTML(
      'beforeend',
      `
    <div class="categories__card flex">
      <img src=${el.img} alt="scooter" />
      <span class="categories__text">${el.text}</span>
    </div>
  `
    )
  })
}
