function back () {
    MyRobotBit.MotorAB(motorDIR.Reverse, 50, 50)
}
function turn_right () {
    MyRobotBit.Rotate(Turn.Right, 50, 400)
}
input.onButtonPressed(Button.A, function () {
    while (true) {
        OLED.clear()
        OLED.writeString("P0=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P0))
        OLED.writeString("<+++>")
        OLED.writeString("P1=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P1))
        OLED.writeString("<+++>")
        OLED.writeString("P2=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P2))
        OLED.writeString("<+++>")
        OLED.writeString("P3=")
        OLED.writeNum(MySensor.analogRead(MySensor.analogPort.P3))
        OLED.writeString("<+++>")
        basic.pause(200)
    }
})
input.onButtonPressed(Button.AB, function () {
    MyRobotBit.TimePAUSE(1200)
    go()
})
function foward () {
    MyRobotBit.MotorAB(motorDIR.Reverse, 50, 50)
}
function turn_left () {
    MyRobotBit.Rotate(Turn.Left, 50, 400)
}
function Stop () {
    MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
}
function go () {
	
}
led.enable(false)
OLED.init(128, 64)
while (!(input.buttonIsPressed(Button.A))) {
	
}
