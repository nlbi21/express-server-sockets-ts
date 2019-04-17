import { Router, Request, Response } from "express";

const router = Router();

router.get('/messages', (req: Request, res: Response) => {

    res.json({
        status: 200,
        msg: 'OK',
        data: {}
    });
});

router.post('/messages', (req: Request, res: Response) => {

    const body = req.body;

    const message = {
        text: body.text,
        user: body.user
    };

    res.json({
        status: 200,
        msg: 'OK',
        data: {
            message
        }
    });
});

router.post('/messages/:id', (req: Request, res: Response) => {

    const body = req.body;
    const id = req.params.id;

    const message = {
        text: body.text,
        user: body.user
    };

    res.json({
        status: 200,
        msg: 'OK',
        data: {
            message,
            id
        }
    });
});

export default router;