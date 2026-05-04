on = False

def on_button_pressed_a():
    global on
    on = True
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global on
    on = False
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    if on == True:
        servos.P0.set_angle(90)
        basic.pause(500)
        servos.P0.set_angle(0)
        basic.pause(500)
basic.forever(on_forever)
