
const msg = document.querySelector("#msg");

let userscore =0;
let compscore =0 ;
var math;

let userscorepara = document.querySelector("#user-score");
let compscorepara = document.querySelector("#comp-score");

const showwinner=(userwin)=>{

    if (userwin){
        userscore++;
        userscorepara.innerText=userscore;

        console.log("You Win");
        msg.innerText="You win";
        msg.style.backgroundColor="green";
       
            }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        console.log("You Lost");;
        msg.innerText="You lose";
        msg.style.backgroundColor="red";
    }


}

const choices = document.querySelectorAll(".choice");

const gencompchoice =()=>{

    const option =["rock","paper","scissors"];
    const ranidx = Math.floor(Math.random()*3);
    return option[ranidx];
  
}


const Draw=()=>{
    console.log("Game was Draw");
    msg.innerText="Game was Draw";
    msg.style.backgroundColor="blue";
}

const playgame = (userchoice)=>{

    console.log("user choice =",userchoice);

    const compchoice = gencompchoice();
    console.log("comp choice =",compchoice);

    if(userchoice === compchoice){

        Draw();
    }else{
        let userwin= true;
        if (userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
        } else {
            userwin=compchoice==="rock"?false:true;
        }
        showwinner(userwin);
    }

    }




choices.forEach((choice)=>{

    choice.addEventListener("click",()=>{

        const userchoice = choice.getAttribute("id");
        playgame(userchoice)

    })
})