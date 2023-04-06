const thema = {
    colors: {
        primary: "#161510",
        secondary: "#f95b1c",
        darkBackground: "#303030",
        lightBackground: "#939393",
        background: "#000000",
        white: "#ffffff",
        black: "#161510",
        redText: "#FF0000",
        redBackground: "#FF7878",
        yellowText: "#FFC700",
        yellowBackground: "#FDFF9F",
        orangeText: "#F95B1C",
        orangeBackground: "#FFA27C",
        greenText: "#339E00",
        greenBackground: "#AEEB91"
    },
    font: {
        h1FontFamily: "Raleway",
        h1FontWeight: "Bold",
        h1FontSize: "24px",

        h2FontFamily: "Raleway",
        h2FontWeight: "Bold",
        h2fontSize: "15px",

        h3FontFamily: "Raleway",
        h3FontWeight: "Regular",
        h3fontSize: "20px",

        pFontFamily: "Raleway",
        pFontWeight: "Medium",
        pfontSize: "15px"
    }
}

const breakpoints = ['40em', '52em', '64em', '80em']

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

export default thema;