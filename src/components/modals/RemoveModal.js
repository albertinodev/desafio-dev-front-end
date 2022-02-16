import { useRouter } from 'next/router';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import React, { useState, useEffect, useRef, useContext} from 'react';
import { Dialog, Box, makeStyles, DialogTitle, DialogContent } from '@material-ui/core';

import { AuthContext } from '../../contexts/AuthContext';
import backEndActs from '../../actions/back-end/companies';
import backEndActions from '../../actions/back-end/administrators';

import { cssProperties, styles } from "../../css/forms-modal"; // Get the css properties
const useStyles = makeStyles((theme) => cssProperties(theme)) //// Set the css properties

const offset = 10;
const AddOrEditAdministrator = ({ buttonClass, setIsEditing, isEditing, selectedAdmin, setAdministrators, setIsLoading, setInfoMessage }) => {
    const classes = useStyles();
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState('paper');

    const { user } = useContext(AuthContext)
    const [companyId, setCompanyId] = useState("");
    const [companies, setCompanies] = useState({
        currentPage: 0,
        next: null,
        previous: null,
        results: [],
        total: 0
    });
    const [repass, setRepass] = useState("");
    const planAdmin = {
        username: "",
        password: "",
        email: "",
        contact: ""
    }
    const [admin, setAdmin] = useState(isEditing ? selectedAdmin : planAdmin)

    const handleClickOpen = (scrollType) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = useRef(null);
    useEffect(() => {
        const bars = document.getElementsByTagName("header");
        const selectedBar = bars && bars.length > 0 ? bars[0] : null;

        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }

            if (selectedBar) {
                selectedBar.style.display = "none";
            }
        } else {
            if (selectedBar) {
                selectedBar.style.display = "block";
            }

            setIsEditing(false) // Before anythimg sets the status do adding
        }

        if (isEditing) {
            setAdmin(selectedAdmin);
        } else {
            setAdmin(planAdmin);
        }

        getCompanies();
    }, [open]);


    const getCompanies = async () => {
        const comps = await backEndActs.getCompanies(10, 1);
        setCompanies(comps);
    }


    const saveAdmin = async (ev) => {
        ev.preventDefault();

        setIsLoading(true);

        const repassField = document.getElementById("repass");
        repassField.setCustomValidity("");

        if (repass !== admin.password) {
            repassField.setCustomValidity("As senhas são diferentes");
        } else {
            repassField.setCustomValidity("");

            if (selectedAdmin && selectedAdmin.id && selectedAdmin.id.length > 0) {
                //Updates 
                const resp = await backEndActions.updateAdmin(admin);
                if (resp.type && resp.type === "error") {
                    console.log("Update: ", resp);

                    setIsLoading(false) //Close loader

                    setInfoMessage(resp.message);
                    const infoModal = document.getElementById("infoModal");
                    infoModal.click();
                } else {
                    setIsEditing(false);
                    handleClose();

                    const page = router.query.page ? parseInt(router.query.page) : 1;
                    const admins = await backEndActions.getAdministrators(offset, page);
                    setAdministrators(admins);

                    setIsLoading(false) //Close loader
                }
            } else {
                const resp = await backEndActions.writeAdmin(admin);
                if (resp.type && resp.type === "error") {
                    console.log("Write: ", resp);

                    setIsLoading(false) //Close loader

                    setInfoMessage(resp.message);
                    const infoModal = document.getElementById("infoModal");
                    infoModal.click();
                } else {
                    
                    handleClose();

                    const page = router.query.page ? parseInt(router.query.page) : 1;
                    const admins = await backEndActions.getAdministrators(offset, page);
                    setAdministrators(admins);

                    setIsLoading(false) //Close loader
                }

                setIsEditing(false);
            }
        }
    }

    return (
        <div>
            <button onClick={handleClickOpen('body')} className={buttonClass} id="showAddOrEditModalButton">Registar Administrador</button>
            <Dialog open={open} onClose={handleClose} scroll={scroll} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description" style={styles}>

                <DialogTitle id="scroll-dialog-title" className={classes.dialogTitle}>{isEditing ? 'Editar Administrador' : 'Registar Administrador'}</DialogTitle>
                <Box style={{ position: "absolute", top: 24, right: 36 }} onClick={handleClose}>
                    <CloseOutlinedIcon style={{ cursor: "pointer" }} />
                </Box>

                <DialogContent dividers={scroll === 'paper'} className={classes.dialogContent}>
                    <form onSubmit={saveAdmin} method="POST">
                        <h4 className={classes.detalhesLabel} >Nome</h4>
                        <input value={admin.username} required placeholder="Introduz o nome do Administrador" className={classes.field} onChange={(e) => {
                            const name = e.target.value;
                            setAdmin({
                                ...admin,
                                username: name
                            })
                        }} autoComplete="off"/>

                        <h4 className={classes.detalhesLabel} >Email</h4>
                        <input value={admin.email} required type="email" placeholder="Introduz o email do Administrador" className={classes.field} onChange={(e) => {
                            const email = e.target.value;
                            setAdmin({
                                ...admin,
                                email: email
                            })
                        }} autoComplete="off"/>

                        <h4 className={classes.detalhesLabel} >Contacto</h4>
                        <input value={admin.contact} required placeholder="Contacto" className={classes.field} style={{ width: "100%" }} onChange={(e) => {
                            const contact = e.target.value;
                            setAdmin({
                                ...admin,
                                contact: contact
                            })
                        }} autoComplete="off"/>

                        <h4 className={classes.detalhesLabel} >Palavra-passe</h4>
                        <input value={admin.password} required type="password" placeholder="Senha" style={{ width: "100%" }} className={classes.field} onChange={(e) => {
                            const password = e.target.value;
                            setAdmin({
                                ...admin,
                                password: password
                            })
                        }} autoComplete="off"/>

                        <h4 className={classes.detalhesLabel} >Confirmar a Palavra-passe</h4>
                        <input value={repass} required id="repass" type="password" placeholder="Confirmar senha" style={{ width: "100%" }} className={classes.field} onChange={(e) => {
                            setRepass(e.target.value);
                        }} autoComplete="off"/>


                        <div className={classes.actionButtons} >
                            <button className={classes.saveButton} type="submit">Guardar</button>
                            <button className={classes.closeButton} onClick={() => handleClose()} type="button">Cancelar</button>
                        </div>
                    </form>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default AddOrEditAdministrator;