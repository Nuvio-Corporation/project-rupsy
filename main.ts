let on = false
input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.B, function () {
    on = false
    basic.showIcon(IconNames.No)
})
input.onSound(DetectedSound.Loud, function () {
    on = true
    basic.showIcon(IconNames.Yes)
})
basic.forever(function () {
    if (on == true) {
        servos.P0.setAngle(90)
        basic.pause(500)
        servos.P0.setAngle(0)
        basic.pause(500)
    }
})
