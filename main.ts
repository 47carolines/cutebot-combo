let mode = 0
basic.forever(function () {
    if (mode == 0) {
        cuteBot.moveTime(cuteBot.Direction.forward, 30, 2)
        basic.pause(2000)
        cuteBot.moveTime(cuteBot.Direction.backward, 30, 2)
    } else {
        basic.showIcon(IconNames.Heart)
        music.play(music.stringPlayable("E - A - E - G - ", 120), music.PlaybackMode.UntilDone)
    }
})
