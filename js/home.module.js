
export class Home {
    
    constructor() {
        //navbar active link
        document.querySelectorAll(".nav-item").forEach( (link) =>{
            this.getApi()
        link.addEventListener("click" ,(e)=>{
            let value =e.target.getAttribute("data-category");
        })
    })

    //selectors 
    this.loading = document.getElementById("loading");
    this.homePage= document.getElementById("meals");
    this.details = document.getElementById("details");
    this.search = document.querySelector("#searchPage");
    this.contact = document.getElementById("form");
    this.wordSearch = document.getElementById("wordSearch");
    this.searchFirstLetter = document.getElementById("searchFirstLetter");
    //form inputs
    this.nameInput =document.getElementById("name");
    this.emailInput =document.getElementById("email");
    this.phoneNumInput =document.getElementById("phoneNum");
    this.ageInput =document.getElementById("age");
    this.passwordInput =document.getElementById("password");
    this.rePasswordInput =document.getElementById("rePassword");
    this.submitBtn =document.getElementById("submitBtn");

    // search page
    document.querySelector("#navbar #search").addEventListener("click" , ()=>{
        this.search.classList.remove("d-none");
        this.homePage.classList.add("d-none");
        document.getElementById("Categories").addEventListener("click" , ()=>{
                this.search.classList.add("d-none");
                this.homePage.classList.remove("d-none");
            })
        document.getElementById("Area").addEventListener("click" , ()=>{
                this.search.classList.add("d-none");
                this.homePage.classList.remove("d-none");
            })
        document.getElementById("Ingredients").addEventListener("click" , ()=>{
                this.search.classList.add("d-none");
                this.homePage.classList.remove("d-none");
            })
            document.querySelector("#navbar #contact").addEventListener("click" , ()=>{
                this.search.classList.add("d-none");
                this.contact.classList.remove("d-none");
            })
    })


    wordSearch.addEventListener("input",()=>{
        let value = wordSearch.value.toLowerCase();
        this.SearchWord(value);
    })

    searchFirstLetter.addEventListener("input",()=>{
        let value = searchFirstLetter.value.toLowerCase();
        this.searchFirst(value);
    })


    //contact page
    document.querySelector("#navbar #contact").addEventListener("click" , ()=>{
        this.contact.classList.remove("d-none");
        this.homePage.classList.add("d-none");

        document.getElementById("search").addEventListener("click" , ()=>{
            this.contact.classList.add("d-none");
            this.homePage.classList.remove("d-none");
        })
    document.getElementById("Area").addEventListener("click" , ()=>{
            this.contact.classList.add("d-none");
            this.homePage.classList.remove("d-none");
        })
    document.getElementById("Ingredients").addEventListener("click" , ()=>{
            this.contact.classList.add("d-none");
            this.homePage.classList.remove("d-none");
        })
        document.querySelector("#navbar #contact").addEventListener("click" , ()=>{
            this.contact.classList.add("d-none");
            this.contact.classList.remove("d-none");
        })
    })
    //name input
    this.nameInput.addEventListener("input" , ()=>{
        let nameInputValue = this.nameInput.value;
        if(this.regexName()==false){
            document.getElementById("nameAlert").classList.remove("d-none");
        }
        else{
            document.getElementById("nameAlert").classList.add("d-none");
        }
    })
    //email input
    this.emailInput.addEventListener("input" , ()=>{
        let emailInputValue = this.emailInput.value;
        if(this.regexEmail()==false){
            document.getElementById("emailAlert").classList.remove("d-none");
        }
        else{
            document.getElementById("emailAlert").classList.add("d-none");
        }
    })
    //phoneNum input
    this.phoneNumInput.addEventListener("input" , ()=>{
        let phoneNumInputValue = this.phoneNumInput.value;
        if(this.regexPhone()==false){
            document.getElementById("phoneAlert").classList.remove("d-none");
        }
        else{
            document.getElementById("phoneAlert").classList.add("d-none");
        }
    })
    //age input
    this.ageInput.addEventListener("input" , ()=>{
        let ageInputValue = this.ageInput.value;
        if(this.regexAge()==false){
            document.getElementById("ageAlert").classList.remove("d-none");
        }
        else{
            document.getElementById("ageAlert").classList.add("d-none");
        }
    })
    //password input
    this.passwordInput.addEventListener("input" , ()=>{
        let passwordInputValue = this.passwordInput.value;
        if(this.regexPassword()==false){
            document.getElementById("passwordAlert").classList.remove("d-none");
        }
        else{
            document.getElementById("passwordAlert").classList.add("d-none");
        }
    })
    //rePassword input
    this.rePasswordInput.addEventListener("input" , ()=>{
        let rePasswordInputValue = this.rePasswordInput.value;
        if(this.regexRePassword()==false){
            document.getElementById("repasswordAlert").classList.remove("d-none");
        }
        else{
            document.getElementById("repasswordAlert").classList.add("d-none");
        }
    })
    ///////////////// check form validation ///////////////////////
    document.querySelectorAll("#form input").forEach((input)=>{
        input.addEventListener("input" , ()=>{
            if (this.regexName() && this.regexEmail() && this.regexPhone() && this.regexAge() && this.regexPassword() && this.regexRePassword() == true){
                document.getElementById("submitBtn").removeAttribute("disabled");
                console.log("yes");
            }
            else{
                document.getElementById("submitBtn").setAttribute("disabled" , "disabled");
                console.log("no");
            }
        })
    })
    document.getElementById("submitBtn").addEventListener("click",()=>{
        this.nameInput.value = "";
        this.emailInput.value = "";
        this.ageInput.value = "";
        this.phoneNumInput.value = "";
        this.passwordInput.value = "";
        this.rePasswordInput.value = "";
    })

    }

