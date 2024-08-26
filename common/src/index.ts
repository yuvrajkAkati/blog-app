import zod from 'zod'


export const signupSchema = zod.object({
    email : zod.string().email(),
    name : zod.string().min(1),
    password : zod.string().min(6)
}) 

export type SignupSchema = zod.infer<typeof signupSchema>



export const signinSchema = zod.object({
    email : zod.string().email(),
    password : zod.string().min(6)
}) 

export type SigninSchema = zod.infer<typeof signinSchema>

export const createBlogInput = zod.object({
    title : zod.string(),
    description : zod.string(),
})

export type CreateBlogInput = zod.infer<typeof createBlogInput>
