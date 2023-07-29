        const titleacc = new SplitType('.titleacc');
        var tll = gsap.timeline({
            paused: "true"
        });
        tll.to("#percent, #perbar",{
            duration: 0.2, opacity: 0, zIndex: 3500
        });
        tll.to("#preloader",{
            duration: 1.5, height: "100%", bottom: "100%", ease: "Expo.easeInOut"
        }, "-=0.1");
        tll.from(".landing",{
            duration: 0.8, opacity: 0, stagger: 0.4, delay: 0.1, ease: "Expo.easeInOut"
        }, "-=0.5");
        tll.to('.word', {
            y: 0, stagger: 0.05, delay: 0.8, duration: 0.8
        }, "-=0.1");
            
        var width = 1;
        var bar = document.getElementById("barconfirm");
        var id;
        function move(){
            id = setInterval(frame,10);
        }
        function frame(){
            if(width>=100){
                clearInterval(id);
                tll.play();
            }else{
                width++;
                bar.style.width = width + "%";
                document.getElementById("percent").innerHTML = width + "%";
            }
        }