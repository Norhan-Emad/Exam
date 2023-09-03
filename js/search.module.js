export class Search{
    constructor(){

        this.search = document.querySelector("#searchPage");
        this.contact = document.getElementById("form");
        this.wordSearch = document.getElementById("wordSearch");
        this.searchFirstLetter = document.getElementById("searchFirstLetter");

        document.getElementById("search").addEventListener("click", () => {
            document.getElementById("searchPage").classList.remove("d-none")
        })

        this.wordSearch.addEventListener("input",()=>{
            let value = wordSearch.value.toLowerCase();
            this.SearchWord(value);
        })
    
        this.searchFirstLetter.addEventListener("input",()=>{
            let value = searchFirstLetter.value.toLowerCase();
            this.searchFirst(value);
        })
    }
////////////////////////////// search ///////////////////////////

async SearchWord(word) {
    loading.classList.remove("d-none");
    document.querySelector(".background").classList.remove("d-none");
    const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`);
    const response = await data.json();
    loading.classList.add("d-none");
    document.querySelector(".background").classList.add("d-none");
    document.querySelector(".openPart").classList.remove("d-none");
    this.displaySearch(response);
    console.log(response);
}

displaySearch(category){
    let box = ``;
    for (let i = 0; i < category.meals.length; i++) {
        box +=  `
        <div class="col-md-3 col-sm-6 mb-4 text-white" value="${category.meals[i].strMeal}">
        <div class="image">
        <img src="${category.meals[i].strMealThumb}" alt="image" class="rounded-3 w-100">
            <div class="title"><h3>${category.meals[i].strMeal}</h3>
            </div>
            </div>
            </div>
        `;
        }
    document.getElementById("displaySearchData").innerHTML = box;
    // display details
    document.querySelectorAll("#displaySearchData .col-md-3").forEach((column) => {
        column.addEventListener("click", () => {
            document.getElementById("details").classList.remove("d-none");
            document.getElementById("searchPage").classList.add("d-none");
        })
    })

    //food name
    document.querySelectorAll("#displaySearchData .col-md-3").forEach((name) => {
        name.addEventListener("click", () => {
            this.getDetails(name.getAttribute("value"));
            // console.log(name.getAttribute("value"));
        })
    })
    }

    async getDetails(word) {
        loading.classList.remove("d-none");
        document.querySelector(".background").classList.remove("d-none");
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`);
        const response = await data.json();
        loading.classList.add("d-none");
        document.querySelector(".background").classList.add("d-none");
        document.querySelector(".openPart").classList.remove("d-none");
        this.showDetails(response);
        console.log(response);
    }

    showDetails(category) {
        let box = ``;
        for (let i = 0; i < 1; i++) {
            box += `
                <div class="col-4 text-white">
                            <div class="image">
                                <img src="${category.meals[0].strMealThumb}" alt="image" class="w-100">
                            </div>
                            <div class="foodName">
                                <h2>${category.meals[0].strMeal}</h2>
                            </div>
                    </div>
                    <div class="col-7">
                            <div class="inst text-white">
                                <h2 class="head">Instructions</h2>
                                <p class="content">${category.meals[0].strInstructions}</p>
                            </div>
                            <div class="place text-white">
                                <h3>Area : <span class="area">${category.meals[0].strArea}</span></h3>
                                <h3>Category : <span class="Category">${category.meals[0].strCategory}</span></h3>
                            </div>
                            <div class="Recipes text-white">
                                <h3>Recipes :</h3>
                                <div class="row text-white">
                                <div class="col-1">${category.meals[0].strIngredient1}</div> 
                                <div class="col-1">${category.meals[0].strIngredient2}</div>
                                <div class="col-1">${category.meals[0].strIngredient3}</div>
                                <div class="col-1">${category.meals[0].strIngredient4}</div>
                                <div class="col-1">${category.meals[0].strIngredient5}</div>
                                <div class="col-1">${category.meals[0].strIngredient6}</div>
                                <div class="col-1">${category.meals[0].strIngredient7}</div>
                                <div class="col-1">${category.meals[0].strIngredient8}</div>
                                <div class="col-1">${category.meals[0].strIngredient9}</div>
                                </div>
                            </div>
                            <div class="buttons text-white">
                                <h3>Tags :</h3>
                                <p class="type text-white">${category.meals[0].strTags}</p>
                                <button type="button" class="source btn btn-success" href="${category.meals[0].strSource}">source</button>
                                <button type="button" class="youtube btn btn-danger" href="${category.meals[0].strYoutube}">youtube</button>
                            </div>
                    </div>
                `;
        }
        document.getElementById("details").innerHTML = box;
    }

    ///search by first letter

    async searchFirst(letter) {
        loading.classList.remove("d-none");
        document.querySelector(".background").classList.remove("d-none");
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`);
        const response = await data.json();
        loading.classList.add("d-none");
        document.querySelector(".background").classList.add("d-none");
        document.querySelector(".openPart").classList.remove("d-none");
        this.displayFirstSearch(response);
        console.log(response);
    }
    
    displayFirstSearch(category){
        let box = ``;
        for (let i = 0; i < category.meals.length; i++) {
            box +=  `
            <div class="col-md-3 col-sm-6 mb-4 text-white" value="${category.meals[i].strMeal}">
            <div class="image">
            <img src="${category.meals[i].strMealThumb}" alt="image" class="rounded-3 w-100">
                <div class="title"><h3>${category.meals[i].strMeal}</h3>
                </div>
                </div>
                </div>
            `;
            }
        document.getElementById("displaySearchData").innerHTML = box;
        // display details
        document.querySelectorAll("#displaySearchData .col-md-3").forEach((column) => {
            column.addEventListener("click", () => {
                document.getElementById("details").classList.remove("d-none");
                document.getElementById("searchPage").classList.add("d-none");
            })
        })
    
        // //food name
        document.querySelectorAll("#displaySearchData .col-md-3").forEach((name) => {
            name.addEventListener("click", () => {
                this.getDetails(name.getAttribute("value"));
                // console.log(name.getAttribute("value"));
            })
        })
        }
    
        async getDetails(word) {
            loading.classList.remove("d-none");
            document.querySelector(".background").classList.remove("d-none");
            const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${word}`);
            const response = await data.json();
            loading.classList.add("d-none");
            document.querySelector(".background").classList.add("d-none");
            document.querySelector(".openPart").classList.remove("d-none");
            this.showDetails(response);
            console.log(response);
        }
    
        showDetails(category) {
            let box = ``;
            for (let i = 0; i < 1; i++) {
                box += `
                    <div class="col-4 text-white">
                                <div class="image">
                                    <img src="${category.meals[0].strMealThumb}" alt="image" class="w-100">
                                </div>
                                <div class="foodName">
                                    <h2>${category.meals[0].strMeal}</h2>
                                </div>
                        </div>
                        <div class="col-7">
                                <div class="inst text-white">
                                    <h2 class="head">Instructions</h2>
                                    <p class="content">${category.meals[0].strInstructions}</p>
                                </div>
                                <div class="place text-white">
                                    <h3>Area : <span class="area">${category.meals[0].strArea}</span></h3>
                                    <h3>Category : <span class="Category">${category.meals[0].strCategory}</span></h3>
                                </div>
                                <div class="Recipes text-white">
                                    <h3>Recipes :</h3>
                                    <div class="row text-white">
                                    <div class="col-1">${category.meals[0].strIngredient1}</div> 
                                    <div class="col-1">${category.meals[0].strIngredient2}</div>
                                    <div class="col-1">${category.meals[0].strIngredient3}</div>
                                    <div class="col-1">${category.meals[0].strIngredient4}</div>
                                    <div class="col-1">${category.meals[0].strIngredient5}</div>
                                    <div class="col-1">${category.meals[0].strIngredient6}</div>
                                    <div class="col-1">${category.meals[0].strIngredient7}</div>
                                    <div class="col-1">${category.meals[0].strIngredient8}</div>
                                    <div class="col-1">${category.meals[0].strIngredient9}</div>
                                    </div>
                                </div>
                                <div class="buttons text-white">
                                    <h3>Tags :</h3>
                                    <p class="type text-white">${category.meals[0].strTags}</p>
                                    <button type="button" class="source btn btn-success" href="${category.meals[0].strSource}">source</button>
                                    <button type="button" class="youtube btn btn-danger" href="${category.meals[0].strYoutube}">youtube</button>
                                </div>
                        </div>
                    `;
            }
            document.getElementById("details").innerHTML = box;
        }

}