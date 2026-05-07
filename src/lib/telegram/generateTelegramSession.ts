import { client } from "./client"
import readline from "readline"

await client.start({
  phoneNumber: async () => process.env.PHONE_NUMBER!,
//password: async () => process.env.TELEGRAM_2FA_PASSWORD!, add 2fa if your telegram account use 2fa
  phoneCode: async () =>
    await new Promise(resolve => {
      const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      })
      rl.question("Code: ", code => {
        rl.close()
        resolve(code)
      })
    }),
    onError: (err) => console.log(err),
})

console.log("SESSION:", client.session.save())