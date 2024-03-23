import { Router } from "express";
import { User, validate } from "../models/user.js";
import bcrypt from "bcrypt";

const router = Router();

//defining an Express.js route handler for POST requests of new user creation
router.post("/", async (req, res) => {
	try {
        //validating the request body/schema
        const { error } = validate(req.body);
		if (error)
			return res.status(400).send({ message: error.details[0].message });

		//checking for existing user through email
        const user = await User.findOne({ email: req.body.email });
		if (user)
			return res
				.status(409)
				.send({ message: "User with given email already exists!" });

		//encrypting password
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
		const hashPassword = await bcrypt.hash(req.body.password, salt);

        //creating and saving user:
		await new User({ ...req.body, password: hashPassword }).save();
		res.status(201).send({ message: "User created successfully" });
	} catch (error) {
		res.status(500).send({ message: "Internal Server Error" });
	}
});

export default router;
