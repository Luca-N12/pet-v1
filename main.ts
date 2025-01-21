input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # # .
        . . . . #
        # . . . #
        . . . . #
        . . # # .
        `)
    basic.showLeds(`
        . . # # .
        . . . . #
        . # . . #
        . . . . #
        . . # # .
        `)
    basic.showLeds(`
        . . # # .
        . . . . #
        . . # . #
        . . . . #
        . . # # .
        `)
    basic.showLeds(`
        . . # # .
        . . . . #
        . . . # #
        . . . . #
        . . # # .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . # #
        . . # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # #
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # # .
        . . . . #
        . . # # .
        . . . . .
        `)
    basic.showLeds(`
        . . # # .
        . . . . #
        . . . . #
        . . . . #
        . . # # .
        `)
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
	
})
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . # . .
        . . . . .
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . . . .
        . . . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . . .
        . . . . .
        # # . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        # . # . .
        . . . . .
        # # # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . . # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . . . # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . #
        . . . . .
        . . . . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . . . . .
        . . . # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . #
        . . . . .
        . . # # #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
