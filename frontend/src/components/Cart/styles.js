import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    fontSize:' clamp(2rem, 6vw, 3rem)',
    fontFamily: 'Montserrat',
    fontWeight: 'bold',
    textAlign: 'center',
    textDecoration: 'none',
    lineHeight: '80pt',
    color: '#e9ba23' 
  },
  emptyButton: {
    minWidth: '150px',
  },
  checkoutButton: {
    minWidth: '150px',
    margin: '0px 12px'
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: '',
  },
  container: {
    minHeight: '100vh',
    background: '#150f0f',
    color: '#fff',
  },
  price:{
    marginBottom: '0rem',
    fontSize: '1.5rem',
    fontFamily: 'Alfa Slab One', 
    color: '#e9ba23' ,
    textIndent: '5pt',
    letterSpacing: '2pt'
    },
    total:{
      display: 'flex',
      alignItems: 'flex-start',
    },
    root: {
      flexGrow: '1',
    },
 
  
 
}));



