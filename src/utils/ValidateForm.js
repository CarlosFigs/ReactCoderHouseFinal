import {object, string, number,} from "yup"

let userSchema = object(
    {
        fullname: string().required("Esto es un campo obligatorio"),
        phone: number().positive().required("Esto es un campo obligatorio"),
        email: string().email().required("Esto es un campo obligatorio")
    }
)
const validateForm = async(dataForm)=>{
    try {
        await userSchema.validate(dataForm)
        return{status:"succes",message:"ok"}
    } catch (error) {
        return{status:"error",message:error.message}
    }
}
export default validateForm;