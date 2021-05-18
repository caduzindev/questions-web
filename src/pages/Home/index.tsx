import { Button, FormControl, Grid } from "@material-ui/core";
import { Container, InputQuantityQuestion, TextTitle } from "./styles";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'

const Home = ()=>{
    const history = useHistory()
    const initialValues:{quantity:string} = {quantity:""}

    const formik = useFormik({
        initialValues,
        onSubmit: values=>{
            history.push({
                pathname:'/start',
                state:{
                    qt:values.quantity
                }
            })
        },
        validationSchema:Yup.object({
            quantity:Yup.number().required().positive().integer()
        })
    })
    return (
        <Container>
            <Grid item>
                <TextTitle>Quantas Questões?</TextTitle>
            </Grid>
            <Grid item>
                 <form onSubmit={formik.handleSubmit}>
                    <FormControl>
                        <InputQuantityQuestion 
                            id="quantity" 
                            label="ex: 5" 
                            variant="filled"
                            name="quantity"
                            onChange={formik.handleChange}
                            value={formik.values.quantity}
                        /> 
                        <Button type="submit" variant="outlined" color="primary" size="large">Confirmar</Button>
                    </FormControl>
                 </form>
            </Grid>
        </Container>
    )
}

export default Home;