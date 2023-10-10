'use strict'

const togle = document.querySelector('#paraBtn');
const txt = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, qui. Doloribus eveniet reprehenderit magnam nobis repellat ullam dolorem nulla, at debitis aliquid, doloremque unde provident vitae cupiditate sapiente. Eum, tempore? Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Faucibus ornare suspendisse sed nisi lacus sed viverra. Dictum fusce ut placerat orci nulla. Quam vulputate dignissim suspendisse in est ante. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Orci ac auctor augue mauris augue neque gravida. Venenatis urna cursus eget nunc scelerisque viverra. Urna et pharetra pharetra massa massa ultricies mi quis hendrerit. Erat velit scelerisque in dictum non consectetur a erat nam. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant. Bibendum neque egestas congue quisque egestas diam in arcu. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Risus in hendrerit gravida rutrum. Blandit turpis cursus in hac habitasse platea dictumst quisque sagittis. Suspendisse in est ante in nibh mauris cursus mattis molestie. Et leo duis ut diam quam nulla porttitor massa id. Posuere morbi leo urna molestie at. Ullamcorper eget nulla facilisi etiam dignissim diam quis enim. Nunc sed velit dignissim sodales. Bibendum ut tristique et egestas quis ipsum."
const para = document.querySelector('#para');
togle.addEventListener('click', () => {
    (para.textContent === "") ? para.textContent = txt : para.textContent = "";
});

const arr = ['https://images.pexels.com/photos/1213447/pexels-photo-1213447.jpeg?auto=compress&cs=tinysrgb&w=600',
    "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/2246476/pexels-photo-2246476.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1662298/pexels-photo-1662298.jpeg?auto=compress&cs=tinysrgb&w=400", "https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=600"]
const image = document.querySelector('#container');
let str = '';
for (let i of arr) {
    str += `<img src="${i}" class="image" alt="Failed to load"  >`
}
image.innerHTML = str;

const ul = document.querySelector('#temp')
ul.parentElement.hidden = true;
ul.parentElement.id = 'viewOn'

const imageContainer = document.getElementsByClassName('image');
for (let i of imageContainer) {
    i.addEventListener("click", (e) => {
        const newNode = document.createElement('img');
        newNode.setAttribute('src', e.target.src);
        newNode.setAttribute('class', 'viewerImage');
        for (let j = 0; j < arr.length; j++) {
            if (e.target.src === arr[j]) {
                idx = j;
                break;
            }
        }
        if (ul.lastElementChild) {
            ul.lastElementChild.remove();
        }
        ul.append(newNode);
        ul.parentElement.id = 'viewOff';
        ul.parentElement.hidden = false;
    })
}

let idx = 0;
const nxtBtn = document.querySelector('#nextbtn');
nxtBtn.addEventListener('click', () => {
    idx === arr.length - 1 ? idx = 0 : idx++;

    const newNode = document.createElement('img');
    newNode.setAttribute('src', arr[idx]);
    newNode.setAttribute('class', 'viewerImage');
    // newNode.setAttribute('width', "100%");
    // newNode.setAttribute('height', "100%");
    // newNode.setAttribute('style', `{width:"100%", height:"100%"}`);
    if (ul.lastElementChild) {
        ul.lastElementChild.remove();
    }
    ul.append(newNode);
})

const prevBtn = document.querySelector('#prevbtn');
prevBtn.addEventListener('click', () => {
    idx === 0 ? idx = arr.length - 1 : idx--;

    const newNode = document.createElement('img');
    newNode.setAttribute('src', arr[idx]);
    newNode.setAttribute('class', 'viewerImage');

    if (ul.lastElementChild) {
        ul.lastElementChild.remove();
    }
    ul.append(newNode);
})

const crossBtn = document.querySelector('#crossbtn');
crossBtn.addEventListener('click', () => {
    ul.parentElement.hidden = true;
    ul.parentElement.id = 'viewOn'
})

const drp = document.querySelector('#drop');

const bdy = document.body;
drp.addEventListener('change', (e) => {
    bdy.className = e.target.value;
    console.log(e.target.value);

});