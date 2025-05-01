import Link from "next/link";
import React from "react";

const SigninSignUpButtons = () => {
  return (
    <div className="absolute right-4 top-4 flex space-x-4">
      <Link href="/auth/signin">
        <button className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          SIGN IN
        </button>
      </Link>
      <Link href="/auth/signup">
        <button className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600">
          JOIN NOW
        </button>
      </Link>
    </div>
  );
};

export default SigninSignUpButtons;
