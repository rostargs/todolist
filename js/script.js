document.addEventListener('DOMContentLoaded',() =>{
const $acceptBtn = document.querySelector('#accept');
const $content = document.querySelector('.section__middle');
const $bottomBtn = document.querySelector('.bottom__press');
const $form = document.querySelector('.form-wrapper');
const $input = document.querySelector('.form__input');
const $button = document.querySelector('.form__button');
const $list = document.querySelector('.list__todo-list');
const $bin = document.querySelector('#bin');
const $counter = document.querySelector('.counter');

let i = 0; 
window.localStorage.clear();

    let list = [];
    //open todo 
    $acceptBtn.addEventListener('click',() => {
        $content.classList.add('hidden');
        $form.classList.remove("hidden");
        console.log('click')
    });
    
    // close todo
    $bottomBtn.addEventListener('click',() => {
        $content.classList.remove('hidden');
        $form.classList.add("hidden");
    });
    $button.addEventListener('click',(e) =>{
        e.preventDefault();

        if($input.value === '' || $input.value == false ){
            return;
        }   
        addDeleteEl($input.value);
        $input.value = '';
    })
    //add todo item
    function addDeleteEl(value){
        const li = document.createElement('li');
        li.className = 'list__item';
        li.textContent = value.substring(0,24);
        i++;

        const $delete = document.createElement('img');
        $delete.src = './delete.png'
        $delete.style.height = $delete.style.width = 25 + 'px';


        $list.appendChild(li);
        li.appendChild($delete);


        li.addEventListener('click', (e) => {
            li.classList.toggle('list__item-active');
           
        })

        $delete.addEventListener('click', (e) =>{
            $list.removeChild(li);
            i--;
            $counter.textContent = `Counter : ${i}`;
        })
        $counter.textContent = `Counter : ${i}`;
    }
});
