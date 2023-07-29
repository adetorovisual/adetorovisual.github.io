        var acc = document.getElementsByClassName("accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
          acc[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            } 
          });
        }


        var navLinks = document.getElementById("navLinks");
        //var landingOp = document.getElementById("landingOp");
        //var footerOp = document.getElementById("footerOp");
        var logotsOp = document.getElementById("logotsOp");

        function showMenu(){
            navLinks.style.right = "0";
            navLinks.style.boxShadow = "0 0 20px 0px rgba(77,77,77,0.3)";
            //landingOp.style.opacity = "0";
            //footerOp.style.opacity = "0";
            //logotsOp.style.opacity = "0";
        }
        function hideMenu(){
            navLinks.style.right = "-100%";
            navLinks.style.boxShadow = "0 0 20px 0px rgba(77,77,77,0)";
            //landingOp.style.opacity = "1";
            //footerOp.style.opacity = "1";
            //logotsOp.style.opacity = "1";
        }


function appearP1(){
    var inload = document.getElementById('inload');
    var english = document.getElementById('english');
    var bahasa = document.getElementById('bahasa');
    inload.style.left = "0";
    setTimeout(function(){
        inload.style.left = "-100%";
        english.style.display = 'block';
        bahasa.style.display = 'none';
    }, 1000)
}

function appearP2(){
    var inload = document.getElementById('inload');
    var english = document.getElementById('english');
    var bahasa = document.getElementById('bahasa');
    inload.style.left = "0";
    setTimeout(function(){
        inload.style.left = "-100%";
        english.style.display = 'none';
        bahasa.style.display = 'block';
    }, 1000)
}