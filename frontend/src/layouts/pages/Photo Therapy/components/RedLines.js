import React, { useEffect, useState, useRef, memo } from 'react';
import { Button, TextField } from "@mui/material";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import { errorToast } from 'components/Toaster/toast';


// Typechecking props for the SoftButton
RedLines.propTypes = {
    children: PropTypes.node.isRequired,
    editTitle: PropTypes.string,
    line_data: PropTypes.object,
    getdata: PropTypes.func
    // size: PropTypes.oneOf(["small", "medium", "large"]),
    // variant: PropTypes.oneOf(["text", "contained", "outlined", "gradient"]),
    // color: PropTypes.oneOf([
    //   "white",
    //   "primary",
    //   "secondary",
    //   "info",
    //   "success",
    //   "warning",
    //   "error",
    //   "light",
    //   "dark",
    // ]),
    // circular: PropTypes.bool,
    // iconOnly: PropTypes.bool,
    // children: PropTypes.node.isRequired,
};

export default function RedLines(props) {
    const { children, editTitle, getdata, line_data } = props
    // console.log(props)

    const [edit, setEdit] = useState(false)
    const [lineData, setLineData] = useState();

    const [isDraggingX, setIsDraggingX] = useState(false);
    const [isDraggingY, setIsDraggingY] = useState(false);
    const [storedPosition, setStoredPosition] = useState();
    const [LineOptions, setLineOptions] = useState(false)
    const [rotateBtn, setRotateBtn] = useState(false)

    const [boxDimensions, setBoxDimensions] = useState()

    useEffect(() => {
        // console.log(line_data)
        setLineData(line_data)
    }, [line_data, edit])

    let boxRef
    if (editTitle == "front") boxRef = "frontBox"
    else if (editTitle == "back") boxRef = "backBox"
    else if (editTitle == "left") boxRef = "leftBox"
    else if (editTitle == "right") boxRef = "rightBox"
    else if (editTitle == "hoh") boxRef = "hohBox"
    else if (editTitle == "pt") boxRef = "ptBox"
    else if (editTitle == "dog") boxRef = "dogBox"
    else if (editTitle == "cat") boxRef = "catBox"
    else if (editTitle == "both") boxRef = "bothBox"

    useEffect(() => {
        if (editTitle == false) setEdit(false)
        else if (editTitle == "front") setEdit(true)
        else if (editTitle == "back") setEdit(true)
        else if (editTitle == "left") setEdit(true)
        else if (editTitle == "right") setEdit(true)
        else if (editTitle == "hoh") setEdit(true)
        else if (editTitle == "pt") setEdit(true)
        else if (editTitle == "dog") setEdit(true)
        else if (editTitle == "cat") setEdit(true)
        else if (editTitle == "both") setEdit(true)
    }, [editTitle])


    useEffect(() => {
        if (lineData)
            getdata({
                title: editTitle,
                data: lineData,
                box: boxDimensions
            })
        // console.log(edit)
    }, [lineData, edit])

    const getBoxDimensions = () => {
        const box = document.getElementById(boxRef)
        const dimensions = box?.getBoundingClientRect()
        console.log(dimensions)
        setBoxDimensions(dimensions)
    }
    // setting  box dimensions and setting line data (if any) on refresh
    useEffect(() => {
        getBoxDimensions()
    }, [boxRef, editTitle])

    // console.log("ok")

    const drag = isDraggingX && edit || isDraggingY && edit ? (e) => {
        const { left, top, width, height } = boxDimensions;
        if (isDraggingX && rotateBtn || isDraggingY && rotateBtn) {
            const { clientX, clientY } = e;

            //box dimensions
            const { left, top, width, height } = boxDimensions;
            const boxCenterX = left + width / 2;
            const boxCenterY = top + height / 2;

            //difference of current line  coordinates and box center coordinates
            const deltaX = clientX - boxCenterX;
            const deltaY = clientY - boxCenterY;
            // console.log(clientX, deltaX, boxCenterX)

            const currentAngle = Math.atan2(deltaY, deltaX);

            if (isDraggingX) {
                let rotation = (currentAngle * 180) / Math.PI
                // setRotateX({ value: rotation })
                setLineData({ ...lineData, rotateX: rotation })
            }
            else {
                let rotation = (currentAngle * 180) / Math.PI
                // setRotateY(prevState=>{
                //     return({ value: 90 + rotation })
                // })
                setLineData({ ...lineData, rotateY: 90 + rotation })
            }
            // console.log(currentAngle)
        }
        else if (isDraggingX && !rotateBtn) {
            console.log(e.clientY, e.currentTarget.offsetTop, top)
            const finalY = e.clientY - top
            let arr = [...lineData.lineX]
            arr.splice(storedPosition.index, 1, { ...lineData.lineX[storedPosition.index], top: finalY + "px" })

            if (lineData.lineX.length == 1) {
                setLineData({ ...lineData, lineX: [...arr] })
            }
            else {
                if (storedPosition.index != 0) {
                    setLineData({ ...lineData, lineX: [...arr] })
                }
            }
        }
        else if (isDraggingY && !rotateBtn) {
            // console.log("y is dragging")
            const finalX = e.clientX - left
            let arr = [...lineData.lineY]
            arr.splice(storedPosition.index, 1, { ...lineData.lineY[storedPosition.index], left: finalX + "px" })

            if (lineData.lineY.length == 1) {
                setLineData({ ...lineData, lineY: [...arr] })
            }
            else {
                if (storedPosition.index != 0) {
                    setLineData({ ...lineData, lineY: [...arr] })
                }
            }
        }
    } : null

    const addLineX = () => {

        if (lineData.lineX.length == 1) {
            let obj = { ...lineData }
            obj.rotateX = lineData.rotateX
            obj.lineX = [
                { top: "50%", left: "-100%", width: "300%" },
                { top: "10px", left: "-100%", width: "300%" }
            ]
            // console.log(arr)

            setLineData({ ...obj })
        }
        else if (lineData.lineX.length <= 10) {
            let oldTop = lineData.lineX[lineData.lineX.length - 1].top
            // console.log(oldTop)

            let arr = oldTop.split("")
            arr.splice(arr.length - 2, 2)

            let x = arr.join("")
            let newTop = Number(x) + 10
            console.log(newTop)

            // if (newTop < height - top)
            //     setLineX([...lineX, { top: newTop + "px", left: "-100%", width: "300%" }])
            // else {
            // let newTop = 10
            console.log(newTop)
            // setLineX([...lineX, { top: newTop + "px", left: "-100%", width: "300%" }])
            setLineData({ ...lineData, lineX: [...lineData.lineX, { top: newTop + "px", left: "-100%", width: "300%", height: "1.3px" }] })
            // }
        }
    }

    const addLineY = () => {
        if (lineData.lineY.length == 1) {
            let obj = { ...lineData }
            obj.rotateY = lineData.rotateY
            obj.lineY = [
                { left: "50%", top: "-50%", height: "200%" },
                { left: "10px", top: "-50%", height: "200%" }
            ]
            // console.log(arr)

            setLineData({ ...obj })
        }
        else if (lineData.lineY.length <= 10) {

            let oldY = lineData.lineY[lineData.lineY.length - 1].left
            // console.log(oldX)
            let arr = oldY.split("")
            arr.splice(arr.length - 2, 2)

            let y = arr.join("")
            // console.log(x)
            let newY = Number(y) + 10
            // console.log(newX, oldX ,left/2)

            // if (newX < left / 2)
            //     setLineY([...lineY, { left: newX + "px", top: "-50%", height: "200%" }])
            // else {
            // let newX = 15
            console.log(newY)
            // setLineY(prevLines => [...prevLines,
            // { left: newX + "px", top: "-50%", height: "200%" }
            // ])
            setLineData({
                ...lineData,
                lineY: [...lineData.lineY, { left: newY + "px", top: "-50%", height: "200%" }]
            })
            // }
        }
    }


    return (
        <>
            <div
                id={boxRef}
                style={{
                    width: "100%",
                    height: "100%",
                    // backgroundColor: "orange",
                    overflow: "hidden",
                    display: "inline-block",
                    verticalAlign: "middle",
                    position: "relative"
                }}
                onMouseMove={drag}
                onMouseUp={() => {
                    if (isDraggingX) {
                        setIsDraggingX(false);
                    }
                    else if (isDraggingY) setIsDraggingY(false)
                }
                }
                onClick={
                    () => {
                        setLineOptions(false);
                        // setRotateBtn(false);
                    }
                }
            >
                {/* image component here */}
                {children}

                {/* dynamic Lines x and y */}
                <div
                    style={{
                        width: "100%",
                        height: "100%",
                        // backgroundColor: "blue",
                        position: "relative",
                        // transform: `rotate(${rotateX.value}deg)`,
                        // zIndex: 1
                    }}
                >
                    {lineData && lineData.lineX.map((ele, ind) => {
                        return (
                            <div
                                key={"line-x-" + ind}
                                // className="adjustable-line"
                                style={{
                                    position: "absolute",
                                    height: "1.5px",
                                    backgroundColor: `${lineData.lineX.length > 1 && ind == 0 ? "orange" : "red"}`,
                                    width: ele.width,
                                    top: ele.top,
                                    left: ele.left,
                                    cursor: "move",
                                    transform: `rotate(${lineData.rotateX}deg)`,
                                    // transformOrigin: "50% 50%",
                                }}
                                onMouseDown={(e) => {
                                    console.log(ind)
                                    e.preventDefault()
                                    setStoredPosition({ ...ele, x: e.clientX, y: e.clientY, index: ind })
                                    setIsDraggingX(true)
                                }
                                }


                                onMouseUp={() => {
                                    setIsDraggingX(false)
                                }
                                }
                                onClick={(e) => {
                                    setStoredPosition({ line: "lineX", index: ind })
                                    setLineOptions(true);
                                    e.stopPropagation()
                                    // rotateBtn ? setRotateBtn(false) : setRotateBtn(true)
                                }}
                            />
                        )
                    })}
                    {lineData && lineData.lineY.map((ele, ind) => {
                        return (
                            <div
                                key={"line-y-" + ind}
                                className="adjustable-line"
                                style={{
                                    position: "absolute",
                                    height: ele.height,
                                    backgroundColor: `${lineData.lineY.length > 1 && ind == 0 ? "orange" : "red"}`,
                                    width: "1.5px",
                                    top: ele.top,
                                    left: ele.left,
                                    cursor: "move",
                                    transform: `rotate(${lineData.rotateY}deg)`,
                                    // transformOrigin: "50% 50%",
                                }}
                                onMouseDown={(e) => {
                                    // console.log("mouse down Y")
                                    e.preventDefault()
                                    setStoredPosition({ ...ele, x: e.clientX, y: e.clientY, index: ind })
                                    setIsDraggingY(true)
                                }
                                }
                                onMouseUp={() => {
                                    setIsDraggingY(false)
                                }
                                }
                                onClick={(e) => {
                                    setLineOptions(true);
                                    setStoredPosition({ line: "lineY", index: ind })
                                    e.stopPropagation()
                                    // rotateBtn ? setRotateBtn(false) : setRotateBtn(true)
                                }}
                            />
                        )
                    })}
                </div>


                {/* line options */}
                {edit &&
                    <div
                        style={{
                            width: "20%",
                            position: "absolute",
                            left: "85%",
                            top: "40%",
                            margin: "auto"
                        }}
                    >
                        {/** add horizontal lines  */}
                        <button
                            style={{
                                width: "50%",
                                border: "1px",
                                borderRadius: "5px",
                                backgroundColor: "#17c1e8",
                                color: "grey",
                                marginBottom: ".2rem",
                                display: "block"
                            }}
                            onClick={
                                (e) => { addLineX(e) }
                            }
                        >
                            -
                        </button>

                        {/** add vertical lines  */}
                        <button
                            style={{
                                width: "50%",
                                border: "1px",
                                borderRadius: "5px",
                                backgroundColor: "#17c1e8",
                                color: "grey",
                                marginBottom: ".2rem",
                                display: "block"
                            }}
                            onClick={
                                (e) => { addLineY(e) }
                            }
                        >
                            |
                        </button>

                        {/** rotate button */}
                        {rotateBtn ?
                            <button
                                style={{
                                    width: "50%",
                                    border: "1px",
                                    borderRadius: "5px",
                                    // backgroundColor: "#17c1e8",
                                    backgroundColor: "orange",
                                    color: "white",
                                    marginBottom: ".2rem",
                                    display: "block"
                                }}
                                onClick={() => {
                                    setRotateBtn(false);
                                    setLineOptions(false)
                                }}
                            >
                                &#x2573;
                            </button>
                            :
                            <button
                                style={{
                                    width: "50%",
                                    border: "1px",
                                    borderRadius: "5px",
                                    backgroundColor: "#17c1e8",
                                    color: "grey",
                                    marginbottom: ".2rem",
                                    display: "block"
                                }}
                                onClick={(event) => {
                                    setRotateBtn(true)
                                    event.stopPropagation()
                                }}
                            >
                                &#8635;
                            </button>
                        }

                        {/* onclick option for delete line */}
                        {LineOptions &&
                            <button
                                style={{
                                    width: "50%",
                                    border: "1px",
                                    borderRadius: "5px",
                                    backgroundColor: "red",
                                    color: "white",
                                    marginTop: ".2rem",
                                    display: "block"
                                }}
                                onClick={() => {
                                    const whichLine = storedPosition.line
                                    const lineIndex = storedPosition.index

                                    if (whichLine == "lineX") {
                                        if (lineData.lineX.length > 1 && lineIndex != 0) {
                                            setLineData(prevState => {
                                                let arr = prevState.lineX.filter((e, i) => {
                                                    if (i != storedPosition.index) return e
                                                })
                                                return { ...prevState, lineX: arr }
                                            })
                                            // console.log(arr)
                                        }
                                        else {
                                            errorToast("this is main lineX")
                                            // console.log("this is main lineX")
                                        }
                                    }
                                    else {
                                        if (lineData.lineY.length > 1 && lineIndex != 0) {
                                            setLineData(prevState => {
                                                let arr = prevState.lineY.filter((e, i) => {
                                                    if (i != storedPosition.index) return e
                                                })
                                                return { ...prevState, lineY: arr }
                                            })
                                            // console.log(lineIndex , lineData.lineY)
                                        }
                                        else {
                                            errorToast("this is main lineY")
                                            // console.log("this is main lineY")
                                        }
                                    }
                                }}
                            >
                                &#x2421;
                            </button>
                        }

                        {/*reset button */}
                        <button
                            style={{
                                width: "70%",
                                border: "1px",
                                borderRadius: "5px",
                                backgroundColor: "#17c1e8",
                                color: "grey",
                                marginTop: "0.2rem",
                                fontSize: "0.7rem",
                                padding: "0.2rem",
                                boxSizing: "border-box",
                                display: "block"
                            }}
                            onClick={() => {
                                setLineData({
                                    lineX: [{ top: "50%", left: "-100%", width: "300%" }],
                                    lineY: [{ top: "-100%", left: "50%", height: "300%" }],
                                    rotateX: 0,
                                    rotateY: 0
                                })
                                // console.log(`reset coordintates ${editTitle}`)
                            }}
                        >
                            reset
                        </button>
                    </div>
                }
            </div>
        </>
    )
}

