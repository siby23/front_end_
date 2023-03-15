import * as Yup from 'yup'

const Loginvalidation = Yup.object().shape({

    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email('Invalid email').required('Required email'),

})

export  {Loginvalidation} 
