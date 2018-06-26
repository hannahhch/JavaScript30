
//  querySelectorAll returns a NodeList - it is similar to an array but does not
// give you all of the same methods. you can use "for each" to loop over
// or you could turn it into an array
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
// this.dataset gets you all of the data attribute vals! add .sizing to get just the ones named sizing
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));


