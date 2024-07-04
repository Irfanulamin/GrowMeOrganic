import { TextField, Button, Stack } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type TFormValues = {
  name: string;
  number: string;
  email: string;
};

const AuthForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState } = useForm<TFormValues>();
  const onSubmit = (formValue: TFormValues) => {
    localStorage.setItem("GrowMeOrganicAuth", JSON.stringify(formValue));
    if (localStorage.getItem("GrowMeOrganicAuth")) {
      navigate("/features");
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="my-12">
      <Stack spacing={2} maxWidth={600}>
        <TextField
          label="Name"
          type="text"
          {...register("name", {
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name must be at least 3 characters long",
            },
            maxLength: {
              value: 30,
              message: "Name cannot exceed 30 characters",
            },
            pattern: {
              value: /^[a-zA-Z\s]*$/, // Allows only letters and spaces
              message: "Please enter a valid name (only letters allowed)",
            },
          })}
        />
        {formState.errors.name?.message && (
          <p className="text-red-500">{formState.errors.name?.message}</p>
        )}
        <TextField
          label="Phone Number"
          type="number"
          placeholder="Phone Number"
          {...register("number", {
            required: "Phone number is required",
            pattern: {
              value: /^[0-9]{11}$/,
              message: "Please enter a valid 11-digit phone number",
            },
          })}
        />
        {formState.errors.number?.message && (
          <p className="text-red-500">{formState.errors.number?.message}</p> // Adjusted to display error directly
        )}
        <TextField
          label="Email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Please enter a valid email",
            },
          })}
        />
        {formState.errors.email?.message && (
          <p className="text-red-500">{formState.errors.email?.message}</p>
        )}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default AuthForm;
