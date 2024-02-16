import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const Page1 = ({onNext, pageData}) =>{
    const form = useForm();

    const { register, control, handleSubmit, formState } = form;
    const { errors } = formState;

    const handleNextSubmit = (data) =>{
        // console.log("data = ",data)
        pageData(data);
        onNext();
    }

    const errorMsgHandler = (name) =>{
        if(name === "email"){
            const errorMsg = {
                required: {
                    value: true,
                    message: `This field is Required!`
                },
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i ,
                    message: "Invalid email format!"
                }
            }

            return errorMsg;
        }
        else if(name === "phone"){
            const errorMsg = {
                required: {
                    value: true,
                    message: `This field is Required!`
                },
                pattern: {
                    value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/ ,
                    message: "Invalid phone format"
                }
            }

            return errorMsg;
        }

        const errorMsg = {
            required: {
                value: true,
                message: `This field is Required!`
            }
        }

        return errorMsg;
    }

    return(
        <div className='page1 page'>
            <h2>Personal info</h2>
            <p>Please provide your name, email address, and phone number.</p>

            <form onSubmit={handleSubmit(handleNextSubmit)} noValidate>
                <div className='error-control'>
                    <label htmlFor="fullName">Name</label><br />
                    <p className='error'>{errors.name?.message}</p>
                </div>
                <input type="text" id="fullName" name="name" placeholder='e.g. StephenKing' {...register('name', errorMsgHandler("name"))}/><br />

                <div className="error-control">
                    <label htmlFor="emailId">Email Address</label><br />
                    <p className='error'>{errors.email?.message}</p>
                </div>
                <input type="email" id="emailId" name="email" placeholder='e.g. stephenKing@lorem.com' {...register('email', errorMsgHandler("email"))}/><br />

                <div className="error-control">
                    <label htmlFor="phoneNo">Phone Number</label> <br />
                    <p className='error'>{errors.phone?.message}</p>
                </div>
                <input type="number" id="phoneNo" name="phone" placeholder='e.g. +1 234 567 890' {...register('phone', errorMsgHandler("phone"))}/><br />

                    <button>Next Step</button>
            </form>


            {/* <DevTool control={control} /> */}
        </div>
    )
}

export default Page1;