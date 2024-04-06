/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { SignInButton, SignedOut, UserButton, OrganizationSwitcher } from "@clerk/nextjs";

export function Header() {
    return (
        <div className="relative z-10 border-b py-4 bg-gray-50">
            <div className="items-center container mx-auto justify-between flex">
                <div>WinFiles</div>

                <div className="flex gap-2">
                    <OrganizationSwitcher />
                    <UserButton />
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button>Sign In</Button>
                        </SignInButton>
                    </SignedOut>

                </div>
            </div>
        </div>
    );
}