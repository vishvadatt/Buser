import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export default styled(Box)(({ theme }) => {
    const { palette, functions, boxShadows } = theme;

    const { white, dark, light, grey, gradients, secondary } = palette;
    const { linearGradient, pxToRem } = functions;
    const { buttonBoxShadow } = boxShadows;

    return {
        height: "100%",
        "& .fc-media-screen": {
            height: "100%",
            color: dark.main,
        },
        "& .slot-success": {
            padding: `${pxToRem(5)} ${pxToRem(6)} ${pxToRem(10)} !important`,
            // padding: `${pxToRem(3)} ${pxToRem(4.8)} ${pxToRem(2.5)} !important`,
            backgroundImage: linearGradient(gradients.success.main, gradients.success.state),
            "& *": { color: white.main },
        },
        "& .slot-blocked": {
            padding: `${pxToRem(5)} ${pxToRem(6)} ${pxToRem(10)} !important`,
            // padding: `${pxToRem(3)} ${pxToRem(4.8)} ${pxToRem(2.5)} !important`,
            backgroundColor: "gray",
            opacity:0.5,
            "& *": { color: white.main },
        },
        "& .slot-error": {
            padding: `${pxToRem(5)} ${pxToRem(6)} ${pxToRem(10)} !important`,
            backgroundImage: linearGradient(gradients.error.main, gradients.error.state),
            "& *": { color: white.main },
        },
        "&.css-1h4m66r-MuiPaper-root-MuiCard-root": {
            borderRadius: `0.6rem !important`
        }
    };
});
