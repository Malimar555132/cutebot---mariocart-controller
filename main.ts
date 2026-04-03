controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    radio.sendNumber(2)
})
radio.onReceivedNumber(function (receivedNumber) {
    hit_a_block_for_powerup(receivedNumber)
    attacked(receivedNumber)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    radio.sendNumber(1)
})
function attacked (num: number) {
    if (num == 11) {
    	
    } else if (num == 12) {
    	
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Item_holding == 0) {
        Item_holding = -1
        has_item_already = false
        Item.setImage(Item_empty)
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        radio.sendNumber(0)
    } else if (Item_holding == 1) {
        Item_holding = -1
        has_item_already = false
        Item.setImage(Item_empty)
        music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
        radio.setGroup(enemy_radio)
        radio.sendNumber(11)
        radio.setGroup(your_radio)
    } else if (Item_holding == 2) {
        Item_holding = -1
        has_item_already = false
        Item.setImage(Item_empty)
        music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
        radio.setGroup(enemy_radio)
        radio.sendNumber(12)
        radio.setGroup(your_radio)
    }
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    radio.sendNumber(5)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    radio.sendNumber(8)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    radio.sendNumber(7)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    radio.sendNumber(9)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    radio.sendNumber(6)
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    radio.sendNumber(3)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    radio.sendNumber(4)
})
function hit_a_block_for_powerup (num: number) {
    if (num == 10) {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
        if (has_item_already == false) {
            spin_counter = randint(16, 18)
            roulette_index_on_counter = 0
            for (let index = 0; index < spin_counter; index++) {
                if (roulette_index_on_counter == Item_Array.length) {
                    roulette_index_on_counter = 0
                }
                Item.setImage(Item_Array[roulette_index_on_counter])
                music.play(music.createSoundEffect(WaveShape.Square, 3188, 2921, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
                pause(100)
                roulette_index_on_counter += 1
            }
            has_item_already = true
            Item_holding = (roulette_index_on_counter - 1 + Item_Array.length) % Item_Array.length
        }
    }
}
let roulette_index_on_counter = 0
let spin_counter = 0
let has_item_already = false
let Item: Sprite = null
let Item_empty: Image = null
let Item_Array: Image[] = []
let enemy_radio = 0
let Item_holding = 0
let your_radio = 0
your_radio = 1
Item_holding = -1
enemy_radio = 3
radio.setGroup(your_radio)
Item_Array = [assets.image`myImage2`, assets.image`myImage1`, assets.image`myImage0`]
Item_empty = img`
    ..d11111111111111111111d..
    .d1bbbbbbbbbbbbbbbbbbbb1d.
    d1bbffffffffffffffffffbb1d
    1bbffffffffffffffffffffbb1
    1bffffffffffffffffffffffb1
    1bffffffffffffffffffffffb1
    1bffffffffffffffffffffffb1
    1bffffffffffffffffffffffb1
    1bffffffffffffffffffffffb1
    1bffffffffffffffffffffffb1
    1bffffffffffffffffffffffb1
    1bffffffffffffffffffffffb1
    1bffffffffffffffffffffffb1
    1bffffffffffffffffffffffb1
    1bffffffffffffffffffffffb1
    1bffffffffffffffffffffffb1
    1bffffffffffffffffffffffb1
    1bffffffffffffffffffffffb1
    1bffffffffffffffffffffffb1
    1bffffffffffffffffffffffb1
    1bbffffffffffffffffffffbb1
    d1bbffffffffffffffffffbb1d
    .d1bbbbbbbbbbbbbbbbbbbb1d.
    ..d11111111111111111111d..
    `
Item = sprites.create(Item_empty, SpriteKind.Player)
