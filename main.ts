function ถอยหลัง () {
    MyRobotBit.TimePAUSE(150)
    MyRobotBit.MotorAB(motorDIR.Reverse, 40, 40)
    MyRobotBit.TimePAUSE(260)
    MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
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
function เดินหน้า () {
    MyRobotBit.MotorAB(motorDIR.Forward, 40, 40)
    MyRobotBit.TimePAUSE(500)
}
input.onButtonPressed(Button.AB, function () {
    MyRobotBit.TimePAUSE(1200)
    ไป()
})
function RT90 () {
    MyRobotBit.TimePAUSE(150)
    MyRobotBit.Rotate(Turn.Right, 40, 360)
    MyRobotBit.TimePAUSE(200)
    MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
}
function Linefollow () {
    Loop = true
    ค่าแสงP0 = 80
    ค่าแสงP1 = 95
    ค่าแสงP2 = 100
    ค่าแสงP3 = 102
    while (Loop) {
        if (MySensor.analogRead(MySensor.analogPort.P0) > ค่าแสงP0 && MySensor.analogRead(MySensor.analogPort.P1) > ค่าแสงP1 && (MySensor.analogRead(MySensor.analogPort.P2) > ค่าแสงP2 && MySensor.analogRead(MySensor.analogPort.P3) > ค่าแสงP3)) {
            MyRobotBit.MotorAB(motorDIR.Forward, 40, 40)
        } else if (MySensor.analogRead(MySensor.analogPort.P0) < ค่าแสงP0 && MySensor.analogRead(MySensor.analogPort.P1) > ค่าแสงP1 && (MySensor.analogRead(MySensor.analogPort.P2) > ค่าแสงP2 && MySensor.analogRead(MySensor.analogPort.P3) > ค่าแสงP3)) {
            MyRobotBit.Rotate(Turn.Right, 30, 80)
        } else if (MySensor.analogRead(MySensor.analogPort.P0) > ค่าแสงP0 && MySensor.analogRead(MySensor.analogPort.P1) > ค่าแสงP1 && (MySensor.analogRead(MySensor.analogPort.P2) > ค่าแสงP2 && MySensor.analogRead(MySensor.analogPort.P3) < ค่าแสงP3)) {
            MyRobotBit.Rotate(Turn.Left, 30, 80)
        } else {
            if (MySensor.analogRead(MySensor.analogPort.P0) > ค่าแสงP0 && MySensor.analogRead(MySensor.analogPort.P1) < ค่าแสงP1 || MySensor.analogRead(MySensor.analogPort.P2) < ค่าแสงP2 && MySensor.analogRead(MySensor.analogPort.P3) > ค่าแสงP3) {
                Loop = false
                MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
            }
            if (MySensor.analogRead(MySensor.analogPort.P0) < ค่าแสงP0 && MySensor.analogRead(MySensor.analogPort.P1) < ค่าแสงP1 || MySensor.analogRead(MySensor.analogPort.P2) < ค่าแสงP2 && MySensor.analogRead(MySensor.analogPort.P3) > ค่าแสงP3) {
                Loop = false
                MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
            }
            if (MySensor.analogRead(MySensor.analogPort.P0) > ค่าแสงP0 && MySensor.analogRead(MySensor.analogPort.P1) < ค่าแสงP1 || MySensor.analogRead(MySensor.analogPort.P2) < ค่าแสงP2 && MySensor.analogRead(MySensor.analogPort.P3) < ค่าแสงP3) {
                Loop = false
                MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
            }
        }
    }
    MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
}
function LT90 () {
    MyRobotBit.TimePAUSE(150)
    MyRobotBit.Rotate(Turn.Left, 40, 360)
    MyRobotBit.TimePAUSE(200)
    MyRobotBit.motorOFF(motorSEL.M12, StopMode.Brake)
}
function ไป () {
    เดินหน้า()
    Linefollow()
    ถอยหลัง()
    RT90()
    Linefollow()
    ถอยหลัง()
    RT90()
    Linefollow()
    ถอยหลัง()
    RT90()
    Linefollow()
    ถอยหลัง()
    LT90()
}
let ค่าแสงP3 = 0
let ค่าแสงP2 = 0
let ค่าแสงP1 = 0
let ค่าแสงP0 = 0
let Loop = false
led.enable(false)
OLED.init(128, 64)
while (!(input.buttonIsPressed(Button.A))) {
	
}
