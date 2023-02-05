export function callShade(c) {
    let wbg = 'rgb(230, 245, 255) '
    let bbg = 'rgb(0, 0, 0)'
    let gbg = "rgb(119, 119, 119)"
    if(document.querySelector("#_overlay_") != null) {
        let s = document.querySelector("#_overlay_")
        s.style.background = c == 'white' ? wbg : c == 'grey' ? gbg : bbg
        s.style.visibility = "visible"
    } else {
        let s = document.createElement("div")
        s.id = '_overlay_'
        s.style.background = c == 'white' ? wbg : c == 'grey' ? gbg : bbg
        document.body.append(s)
    }
}

export function cancelShade() {
    if (document.querySelector("#_overlay_")!=null) {
        let s = document.querySelector("#_overlay_")
        s.style.visibility = "hidden"
    }
}