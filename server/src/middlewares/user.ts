import jwt from "jsonwebtoken";
import { User } from "../entities/User";
import { NextFunction, Request, Response } from "express";

export default async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token;
    console.log("token", token);
    if (!token) return next();

    // verify 메소드와 jwt secret을 이용해서 토큰 decode
    const { username }: any = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findOneBy({ username });

    // 유저 정보 없다면 throw error!
    if (!user) throw new Error("unauthenticated");

    // 유저 정보를 res.locals.user에 넣어주기
    res.locals.user = user;

    return next();
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Something went wrong" });
  }
};
