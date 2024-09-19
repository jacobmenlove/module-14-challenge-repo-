// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';

// interface JwtPayload {
//   username: string;
//   exp?: number;
// }

// const verifyToken = (token: string): Promise<JwtPayload> => {
//   return new Promise((resolve, reject) => {
//     jwt.verify(token, process.env.JWT_SECRET as string, (err, user) => {
//       if (err) return reject(err);
//       resolve(user as JwtPayload);
//     });
//   });
// };

// export const authenticateToken = async (req: Request, res: Response, next: NextFunction) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.substring(7) : null;

//   if (token == null) {
//     return res.sendStatus(401); 
//   }

//   try {
//     const user = await verifyToken(token);
//     req.user = user; 
//     return next(); 
//   } catch (err) {
//     return res.sendStatus(403);
//   }
// };

import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    const secretKey = process.env.JWT_SECRET_KEY || '';

    jwt.verify(token, secretKey, (err, user) => {
      if (err) {
        return res.sendStatus(403); // Forbidden
      }

      req.user = user as JwtPayload;
      return next();
    });
  } else {
    res.sendStatus(401); // Unauthorized
  }
};

