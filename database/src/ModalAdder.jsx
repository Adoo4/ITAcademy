


import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Button from '@mui/material/Button';
let ModalAdder = function ({ modalAdd, setmodalAdd, productlist, setproductlist }) {

    let [imagepreview, setimagepreview] = useState("")

    let [newData, setNewData] = useState({
        id: Date.now(),
        name: "",
        pictureURL: "",
        price: ""
    })

    let handleClose = function () {
        setmodalAdd(false);
        setimagepreview("");
    }

    let submitData = function () {
        console.log(productlist)
        setNewData({ ...newData, id: Date.now() })
        setproductlist([...productlist, newData])

    }

    const style = {
        position: 'absolute',
        borderRadius: "1rem",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "50%",
        bgcolor: 'background.paper',
        border: '2px solid transparent',
        boxShadow: 24,
        p: 4,
        display: 'flex',
        gap: "2rem"
    };

    const left = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        width: '100%'



    }

    const right = {
        width: '100%',
        height: "100%",
        border: '2px solid lightgray',
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"

    }

    let img = { objectFit: 'cover', width: 100, height: 100 }

    const inputField = {
        width: '100%'
    }
    return (
        <Modal
            open={modalAdd}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Box sx={left}>
                    <TextField 
                    id="filled-basic" 
                    label="Proizvod" 
                    variant="filled" 
                    sx={inputField} 
                    onChange={(e) => { setNewData({ ...newData, name: e.target.value }); console.log(newData) }} />
                    
                    <TextField 
                    id="filled-basic" 
                    label="URL"
                     variant="filled" 
                     sx={inputField} 
                     onChange={(e) => { setimagepreview(e.target.value); setNewData({ ...newData, pictureURL: e.target.value }); console.log(productlist) }} />
                    
                    <TextField 
                    id="filled-basic" 
                    label="price" 
                    variant="filled" 
                    sx={inputField} 
                    onChange={(e) => setNewData({ ...newData, price: e.target.value })} />

                    <Button 
                    variant="outlined"
                     color="error" 
                     onClick={handleClose}>
                        Cancel
                    </Button>

                    <Button 
                    variant="contained" 
                    color="success" 
                    onClick={submitData}>
                        Submit
                    </Button>


                </Box>

                <Box sx={right}>
                    <img 
                    alt="preview slika" 
                    src={imagepreview} 
                    style={{ width: "100%", height: "100%", objectFit: 'cover' }}>

                    </img>

                </Box>


            </Box>
        </Modal>


    )
}

export default ModalAdder