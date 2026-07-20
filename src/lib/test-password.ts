import { hashPassword, verifyPassword } from "./password";

async function test() {
    const password = "Admin@123";

    const hash = await hashPassword(password);

    console.log("Hash:");
    console.log(hash);

    const result = await verifyPassword(password, hash);

    console.log("Password Match:", result);
}

test();