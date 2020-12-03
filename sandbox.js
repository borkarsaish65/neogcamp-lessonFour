 

 const textarea = document.querySelector('#mytextarea');

const btn = document.querySelector('.btn');

const output = document.querySelector('.output');

btn.addEventListener('click',function(){

    console.log(textarea.value);

    fetch('https://api.funtranslations.com/translate/minion.json?text=' + textarea.value ).
    then((data)=>data.json())
    .then((json)=>{

        output.innerText = json.contents.translated;
    })
    .catch((Err)=>{console.log(Err)})

    //output.innerText = textarea.value;
})