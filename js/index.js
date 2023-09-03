/// <reference types="../@types/jquery" />
import { Home } from "./home.module.js";
new Home
import { Category } from "./cat.module.js";
new Category
import { Area } from "./area.module.js";
new Area
import { Ingredients } from "./ingredient.module.js";
new Ingredients
import { Search } from "./search.module.js";
new Search
//sideBar

// open sideBar
$('.openIcon').on("click" , function(){
    $('.openIcon').addClass('d-none');
    $('.closeIcon').removeClass('d-none');
    $('.navbar').css('left' , '0');
})

//close sideBar
$('.closeIcon').on("click" , function(){
    $('.openIcon').removeClass('d-none');
    $('.closeIcon').addClass('d-none');
    $('.navbar').css('left' , '-15.75rem');
})

