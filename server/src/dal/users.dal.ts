import Users from "../db/models/users";
const bcrypt = require("bcrypt")
const emailValidator = require('deep-email-validator');
const passwordValidator = require('password-validator');
const schema = new passwordValidator();

schema
    .is().min(8)                                    // Minimum length 8
    .is().max(15)                                  // Maximum length 100
    .has().uppercase()                              // Must have uppercase letters
    .has().lowercase()                              // Must have lowercase letters
    .has().digits(2)                                // Must have at least 2 digits
    .has().not().spaces()                           // Should not have spaces

async function isEmailValid(email: String) {
    return emailValidator.validate(email)
}

export class UsersDal {
    public async createUser(user: any) {
        try {
            const { valid, reason, validators } = await isEmailValid(user.email);
            if (!valid) return reason;
            if ((await (await Users.find({ email: user.email })).length > 0)) return "Email already used!";
            if (!schema.validate(user.password)) return schema.validate(user.password, { list: true });

            const hashedPassword = bcrypt.hash(user.password, 10)
            user = new Users({
                name: user.name,
                password: hashedPassword,
                email: user.email,
            });
            Users.create(user)
            return user.email;
        }
        catch (e) { console.log(e) }
    }




    public async getUser(email: String, password: String) {
        const { valid, reason, validators } = await isEmailValid(email);
        if (!valid) return ["Email"];
        if (!schema.validate(password)) return ["password"];

        const user = await Users.find({ email: email })
        if(user.length == 0)
            return user
        if (await bcrypt.compare(password, user[0]?.password))
            return user;
        else
            return []

    }

}
