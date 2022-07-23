input.onButtonPressed(Button.A, function () {
    basic.showString("JE")
    basic.showNumber(input.temperature())
    basic.showString("STUPNOV")
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("UROVEN ZVUKU JE")
    basic.showNumber(input.soundLevel())
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("UROVEN SVETLA JE")
    basic.showNumber(input.lightLevel())
    basic.clearScreen()
})
basic.forever(function () {
	
})
