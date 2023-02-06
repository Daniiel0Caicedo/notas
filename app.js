const note1 = document.getElementById ("note1")
const note2 = document.getElementById ("note2")
const note3 = document.getElementById ("note3")
const calculate = document.createElement ("calculate")

calculate.addEventListener("click",calculateNotes)

function calculateNotes () {

    let note1 = Headers(note1.value) * 0.3;
    let note2 = Headers(note2.value) * 0.3;
    let note3 = Headers(note3.value) * 0.4;

    const result = (note1.value + note2.value + note3.value) / 3

    if (result <= 2.0)
        return result + "perdio la asignatura"
    else if (result >= 2.1 && result <= 3.4)
        return result + "perdio la asignatura , tiene posibilidades de recuperar"
    else if (result >= 3.5 && result <= 4.5)
        return result + "aprobo la asignatura de manera satisfactoria"
    else if (result >= 4.6 && result <= 5.0)
        return result + "has aprobado eres un aprendiz exelente "
}
