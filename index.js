const buttonCategoryContainer = document.getElementById("button-catagory-container");
const cardContainer = document.getElementById("card-container");
const noContent = document.getElementById("no_content");
let autoCategory=1000;

const catagorySection=()=>{
    const url='https://openapi.programming-hero.com/api/videos/categories'
     fetch(url)
        .then( (res)=>res.json())
        .then(({data})=>{
            data.forEach(catagory=(card) => {
                
                const btn = document.createElement("button")
                btn.innerHTML=card.category;
                btn.classList='click_button bg-gray-200 px-2 py-1 md:px-5 md:py-3 ml-4 md:ml-0 rounded-md normal-case text-xl '
                buttonCategoryContainer.appendChild(btn)
                btn.addEventListener("click", ()=>{
                    createButton(card.category_id)
                    const clickbtns=document.querySelectorAll('.click_button');
                    for(const btns of clickbtns){
                        btns.classList.remove('bg-red-500','text-white')
                    }
                    btn.classList.add('bg-red-500','text-white')

                })
             });
         })
         
}
const createButton=((categoryID)=>{
    autoCategory=categoryID;
    const url=`https://openapi.programming-hero.com/api/videos/category/${categoryID}`
    fetch(url)
    .then( (res)=>res.json())
    .then(({data})=>{
        if(data.length==0){
            noContent.classList.remove('hidden')
        }else{
            noContent.classList.add('hidden')
        }
        cardContainer.innerHTML=""
        data.forEach((content) => {
            let verified = ``
            if(content.authors[0].verified==true){
                verified=`<img src="./Images/fi_10629607.png">`
            }
            const div = document.createElement("div")
            div.innerHTML=`
            <div class="card h-[380px] bg-base-100 shadow-xl">
            <figure class="rounded-xl"><img class="rounded-xl w-full h-[100%]"
            src="${content.thumbnail}" alt="" /></figure>
            <div class=" flex gap-4 mx-2 my-4">
            <div class="w-[52px] h-[52px] rounded-full">
            <img class="h-full w-full object-cover rounded-full" src="${content.authors[0].profile_picture}" alt="">
            </div>
            <div class="flex flex-col mb-12 gap-1">
            <h2 class="card-title">${content.title}<div>${verified}</h2>                   
            <p>${content.authors[0].profile_name}</p>
            <p>${content.others.views}</p>
            </div>
            </div>
            </div>
            
            `
            cardContainer.appendChild(div)
        });
    })})
    
    catagorySection();
    createButton(autoCategory)