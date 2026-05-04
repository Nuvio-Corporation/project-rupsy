let on = false
input.onButtonPressed(Button.A, function () {
    on = true
})
input.onButtonPressed(Button.B, function () {
    on = false
})
basic.forever(function () {
    if (on == true) {
        servos.P0.setAngle(90)
        basic.pause(500)
        servos.P0.setAngle(0)
        basic.pause(500)
    }
})
