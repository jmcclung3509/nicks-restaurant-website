

const useAnimateIntoView = ()=>{
    const animatedElements = document.querySelectorAll(".animate")
    const options = {
        threshold: 0.1,
    }

    let observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            if(entry.isIntersecting){
                console.log("intersect", entry.target.id)
               entry.target.classList.add('isAnimated')
                observer.unobserve(entry.target)
            }
        })
    }, options)
    animatedElements.forEach((el)=> observer.observe(el))
}

// const useScroll=()=>{
//     let scrollPosition = 0;
//     let lastScrollPosition = 0;
//     let scrollDirectionUp =  false;

//    const handleScroll=()=>{
//         scrollPosition = window.pageOffSet;
//         scrollDirectionUp = lastScrollPosition > scrollPosition;
//         lastScrollPosition =scrollPosition
//     }
//     window.addEventListener("scroll", handleScroll)
//     return {scrollPosition, scrollDirectionUp}
// }

window.addEventListener("load", ()=> {
    setTimeout(()=>{
        useAnimateIntoView()

    }, 100)
})
