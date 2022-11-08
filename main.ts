input.onButtonPressed(Button.A, function () {
    basic.showString("" + (text_list[0]))
})
input.onButtonPressed(Button.AB, function () {
    for (let value of text_list) {
        index = randint(0, 12)
        basic.showString("" + (text_list.removeAt(index)))
    }
})
input.onButtonPressed(Button.B, function () {
    index = randint(0, 12)
    basic.showString("" + (text_list.removeAt(index)))
})
let index = 0
let text_list: string[] = []
text_list = [
"joker",
"thanos",
"dr doom",
"!",
"!?",
"!1"
]
text_list = [
"pink floyd",
"acdc",
"nirvana",
"TRS",
"queen",
"the beatles????"
]
basic.forever(function () {
	
})
