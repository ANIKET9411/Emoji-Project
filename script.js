let container=document.querySelector(".container");
let search=document.querySelector(".search");
let face=document.querySelector(".face");
let heart=document.querySelector(".heart");
let flag=document.querySelector(".flag");
let all=document.querySelector(".all");
let book=document.querySelector(".book");
container.style.display="flex";
container.style.flexWrap="wrap";

function displaydata(query=''){
    let filteredData = emojiList.filter(e=>{
        if(e.description.indexOf(query) != -1){
            return true;
        }
        if(e.aliases.find(elem=>elem===query))
        {
            return true;
        }
        if(e.tags.find(elem=>elem===query))
        {
            return true;
        }
    })
    console.log(filteredData);
    container.innerHTML='';
    filteredData.forEach(function(e){
        let main=document.createElement("div");
        let div1=document.createElement("div");
        let div2=document.createElement("div");
        let div3=document.createElement("div");
        
        main.style.display="flex";
        main.style.justifyContent="center";
        main.style.alignItems="center";
        main.style.flexDirection="column";
        main.style.width="15%";
        main.style.textAlign="center";
        main.style.margin="10px";
        main.style.height="150px";
        main.style.boxShadow="0 0 7px 0 white"
        main.style.backgroundColor="#453f3f";
        main.style.borderTopLeftRadius="30px"
        
        
div1.innerText=e.emoji;
div2.innerText=e.aliases;
div3.innerText=e.description;
div1.style.fontSize="50px";
div2.style.color="white";
div3.style.color="white";
main.appendChild(div1);
main.appendChild(div2);
main.appendChild(div3);
main.style.transform="scale(1)"
function trasition(){
    div1.style.transition="all ease-out-in 0.5s";
    div1.style.transform="scale(1.3)"
}
function trasitions(){
    div1.style.transform="scale(1)"
}
div1.addEventListener('mouseover',trasition);
div1.addEventListener('mouseout',trasitions);

container.appendChild(main);
})
}

function searchdata(e){
    e.preventDefault();
    let value=search.value;
    displaydata(value);
}
function alls(e){
    e.preventDefault();
    displaydata("");
}
function faces(e){
    e.preventDefault();
    displaydata("face");
}
function hearts(e){
    e.preventDefault();
    displaydata("heart");
}
function flags(e){
    e.preventDefault();
    displaydata("flag");
}
function books(e){
    e.preventDefault();
    displaydata("book");
}

search.addEventListener('keyup',searchdata);
face.addEventListener('click',faces);
all.addEventListener('click',alls);
flag.addEventListener('click',flags);
heart.addEventListener('click',hearts);
book.addEventListener('click',books);
window.addEventListener('load',alls);
