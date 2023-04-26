import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

function ChildModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <Button onClick={handleOpen}>Open Child Modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...style, width: 200 }}>
                    <h2 id="child-modal-title">Text in a child modal</h2>
                    <p id="child-modal-description">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Button onClick={handleClose}>Close Child Modal</Button>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export function NestedModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                style={{ justifyContent: 'space-between' }}
            >
                <Box sx={{ ...style, width: 500, textAlign: 'left' }}>
                    <h3 id="parent-modal-title">Editar Perfil</h3>
                    <p id="parent-modal-description">
                        <strong>Informações pessoais</strong>
                    </p>

                    <form >
                        <label>Nome</label>
                        <textarea
                            id="outlined-required"
                            style={{ marginBottom: 2, width: '100%', height: '30px', resize: 'none', fontFamily: 'sans-serif', padding: ' 10px 0 0 0 ' }}
                        />
                        <label>Email</label>
                        <textarea
                            disabled
                            defaultValue="samuel@kenzie.com.br"
                            id="outlined-required"
                            style={{ marginBottom: 2, width: '100%', height: '30px', resize: 'none', alignItems: 'center', fontFamily: 'sans-serif', padding: ' 10px 0 0 0 ' }}
                        />
                        <label>CPF</label>
                        <textarea
                            disabled
                            defaultValue="Hello World"
                            id="outlined-required"
                            style={{ marginBottom: 2, width: '100%', height: '30px', resize: 'none', fontFamily: 'sans-serif' }}
                        />
                        <label>Celular</label>
                        <textarea
                            disabled
                            defaultValue="Hello World"
                            id="outlined-required"
                            style={{ marginBottom: 2, width: '100%', height: '30px', resize: 'none', fontFamily: 'sans-serif' }}
                        />
                        <label>Data de nascimento</label>
                        <textarea
                            disabled
                            defaultValue="Hello World"
                            id="outlined-required"
                            style={{ marginBottom: 2, width: '100%', height: '30px', resize: 'none', fontFamily: 'sans-serif' }}
                        />
                        <label>Descrição</label>
                        <textarea

                            defaultValue="Hello World"
                            id="outlined-required"
                            style={{ marginBottom: 2, width: '100%', height: '30px', resize: 'none', fontFamily: 'sans-serif' }}
                        />
                        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="contained" style={{ width: '32%', fontSize: '11px', backgroundColor: '#DEE2E6', color: '#495057', fontWeight: '550' }}>Cancelar</Button>
                            <Button variant="contained" style={{ width: '32%', fontSize: '11px', backgroundColor: '#FDD8D8', color: '#CD2B31', fontWeight: '550' }}>Excluir perfil</Button>
                            <Button variant="contained" style={{ width: '32%', fontSize: '11px', backgroundColor: '#4529E6', fontWeight: '550' }}>Salvar alterações</Button>
                        </div>


                    </form>
                    <ChildModal />
                </Box>
            </Modal>
        </div>
    );
}