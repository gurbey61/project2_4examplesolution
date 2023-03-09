let on = 0
input.onButtonPressed(Button.A, function () {
    on = 1
})
input.onButtonPressed(Button.B, function () {
    on = 0
})
basic.forever(function () {
    if (input.lightLevel() > 100 && on == 1) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.clearScreen()
        basic.pause(1000)
    }
})
