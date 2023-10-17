import { z } from "zod";

const emailRegex = /^[a-zA-Z0-9._%+-]+@(?:[a-zA-Z0-9-]+\.)+(?:com|org|net|edu|gov|mil|biz|info)$/i;



const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,50}$/;

export const registerSchema = z.object({
    age: z.string().refine(value => {
        const ageNumber = parseInt(value);
        return !isNaN(ageNumber) && ageNumber >= 18;
    }, {
        message: "Age should be a number greater than or equal to 18",
    }),
    email: z.string().regex(emailRegex, {
        message: "Please enter a valid email address"
    }),
    name: z.string().min(3).max(50).regex(/^[a-zA-Z\s]+$/, {
        message: "Name should only contain characters"
    }),
    phone: z.string()
        .refine(val => /^[6-9]\d{9}$/.test(val), {
            message: "Please enter a valid 10-digit phone number starting with 6,7,8, or 9"
        }),
    password: z.string()
        .refine(value => passwordRegex.test(value), {
            message: "Password must contain at least one number, one lowercase letter, and one uppercase letter."
        }),
    confirmPassword: z.string().min(6).max(50),
});

export const signinSchema = z.object({
    email: z.string().regex(emailRegex, {
        message: "Please enter a valid email address"
    }),
    password: z.string().min(6).max(50),
});

export const passSchema = z.object({
    email: z.string().regex(emailRegex, {
        message: "Please enter a valid email address"
    }),
});
