import { hash } from "bcrypt";
import prisma from "@/lib/prisma";
import { compare } from "bcrypt";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "hello@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }
        const users = await prisma.user.findMany();
        // console.log("Users", users);
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          const hashedPassword = await hash(credentials.password, 10);
          const newUser = await prisma.user.create({
            data: {
              username: credentials.email.split("@")[0],
              email: credentials.email,
              password: hashedPassword,
              role: "USER",
            },
          });
          return newUser;
        }
        // const isPasswordValid = hash(credentials.password, 10) === user.password;
        try {
          const isPasswordValid = await compare(
            credentials.password,
            user.password
          );

          if (!isPasswordValid) {
            console.log("Passwords do not match");
            return null;
          }

          // Continue with your logic here if the passwords match
        } catch (err) {
          // handle error
          console.log(err);
        }

        return {
          id: user.id + "",
          email: user.email,
          name: user.username,
          bio: user.bio,
          role: user.role,
          profilePicture: user.profilePicture,
          randomKey: user.randomKey,
        };
      },
    }),
  ],
  // pages: {
  //   signIn: `/Dashboard/89`,
  //   // You can also use a function to dynamically generate the URL
  //   // signIn: async (url, baseUrl) => {
  //   //   return Promise.resolve('/custom-signin-url')
  //   // },
  // },
  callbacks: {
    session: ({ session, token }) => {
      // console.log("Session Callback", { session, token });
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },
    jwt: ({ token, user }) => {
      // console.log("JWT Callback", { token, user });
      if (user) {
        return {
          ...token,
          id: user.id,
          randomKey: user.randomKey,
        };
      }
      return token;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
