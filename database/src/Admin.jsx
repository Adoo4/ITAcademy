


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import DeleteIcon from '@mui/icons-material/Delete';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import EditNoteIcon from '@mui/icons-material/EditNote';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react'
import ModalAdder from './ModalAdder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';



let Admin = function ({ productlist, setproductlist }) {

    let [modalAdd, setmodalAdd] = useState(false);
    



    return (


        <TableContainer component={Paper}>
            <IconButton aria-label="add" color="primary" onClick={()=>setmodalAdd(true)}>
                <AddCircleOutlineIcon   />
            </IconButton>

            <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">ID</TableCell>
                        <TableCell align="right">Name</TableCell>
                        <TableCell align="right">URL</TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {productlist.map(({ id, name, pictureURL, price }) => (
                        <TableRow key={id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >

                            <TableCell align="right">{id}</TableCell>
                            <TableCell align="right">{name}</TableCell>
                            <TableCell align="right">{pictureURL}</TableCell>
                            <TableCell align="right">{price}</TableCell>
                            <TableCell align="right"> <Stack direction="row" spacing={1}>
                                <IconButton aria-label="delete" onClick={() => { localStorage.setItem("products", JSON.stringify(productlist.filter((e) => e.id !== id))); setproductlist([...JSON.parse(localStorage.getItem("products"))]) }}>
                                    <DeleteIcon  />
                                </IconButton>
                                <IconButton aria-label="delete" color="primary">
                                    <EditNoteIcon />
                                </IconButton>


                            </Stack></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <ModalAdder modalAdd={modalAdd} setmodalAdd={setmodalAdd} productlist={productlist} setproductlist={setproductlist}/>

        </TableContainer>



    )
}

export default Admin


