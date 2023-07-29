        function delay(n){
            n = n || 2000;
            return new Promise((done) => {
                setTimeout(() => {
                    done();
                }, n);
            });
        }
        
        function pageTransition(){
            var tl = gsap.timeline();
            tl.to(".loading-screen", {
                duration: 1.2,
                width: "100%",
                left: "0%",
                ease: "Expo.easeInOut"
            });
            
            tl.to(".loading-screen", {
                duration: 1,
                width: "100%",
                left: "100%",
                ease: "Expo.easeInOut",
                
            });
            
            tl.set(".loading-screen", {left: "-100%"});
        }
        
        function contentAnimation(){
            const titleacc = new SplitType('.titleacc');
            var tl = gsap.timeline();
            tl.from(".animate-this", {duration: 0.8, opacity: 0, stagger: 0.4, delay: 0.1, ease: "Expo.easeInOut"});
            tl.to('.word', {y: 0, stagger: 0.05, delay: 0.2, duration: 0.1}, "-=1.5");
        }

        $(function () {
            barba.init({
                views: [{
                    namespace: 'home-section',
                    beforeEnter({ current, next }){
                        let script = document.createElement('script');
                        script.src = 'other.js';
                        current.container.appendChild(script);
                        next.container.appendChild(script);
                        }
                    }, {
                    namespace: 'mograph-section',
                    beforeEnter({ next }){
                        let script = document.createElement('script');
                        script.src = 'other.js';
                        next.container.appendChild(script);
                        } 
                    }, {
                    namespace: '3d-section',
                    beforeEnter({ next }){
                        let script = document.createElement('script');
                        script.src = 'other.js';
                        next.container.appendChild(script);
                        }
                    
                }],
                

                
                
                
                sync: true,

                transitions: [
                    {
                        async leave(data) {
                            const done = this.async();

                            pageTransition();
                            await delay(1000);
                            done();
                        },

                        async enter(data) {
                            contentAnimation();
                        },

                        async once(data) {
                            contentAnimation();
                        },
                    },
                ],
            });
        });

        