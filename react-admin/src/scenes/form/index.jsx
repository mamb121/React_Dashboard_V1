import { Box,Button,TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from './../../components/Header';

const From = () => {
    const isNonMobile = useMediaQuery("(min-width:600)");
    const handleFormSubmit = (values) =>{
        console.log(values)
    };
    const initialValues = {
        firstName: "",
        lastName: "",
        email: "",
        contact: "",
        address1: "",
        address2: "",
    };

    const phoneRegExp =
    /^(009665|9665|\+9665|05|5)(5|0|3|6|4|9|1|8|7)([0-9]{7})$/;

    const userSchema = yup.object().shape({
        firstName: yup.string().required("required"),
        lastName: yup.string().required("required"),
        email: yup.string().email("Invalid email").required("required"),
        contact: yup
            .string()
            .matches(phoneRegExp,"Phone number is not valid must start with 009665 or 05")
            .required("required"),
        address1: yup.string().required("required"),
        address2: yup.string().required("required"),
    })
    return(<Box m="20px">
        <Header title="CREATE USER" subtitle="Create a New User Profile" />
        <Formik 
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={userSchema}
        >
            {({values,errors,touched,handleBlur,handleChange,handelSubmit,}) =>
            <form onSubmit={handelSubmit}>
                <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx = {{
                        "& > div":{gridColumn : isNonMobile ? undefined : "span 4"},
                    }}
                >
                    <TextField
                        fullWidth
                        variant=""
                        ty
                    >

                    </TextField>
                </Box>
            </form>
            }
        </Formik>
    </Box>
    )
}
