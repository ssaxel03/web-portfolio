"use server"

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default async function handleSubmit(data: FormData) {
    "use server"

    const body = {...data, access_key: process.env.FORM_API_KEY};

    const json = JSON.stringify(body);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json,
    });

    const result = await response.json();

    if(result.success) {
        return "Sent";
    }
    return "Error";
}