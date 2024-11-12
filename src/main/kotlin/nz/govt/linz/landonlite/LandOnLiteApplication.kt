package nz.govt.linz.landonlite

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
// BE Changes
@SpringBootApplication
class LandOnLiteApplication {
}

fun main(args: Array<String>) {
    runApplication<LandOnLiteApplication>(*args)
}