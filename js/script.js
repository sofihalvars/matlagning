
/* Javascriptet kommer från V3schools, och ansvarar för kategorimenyn, och ser till knappar och förflyttning av materialet som menyn annars täcker */
function openNav() {
    document.getElementById("catmenyid").style.width = "20%";
    document.getElementById("move").style.marginLeft = "20%";
    document.getElementById("button").style.opacity = "0";
  }
  
  function closeNav() {
    document.getElementById("catmenyid").style.width = "0";
    document.getElementById("move").style.marginLeft= "0";
    document.getElementById("button").style.opacity = "100%";
  }


