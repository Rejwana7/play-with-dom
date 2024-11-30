
const container = document.getElementById("review");

document.getElementById("submit-btn").addEventListener("click",function(){
    const inputValue = document.getElementById("text-area").value
    // console.log(inputValue)
      //   const inputMainValue = inputValue.value
      
     
      const li = document.createElement("li");
  li.style.fontSize = "20px";
  li.innerText = inputValue;
li.style.border="2px solid black"
  container.appendChild(li);
  document.getElementById("text-area").value = "";
}) 


// keyboard event

const inputValue= document.getElementById("text-area").addEventListener("keyup",function(event){
    // console.log(event.target.value)

    if(event.key === "Enter"){
        const inputValue = document.getElementById("text-area").value;
        const p = document.createElement("p");
        p.innerText = inputValue;
        container.appendChild(p);
        document.getElementById("text-area").value = ""; 
    }

})   
