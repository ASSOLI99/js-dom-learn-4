let inputs = document.querySelectorAll(".controls input")
console.log(inputs)
function handleUpdate(){
    let suffix= this.dataset.sizing || "";
    document.documentElement.style.setProperty(`--${this.name}`,this.value+suffix);
};
inputs.forEach(input => input.addEventListener("change",handleUpdate));
inputs.forEach(input => input.addEventListener("mousemove",handleUpdate));
