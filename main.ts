// while True:
//     print("light level: " + input.light_level())
//     if input.light_level() > 5:
//         light.set_all(light.rgb(0, 0, 0))
//    elif input.light_level() < 5:
//         light.set_all(light.rgb(255, 255, 255))
//     else :
//         print ("Circuit has ran into error")
while (true) {
    console.log("Light level: " + input.lightLevel())
    if (input.lightLevel() < 4) {
        light.setAll(light.rgb(0, 0, 255))
    } else if (input.lightLevel() >= 12) {
        light.clear()
    } else {
        input.lightLevel() >= 4 && 4 < 12
        light.setAll(light.rgb(255, 255, 0))
    }
    
}
