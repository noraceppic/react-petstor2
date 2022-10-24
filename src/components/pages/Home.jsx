import "./Home.css"

export default function Home() {
    return(
        <>
<div class="univers">
    <ul id = "hadUnivres">
        <li>
            <a href ="">
                <span className ="icon-univers "><i class=" fa-solid fa-dog "></i></span>
                <span className= "text-univers">Chiens</span>
            </a>
        </li>
        <li>
            <a href="">
                <span className="icon-univers"  ><i class=" fa-solid fa-cat"></i></span>
                <span className= "text-univers">Chats</span>
            </a>
        </li>
        <li>
            <a href="">
                <span className="icon-univers"  ><i class="fa-solid fa-fish-fins"></i></span>
                <span className= "text-univers">Poissons</span>
            </a>
        </li>
        <li>
            <a href="">
                <span className="icon-univers"  ><i class="fa-solid fa-dove"></i></span>
                <span className= "text-univers">Oiseaux</span>
            </a>
            
        </li>
        <li><a href="">
                <span className="icon-univers"  ><i class="fa-solid fa-dog"></i></span>
                <span className= "text-univers">Rongeurs </span>
            </a></li>
        <li>
        <a href="">
                <span className="icon-univers"  ><i class="fa-solid fa-worm"></i></span>
                <span className= "text-univers">Reptiles </span>
            </a>
        </li>
    
        
    </ul>

</div>

<section className="slide">
 <div className="slider">
    <div className="image">
        <img src="./assets/img/slider1.png" alt="" />
        <img src="./assets/img/slider2.png" alt="" />
        <img src="./assets/img/slider3.png" alt="" />
        <img src="./assets/img/slider4.png" alt="" />
        <img src="./assets/img/slider1.png" alt="" />
        
    </div>

    <div className="directions">
     <div className="lefet">
        <i>&#139;</i>
     </div>
     <div className="right">
     <i>&#155;</i>
     </div> 
   
    </div>
    </div>
</section>
        </>
        
    )
       
        
    
    
};

