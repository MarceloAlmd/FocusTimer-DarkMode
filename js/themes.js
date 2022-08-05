export default function () {
    const html = document.querySelector("html")

    const getStyle = (element, style) => 
        window.getComputedStyle(element).getPropertyValue(style)

    const lightModeColors = {
        bgBodyLight: getStyle(html, "--bg-bodylight"),
        bgColorCardLight: getStyle(html, "--bg-colorcardlight"),
        colorDisplayLight: getStyle(html, "--color-displaylight"),
        bgInput: getStyle(html, "--bg-input"),
        fillColor: getStyle(html, "--fill-color:"),
        fillColorcard: getStyle(html, "--fill-colorcard"),
        primaryColor: getStyle(html, "--primary-color"),
    }

    const darkModeColors = {
        bgBodyLight: "#121214",
        bgColorCardLight: "#29292E",
        colorDisplayLight: "#FFF",
        bgInput: "#FFF",
        fillColor: "#C4C4CC",
        fillColorcard: "#C4C4CC",
        primaryColor: "#0A3442"
    }

    const transformKey = key =>
        "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

    const changeColors = (colors) => {
        Object.keys(colors).map(key => 
            html.style.setProperty(transformKey(key), colors[key])
        )
    }

    return {
        lightModeColors,
        darkModeColors,
        changeColors
    }

}