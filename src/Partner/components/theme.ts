import { createMuiTheme }  from '@material-ui/core/styles'
const theme = createMuiTheme({
  palette: {
    primary: {
        main :  '#ff8021'  //$orange: #ff8021;
    },
    secondary: {
        main : '#65b1ec'  //$lightblue: #65b1ec;
    }
    
  },
  typography : {
       h1 : {
        fontFamily: "Roboto Helvetica Arial sans-serif",
        fontWeight: 300,
        fontSize: "54px",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
       },
       h2 : {
        fontFamily: "Roboto Helvetica Arial sans-serif",
        fontWeight: 300,
        fontSize: "32px",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
       },
       h3 : {
        fontFamily:  "Roboto Helvetica Arial sans-serif",
        fontWeight: 300,
        fontSize: "24px",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
       },
       // subtitle1 maps to P1 from figma design
       subtitle1 : {
        fontFamily:  "Gilroy-Regular",
        fontSize: "18px",
        lineHeight: '27px',
       },
              
       // subtitle2 maps to P2 from figma design

       subtitle2 : {
        fontFamily:  "Roboto Helvetica Arial sans-serif",
        fontWeight: 300,
        fontSize: "15px",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
       },
       button : {
        fontFamily:  "Roboto Helvetica Arial sans-serif",
        fontWeight: 300,
        fontSize: "14px",
        lineHeight: 1.167,
        letterSpacing: "-0.01562em",
       }
    },
    overrides: {
        // MuiButton: {
        //   root: {
        //     borderRadius: 20,
        //   }, 
        
        // },
        // MuiOutlinedInput : {
        //     root: {
        //         borderRadius: 25,
        //       }, 
        // }
      },
})
export default theme