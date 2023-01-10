const animatedElements = document.querySelectorAll(".animate")

const options = {
    threshold: 0.3,
}

const useAnimateIntoView = ()=>{

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
// onMounted(()=>{
//     setTimeout(()=>{
//         useAnimateIntoView()
//     }, 100)
// })
// onUpdated(()=>{
//     setTimeout(()=>{
//         useAnimateIntoView()
//     }, 100)
// })
useAnimateIntoView()