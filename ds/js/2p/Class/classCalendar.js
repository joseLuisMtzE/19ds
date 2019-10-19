class Calendario {
    constructor(d, m, y) {
        this.d = d
        this.m = m
        this.y = y
        this.calendar = []
    }
    printCalendar(m, y) { //Matrix
        let diasMes = 0;
        let contador = 1;
        let inicioMes = 0;

        let calendarioF = new Array(5);
        for (let i = 0; i < 5; i++) {
            calendarioF[i] = new Array(7);
            for (let j = 0; j < 7; j++) {
                calendarioF[i][j] = 0;
            }
        }
        let x = this.firstDayYear(y);

        if (this.isLeapYear(y)) {
            if (m == 2) {
                diasMes = 29;
                inicioMes = (x + 31) % 7;
            }
        } else {
            switch (m) {
                case 1:
                    diasMes = 31;
                    inicioMes = x;
                    break;
                case 2:
                    diasMes = 28;
                    inicioMes = (x + 31) % 7;
                    break;
                case 3:
                    diasMes = 31;
                    inicioMes = (x + 59) % 7;
                    break;
                case 4:
                    diasMes = 30;
                    inicioMes = (x + 90) % 7;
                    break;
                case 5:
                    diasMes = 31;
                    inicioMes = (x + 120) % 7;
                    break;
                case 6:
                    diasMes = 30;
                    inicioMes = (x + 151) % 7;
                    break;
                case 7:
                    diasMes = 31;
                    inicioMes = (x + 181) % 7;
                    break;
                case 8:
                    diasMes = 31;
                    inicioMes = (x + 212) % 7;
                    break;
                case 9:
                    diasMes = 30;
                    inicioMes = (x + 243) % 7;
                    break;
                case 10:
                    diasMes = 31;
                    inicioMes = (x + 273) % 7;
                    break;
                case 11:
                    diasMes = 30; //
                    inicioMes = (x + 304) % 7;
                    break;
                case 12:
                    diasMes = 31;
                    inicioMes = (x + 334) % 7;
                    break;
                default:
                    diasMes = "Error"
                    break;
            }
        }

        for (let i = 0; i < 5; i++) {
            if (i == 0) {
                for (let j = inicioMes; j < 7; j++) {
                    calendarioF[i][j] = contador;
                    contador++
                }
            } else {
                for (let j = 0; j < 7; j++) {

                    if (contador <= diasMes) {
                        calendarioF[i][j] = contador;
                        contador++;
                    }
                }
            }

        }
        return calendarioF;
    }

    //es bisiesto si es divisible por 4, pero no por 100
    //todos los multipleos de 400 son años bisiestos
    //febrero tiene 29 dias en un bisiesto
    //1896 es bisiesto. 1900 no, 2000,004 si 2100 nel
    isLeapYear(y) { //bool
        this.y = y;
        if (this.y % 4 === 0 && this.y % 100 !== 0 || this.y % 400 === 0) {
            return true
        } else {
            return false
        }
    }
    numDias(x) {
        switch (x) {
            case 1:
                return "Lunes"
            case 2:
                return "Martes"
            case 3:
                return "Miercoles"
            case 4:
                return "Jueves"
            case 5:
                return "Viernes"
            case 6:
                return "Sabado"
            default:
                return "Domingo"
        }
    }
    todayPlus(d, n) { //day(d,m,y) int
        let tp = (d + n) % 7
        return this.numDias(tp) + ", dia " + tp + " de la semana.";
    }

    firstDayYear(y) { //int
        this.y = y;
        var x = ((y + Math.floor((y - 1) / 4) - Math.floor((y - 1) / 100) + Math.floor((y - 1) / 400)) % 7)
        console.log(x)
        switch (x) {
            case 1:
                return "Lunes"
            case 2:
                return "Martes"
            case 3:
                return "Miercoles"
            case 4:
                return "Jueves"
            case 5:
                return "Viernes"
            case 6:
                return "Sabado"
            default:
                return "Domingo"
        }
    }
}
var c = new Calendario(17, 10, 2019)
c.todayPlus(17, 100)