let azar = 0
input.onGesture(Gesture.Shake, function () {
    azar = randint(1, 3)
    if (azar == 1) {
        basic.showIcon(IconNames.Yes)
    } else if (azar == 2) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Asleep)
    }
})
