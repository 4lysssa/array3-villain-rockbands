input.onButtonPressed(Button.A, function () {
	
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= 12; index++) {
        basic.showString("" + (text_list[index]))
    }
})
input.onButtonPressed(Button.B, function () {
    index = randint(0, 12)
    basic.showString("Hello!")
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
"PF",
"acdc",
"NRVN",
"TRS",
"queen",
"the beatles????"
]
basic.forever(function () {
	
})
