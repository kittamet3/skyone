def on_button_pressed_a():
    while True:
        OLED.clear()
        OLED.write_string("P0")
        OLED.write_num(MySensor.analog_read(MySensor.analogPort.P0))
        OLED.write_string("<+++>")
        OLED.write_string("P1")
        OLED.write_num(MySensor.analog_read(MySensor.analogPort.P1))
        OLED.write_string("<+++>")
        OLED.write_string("P2")
        OLED.write_num(MySensor.analog_read(MySensor.analogPort.P2))
        OLED.write_string("<+++>")
        OLED.write_string("P3")
        OLED.write_num(MySensor.analog_read(MySensor.analogPort.P3))
        OLED.write_string("<+++>")
        basic.pause(200)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    MyRobotBit.time_pause(2000)
    ไป()
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def Linefollow():
    global Loop, ค่าแสงP0, ค่าแสงP1, ค่าแสงP2, ค่าแสงP3
    Loop = True
    ค่าแสงP0 = 568
    ค่าแสงP1 = 593
    ค่าแสงP2 = 256
    ค่าแสงP3 = 303
    while Loop:
        if MySensor.analog_read(MySensor.analogPort.P0) == ค่าแสงP0 or MySensor.analog_read(MySensor.analogPort.P1) == ค่าแสงP1 or (MySensor.analog_read(MySensor.analogPort.P2) == ค่าแสงP2 or MySensor.analog_read(MySensor.analogPort.P3) == 0):
            pass
        else:
            pass
def ไป():
    Linefollow()
ค่าแสงP3 = 0
ค่าแสงP2 = 0
ค่าแสงP1 = 0
ค่าแสงP0 = 0
Loop = False
led.enable(False)
OLED.init(128, 64)
while not (input.button_is_pressed(Button.A)):
    pass