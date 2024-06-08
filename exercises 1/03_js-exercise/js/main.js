exerciseOne();
exerciseTwo();
exerciseThree();
exerciseFour();
exerciseFive();

function exerciseOne() {
  let h1Text = document.getElementById("headingText").innerText;
  console.log(h1Text);
}

function exerciseTwo() {
  let ex2text = document.getElementById("helloWorld");
  ex2text.innerHTML = "Lorem ipsum";
}

function exerciseThree() {
  let arrObj = [
    {
      fruit: "banana",
    },
    {
      fruit: "apple",
    },
    {
      fruit: "orange",
    },
  ];

  arrObj.forEach((element) => {
    console.log(element.fruit);
  });
}

function exerciseFour() {
  let image = "./assets/imgs/featured_story_image_2.png";

  let text_title = "lorem title";

  let text_desc = "lorem description";

  let card = `<div class="card"><div class="card__image-container"><img src=${image} alt="Mads Nipper"/></div><div class="card__content"><div class="card__label">${text_title}</div><div class="card__description">${text_desc}</div></div></div>`;

  let doc = document.getElementById("exercise4CardContainer");

  doc.innerHTML = card;
}

function exerciseFive() {
  let ex5 = document.getElementById("exercise5GridContainer");

  let arrImage = [
    {
      image: "./assets/imgs/featured_story_image_1.png",
      title: "Capital Markets Day 1",
      description: "Description 1",
    },
    {
      image: "./assets/imgs/featured_story_image_2.png",
      title: "Capital Markets Day 2",
      description: "Description 2",
    },
    {
      image: "./assets/imgs/featured_story_image_3.png",
      title: "Capital Markets Day 3",
      description: "Description 3",
    },
    {
      image: "./assets/imgs/featured_story_image_4.png",
      title: "Capital Markets Day 4",
      description: "Description 4",
    },
    {
      image: "./assets/imgs/featured_story_image_5.png",
      title: "Capital Markets Day 5",
      description: "Description 5",
    },
    {
      image: "./assets/imgs/featured_story_image_6.png",
      title: "Capital Markets Day 6",
      description: "Description 6",
    },
  ];

  // plural - images: image
  arrImage.forEach((element) => {
    let card = `
      <div class="card-container--1">
        <div class="card">
          <div class="card__image-container">
            <img src="${element.image}" alt="Mads Nipper" />
          </div>
          <div class="card__content">
            <div class="card__label">${element.title}</div>
            <div class="card__description">
              ${element.description}
            </div>
          </div>
        </div>
      </div>`;

    ex5.innerHTML += card;
  });

  // for (let i = 1; i <= 6; i++) {
  //   let card = `
  //     <div class="card-container--1">
  //       <div class="card">
  //         <div class="card__image-container">
  //           <img src="./assets/imgs/featured_story_image_${i}.png" alt="Mads Nipper" />
  //         </div>
  //         <div class="card__content">
  //           <div class="card__label">Capital Markets Day 2023</div>
  //           <div class="card__description">
  //             Find out what happened on 8 June. View presentations, transcripts,and
  //             watch a recording of our event in London.
  //           </div>
  //         </div>
  //       </div>
  //     </div>`;

  //   // SOLUTION 1:
  //   // Convert the card string into a DOM element
  //   // let cardElement = document.createRange().createContextualFragment(card);

  //   // ex5.appendChild(cardElement);

  //   // SOLUTION 2:
  //   ex5.innerHTML += card;
  // }
}
