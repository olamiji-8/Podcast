"use client";


import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient } from "convex/react";
import { ReactNode } from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL as string);

const ConvexClientProvider =({children}:{children:ReactNode}) =>(
  
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY as string}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
  
);

export default ConvexClientProvider

// import { ConvexProvider, ConvexReactClient } from "convex/react";
// import { ReactNode } from "react";

// const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// export function ConvexClientProvider({ children }: { children: ReactNode }) {
//   return <ConvexProvider client={convex}>{children}</ConvexProvider>;
// }


