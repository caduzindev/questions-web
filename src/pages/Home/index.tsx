import { Button, FormControl, Grid } from "@material-ui/core";
import { Container, InputQuantityQuestion, TextTitle } from "./styles";
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { useHistory } from 'react-router-dom'
import Header from "../components/Header";
import { useEffect, useState } from "react";
import ReportService from "../../services/ReportService";

const Home = ()=>{
    const [existReport,setExistReport] = useState(false)
    const history = useHistory()
    const initialValues:{quantity:string} = {quantity:""}

    useEffect(()=>{
        if(ReportService.existsReports()){
            setExistReport(true)
            return;
        }
        setExistReport(false)
    },[])

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
        <>
            {existReport && (<Header/>)}
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
                            <Button type="submit" variant="contained" color="primary" size="large" style={{marginTop:5}}>Confirmar</Button>
                        </FormControl>
                    </form>
                </Grid>
            </Container>
        </>
    )
}

export default Home;