const buttonCatagoryContainer = document.getElementById("button-catagory-container");

const catagorySection=()=>{
    const url='https://openapi.programming-hero.com/api/videos/categories'
     fetch(url)
        .then( (res)=>res.json())
        .then(({data})=>{
            data.forEach(catagory=(card) => {
                
                const btn = document.createElement("button")
                btn.innerHTML=card.category;
                btn.classList=' bg-gray-200 px-2 py-1 md:px-5 md:py-3 ml-4 md:ml-0 rounded-md normal-case text-xl '
                buttonCatagoryContainer.appendChild(btn)
                btn.addEventListener("click", ()=>createButton(card.category_id))
             });
         })
         
}
const createButton=(catagoryID)=>{
    console.log(catagoryID)
}
catagorySection()