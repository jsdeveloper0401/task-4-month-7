import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { auth } from "@service";
import { useNavigate } from "react-router-dom";

const Index = () => {
    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(form);
        try {
            const response = await auth.sign_in(form);
            if (response.status === 200) {
                localStorage.setItem(
                    "access_token",
                    response?.data?.access_token
                );
            }
        } catch (error) {
            console.log(error);
        }
    };
    const moveSignUp = () => {
        navigate("sign-up");
    };
    return (
        <>
            <div className="w-full h-screen flex items-center justify-center">
                <div className="w-[500px]">
                    <h1 className="text-center my-3 font-medium text-[40px]">
                        Login
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
                            type="password"
                            onChange={handleChange}
                            fullWidth
                            label="Password"
                            id="password"
                            name="password"
                        />
                        <Typography
                            sx={{
                                cursor: "pointer",
                                textDecoration: "underline",
                            }}
                            onClick={moveSignUp}>
                            Register
                        </Typography>
                        <Button variant="contained" type="submit">
                            Sign In
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Index;
