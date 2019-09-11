import { Router } from 'express';
const router = Router();

router.get('/users', (req, res) => {
    return res.json({message: "deu certo"});
})

export default router;