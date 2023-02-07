type Type ={
    text:string;
    title:string;
    src:string;
    url:string;
}
const SocialData:Type[] =[
   {title:"페이스북",url:"http://whalsght.synology.me:8080/oauth2/authorization/facebook?redirect_uri=http://127.0.0.1:5500/login.html",
   text:"페이스북으로 로그인",src:"https://i.pinimg.com/564x/74/d9/1a/74d91ae6d3eaee595f4792208be8cc26.jpg"},
   {title:"네이버",url:"http://whalsght.synology.me:8080/auth/login/naver?redirect_uri=http://127.0.0.1:5500/login.html",
   text:"네이버로 로그인",src:"https://i.pinimg.com/564x/fb/71/04/fb71048e03a5ada757f70d61b583d0bf.jpg"},
   {title:"구글",url:"http://whalsght.synology.me:8080/oauth2/authorization/google?redirect_uri=http://127.0.0.1:5500/login.html",
   text:"구글로 로그인",src:"https://i.pinimg.com/564x/18/e6/d0/18e6d0542e3c111a8300e81600094c1f.jpg"},
]

export default SocialData