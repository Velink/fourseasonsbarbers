
// Testimonial Loop

var idArray = ['container-0', 'container-1', 'container-2', 'container-3', 'container-4', 'container-5', 'container-6', 'container-7'];

containerSequence(0);
function containerSequence(i) {
    if (idArray.length > i) {
        setTimeout(function() {
            document.getElementById(`container-${i}`).style.opacity = 0;
            if(i < 7){
                document.getElementById(`container-${i + 1}`).style.opacity = 1;
            }
            containerSequence(++i);
        }, 7000); // 2 second (in milliseconds)

    } else if (idArray.length == i) { // Loop
        document.getElementById(`container-0`).style.opacity = 1;
        containerSequence(0);
    }
}

