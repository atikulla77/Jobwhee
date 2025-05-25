"use client";
import React, {useState, ChangeEvent, FormEvent, useEffect} from "react";

import {resetPassword} from "@/lib/api/resetPassword/resetPassword";
import {useRouter} from "@/i18n/routing";

const ChangePassword: React.FC = () => {
    const [formData, setFormData] = useState({
        oldPassword: "",
        newPassword: "",
        repeatNewPassword: "",
    });
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
        setError(null);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError(null);
        setSuccess(null);

        const {oldPassword, newPassword, repeatNewPassword} = formData;

        if (!oldPassword || !newPassword || !repeatNewPassword) {
            setError("All fields are required.");
            return;
        }

        if (newPassword !== repeatNewPassword) {
            setError("New password and confirmation do not match.");
            return;
        }

        if (newPassword.length < 6) {
            setError("New password must be at least 6 characters long.");
            return;
        }

        setIsSubmitting(true);

        try {
            await resetPassword({oldPassword, newPassword, repeatNewPassword});
            setSuccess("Password changed successfully!");
            setTimeout(() => {
                router.back();
            }, 1000);
            setFormData({oldPassword: "", newPassword: "", repeatNewPassword: ""});
        } catch (err: any) {
            setError(err?.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
            <div className="w-full max-w-md rounded bg-white p-8 shadow">
                <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
                    Change Password
                </h2>
                {error && (
                    <p className="mb-4 text-center text-sm text-red-600">{error}</p>
                )}
                {success && (
                    <p className="mb-4 text-center text-sm text-green-600">{success}</p>
                )}
                <form onSubmit={handleSubmit} noValidate>
                    <div className="mb-4">
                        <label
                            htmlFor="oldPassword"
                            className="mb-2 block font-medium text-gray-700"
                        >
                            Current Password
                        </label>
                        <input
                            id="oldPassword"
                            name="oldPassword"
                            type="password"
                            value={formData.oldPassword}
                            onChange={handleChange}
                            className="w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="newPassword"
                            className="mb-2 block font-medium text-gray-700"
                        >
                            New Password
                        </label>
                        <input
                            id="newPassword"
                            name="newPassword"
                            type="password"
                            value={formData.newPassword}
                            onChange={handleChange}
                            className="w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label
                            htmlFor="repeatNewPassword"
                            className="mb-2 block font-medium text-gray-700"
                        >
                            Confirm New Password
                        </label>
                        <input
                            id="repeatNewPassword"
                            name="repeatNewPassword"
                            type="password"
                            value={formData.repeatNewPassword}
                            onChange={handleChange}
                            className="w-full rounded border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full rounded bg-blue-500 py-2 text-white ${
                            isSubmitting
                                ? "cursor-not-allowed opacity-50"
                                : "hover:bg-blue-600"
                        }`}
                    >
                        {isSubmitting ? "Changing Password..." : "Change Password"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChangePassword;

function jwtDecode(token: string): any {
    throw new Error("Function not implemented.");
}
