input.onSound(DetectedSound.Loud, function () {
    向き = 向き * -1
    ランダムに色を変更()
    soundExpression.slide.playUntilDone()
})
input.onGesture(Gesture.LogoUp, function () {
    向き = 1
    ランダムに色を変更()
    soundExpression.hello.playUntilDone()
})
input.onGesture(Gesture.LogoDown, function () {
    向き = -1
    ランダムに色を変更()
    soundExpression.hello.playUntilDone()
})
function ランダムに色を変更 () {
    basic.pause(1000)
    色 = randint(1, 300)
    strip.showRainbow(色, 色 + 70)
}
let 色 = 0
let strip: neopixel.Strip = null
let 向き = 0
music.setBuiltInSpeakerEnabled(true)
music.setVolume(255)
soundExpression.happy.playUntilDone()
input.setSoundThreshold(SoundThreshold.Loud, 33)
向き = 1
strip = neopixel.create(DigitalPin.P0, 10, NeoPixelMode.RGB)
strip.setBrightness(16)
ランダムに色を変更()
basic.forever(function () {
    strip.rotate(向き)
    strip.show()
})
