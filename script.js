document.addEventListener('DOMContentLoaded', function() {
    var digits = {
        0: [2, 3, 4, 42, 46, 83, 87, 124, 128, 165, 169, 206, 210, 248, 249, 250],
        1: [3, 44, 85, 126, 167, 208, 249],
        2: [2, 3, 4, 42, 46, 87, 127, 128, 166, 167, 206, 247, 248, 249, 250, 251],
        3: [2, 3, 4, 42, 46, 87, 126, 127, 128, 165, 169, 206, 210, 248, 249, 250],
        4: [5, 45, 46, 85, 87, 125, 128, 165, 166, 167, 168, 169, 210, 251],
        5: [1, 2, 3, 4, 5, 42, 83, 124, 125, 126, 127, 169, 210, 247, 248, 249, 250],
        6: [1, 2, 3, 4, 5, 42, 46, 83, 124, 125, 126, 127, 128, 165, 169, 206, 210, 247, 248, 249, 250, 251],
        7: [1, 2, 3, 4, 5, 46, 87, 128, 169, 210, 251],
        8: [2, 3, 4, 42, 46, 83, 87, 125, 126, 127, 165, 169, 206, 210, 248, 249, 250],
        9: [1, 2, 3, 4, 5, 42, 46, 83, 87, 124, 125, 126, 127, 128, 169, 206, 210, 247, 248, 249, 250, 251]
    }

    var container = document.getElementById('container')
    
    for (var i = 0; i < 369; i++) {
        var square = document.createElement('div')
        square.classList.add('square')
        square.dataset.no = i + 1
        container.appendChild(square)
    }
    
    var dot_positions = [137, 219, 151, 233]
    for (var i = 0; i < 4; i++) {
        console.log(i)
        document.querySelectorAll(`[data-no='${dot_positions[i]}']`)[0].classList.add('dots')
    }
    
    var positions = [42, 48, 56, 62, 70, 76]

    var to_print = [0, 2, 2, 3, 4, 5]
    
    function drawDigit(digit, position) {
        for (var i = 0; i < digits[digit].length; i++) {
            document.querySelectorAll(`[data-no='${digits[digit][i] + positions[position]}']`)[0].classList.add('active')
        }
    }

    // Time calculations
    // Set the date we're counting down to
    var countDownDate = new Date("Mar 20, 2023 21:24:00").getTime()
    var x = setInterval(function() {
        // Get today's date and time
        var now = new Date().getTime()

        // Find the distance between now and the count down date
        var distance = countDownDate - now

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24))
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
        //var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    
        // format the string to print 2 digit numbers
        var cal = [days, hours, minutes]
        var time_string = ""
        
        for (var i = 0; i < cal.length; i++) {
            if (cal[i] < 10) {
                time_string += 0
                time_string += cal[i]
            }
            else {
                time_string += cal[i]
            }
        }
    
        // draw digits into clock
        var squares = document.getElementsByClassName('square')
        squares = Array.from(squares)
        squares.forEach(el => {
                el.classList.remove('active') // remove all active classes first
        })
        for (var i = 0; i < 6; i++) {
            drawDigit(time_string[i], i)
        }
    }, 3000)
})