    // get main data
    async getApi() {
        loading.classList.remove("d-none");
        document.querySelector(".background").classList.remove("d-none");
        const data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s`);
        const response = await data.json();
        loading.classList.add("d-none");
        document.querySelector(".background").classList.add("d-none");
        document.querySelector(".openPart").classList.remove("d-none");
        this.display(response);

    // display details
        document.querySelectorAll("#homePage .col-md-3 img").forEach((image)=>{
        image.addEventListener("click",()=>{
            this.details.classList.remove("d-none");
            this.homePage.classList.add("d-none");
        })
    })
    }


    //display data
    display(category){
        let box = ``;
        for (let i = 0; i < category.meals.length; i++) {
            box += `
                <div class="col-md-3 col-sm-6 mb-4 text-white" value="${category.meals[i].strMeal}">
                <div class="image">
                <img src="${category.meals[i].strMealThumb}" alt="image" class="rounded-3 w-100">
                    <div class="title"><h3>${category.meals[i].strMeal}</h3>
                    </div>
                    </div>
                    </div>
                `;
            }
        document.getElementById("display").innerHTML = box;

        // display details

        document.querySelectorAll("#homePage .col-md-3").forEach((column) => {
            column.addEventListener("click", () => {
                document.getElementById("details").classList.remove("d-none");
                document.getElementById("homePage").classList.add("d-none");
            })
        })

        //food name
        document.querySelectorAll("#display .col-md-3").forEach((name) => {
            name.addEventListener("click", () => {
                this.getDetails(name.getAttribute("value"));
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
                <div class="col-md-4 text-white">
                            <div class="image">
                                <img src="${category.meals[0].strMealThumb}" alt="image" class="w-100">
                            </div>
                            <div class="foodName">
                                <h2>${category.meals[0].strMeal}</h2>
                            </div>
                    </div>
                    <div class="col-md-8">
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

// ////////////////////////////// search ///////////////////////////

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


        /////////////////////////// validation ///////////////////////////

    //regexName
    regexName(){
        let regexName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/;
        let text = this.nameInput.value;
        if(regexName.test(text) == true){
            return true ;
        }
        else{
            return false ;
        }
    }


    regexEmail(){
        let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let text = this.emailInput.value;
        if (regexEmail.test(text) == true) {
            return true;
        }
        else {
            return false;
        }
    }

    regexPhone(){
        let regexPhone  = /^(002\+2)?01[0125][0-9]{8}$/;
        let text = this.phoneNumInput.value;
        if (regexPhone.test(text) == true) {
            return true;
        }
        else {
            return false;
        }
    }

    regexAge(){
        let regexAge = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
        let text = this.ageInput.value;
        if (regexAge.test(text) == true) {
            return true;
        }
        else {
            return false;
        }
    }
    
    regexPassword() {
        var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        var text = this.passwordInput.value;
        if (regexPassword.test(text) == true) {
            return true;
        }
        else {
            return false;
        }
    }
    
    regexRePassword() {
        var regexRePassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
        var text = this.rePasswordInput.value;
        if (regexRePassword.test(text) == true) {
            if(this.passwordInput.value == text){
                return true ;
            }
            else{
                return false;
            }
        }
    }
}
