"use client";

import { Button } from "@heroui/button";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

const SignOutButton = () => {
  async function handleSignOut() {
    try {
      await signOut({
        redirect: true,
        callbackUrl: "/",
      });
      toast.success("Signed out successfully.");
    } catch (error) {
      toast.error("Something went wrong");
    }
  }

  return (
    <Button onClick={handleSignOut} color="primary">
      Sign out
    </Button>
  );
};

export default SignOutButton;
