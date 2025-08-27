import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const FanCards = () => {
  const stageRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    
    const cards = Array.from(stage.children);
    if (cards.length === 0) return;

    let active = 0;
    let isHovered = false;
    let isAnimating = false;
    const stepDuration = 3000;

    function slotFor(offset, n) {
      if (offset === 0) return "center";
      if (offset === 1) return "right1";
      if (offset === 2) return "right2";
      if (offset === n - 1) return "left1";
      if (offset === n - 2) return "left2";
      return "park";
    }

    function render() {
      if (isAnimating) return;
      isAnimating = true;

      const n = cards.length;
      const timeline = gsap.timeline({
        onComplete: () => {
          isAnimating = false;
        }
      });

      cards.forEach((card, i) => {
        const offset = ((i - active) % n + n) % n;
        const slot = slotFor(offset, n);
        card.setAttribute("data-slot", slot);

        const img = card.querySelector('img');

        // Apply transforms and opacity with GSAP - shifted side cards upward
        switch(slot) {
          case "center":
            timeline.to(card, {
              transform: "translate(-50%, -60%) rotateZ(0deg) scale(1.13)",
              zIndex: 60,
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
              onComplete: () => {
                card.style.pointerEvents = "";
              }
            }, 0);
            timeline.to(img, {
              filter: "grayscale(0) contrast(1) brightness(1)",
              opacity: 1,
              duration: 1.2,
              ease: "power2.out"
            }, 0);
            break;

          case "left1":
            timeline.to(card, {
              transform: "translate(-50%, -50%) rotateZ(-24deg) translateX(-260px) translateY(-30px) scale(0.95)",
              zIndex: 40,
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
              onComplete: () => {
                card.style.pointerEvents = "";
              }
            }, 0);
            timeline.to(img, {
              filter: "grayscale(1) contrast(0.9) brightness(0.9)",
              opacity: 0.75,
              duration: 1.2,
              ease: "power2.out"
            }, 0);
            break;

          case "right1":
            timeline.to(card, {
              transform: "translate(-50%, -50%) rotateZ(24deg) translateX(260px) translateY(-30px) scale(0.95)",
              zIndex: 40,
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
              onComplete: () => {
                card.style.pointerEvents = "";
              }
            }, 0);
            timeline.to(img, {
              filter: "grayscale(1) contrast(0.9) brightness(0.9)",
              opacity: 0.75,
              duration: 1.2,
              ease: "power2.out"
            }, 0);
            break;

          case "left2":
            timeline.to(card, {
              transform: "translate(-50%, -50%) rotateZ(-36deg) translateX(-520px) translateY(-10px) scale(0.9)",
              zIndex: 30,
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
              onComplete: () => {
                card.style.pointerEvents = "";
              }
            }, 0);
            timeline.to(img, {
              filter: "grayscale(1) contrast(0.9) brightness(0.9)",
              opacity: 0.75,
              duration: 1.2,
              ease: "power2.out"
            }, 0);
            break;

          case "right2":
            timeline.to(card, {
              transform: "translate(-50%, -50%) rotateZ(36deg) translateX(520px) translateY(-10px) scale(0.9)",
              zIndex: 30,
              opacity: 1,
              duration: 1.2,
              ease: "power2.out",
              onComplete: () => {
                card.style.pointerEvents = "";
              }
            }, 0);
            timeline.to(img, {
              filter: "grayscale(1) contrast(0.9) brightness(0.9)",
              opacity: 0.75,
              duration: 1.2,
              ease: "power2.out"
            }, 0);
            break;

          default: // park
            timeline.to(card, {
              transform: "translate(-50%, -50%) scale(0.001)",
              zIndex: 10,
              opacity: 0,
              duration: 0.8,
              ease: "power2.inOut",
              onComplete: () => {
                card.style.pointerEvents = "none";
              }
            }, 0);
            break;
        }
      });
    }

    function step() {
      if (!isHovered && !isAnimating) {
        active = (active + 1) % cards.length;
        render();
      }
    }

    function startTimer() {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = setInterval(step, stepDuration);
    }

    function stopTimer() {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    function getCenterCard() {
      return stage.querySelector('[data-slot="center"]');
    }

    function handleCenterCardHover() {
      const centerCard = getCenterCard();
      if (centerCard) {
        centerCard.addEventListener("mouseenter", () => {
          isHovered = true;
          stopTimer();
        });
        
        centerCard.addEventListener("mouseleave", () => {
          isHovered = false;
          startTimer();
        });
      }
    }

    cards.forEach((c, i) =>
      c.addEventListener("click", () => {
        if (active !== i && !isAnimating) {
          active = i;
          render();
          stopTimer();
          if (!isHovered) startTimer();
        }
      })
    );

    render();
    setTimeout(handleCenterCardHover, 100);
    startTimer();

    const observer = new MutationObserver(() => {
      handleCenterCardHover();
    });
    
    observer.observe(stage, {
      attributes: true,
      subtree: true,
      attributeFilter: ['data-slot']
    });

    return () => {
      stopTimer();
      observer.disconnect();
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <div className="w-full min-h-screen">
      {/* Company Name - Top Left, Scrollable */}
      <div className="absolute top-30 left-15 z-50">
        <h2 className="text-[1.2rem] font-bold text-white bg-black/30 backdrop-blur-sm px-6">Hello, </h2>
        <h1 className="text-[2.8rem] font-stretch-150% font-bold leading-tight text-white bg-black/30 backdrop-blur-sm px-6">
        Your <span className="text-blue-500"> Seamless </span>Travel <br /> Lifecycle <span className="text-blue-500"> Platform.</span>
        </h1>
      </div>

      {/* Carousel Container */}
      <div className="w-full h-screen flex items-end justify-center">
        <div 
          ref={stageRef}
          className="relative w-full h-[80vh] max-w-7xl overflow-hidden"
          style={{
            transformOrigin: '50% 60%'
          }}
        >
          {[
            { title: "Taj Mahal", meta: "Agra, India", img: "https://i0.wp.com/landlopers.com/wp-content/uploads/2018/04/Taj-Mahal-India.jpg?resize=994%2C811&ssl=1", badge: "9.8" },
            { title: "Jaipur City Palace", meta: "Jaipur, India", img: "https://th.bing.com/th/id/OIP.a0ObpnhemArD8CAIbt7ByQHaJQ?w=138&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { title: "Kerala Backwaters", meta: "Kerala, India", img: "https://wallpaperaccess.com/full/1635218.jpg" },
            { title: "Goa Beaches", meta: "Goa, India", img: "https://th.bing.com/th/id/R.8744ec1e9cb23433bc79d9e58473c2db?rik=mpGfS1mZyxPxvA&riu=http%3a%2f%2ffoundtheworld.com%2fwp-content%2fuploads%2f2014%2f06%2fGoa-1.gif&ehk=ViLolpKAapP%2bLKckYDFnmnm0ot%2f0rVRwk%2bSUxEj2hBE%3d&risl=&pid=ImgRaw&r=0" },
            { title: "Hawa Mahal", meta: "Jaipur, India", img: "https://holidify.com/images/attr_wiki/compressed/attr_wiki_206.jpg" },
            { title: "Mysore Palace", meta: "Mysore, India", img: "https://i.pinimg.com/originals/17/15/99/1715996924a261668533ccf21d211673.jpg" },
            { title: "Humayun's Tomb", meta: "Delhi, India", img: "https://m.jtgtravel.com/img/humayuns-tomb-skip-the-line-e-tickets-guide-delhi-transfers-d804-26911P362-2.jpg" },
            { title: "Fatehpur Sikri", meta: "Uttar Pradesh, India", img: "https://www.tripsavvy.com/thmb/ge1Ew_bKisTT9SVd3DZQZP0EsRU=/2121x1414/filters:no_upscale():max_bytes(150000):strip_icc()/fatehpur-sikri--agra--india-578549431-5c50b071c9e77c00014afd58.jpg" },
            { title: "Lotus Temple", meta: "Delhi, India", img: "https://th.bing.com/th/id/OIP.km7Ii7q1YWbFqubZsfb1mgHaFq?w=255&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
            { title: "Charminar", meta: "Hyderabad, India", img: "https://tse4.mm.bing.net/th/id/OIP.LW9NNWrDShspLEda9pvkZgHaJ4?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" }
          ].map((card, idx) => (
            <div 
              key={idx}
              className="absolute left-1/2 top-1/2 w-64 h-96 bg-black rounded-lg overflow-hidden shadow-2xl cursor-pointer"
              style={{
                transform: 'translate(-50%, -50%)',
                transformOrigin: '50% 60%',
                willChange: 'transform, opacity'
              }}
            >
              {card.badge && (
                <span className="absolute left-2 top-2 text-xs bg-black/70 text-orange-400 px-2 py-1 rounded-full z-10 font-semibold">
                  ⭐ {card.badge}
                </span>
              )}
              <img 
                src={card.img} 
                alt={card.title} 
                className="w-full h-full object-cover" 
                style={{
                  willChange: 'filter, opacity'
                }}
              />
              
              {/* Centered Title Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="text-center px-4">
                  <h3 className="font-bold text-2xl mb-2 text-white drop-shadow-lg">
                    {card.title}
                  </h3>
                  <div className="text-sm text-white/90 font-medium bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {card.meta}
                  </div>
                </div>
              </div>

              {/* Subtle gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FanCards;
