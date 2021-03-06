import React, { useEffect, useRef, useState } from "react";

import {
  DialogProps,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
  Box,
  Checkbox,
  Grid,
} from "@mui/material";
import { PrivacyTip } from "@mui/icons-material";

export const ScrollDialog = () => {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  useEffect(() => {
    setOpen(true);
  }, []);

  const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  //este handleClose es para que cuando hagan click en el backDrop o presionen "escape" no puedan salirse del modal
  const handleClose = (e = {}, reason?: string) => {
    if (reason === "backdropClick" || "escapeKeyDown") return;
  };
  //Consiguiente este e spara cerrar el modal clickeando el button
  const closeTermConditions = () => {
    return setOpen(false);
  };

  const descriptionElementRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const onChecked = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={(e, reason) => handleClose(e, reason)}
        scroll={scroll}
      >
        <DialogTitle>
          <Box
            sx={{ display: "flex", flexDirection: "row", aligItems: "center" }}
          >
            <PrivacyTip />
            <Typography sx={{ ml: 1 }} component="div" variant="body2">
              Terms and Conditions
            </Typography>
          </Box>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            ref={descriptionElementRef}
            tabIndex={-1}
            component="main"
          >
            <Typography component="div" variant="subtitle2">
              Al usar la aplicacion eFound usted indica que entiende y conoce
              los siguientes puntos de la politica de privacidad.
            </Typography>
            <ul>
              <li>1.El respeto a tu privacidad esta totalmente garantizada.</li>
              <li>
                2. A trav??s de esta aplicaci??n no se recaban datos de car??cter
                personal de los usuario
              </li>
              <li> 3 . No se registran direcciones IP</li>
              <li> 4. No se accede a las cuentas de correo de los usuarios.</li>
              <li>
                5. La aplicaci??n no guarda datos ni hace seguimientos sobre
                tiempos y horarios de utilizaci??n.
              </li>
              <li>
                6 . aplicaci??n no guarda informaci??n relativa a tu dispositivo
                como, por ejemplo, fallos, actividad del sistema, ajustes del
                hardware, tipo de navegador, idioma del navegador.
              </li>
              <li>
                7. La aplicaci??n no recopila informaci??n sobre tu ubicaci??n
                real.
              </li>
              <li>
                8. Remarketing con Google AdMob Proveedores como Google,
                utilizan cookies de primer nivel y cookies de terceros u otros
                identificadores de terceros para compilar datos sobre las
                interacciones de los usuarios con las impresiones de anuncios y
                otras funciones de servicio de anuncios.
              </li>
              <li>
                9. Cargos y cuotas: Cualquier uso de esta aplicaci??n es
                totalmente gratuito. 13 - Cambios en nuestra Pol??tica de
                Privacidad: Nuestra Pol??tica de Privacidad puede cambiar de vez
                en cuando. Publicaremos cualquier cambio de pol??tica de
                privacidad en esta p??gina, por lo que debe revisarla
                peri??dicamente.
              </li>
              <li>
                10. Contacto: Si tiene alguna pregunta sobre esta Pol??tica o
                para informar de cualquier violaci??n de la Pol??tica, env??e un
                correo electr??nico a: perezvluisv@gmail.com
              </li>
            </ul>
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item>
                <Checkbox  checked={isChecked} onChange={onChecked} />
              </Grid>
              <Grid item>
                <Typography>I agree and accept terms and Conditions</Typography>
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeTermConditions} disabled={!isChecked}>
            Aceptar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
