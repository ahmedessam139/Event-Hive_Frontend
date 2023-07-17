import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";


export default NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            type: 'credentials',
            credentials: {
                username: { label: "username", type: "text", placeholder: "Username" },
                password: { label: "password", type: "password", placeholder: "Password" }
            },
            async authorize(credentials, req) {
                const { username, password } = credentials;
                if (username === password && username === "user") {
                    const testResponse = {
                        id: 15,
                        username: "kminchelle",
                        email: "kminchelle@qq.com",
                        role: "user",
                        firstName: "Jeanne",
                        mobileNumber: "1234567890",
                        gender:"male",
                        lastName: "Halvorson",
                        image: "https://robohash.org/autquiaut.png?size=50x50&set=set1",
                        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
                    };
                    return testResponse;
                }
                if (username === password && username === "admin") {
                    const testResponse = {
                        id: 15,
                        username: "kminchelle",
                        email: "kminchelle@qq.com",
                        mobileNumber: "1234567890",
                        gender:"male",
                        role: "admin",
                        firstName: "Jeanne",
                        lastName: "Halvorson",
                        image: "https://robohash.org/autquiaut.png?size=50x50&set=set1",
                        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTUsInVzZXJuYW1lIjoia21pbmNoZWxsZSIsImVtYWlsIjoia21pbmNoZWxsZUBxcS5jb20iLCJmaXJzdE5hbWUiOiJKZWFubmUiLCJsYXN0TmFtZSI6IkhhbHZvcnNvbiIsImdlbmRlciI6ImZlbWFsZSIsImltYWdlIjoiaHR0cHM6Ly9yb2JvaGFzaC5vcmcvYXV0cXVpYXV0LnBuZz9zaXplPTUweDUwJnNldD1zZXQxIiwiaWF0IjoxNjM1NzczOTYyLCJleHAiOjE2MzU3Nzc1NjJ9.n9PQX8w8ocKo0dMCw3g8bKhjB8Wo7f7IONFBDqfxKhs"
                    };
                    return testResponse;
                }
                
                // put logic here to check credentials

                // const res = await axios.post('', {
                //     username,
                //     password
                // })
                //     .then((res) => {
                //         console.log(res);
                //         const data = res.data;
                //         return data;
                //     })
                //     .catch((err) => {
                //         throw new Error(err.response.data.detail)
                //     });
            
                return res;
            }

        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            session.user = token;
            return session;
        },
    },
    pages: {
        signIn: "/auth/signin",
        signOut: "/auth/signout",
    }

})

