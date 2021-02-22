import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  title:{
    fontWeight: '500',
    fontSize: '1.5rem',
  },
  price:{
  marginBottom: '0rem',
  fontSize: '1.5rem',
  fontFamily: 'Alfa Slab One',  
  },
 
}));
