import { Box, TextField, Typography, Button } from '@mui/material';
import React from 'react';
import { useFormik } from "formik";
import * as Yup from 'yup';

const ContactUs = () => {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            phone: "",
            message: ""
        },
        validationSchema: Yup.object({
            firstName: Yup.string().required("This is required"),
            lastName: Yup.string().required("This is required"),
            phone: Yup.number().required("This is required"),
            message: Yup.string().required("This is required")
        }),
        onSubmit: (values) => {
            console.log("form submitted", values);
        }
    })
    return (
        <>
            <Box component="form" onSubmit={formik.handleSubmit} justifyContent="space-evenly">
                <Typography variant="h4" mt={6} mb={6} >Contact Us-</Typography>
                <TextField label="First Name" type="text" variant="outlined" sx={{ width: "300px", m: 1 }} name="firstName" onChange={formik.handleChange} error={formik.touched.firstName && Boolean(formik.errors.firstName)} helperText={formik.touched.firstName && formik.errors.firstName} onBlur={formik.handleBlur} />
                <TextField label="Last Name" type="text" variant="outlined" sx={{ width: "300px", m: 1 }} name="lastName" onChange={formik.handleChange} error={formik.touched.lastName && Boolean(formik.errors.lastName)} helperText={formik.touched.lastName && formik.errors.lastName} onBlur={formik.handleBlur} />
                <TextField label="Phone Number" type="number" variant="outlined" sx={{ width: "300px", m: 1 }} name="phone" onChange={formik.handleChange} error={formik.touched.phone && Boolean(formik.errors.phone)} helperText={formik.touched.phone && formik.errors.phone} onBlur={formik.handleBlur} />
                <TextField label="Message" type="text" variant="outlined" sx={{ m: 1 }} fullWidth multiline rows={4} name="message" onChange={formik.handleChange} error={formik.touched.message && Boolean(formik.errors.message)} helperText={formik.touched.message && formik.errors.message} onBlur={formik.handleBlur} />
                <Button size="large" variant="contained" type="submit" sx={{ m: 1 }}>Send</Button>
            </Box>
        </>
    )
}

export default ContactUs