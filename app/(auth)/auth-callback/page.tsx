import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation';

const AuthCallbackPage = async () => {
    try {
        // Fetch the current user from Clerk
        const user = await currentUser();

        // Check if the user has necessary information
        if (!user?.id || !user.primaryEmailAddress?.emailAddress) {
            return redirect("/sign-in");
        }

        // Find the user in the database by Clerk ID
        const dbUser = await db.user.findFirst({
            where: {
                clerkId: user.id,
            },
        });

        if (!dbUser) {
            // Create a new user in the database
            await db.user.create({
                data: {
                    clerkId: user.id,
                    email: user.primaryEmailAddress.emailAddress,
                    firstName: user.firstName || "", // Provide a default empty string
                    lastName: user.lastName || "",   // Provide a default empty string
                },
            });

            // Redirect to the dashboard after creating a new user
            return redirect("/dashboard");
        } else {
            // Redirect to the home page if user exists
            return redirect("/");
        }
    } catch (error) {
        // Handle errors (e.g., log them and/or redirect to an error page)
        console.error("Authentication callback error:", error);
        return redirect("/error"); // Redirect to an error page or handle it as needed
    }
};

export default AuthCallbackPage;
