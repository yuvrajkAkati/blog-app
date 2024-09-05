import { Hono } from 'hono'
import {sign , verify} from 'hono/jwt'
import { Prisma, PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { use } from 'hono/jsx'
import { cors } from 'hono/cors'
import { parseBody } from 'hono/utils/body'

const app = new Hono<{
  Bindings : {
    DATABASE_URL : string,
    JWT_SECRET : string
  },
  Variables : {
    authorId : number
  }
}>()

app.use(cors())


app.use('/api/v1/blog/*',async (c,next)=>{
  const jwt  =  c.req.header('Authorization') || ""
  const token = jwt.split(" ")[1]

  //authorization headers needs to be send from the frontend request
  try {
    const user  = await verify(token,c.env.JWT_SECRET)
    const ID : number = parseInt(user.id as string)
    
    if(!user.id){
      c.status(403)
       c.json({
        message : 'you are not authorized'
      })
    }
    c.set('authorId',ID )
    await next()
  } catch (err) {
    return c.json({
      message  : "something is wrong.."
    })
  }
})



app.post('/api/v1/signup', async (c) => {

  const prisma = new PrismaClient({
      datasourceUrl: c.env?.DATABASE_URL,
  }).$extends(withAccelerate())

  const body = await c.req.json()

 try {
  const existingUser = await prisma.user.findFirst({
    where : {
      email : body.email
    }
  })

  if(!existingUser){
    const user = await prisma.user.create({
      data : {
        email : body.email,
        name : body.name,
        password : body.password
      }
    })

    const jwt = await sign({id : user.id},c.env.JWT_SECRET)

    return c.json({
      token :  "Bearer "+ jwt
    })
  }else{
    return c.json({
      message : "wrong inputs or user already exists"
    })
  }
 } catch (err) {
   return c.json({
    message : "error while signing up"
   })
 }

})



app.post('/api/v1/signin', async(c) => {
  
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
}).$extends(withAccelerate())
  
  const body = await c.req.json()

  try {
    const user = await prisma.user.findUnique({
      where : {
        email : body.email,
        password : body.password
      }
    })
    if(user){
      const jwt = await sign({id : user.id},c.env.JWT_SECRET)
      return c.json({
        message : `sign in successfull here is you token `,
        token : "Bearer "+jwt
      })
    }else{
      return c.json({
        message : "signin failed"
      })
    }
  } catch (err) {
    return c.json({
      message : "error while signing in"
    })
  }
})



app.post('/api/v1/blog', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
}).$extends(withAccelerate())
  
  const body = await c.req.json()
  try{
    const blog = await prisma.post.create({
    data : {
      title : body.title,
      description : body.description,
      published : body.published,
      authorId : c.get('authorId')
    }
  })
  return c.json({
    id : blog.id
  })
  }catch(err){
    c.json({
      message : "something is up...."
    })
  }
})



app.put('/api/v1/blog', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
}).$extends(withAccelerate())

  const userId = c.get('authorId')
  const body = await c.req.json()

  try {
    const blog = await prisma.post.update({
      where : {
        id : body.id,
        authorId : userId
      },
      data : {
        title : body.title,
        description : body.description
      }
    })
    return c.json({
      message : `blog updated`
    })
  } catch (err) {
    c.status(403)
    return c.json({
      message : "error while updating"
    })
  }
})



app.get('/api/v1/blog', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
}).$extends(withAccelerate())
  
  const body = await c.req.json()
  try{
    const blog = await prisma.post.findFirst({
    where : {
      id : body.id 
    }
  })
  if(blog){
    return c.json({
      blog
    })
  }
  return c.json({
    message : "no blogs found with this id"
  })
}catch(err){
  c.status(403)
  return c.json({
    message : "error while fetching blog"
  })
  }
})


app.get('/api/v1/blog/bulk', async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env?.DATABASE_URL,
}).$extends(withAccelerate())

  try {
    const blogs = await prisma.post.findMany({})
    if(blogs.length>0){
      return c.json({
        blogs
      })
    }else{
      return c.json({
        message : "no blogs exists"
      })
    }
  } catch (err) {
    c.status(403)
    return c.json({
      message : "error while getting blogs"
    })
  }
})



export default app


