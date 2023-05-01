import NextAuth , {NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';



const authOptions : NextAuthOptions = {
    session:{
        strategy : 'jwt'
        
    },
    providers: [
        CredentialsProvider ({
            type: 'credentials',
            credentials: {
                //email : {label: "Email", type:"email" , placeholder: "me@email.com"},
                //password: {label: "password", type: "password"},
            },
            async authorize(credentials, req){
                const{username, password} = credentials as {
                    username: string;
                    password: string;
                };
                    //login logic
                    //send request to backend
                    const res=await axios.post('https://dummyjson.com/auth/login', {
                        username:"kminchelle",
                        password: "0lelplR"
                    })
                    .then((res) => {
                        console.log(res.data);
                        return res.data;
                    })
                    .catch((err) => {
                        console.error(err);
                    });
                    return res;
                    // if (username !== "johm@gmail.com" || password !=="1234"){
                    //     throw new Error('invalid credentials')
                    // }
                    // return {
                    //     "id": "15",
                    //     "username": "kminchelle",
                    //     "email": "kminchelle@qq.com",
                    //     "firstName": "Jeanne",
                    //     "lastName": "Halvorson",
                    //     "gender": "female",
                    //     "image": "https://robohash.org/autquiaut.png?size=50x50&set=set1",
                    //     "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
                    //   }

                
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
          return { ...token, ...user };
        },
        async session({ session, token, user }) {
          session.user = token as any;
          return session;
        },
      },
    pages: {
        signIn: "/auth/signin",
    }

}


export default NextAuth(authOptions);