// import { Container } from './styles';

import { Check, Info, X } from "@phosphor-icons/react";
import { createPortal } from "react-dom";
import { useTheme } from "styled-components";

export function Snackbar() {
  const theme = useTheme();

  return createPortal(
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "95vw",
        borderRadius: "0.5rem",
        background: theme["snackbar-info"],
        // rest.tipo === TipoMensagem.SUCESSO
        //   ? SNACKBAR_SUCESSO
        //   : rest.tipo === TipoMensagem.INFO
        //   ? SNACKBAR_INFO
        //   : SNACKBAR_ERROR,
        padding: "0.4rem",
        minHeight: "5rem",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
        color: "white",
        zIndex: "10",
      }}
    >
      <div
      // style={{
      //   transform:
      //     rest.tipo === TipoMensagem.INFO
      //       ? 'rotateZ(180deg)'
      //       : 'rotateZ(0deg)',
      // }}
      // className={Classes.iconeImagem}
      >
        <Check fill={theme.white} size={25} />
        <Info fill={theme.white} size={25} />
        {/* <NotificationIcon fill="#fff" /> */}
        {/* {rest.tipo === TipoMensagem.SUCESSO ? (
      ) : rest.tipo === TipoMensagem.INFO ? (
      ) : (
      )} */}
      </div>
      <span
        style={{ margin: "0 1rem" }}
        // className={Classes.mensagem}
      >
        rest.mensagem
      </span>
      <div
      // className={Classes.iconeFechar} onClick={handleClose}
      >
        <X fill={theme.white} size={25} />
      </div>
    </div>,
    document.querySelector("#root-portal")!
  );
}
