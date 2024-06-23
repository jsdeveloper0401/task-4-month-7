import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { auth } from "@service";
import { SignUpModal } from "@modal";

const Index = () => {
    const [form, setForm] = useState({});
    const [open, setOpen] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        // console.log(name,value);
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await auth.sign_up(form);
            if (response.status === 200) {
                setOpen(true);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <SignUpModal
                open={open}
                handleClose={() => {
                    setOpen(false);
                }}
            />
            <div className="w-full h-screen flex items-center justify-center p-4">
                <div className=" p-8 shadow-lg rounded-lg w-full max-w-sm sm:max-w-md lg:max-w-lg">
                    <h1 className="text-center my-3 font-medium text-2xl lg:text-4xl">
                        Register
                    </h1>
                    <form
                        className="flex flex-col gap-4"
                        onSubmit={handleSubmit}>
                        <TextField
                            type="email"
                            onChange={handleChange}
                            fullWidth
                            label="Email"
                            id="email"
                            name="email"
                        />
                        <TextField
                            type="text"
                            onChange={handleChange}
                            fullWidth
                            label="Full Name"
                            id="full_name"
                            name="full_name"
                        />
                        <TextField
                            type="password"
                            onChange={handleChange}
                            fullWidth
                            label="Password"
                            id="password"
                            name="password"
                        />
                        <TextField
                            type="text"
                            onChange={handleChange}
                            fullWidth
                            label="Phone Number"
                            id="phone_number"
                            name="phone_number"
                        />
                        <Button
                            variant="contained"
                            type="submit"
                            className="mt-4">
                            Sign Up
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Index;
