type Type ={
    id:string;
    title:string;
    link:string;
}

const LoginData:Type[] =[
    {id:"form",title:"UserID",link:""},
    {id:"form",title:"Password",link:""},
    {id:"button",title:"Sign In",link:""},
    {id:"button",title:"Register",link:"/register"},
    {id:"button",title:" id찾기",link:"/findid"},
    {id:"button",title:" 비밀번호찾기",link:"/findpassword"},
]

export default LoginData