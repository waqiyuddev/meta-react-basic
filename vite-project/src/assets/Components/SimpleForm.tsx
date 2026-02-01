import { useState } from "react";

type FormState = {
    firstName: string;
    lastName: string;
};

export default function SimpleForm() {
    const [form, setForm] = useState<FormState>({
        firstName: "",
        lastName: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;

        setForm({
            ...form,
            [name]: value,
        });
    }

    function handleReset() {
        setForm({
            firstName: "",
            lastName: "",
        });
    }

    return (
        <div>
            <h2>Simple Register Form</h2>

            <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
            />

            <br />

            <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
            />

            <p>
                Hello, {form.firstName} {form.lastName}
            </p>

            <button onClick={handleReset}>Reset</button>
        </div>
    );
}
