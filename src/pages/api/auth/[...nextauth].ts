import NextAuth , {NextAuthOptions} from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials';



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
            authorize(credentials, req){
                const{username, password} = credentials as {
                    username: string;
                    password: string;
                };
                    //login logic
                    if (username !== "johm@gmail.com" || password !=="1234"){
                        throw new Error('invalid credentials')
                    }
                    console.log("Ahmed")
                    return {id: '1234', name: 'john', email : 'johm@gmail.com'}

                
            }
        })
    ],
    pages: {
        signIn: "/auth/signin",
    }
}


export default NextAuth(authOptions);