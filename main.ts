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
function Line_follow () {
    Loop = true
    ค่าแสงP0 = 440
    ค่าแสงP1 = 464
    ค่าแสงP2 = 626
    ค่าแสงP3 = 728
    while (Loop) {
        if (MySensor.analogRead(MySensor.analogPort.P0) > ค่าแสงP0 && MySensor.analogRead(MySensor.analogPort.P1) > ค่าแสงP1 && (MySensor.analogRead(MySensor.analogPort.P2) > ค่าแสงP2 && MySensor.analogRead(MySensor.analogPort.P3) > ค่าแสงP3)) {
            MyRobotBit.MotorAB(motorDIR.Forward, 50, 50)
        } else {
            if (MySensor.analogRead(MySensor.analogPort.P0) < ค่าแสงP0 && MySensor.analogRead(MySensor.analogPort.P1) > ค่าแสงP1 && (MySensor.analogRead(MySensor.analogPort.P2) > ค่าแสงP2 && MySensor.analogRead(MySensor.analogPort.P3) > ค่าแสงP3)) {
                MyRobotBit.Rotate(Turn.Left, 50, 200)
                MyRobotBit.TimePAUSE(100)
                MyRobotBit.MotorAB(motorDIR.Reverse, 50, 50)
                MyRobotBit.TimePAUSE(100)
                MyRobotBit.MotorAB(motorDIR.Forward, 50, 50)
            } else if (MySensor.analogRead(MySensor.analogPort.P0) > ค่าแสงP0 && MySensor.analogRead(MySensor.analogPort.P1) < ค่าแสงP1 && (MySensor.analogRead(MySensor.analogPort.P2) > ค่าแสงP2 && MySensor.analogRead(MySensor.analogPort.P3) > ค่าแสงP3)) {
                MyRobotBit.Rotate(Turn.Right, 50, 200)
                MyRobotBit.TimePAUSE(100)
                MyRobotBit.MotorAB(motorDIR.Reverse, 50, 50)
                MyRobotBit.TimePAUSE(100)
                MyRobotBit.MotorAB(motorDIR.Forward, 50, 50)
            } else {
                if (MySensor.analogRead(MySensor.analogPort.P0) < ค่าแสงP0 && MySensor.analogRead(MySensor.analogPort.P1) < ค่าแสงP1 && (MySensor.analogRead(MySensor.analogPort.P2) > ค่าแสงP2 && MySensor.analogRead(MySensor.analogPort.P3) > ค่าแสงP3)) {
                    index = false
                    MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
                }
            }
        }
    }
    MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
}
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
    Line_follow()
}
let index = false
let ค่าแสงP3 = 0
let ค่าแสงP2 = 0
let ค่าแสงP1 = 0
let ค่าแสงP0 = 0
let Loop = false
led.enable(false)
OLED.init(128, 64)
while (!(input.buttonIsPressed(Button.A))) {
	
}
