let quotes=document.getElementById ("quote");
let store=["Code is like humor. When you have to explain it, it’s bad.",
  "First, solve the problem. Then, write the code.",
  "Simplicity is the soul of efficiency.",
  "The best way to learn to code is to build things.",
  "Small progress each day adds up to big results.",
  "Debugging is twice as hard as writing the code in the first place.",
  "STAY HARD!"
]
let display=document.getElementById("q");
display.addEventListener("click",function(){
  let rand=Math.floor(Math.random()*store.length)
  quotes.textContent=store[rand]
});
