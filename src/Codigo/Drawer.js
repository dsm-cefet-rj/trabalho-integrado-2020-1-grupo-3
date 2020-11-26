import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "300px"
  }
});

const Drawer = props => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [


    {
      text: "Login",
      icon: <InboxIcon />,
      onClick: () => history.push("/")
    },

    {
      text: "Menu",
      icon: <InboxIcon />,
      onClick: () => history.push("/menu")
    },

    {
      text: "Muda Senha",
      icon: <InboxIcon />,
      onClick: () => history.push("/mudasenha")
    },

    {
      text: "Meus pedidos",
      icon: <InboxIcon />,
      onClick: () => history.push("/meuspedidos")
    },

    {
      text: "Fazer Pedido",
      icon: <InboxIcon />,
      onClick: () => history.push("/pedidoenvia")
    },
    
    {
      text: "Calendário de Eventos",
      icon: <InboxIcon />,
      onClick: () => history.push("/eventos")
    },



    // ADMIN visualiza pedidos
    {
      text: "Entregas",
      icon: <InboxIcon />,
      onClick: () => history.push("/Grecebepedido")
    }


/*
    { // É papel do ADMIN adicionar novas bebidas e refeicoes
      text: "Adicionar Refeição",
      icon: <MailIcon />,
      onClick: () => history.push("/adicionarefeicao")
    },
    {
      text: "Adicionar Bebida",
      icon: <MailIcon />,
      onClick: () => history.push("/adicionabebida")
    },

    {
      text: "Recebe Pedido",
      icon: <InboxIcon />,
      onClick: () => history.push("/recebepedido")
    },
*/

  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, icon, onClick } = item;
          return (
            <ListItem button key={text} onClick={onClick}>
              {icon && <ListItemIcon>{icon}</ListItemIcon>}
              <ListItemText primary={text} />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);



 /*{
      text: "Meus Pedidos",
      icon: <InboxIcon />,
      onClick: () => history.push("/"),
    },

    {
      text: "Novo Pedido",
      icon: <InboxIcon/>,
      OnClick: () => history.push("/fazpedido"),
    },

    {
      text: "Recebe Pedido",
      icon: <InboxIcon/>,
      OnClick: () => history.push("/recebepedido"),
    },
  

    {
      text: "AdicionaBebida",
      icon: <InboxIcon/>,
      OnClick: () => history.push("/adicionabebida"),
    },

    {
      text: "Adiciona Refeicao",
      icon: <InboxIcon/>,
      OnClick: () => history.push("/adicionarefeicao"),
    }
  
  ];*/